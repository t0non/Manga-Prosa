"use client";

import { Package, UtensilsCrossed, CalendarDays, MessageCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import WhatsAppIcon from "./WhatsAppIcon";

const marmitexFeatures = [
  { icon: <Package className="w-6 h-6 text-brand-orange" />, title: "Marmitex bem servida" },
  { icon: <UtensilsCrossed className="w-6 h-6 text-brand-orange" />, title: "Pratos variados durante a semana" },
  { icon: <CalendarDays className="w-6 h-6 text-brand-orange" />, title: "Comida caseira de verdade" },
  { icon: <MessageCircle className="w-6 h-6 text-brand-orange" />, title: "Consulte as opções pelo WhatsApp" },
];

export default function Marmitex() {
  const trackEvent = (eventName: string) => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", eventName);
    }
  };

  return (
    <section id="marmitex" className="py-20 bg-brand-coffeeDark relative border-t border-brand-woodDark/20 border-b border-brand-woodDark/30">
      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <p className="text-brand-orange font-bold tracking-widest uppercase text-sm mb-2">Praticidade e Sabor</p>
            <h2 className="text-3xl md:text-5xl font-bold text-brand-straw mb-6 leading-tight">
              Marmitex em Confins bem servida
            </h2>
            
            <p className="text-lg text-brand-woodLight leading-relaxed mb-8">
              Pra quem trabalha pela região ou quer levar comida caseira pra casa, a marmitex do Manga & Prosa é feita no capricho. Arroz, feijão, carne, legumes, salada e acompanhamentos fresquinhos do dia. Chama no WhatsApp e consulta as opções.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/5531990893313?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20as%20op%C3%A7%C3%B5es%20de%20marmitex%20de%20hoje."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent("click_marmitex_whatsapp")}
                className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1DA851] text-white px-6 py-4 rounded-full font-bold transition-all shadow-lg hover:-translate-y-0.5"
                aria-label="Consultar marmitex no WhatsApp"
              >
                <WhatsAppIcon className="w-5 h-5" />
                Consultar marmitex no WhatsApp
              </a>
              
              <Link
                href="/cardapio"
                className="flex items-center justify-center gap-2 bg-transparent hover:bg-white/10 text-brand-straw border border-brand-woodDark px-6 py-4 rounded-full font-bold transition-all hover:-translate-y-0.5"
              >
                Ver cardápio
              </Link>
            </div>
          </div>

          {/* Feature Cards Grid */}
          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {marmitexFeatures.map((feature, idx) => (
                <div 
                  key={idx} 
                  className="bg-brand-coffee border border-brand-woodDark/30 rounded-2xl p-5 flex items-center gap-4 hover:border-brand-orange/50 transition-colors shadow-sm"
                >
                  <div className="bg-brand-coffeeDark p-2.5 rounded-xl shrink-0">
                    {feature.icon}
                  </div>
                  <h4 className="font-bold text-brand-straw text-base">{feature.title}</h4>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
