"use client";

import { Phone, MapPin } from "lucide-react";
import Image from "next/image";
import WhatsAppIcon from "./WhatsAppIcon";

export default function MobileStickyAction() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-brand-woodLight/50 pb-[env(safe-area-inset-bottom)] md:hidden shadow-[0_-5px_15px_rgba(0,0,0,0.05)]">
      <div className="flex px-2 py-2">
        <a
          href="tel:+5531990893313"
          className="flex-1 flex flex-col items-center justify-center py-2 text-brand-coffeeDark hover:text-brand-orange transition-colors"
        >
          <Phone className="w-5 h-5 mb-1" />
          <span className="text-[10px] font-bold uppercase tracking-wider">Ligar</span>
        </a>
        <div className="w-[1px] bg-brand-woodLight/50 my-2" />
        <a
          href="https://www.google.com/maps/search/?api=1&query=MG-424%2C%20119%20-%20Lagoa%20dos%20Mares%2C%20Confins%20-%20MG%2C%2033500-000"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center py-2 text-brand-coffeeDark hover:text-brand-orange transition-colors"
        >
          <MapPin className="w-5 h-5 mb-1 text-brand-orange" />
          <span className="text-[10px] font-bold uppercase tracking-wider text-brand-orange">Como chegar</span>
        </a>
        <div className="w-[1px] bg-brand-woodLight/50 my-2" />
        <a
          href="https://wa.me/5531990893313"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center py-2 text-brand-coffeeDark hover:text-brand-orange transition-colors"
        >
          <WhatsAppIcon className="w-5 h-5 mb-1" />
          <span className="text-[10px] font-bold uppercase tracking-wider">WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
