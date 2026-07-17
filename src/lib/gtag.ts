// Google Ads via gtag direto no código (sem GTM) — padrão tracking v2.
// user_data SEMPRE do state/variáveis (nunca DOM scraping); o gtag normaliza e
// hasheia (SHA-256) antes de enviar (enhanced conversions).

const AW_ID = "AW-798315966";

export const CONVERSION_LABELS = {
  form: "hazGCMS3_NQbEL6r1fwC",
  typebot: "C0OaCNn3zuMbEL6r1fwC",
} as const;

type GtagFn = (...args: unknown[]) => void;

declare global {
  interface Window {
    gtag?: GtagFn;
    dataLayer: Record<string, unknown>[];
  }
}

// Telefone → E.164 (+55...), mesma regra do formatPhone da edge
function toE164(raw: string): string {
  let d = (raw || "").replace(/\D/g, "");
  if (d.startsWith("55") && d.length >= 12) d = d.slice(2);
  if (d.startsWith("0")) d = d.slice(1);
  if (d.length === 10) d = d.slice(0, 2) + "9" + d.slice(2);
  return d.length >= 10 ? "+55" + d : "";
}

export interface ConversionUserData {
  email?: string;
  phone?: string;
  firstName?: string;
  lastName?: string;
}

export function fireGoogleConversion(
  label: (typeof CONVERSION_LABELS)[keyof typeof CONVERSION_LABELS],
  eventId: string,
  user: ConversionUserData = {},
) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;

  const userData: Record<string, unknown> = {};
  const email = (user.email || "").trim().toLowerCase();
  if (email) userData.email = email;
  const phone = toE164(user.phone || "");
  if (phone) userData.phone_number = phone;
  if (user.firstName || user.lastName) {
    userData.address = {
      first_name: (user.firstName || "").trim(),
      last_name: (user.lastName || "").trim(),
    };
  }

  if (Object.keys(userData).length) window.gtag("set", "user_data", userData);
  window.gtag("event", "conversion", {
    send_to: `${AW_ID}/${label}`,
    transaction_id: eventId,
  });
}

// O Typebot roda em iframe e sinaliza a conclusão com um push `lead_typebot`
// no dataLayer da página (Script block do bot). Sem GTM, este listener converte
// esse push no gtag de conversão. Convive com o GTM durante a transição.
let listenerInstalled = false;

export function installTypebotConversionListener() {
  if (listenerInstalled || typeof window === "undefined") return;
  listenerInstalled = true;

  const dl = (window.dataLayer = window.dataLayer || []);
  const originalPush = dl.push.bind(dl);
  dl.push = (...items: Record<string, unknown>[]) => {
    const result = originalPush(...items);
    for (const item of items) {
      if (item && typeof item === "object" && item.event === "lead_typebot") {
        fireGoogleConversion(
          CONVERSION_LABELS.typebot,
          String(item.event_id || `tb_${Date.now()}`),
          { email: String(item.email || ""), phone: String(item.whats || "") },
        );
      }
    }
    return result;
  };
}
