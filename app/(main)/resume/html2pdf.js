"use client"; // Ensure it's only executed on the client

import { useState, useEffect } from "react";

export default function useHtml2Pdf() {
  const [html2pdf, setHtml2pdf] = useState(null);

  useEffect(() => {
    import("html2pdf.js").then((module) => {
      setHtml2pdf(() => module.default);
    });
  }, []);

  return html2pdf;
}
