import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Google Sheets API helper functions
async function getAccessToken(serviceAccountKey: string): Promise<string> {
  const key = JSON.parse(serviceAccountKey);
  
  const header = {
    alg: 'RS256',
    typ: 'JWT',
  };

  const now = Math.floor(Date.now() / 1000);
  const payload = {
    iss: key.client_email,
    scope: 'https://www.googleapis.com/auth/spreadsheets',
    aud: 'https://oauth2.googleapis.com/token',
    exp: now + 3600,
    iat: now,
  };

  // Base64URL encode
  const base64UrlEncode = (obj: object) => {
    const json = JSON.stringify(obj);
    const base64 = btoa(json);
    return base64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
  };

  const headerEncoded = base64UrlEncode(header);
  const payloadEncoded = base64UrlEncode(payload);
  const signatureInput = `${headerEncoded}.${payloadEncoded}`;

  // Import private key and sign
  const privateKeyPem = key.private_key;
  const pemContents = privateKeyPem
    .replace('-----BEGIN PRIVATE KEY-----', '')
    .replace('-----END PRIVATE KEY-----', '')
    .replace(/\s/g, '');
  
  const binaryKey = Uint8Array.from(atob(pemContents), c => c.charCodeAt(0));
  
  const cryptoKey = await crypto.subtle.importKey(
    'pkcs8',
    binaryKey,
    { name: 'RSASSA-PKCS1-v1_5', hash: 'SHA-256' },
    false,
    ['sign']
  );

  const signature = await crypto.subtle.sign(
    'RSASSA-PKCS1-v1_5',
    cryptoKey,
    new TextEncoder().encode(signatureInput)
  );

  const signatureBase64 = btoa(String.fromCharCode(...new Uint8Array(signature)))
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');

  const jwt = `${signatureInput}.${signatureBase64}`;

  // Exchange JWT for access token
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
    console.error('Token exchange failed:', tokenData);
    throw new Error(`Failed to get access token: ${tokenData.error_description || tokenData.error}`);
  }

  return tokenData.access_token;
}

async function checkAndAddHeaders(accessToken: string, spreadsheetId: string): Promise<void> {
  const headers = [
    'Mês', 'Data', 'Nome', 'Empresa', 'CNPJ', 'Email', 'Telefone', 'Mensagem', 
    'Serviço', 'Tipo', 'Colaboradores', 'utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'Status', 'Vendas', 'Data ISO', '', '', 'gclid'
  ];

  // Check if first row exists
  const checkUrl = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/A1:U1`;
  const checkResponse = await fetch(checkUrl, {
    headers: { 'Authorization': `Bearer ${accessToken}` },
  });

  const checkResult = await checkResponse.json();
  
  // If no values or first cell is empty, add headers
  if (!checkResult.values || checkResult.values.length === 0 || !checkResult.values[0][0]) {
    console.log('Adding headers to sheet...');
    const updateUrl = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/A1:U1?valueInputOption=USER_ENTERED`;
    
    const updateResponse = await fetch(updateUrl, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ values: [headers] }),
    });

    if (!updateResponse.ok) {
      const error = await updateResponse.json();
      console.error('Failed to add headers:', error);
    } else {
      console.log('Headers added successfully');
    }
  }
}

async function appendToSheet(accessToken: string, spreadsheetId: string, values: string[]): Promise<void> {
  const range = 'A:U'; // Columns A to U (21 columns)
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      values: [values],
    }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(`Failed to append to sheet: ${JSON.stringify(error)}`);
  }
}

// Format date in ISO 8601 format with timezone offset for Brazil (UTC-3)
function getBrazilDate(): { iso: string; formatted: string; month: string } {
  const now = new Date();
  
  const offset = -3;
  const offsetMs = offset * 60 * 60 * 1000;
  const localTime = new Date(now.getTime() + offsetMs + (now.getTimezoneOffset() * 60 * 1000));
  
  const year = localTime.getFullYear();
  const month = String(localTime.getMonth() + 1).padStart(2, '0');
  const day = String(localTime.getDate()).padStart(2, '0');
  const hours = String(localTime.getHours()).padStart(2, '0');
  const minutes = String(localTime.getMinutes()).padStart(2, '0');
  const seconds = String(localTime.getSeconds()).padStart(2, '0');
  
  const iso = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}-03:00`;
  const formatted = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
  
  const monthNames = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
  const monthName = monthNames[localTime.getMonth()];
  
  return { iso, formatted, month: monthName };
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const serviceAccountKey = Deno.env.get('GOOGLE_SERVICE_ACCOUNT_KEY');
    const spreadsheetId = Deno.env.get('GOOGLE_SHEETS_SPREADSHEET_ID');
    const supabaseUrl = Deno.env.get('SUPABASE_URL');
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');

    if (!serviceAccountKey) {
      throw new Error('Missing GOOGLE_SERVICE_ACCOUNT_KEY');
    }
    if (!spreadsheetId) {
      throw new Error('Missing GOOGLE_SHEETS_SPREADSHEET_ID');
    }
    if (!supabaseUrl || !supabaseKey) {
      throw new Error('Missing Supabase credentials');
    }

    const supabase = createClient(supabaseUrl, supabaseKey);

    const { 
      nome, 
      empresa, 
      cnpj,
      email, 
      telefone, 
      mensagem, 
      serviceName, 
      serviceType,
      numeroColaboradores,
      utm_source,
      utm_medium,
      utm_campaign,
      utm_term,
      utm_content,
      gclid
    } = await req.json();

    console.log('Received lead data:', { nome, empresa, cnpj, email, telefone, mensagem, serviceName, serviceType, numeroColaboradores });
    console.log('UTM parameters:', { utm_source, utm_medium, utm_campaign, utm_term, utm_content, gclid });

    if (!email) {
      throw new Error('Email is required');
    }

    // Check if this lead was recently created (within last 5 minutes)
    const { data: recentLead, error: checkError } = await supabase
      .from('leads')
      .select('id, created_at')
      .eq('email', email)
      .gte('created_at', new Date(Date.now() - 5 * 60 * 1000).toISOString())
      .order('created_at', { ascending: false })
      .limit(1);

    if (checkError) {
      console.error('Error checking for recent lead:', checkError);
    }

    if (!recentLead || recentLead.length === 0) {
      console.log('No recent lead found for this email, skipping sheet sync');
      return new Response(
        JSON.stringify({ success: true, message: 'No recent lead to sync' }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log('Found recent lead, syncing to sheet...');

    // Get access token for Google Sheets
    const accessToken = await getAccessToken(serviceAccountKey);

    // Format date
    const brazilDate = getBrazilDate();

    // Ensure headers exist
    await checkAndAddHeaders(accessToken, spreadsheetId);

    // Append lead data: Mês, Data, Nome, Empresa, CNPJ, Email, Telefone, Mensagem, Serviço, Tipo, Colaboradores, utm_source, utm_medium, utm_campaign, utm_term, Status, Vendas, Data ISO, (reservado), (reservado), gclid
    await appendToSheet(accessToken, spreadsheetId, [
      brazilDate.month,
      brazilDate.formatted,
      nome || '',
      empresa || '',
      cnpj || '',
      email,
      telefone || '',
      mensagem || '',
      serviceName || '',
      serviceType || '',
      numeroColaboradores || '',
      utm_source || '',
      utm_medium || '',
      utm_campaign || '',
      utm_term || '',
      '', // Status (preenchido manualmente)
      '', // Vendas (preenchido manualmente)
      '', // Data ISO (preenchido por Apps Script)
      '', // Coluna S reservada
      '', // Coluna T reservada
      gclid || ''
    ]);

    console.log('Successfully synced lead to Google Sheets');

    return new Response(
      JSON.stringify({ success: true, message: 'Lead synced to Google Sheets' }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('Error in sync-to-sheets function:', error);
    return new Response(
      JSON.stringify({ success: false, error: errorMessage }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );
  }
});
