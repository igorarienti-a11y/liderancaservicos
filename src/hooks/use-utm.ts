import { useEffect, useState } from "react";

export interface UTMParams {
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_term: string;
  utm_content: string;
}

const UTM_STORAGE_KEY = "utm_params";

export function useUTM(): UTMParams {
  const [utmParams, setUtmParams] = useState<UTMParams>({
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
    utm_term: "",
    utm_content: "",
  });

  useEffect(() => {
    // Check URL for UTM params first
    const urlParams = new URLSearchParams(window.location.search);
    const urlUtms: UTMParams = {
      utm_source: urlParams.get("utm_source") || "",
      utm_medium: urlParams.get("utm_medium") || "",
      utm_campaign: urlParams.get("utm_campaign") || "",
      utm_term: urlParams.get("utm_term") || "",
      utm_content: urlParams.get("utm_content") || "",
    };

    // Check if any UTM param exists in URL
    const hasUrlUtms = Object.values(urlUtms).some((v) => v !== "");

    if (hasUrlUtms) {
      // Store in sessionStorage and use URL params
      sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(urlUtms));
      setUtmParams(urlUtms);
    } else {
      // Try to get from sessionStorage
      const stored = sessionStorage.getItem(UTM_STORAGE_KEY);
      if (stored) {
        try {
          setUtmParams(JSON.parse(stored));
        } catch {
          // Invalid JSON, ignore
        }
      }
    }
  }, []);

  return utmParams;
}
