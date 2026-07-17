import { useEffect } from "react";
import { installTypebotConversionListener } from "@/lib/gtag";

// Embed do Typebot na LP (movido do GTM) — permite prefill do tracking lido no
// contexto da LP (onde os cookies _fbp/_fbc SÃO acessíveis, diferente do iframe).

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

let initialized = false;

const TypebotBubble = () => {
  useEffect(() => {
    if (initialized) return;
    initialized = true;

    // Converte o push `lead_typebot` do bot em conversão Google Ads (sem GTM)
    installTypebotConversionListener();

    const p = new URLSearchParams(window.location.search);

    // first-touch: persiste utms/click IDs no localStorage (igual o form)
    let utms: Record<string, string> = {};
    let ids: Record<string, string> = {};
    try {
      utms = JSON.parse(localStorage.getItem("_utms") || "{}");
      let tu = false;
      UTM_KEYS.forEach((k) => {
        const v = p.get(k);
        if (v) {
          utms[k] = v;
          tu = true;
        }
      });
      if (tu) localStorage.setItem("_utms", JSON.stringify(utms));

      ids = JSON.parse(localStorage.getItem("_clickids") || "{}");
      let ti = false;
      CLICK_KEYS.forEach((k) => {
        const v = p.get(k);
        if (v) {
          ids[k] = v;
          ti = true;
        }
      });
      if (ti) localStorage.setItem("_clickids", JSON.stringify(ids));
    } catch {
      /* localStorage indisponível */
    }

    const get = (o: Record<string, string>, k: string) => o[k] || p.get(k) || "";
    const fbclid = get(ids, "fbclid");
    let fbc = getCookie("_fbc");
    if (!fbc && fbclid) fbc = `fb.1.${Date.now()}.${fbclid}`;

    const prefilledVariables = {
      utm_source: get(utms, "utm_source"),
      utm_medium: get(utms, "utm_medium"),
      utm_campaign: get(utms, "utm_campaign"),
      utm_term: get(utms, "utm_term"),
      utm_content: get(utms, "utm_content"),
      GCLID: get(ids, "gclid"),
      fbclid,
      gbraid: get(ids, "gbraid"),
      wbraid: get(ids, "wbraid"),
      ttclid: get(ids, "ttclid"),
      msclkid: get(ids, "msclkid"),
      fbp: getCookie("_fbp"),
      fbc,
      event_id: uuid(),
      page_url: window.location.href,
      referrer: document.referrer,
      user_agent: navigator.userAgent,
      screen: `${window.screen.width}x${window.screen.height}`,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      language: navigator.language,
    };

    const cdnUrl = "https://cdn.jsdelivr.net/npm/@typebot.io/js@0/dist/web.js";
    import(/* @vite-ignore */ cdnUrl)
      .then((mod: unknown) => {
        const Typebot = (mod as { default?: { initBubble: (c: unknown) => void }; initBubble?: (c: unknown) => void });
        const init = Typebot.default?.initBubble || Typebot.initBubble;
        init?.({
          typebot: "lideran-a-zl1nnhn",
          prefilledVariables,
          theme: {
            button: {
              backgroundColor: "#29a71a",
              customIconSrc: "https://cdn-icons-png.flaticon.com/512/3670/3670051.png",
              size: "large",
            },
            chatWindow: { backgroundColor: "#F8F8F8" },
          },
        });
      })
      .catch((e) => console.error("Typebot init falhou:", e));
  }, []);

  return null;
};

export default TypebotBubble;
