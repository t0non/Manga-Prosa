"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import wppIcon from "../../public/Imagem/icon_whatsapp.png";

export default function WhatsAppWidget() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Aparece após rolar metade da tela (mesma lógica do VideoWidget)
      if (window.scrollY > window.innerHeight * 0.5) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger once on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      className={`fixed bottom-6 right-6 z-50 flex items-center justify-center hover:scale-110 transition-all duration-700 ease-out drop-shadow-2xl ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0 pointer-events-none"
      }`}
      aria-label="Falar conosco no WhatsApp"
    >
      <Image
        src={wppIcon}
        alt="WhatsApp do Manga e Prosa"
        width={64}
        height={64}
        className="object-contain"
      />
    </a>
  );
}
