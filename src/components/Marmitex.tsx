"use client";

import WhatsAppIcon from "./WhatsAppIcon";

export default function Marmitex() {
  const trackEvent = (eventName: string) => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", eventName);
    }
  };

  return (
    <section id="marmitex" className="py-20 bg-brand-coffeeDark relative border-t border-brand-woodDark/20 border-b border-brand-woodDark/30">
      <div className="container mx-auto px-4 max-w-3xl relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-brand-straw mb-6 leading-tight">
          Também entregamos Marmitex!
        </h2>
        <p className="text-lg text-brand-woodLight leading-relaxed mb-10">
          Feita no capricho, com gostinho de comida caseira de verdade. Chame no WhatsApp e consulte as opções do dia.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="https://wa.me/5531990893313?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20as%20op%C3%A7%C3%B5es%20de%20marmitex%20de%20hoje."
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("click_marmitex_whatsapp")}
            className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1DA851] text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:-translate-y-0.5"
            aria-label="Consultar marmitex no WhatsApp"
          >
            <WhatsAppIcon className="w-5 h-5" />
            Consultar opções pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
