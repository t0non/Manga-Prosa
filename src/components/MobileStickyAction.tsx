"use client";

import { Phone, MapPin } from "lucide-react";
import Image from "next/image";
import WhatsAppIcon from "./WhatsAppIcon";

export default function MobileStickyAction() {
  const trackEvent = (eventName: string) => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", eventName);
    }
  };

  return (
    <div
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 flex bg-brand-coffeeDark border-t border-brand-woodDark/30 shadow-[0_-4px_24px_rgba(63,42,29,0.25)]"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      {/* Ligar */}
      <a
        href="tel:+5531990893313"
        onClick={() => trackEvent("click_ligar")}
        className="flex-1 flex flex-col items-center justify-center py-3 gap-1 text-brand-straw hover:bg-brand-woodDark/40 transition-colors"
        aria-label="Ligar para o restaurante Manga e Prosa"
      >
        <Phone className="w-5 h-5 text-brand-woodLight" />
        <span className="text-[10px] font-bold uppercase tracking-wider text-brand-woodLight">Ligar</span>
      </a>

      {/* Como chegar — destaque central */}
      <a
        href="https://www.google.com/maps/search/?api=1&query=MG-424%2C%20119%20-%20Lagoa%20dos%20Mares%2C%20Confins%20-%20MG%2C%2033500-000"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-[1.6] flex flex-col items-center justify-center py-3 gap-1 bg-brand-orange hover:bg-[#A84F28] transition-colors shadow-inner"
        aria-label="Ver rota no Google Maps para o restaurante"
        onClick={() => trackEvent('click_rota_google_maps')}
      >
        <MapPin className="w-5 h-5 text-white mb-1" />
        <span className="text-[11px] font-bold uppercase tracking-wider text-[#FFF7ED]">Como chegar</span>
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/5531990893313"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackEvent("click_whatsapp")}
        className="flex-1 flex flex-col items-center justify-center py-3 gap-1 text-brand-straw hover:bg-brand-woodDark/40 transition-colors"
        aria-label="Chamar o restaurante no WhatsApp"
      >
        <WhatsAppIcon className="w-5 h-5 text-white" />
        <span className="text-[11px] font-bold mt-1 text-brand-straw">WhatsApp</span>
      </a>
    </div>
  );
}
