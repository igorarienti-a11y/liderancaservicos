/**
 * CNPJ — máscara, dígitos verificadores e consulta na Receita Federal (BrasilAPI).
 *
 * A BrasilAPI é pública: sem chave, sem conta, sem quota por cliente.
 * Regra de negócio (mesma da Orcali): dígito errado ou CNPJ inexistente na Receita
 * BLOQUEIA o envio; API fora do ar / lenta NÃO bloqueia (fail-open — nunca perder lead).
 */

export const onlyDigits = (v: string) => (v || "").replace(/\D/g, "");

export function maskCnpj(v: string): string {
  const d = onlyDigits(v).slice(0, 14);
  if (d.length > 12) return d.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{0,2}).*/, "$1.$2.$3/$4-$5");
  if (d.length > 8) return d.replace(/^(\d{2})(\d{3})(\d{3})(\d{0,4}).*/, "$1.$2.$3/$4");
  if (d.length > 5) return d.replace(/^(\d{2})(\d{3})(\d{0,3}).*/, "$1.$2.$3");
  if (d.length > 2) return d.replace(/^(\d{2})(\d{0,3}).*/, "$1.$2");
  return d;
}

export function isValidCnpj(v: string): boolean {
  const d = onlyDigits(v);
  if (d.length !== 14) return false;
  if (/^(\d)\1{13}$/.test(d)) return false;
  const dv = (base: string) => {
    let sum = 0;
    let peso = base.length - 7;
    for (let i = 0; i < base.length; i++) {
      sum += parseInt(base[i], 10) * peso--;
      if (peso < 2) peso = 9;
    }
    const r = sum % 11;
    return r < 2 ? 0 : 11 - r;
  };
  if (dv(d.slice(0, 12)) !== parseInt(d[12], 10)) return false;
  if (dv(d.slice(0, 13)) !== parseInt(d[13], 10)) return false;
  return true;
}

export type CnpjLookup =
  | { status: "ok"; razaoSocial: string; municipio: string; uf: string; situacao: string }
  | { status: "notfound" }
  | { status: "unknown" };

const cache = new Map<string, CnpjLookup>();

export async function lookupCnpj(digits: string): Promise<CnpjLookup> {
  const cached = cache.get(digits);
  if (cached) return cached;

  let out: CnpjLookup = { status: "unknown" };
  try {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 7000);
    const res = await fetch(`https://brasilapi.com.br/api/cnpj/v1/${digits}`, { signal: ctrl.signal });
    clearTimeout(timer);

    if (res.status === 404 || res.status === 400) {
      out = { status: "notfound" };
    } else if (res.ok) {
      const j = await res.json();
      out = {
        status: "ok",
        razaoSocial: (j?.razao_social || j?.nome_fantasia || "").trim(),
        municipio: (j?.municipio || "").trim(),
        uf: (j?.uf || "").trim(),
        situacao: (j?.descricao_situacao_cadastral || "").toUpperCase(),
      };
    }
  } catch {
    out = { status: "unknown" }; // rede/timeout — fail-open
  }

  // Só cacheia resposta conclusiva: falha de rede deve poder ser retentada.
  if (out.status !== "unknown") cache.set(digits, out);
  return out;
}
