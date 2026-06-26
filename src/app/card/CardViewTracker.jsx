"use client";

import { useEffect } from "react";

export default function CardViewTracker() {
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "business_card_view",
    });
  }, []);

  return null;
}