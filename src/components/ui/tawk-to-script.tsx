"use client";

import { useEffect } from "react";

export function TawkToScript() {
  useEffect(() => {
    // Prevent multiple injections
    if (document.getElementById("tawk-to-script")) return;

    const s1 = document.createElement("script");
    const s0 = document.getElementsByTagName("script")[0];

    s1.async = true;
    s1.src = "https://embed.tawk.to/69a3496cf376451c37352465/1jiitdkgv";
    s1.charset = "UTF-8";
    s1.setAttribute("crossorigin", "*");
    s1.id = "tawk-to-script";

    // Check if s0 and s0.parentNode exist before inserting
    if (s0 && s0.parentNode) {
      s0.parentNode.insertBefore(s1, s0);
    } else {
      // Fallback: append to head if no previous scripts exist
      document.head.appendChild(s1);
    }

    return () => {
      // Cleanup script on unmount (optional, but good practice for SPAs)
      const existingScript = document.getElementById("tawk-to-script");
      if (existingScript) {
        existingScript.remove();
      }
      // Note: Tawk.to appends other elements (like IFRAMEs) to the DOM.
      // Full cleanup might require removing those as well if strictly necessary,
      // but usually the widget object handles its own lifecycle globally.
    };
  }, []);

  return null; // This component doesn't render anything visible directly
}
