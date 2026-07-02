"use client";

import Image from "next/image";
import wppIcon from "../../public/Imagem/icon_whatsapp.png";

export default function WhatsAppWidget() {
  const trackEvent = () => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "click_whatsapp_widget");
    }
  };

  return (
    <a
      href="https://wa.me/5531990893313?text=Ol%C3%A1%2C%20vim%20pelo%20site%20do%20Manga%20%26%20Prosa%20e%20gostaria%20de%20informa%C3%A7%C3%B5es."
      target="_blank"
      rel="noopener noreferrer"
      onClick={trackEvent}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center hover:scale-110 transition-transform duration-300 drop-shadow-2xl"
      aria-label="Falar conosco no WhatsApp"
    >
      <Image
        src={wppIcon}
        alt="WhatsApp do Manga e Prosa"
        width={64}
        height={64}
        className="object-contain"
      />
      
      {/* Tooltip opcional (descomente se quiser um balão escrito "Fale conosco") */}
      {/* 
      <div className="absolute right-20 bg-white px-3 py-1.5 rounded-xl shadow-lg text-sm font-bold text-green-600 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
        Fale conosco!
        <div className="absolute top-1/2 -right-1.5 w-3 h-3 bg-white rotate-45 -translate-y-1/2"></div>
      </div> 
      */}
    </a>
  );
}
