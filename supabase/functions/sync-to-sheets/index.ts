import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// ─────────────────────────────────────────────────────────────────────────────
// Google Sheets auth (Service Account JWT) — inalterado
// ─────────────────────────────────────────────────────────────────────────────
async function getAccessToken(serviceAccountKey: string): Promise<string> {
  const key = JSON.parse(serviceAccountKey);
  const header = { alg: 'RS256', typ: 'JWT' };
  const now = Math.floor(Date.now() / 1000);
  const payload = {
    iss: key.client_email,
    scope: 'https://www.googleapis.com/auth/spreadsheets',
    aud: 'https://oauth2.googleapis.com/token',
    exp: now + 3600,
    iat: now,
  };
  const base64UrlEncode = (obj: object) =>
    btoa(JSON.stringify(obj)).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');

  const signatureInput = `${base64UrlEncode(header)}.${base64UrlEncode(payload)}`;
  const pemContents = key.private_key
    .replace('-----BEGIN PRIVATE KEY-----', '')
    .replace('-----END PRIVATE KEY-----', '')
    .replace(/\s/g, '');
  const binaryKey = Uint8Array.from(atob(pemContents), (c) => c.charCodeAt(0));
  const cryptoKey = await crypto.subtle.importKey(
    'pkcs8', binaryKey, { name: 'RSASSA-PKCS1-v1_5', hash: 'SHA-256' }, false, ['sign'],
  );
  const signature = await crypto.subtle.sign(
    'RSASSA-PKCS1-v1_5', cryptoKey, new TextEncoder().encode(signatureInput),
  );
  const signatureB64 = btoa(String.fromCharCode(...new Uint8Array(signature)))
    .replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
  const jwt = `${signatureInput}.${signatureB64}`;

  const tokenResponse = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion: jwt,
    }),
  });
  const tokenData = await tokenResponse.json();
  if (!tokenResponse.ok) {
    throw new Error(`Failed to get access token: ${tokenData.error_description || tokenData.error}`);
  }
  return tokenData.access_token;
}

// ─────────────────────────────────────────────────────────────────────────────
// Helpers de coluna / header
// ─────────────────────────────────────────────────────────────────────────────
function colLetter(n: number): string {
  let s = '';
  while (n > 0) {
    const m = (n - 1) % 26;
    s = String.fromCharCode(65 + m) + s;
    n = Math.floor((n - 1) / 26);
  }
  return s;
}

async function readHeaderRow(accessToken: string, spreadsheetId: string): Promise<string[]> {
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/A1:BZ1`;
  const res = await fetch(url, { headers: { 'Authorization': `Bearer ${accessToken}` } });
  const json = await res.json();
  return (json.values && json.values[0]) ? json.values[0].map((h: string) => String(h ?? '')) : [];
}

// Só ADICIONA à direita os headers que faltam — nunca reordena/renomeia o que já existe.
async function ensureHeaders(
  accessToken: string, spreadsheetId: string, desired: string[],
): Promise<string[]> {
  const existing = await readHeaderRow(accessToken, spreadsheetId);
  const existingLower = existing.map((h) => h.trim().toLowerCase());
  const missing = desired.filter((h) => !existingLower.includes(h.trim().toLowerCase()));

  if (existing.length === 0) {
    // Planilha vazia — escreve o header completo (base + novos)
    const full = [...BASE_HEADERS, ...desired.filter((d) => !BASE_HEADERS.map((b) => b.toLowerCase()).includes(d.toLowerCase()))];
    await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/A1?valueInputOption=RAW`,
      {
        method: 'PUT',
        headers: { 'Authorization': `Bearer ${accessToken}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ values: [full] }),
      },
    );
    return full;
  }

  if (missing.length > 0) {
    const startCol = existing.length + 1; // primeira coluna livre à direita
    const range = `${colLetter(startCol)}1:${colLetter(startCol + missing.length - 1)}1`;
    await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?valueInputOption=RAW`,
      {
        method: 'PUT',
        headers: { 'Authorization': `Bearer ${accessToken}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ values: [missing] }),
      },
    );
    return [...existing, ...missing];
  }
  return existing;
}

// Monta a linha na ordem EXATA dos headers da planilha e faz append RAW.
async function appendByHeader(
  accessToken: string, spreadsheetId: string, headers: string[], valueMap: Record<string, string>,
): Promise<void> {
  const row = headers.map((h) => {
    const key = h.trim().toLowerCase();
    return key in valueMap ? (valueMap[key] ?? '') : '';
  });
  const range = `A:${colLetter(headers.length)}`;
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}:append?valueInputOption=RAW&insertDataOption=INSERT_ROWS`;
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${accessToken}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ values: [row] }),
  });
  if (!res.ok) throw new Error(`Failed to append: ${JSON.stringify(await res.json())}`);
}

// ─────────────────────────────────────────────────────────────────────────────
// Normalização / hash / geo
// ─────────────────────────────────────────────────────────────────────────────
function stripAccents(s: string): string {
  return (s || '').normalize('NFD').replace(new RegExp('[\\u0300-\\u036f]', 'g'), '');
}
function digitsOnly(s: string): string {
  return (s || '').replace(/\D/g, '');
}
// Telefone p/ planilha — E.164 com + (RAW impede o Sheets de comer o +)
function formatPhoneE164(raw: string): string {
  let d = digitsOnly(raw);
  if (!d) return '';
  if (d.startsWith('55') && d.length >= 12) d = d.slice(2);
  if (d.startsWith('0')) d = d.slice(1);
  if (d.length === 10) d = d.slice(0, 2) + '9' + d.slice(2);
  return '+55' + d;
}
// Telefone p/ CAPI — só dígitos com DDI, sem +
function phoneForCapi(raw: string): string {
  const e164 = formatPhoneE164(raw);
  return digitsOnly(e164);
}
async function sha256Hex(s: string): Promise<string> {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(s));
  return Array.from(new Uint8Array(buf)).map((b) => b.toString(16).padStart(2, '0')).join('');
}

interface Geo { city: string; region_code: string; postal: string; }
async function geoFromIp(ip: string): Promise<Geo> {
  try {
    if (!ip) return { city: '', region_code: '', postal: '' };
    const r = await fetch(`https://ipapi.co/${ip}/json/`);
    if (!r.ok) return { city: '', region_code: '', postal: '' };
    const j = await r.json();
    return { city: j.city || '', region_code: j.region_code || '', postal: digitsOnly(j.postal || '') };
  } catch (_) {
    return { city: '', region_code: '', postal: '' };
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// Meta CAPI Lead — server-side (Advanced Matching), não fatal
// ─────────────────────────────────────────────────────────────────────────────
async function sendMetaCapi(d: {
  email: string; telefone: string; first_name: string; last_name: string;
  geo: Geo; event_id: string; page_url: string; ip: string; user_agent: string;
  fbc: string; fbp: string;
}): Promise<void> {
  const pixelId = Deno.env.get('META_PIXEL_ID');
  const token = Deno.env.get('META_ACCESS_TOKEN');
  const testCode = Deno.env.get('META_TEST_CODE');
  if (!pixelId || !token) {
    console.log('CAPI skip: META_PIXEL_ID/META_ACCESS_TOKEN ausentes');
    return;
  }
  try {
    const h = async (v: string) => (v ? await sha256Hex(v) : undefined);
    const user_data: Record<string, unknown> = {
      em: await h((d.email || '').trim().toLowerCase()),
      ph: await h(phoneForCapi(d.telefone)),
      fn: await h(stripAccents((d.first_name || '').toLowerCase()).replace(/[^a-z]/g, '')),
      ln: await h(stripAccents((d.last_name || '').toLowerCase()).replace(/[^a-z]/g, '')),
      ct: await h(stripAccents((d.geo.city || '').toLowerCase()).replace(/[^a-z]/g, '')),
      st: await h((d.geo.region_code || '').toLowerCase().replace(/[^a-z]/g, '').slice(0, 2)),
      zp: await h(digitsOnly(d.geo.postal)),
      country: await h('br'),
      external_id: await h(d.event_id),
      client_ip_address: d.ip || undefined,
      client_user_agent: d.user_agent || undefined,
    };
    if (d.fbc) user_data.fbc = d.fbc;
    if (d.fbp) user_data.fbp = d.fbp;
    for (const k of Object.keys(user_data)) if (user_data[k] === undefined) delete user_data[k];

    const payload: Record<string, unknown> = {
      data: [{
        event_name: 'Lead',
        event_time: Math.floor(Date.now() / 1000),
        event_id: d.event_id,
        action_source: 'website',
        event_source_url: d.page_url || undefined,
        user_data,
      }],
    };
    if (testCode) payload.test_event_code = testCode;

    const res = await fetch(
      `https://graph.facebook.com/v21.0/${pixelId}/events?access_token=${token}`,
      { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) },
    );
    console.log('CAPI Lead response:', res.status, JSON.stringify(await res.json()));
  } catch (err) {
    console.error('CAPI Lead falhou (não fatal):', err);
  }
}

// ─────────────────────────────────────────────────────────────────────────────
function getBrazilDate(): { iso: string; formatted: string; month: string } {
  const now = new Date();
  const offsetMs = -3 * 60 * 60 * 1000;
  const t = new Date(now.getTime() + offsetMs + now.getTimezoneOffset() * 60 * 1000);
  const p = (n: number) => String(n).padStart(2, '0');
  const y = t.getFullYear(), mo = p(t.getMonth() + 1), da = p(t.getDate());
  const hh = p(t.getHours()), mi = p(t.getMinutes()), ss = p(t.getSeconds());
  const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
  return {
    iso: `${y}-${mo}-${da}T${hh}:${mi}:${ss}-03:00`,
    formatted: `${da}/${mo}/${y} ${hh}:${mi}:${ss}`,
    month: months[t.getMonth()],
  };
}

// Header canônico (usado só se a planilha estiver vazia). A planilha REAL já tem
// as primeiras colunas — o ensureHeaders só acrescenta as que faltam à direita.
const BASE_HEADERS = [
  'Mês', 'Data', 'Nome', 'Empresa', 'CNPJ', 'Email', 'Telefone', 'Mensagem',
  'Serviço', 'Tipo', 'Colaboradores', 'utm_source', 'utm_medium', 'utm_campaign',
  'utm_term', 'utm_content', 'Status', 'Vendas', 'Data ISO', 'GCLID',
];
// Colunas de tracking novas (adicionadas à direita se não existirem)
const TRACKING_HEADERS = [
  'Event ID', 'FBCLID', 'FBP', 'FBC', 'GBRAID', 'WBRAID', 'TTCLID', 'MSCLKID',
  'Primeiro Nome', 'Sobrenome', 'Cidade', 'Estado', 'CEP', 'IP', 'Navegador',
  'Resolucao', 'Fuso Horario', 'Pagina', 'Referencia', 'Idioma',
];

serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response(null, { headers: corsHeaders });

  try {
    const serviceAccountKey = Deno.env.get('GOOGLE_SERVICE_ACCOUNT_KEY');
    const spreadsheetId = Deno.env.get('GOOGLE_SHEETS_SPREADSHEET_ID');
    const supabaseUrl = Deno.env.get('SUPABASE_URL');
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
    if (!serviceAccountKey) throw new Error('Missing GOOGLE_SERVICE_ACCOUNT_KEY');
    if (!spreadsheetId) throw new Error('Missing GOOGLE_SHEETS_SPREADSHEET_ID');
    if (!supabaseUrl || !supabaseKey) throw new Error('Missing Supabase credentials');

    const supabase = createClient(supabaseUrl, supabaseKey);
    const body = await req.json();
    const {
      nome, empresa, cnpj, email, telefone, mensagem, serviceName, serviceType, numeroColaboradores,
      utm_source, utm_medium, utm_campaign, utm_term, utm_content,
      gclid, gbraid, wbraid, ttclid, msclkid, fbclid, fbp, fbc,
      event_id, first_name, last_name, page_url, referrer, language, screen,
      timezone, user_agent: uaBody,
    } = body;

    if (!email) throw new Error('Email is required');

    // Gate anti-spam: só sincroniza se houve insert recente na tabela leads (mesmo email, 5 min)
    const { data: recentLead } = await supabase
      .from('leads')
      .select('id, created_at')
      .eq('email', email)
      .gte('created_at', new Date(Date.now() - 5 * 60 * 1000).toISOString())
      .order('created_at', { ascending: false })
      .limit(1);
    if (!recentLead || recentLead.length === 0) {
      return new Response(
        JSON.stringify({ success: true, message: 'No recent lead to sync' }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } },
      );
    }

    // IP + UA reais do visitante (a edge é chamada do browser dele)
    const ip = (req.headers.get('x-forwarded-for') || '').split(',')[0].trim();
    const user_agent = uaBody || req.headers.get('user-agent') || '';

    const accessToken = await getAccessToken(serviceAccountKey);
    const headers = await ensureHeaders(accessToken, spreadsheetId, TRACKING_HEADERS);
    const geo = await geoFromIp(ip);
    const bd = getBrazilDate();

    // Split de nome caso o front não mande (fallback)
    const parts = String(nome || '').trim().split(/\s+/);
    const fn = first_name || parts[0] || '';
    const ln = last_name || parts.slice(1).join(' ') || '';

    // Mapa por NOME de header (lowercase) — reordenar colunas não quebra nada
    const valueMap: Record<string, string> = {
      'mês': bd.month, 'mes': bd.month,
      'data': bd.formatted,
      'nome': nome || '',
      'empresa': empresa || '',
      'cnpj': cnpj || '',
      'email': String(email).trim().toLowerCase(),
      'telefone': formatPhoneE164(telefone),
      'mensagem': mensagem || '',
      'serviço': serviceName || '', 'servico': serviceName || '',
      'tipo': serviceType || '',
      'colaboradores': numeroColaboradores || '',
      'utm_source': utm_source || '',
      'utm_medium': utm_medium || '',
      'utm_campaign': utm_campaign || '',
      'utm_term': utm_term || '',
      'utm_content': utm_content || '',
      'status': '',           // comercial preenche
      'vendas': '',           // comercial preenche
      'data iso': bd.iso,
      'gclid': gclid || '',
      'event id': event_id || '',
      'fbclid': fbclid || '',
      'fbp': fbp || '',
      'fbc': fbc || '',
      'gbraid': gbraid || '',
      'wbraid': wbraid || '',
      'ttclid': ttclid || '',
      'msclkid': msclkid || '',
      'primeiro nome': fn,
      'sobrenome': ln,
      'cidade': geo.city,
      'estado': geo.region_code,
      'cep': geo.postal,
      'ip': ip,
      'navegador': user_agent,
      'resolucao': screen || '',
      'fuso horario': timezone || '',
      'pagina': page_url || '',
      'referencia': referrer || '',
      'idioma': language || '',
    };

    await appendByHeader(accessToken, spreadsheetId, headers, valueMap);

    // CAPI Lead (dedup com o pixel do browser via event_id). Não bloqueia a resposta.
    await sendMetaCapi({
      email, telefone, first_name: fn, last_name: ln, geo,
      event_id: event_id || '', page_url: page_url || '', ip, user_agent,
      fbc: fbc || '', fbp: fbp || '',
    });

    return new Response(
      JSON.stringify({ success: true, message: 'Lead synced + CAPI enviado' }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } },
    );
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : 'Unknown error';
    console.error('Error in sync-to-sheets:', error);
    return new Response(
      JSON.stringify({ success: false, error: msg }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } },
    );
  }
});
