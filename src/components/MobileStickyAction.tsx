"use client";

import { useState, useEffect } from "react";
import { MapPin } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";

export default function MobileStickyAction() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    
    // Check initial scroll
    handleScroll();
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const trackEvent = (eventName: string) => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", eventName);
    }
  };

  return (
    <div
      className={`md:hidden fixed bottom-0 left-0 right-0 z-40 flex shadow-[0_-8px_30px_rgba(0,0,0,0.15)] transition-transform duration-300 ease-in-out ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      {/* Rota */}
      <a
        href="https://www.google.com/maps/search/?api=1&query=MG-424%2C%20119%20-%20Lagoa%20dos%20Mares%2C%20Confins%20-%20MG%2C%2033500-000"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex flex-col items-center justify-center py-3.5 gap-1 bg-brand-orange hover:bg-[#A84F28] transition-colors border-r border-black/10"
        aria-label="Ver rota no Google Maps para o restaurante"
        onClick={() => trackEvent('click_rota_google_maps')}
      >
        <MapPin className="w-5 h-5 text-white mb-0.5" />
        <span className="text-[11px] font-bold uppercase tracking-wider text-white">Rota</span>
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/5531990893313?text=Ol%C3%A1%2C%20vim%20pelo%20site%20do%20Manga%20%26%20Prosa."
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackEvent("click_whatsapp")}
        className="flex-1 flex flex-col items-center justify-center py-3.5 gap-1 bg-[#25D366] hover:bg-[#1DA851] transition-colors"
        aria-label="Chamar o restaurante no WhatsApp"
      >
        <WhatsAppIcon className="w-5 h-5 text-white mb-0.5 shrink-0" />
        <span className="text-[11px] font-bold uppercase tracking-wider text-white">WhatsApp</span>
      </a>
    </div>
  );
}
