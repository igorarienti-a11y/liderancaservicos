import { useEffect } from "react";

const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"];
const CLICK_KEYS = ["fbclid", "gclid", "gbraid", "wbraid", "ttclid", "msclkid"];

function getCookie(name: string): string {
  const m = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  return m ? decodeURIComponent(m[2]) : "";
}

function uuid(): string {
  if (typeof crypto !== "undefined" && crypto.randomUUID) return crypto.randomUUID();
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
  });
}

function splitName(full: string) {
  const p = (full || "").trim().split(/\s+/);
  return { first_name: p[0] || "", last_name: p.slice(1).join(" ") || "" };
}

export interface LeadTracking {
  event_id: string;
  first_name: string;
  last_name: string;
  fbp: string;
  fbc: string;
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_term: string;
  utm_content: string;
  fbclid: string;
  gclid: string;
  gbraid: string;
  wbraid: string;
  ttclid: string;
  msclkid: string;
  page_url: string;
  referrer: string;
  user_agent: string;
  language: string;
  screen: string;
  timezone: string;
}

export function useTracking() {
  // First-touch: persiste UTMs + click IDs no localStorage assim que a página abre.
  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);

      const utms: Record<string, string> = JSON.parse(localStorage.getItem("_utms") || "{}");
      let touchedU = false;
      UTM_KEYS.forEach((k) => {
        const v = params.get(k);
        if (v) {
          utms[k] = v;
          touchedU = true;
        }
      });
      if (touchedU) localStorage.setItem("_utms", JSON.stringify(utms));

      const ids: Record<string, string> = JSON.parse(localStorage.getItem("_clickids") || "{}");
      let touchedI = false;
      CLICK_KEYS.forEach((k) => {
        const v = params.get(k);
        if (v) {
          ids[k] = v;
          touchedI = true;
        }
      });
      if (touchedI) localStorage.setItem("_clickids", JSON.stringify(ids));
    } catch {
      /* localStorage indisponível — ignora */
    }
  }, []);

  // Chamado no submit: gera um event_id novo + snapshot completo do tracking.
  const buildLeadTracking = (fullName: string): LeadTracking => {
    let utms: Record<string, string> = {};
    let ids: Record<string, string> = {};
    try {
      utms = JSON.parse(localStorage.getItem("_utms") || "{}");
      ids = JSON.parse(localStorage.getItem("_clickids") || "{}");
    } catch {
      /* ignore */
    }
    const params = new URLSearchParams(window.location.search);
    const get = (obj: Record<string, string>, k: string) => obj[k] || params.get(k) || "";

    const fbclid = get(ids, "fbclid");
    let fbc = getCookie("_fbc");
    if (!fbc && fbclid) fbc = `fb.1.${Date.now()}.${fbclid}`;

    const { first_name, last_name } = splitName(fullName);

    return {
      event_id: uuid(),
      first_name,
      last_name,
      fbp: getCookie("_fbp"),
      fbc,
      utm_source: get(utms, "utm_source"),
      utm_medium: get(utms, "utm_medium"),
      utm_campaign: get(utms, "utm_campaign"),
      utm_term: get(utms, "utm_term"),
      utm_content: get(utms, "utm_content"),
      fbclid,
      gclid: get(ids, "gclid"),
      gbraid: get(ids, "gbraid"),
      wbraid: get(ids, "wbraid"),
      ttclid: get(ids, "ttclid"),
      msclkid: get(ids, "msclkid"),
      page_url: window.location.href,
      referrer: document.referrer,
      user_agent: navigator.userAgent,
      language: navigator.language,
      screen: `${window.screen.width}x${window.screen.height}`,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    };
  };

  return { buildLeadTracking };
}
