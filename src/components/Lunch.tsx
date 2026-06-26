"use client";

import { Utensils, Map, MessageCircle, ChefHat, Beef, Salad, CakeSlice, CalendarClock } from "lucide-react";
import Image from "next/image";
import pinIcon from "../../public/Imagem/pinlocalizacao.webp";
import WhatsAppIcon from "./WhatsAppIcon";

const lunchCategories = [
  { icon: <ChefHat className="w-6 h-6 text-brand-orange" />, name: "Comida mineira" },
  { icon: <Utensils className="w-6 h-6 text-brand-orange" />, name: "Pratos do dia" },
  { icon: <Beef className="w-6 h-6 text-brand-orange" />, name: "Carnes e acompanhamentos" },
  { icon: <Salad className="w-6 h-6 text-brand-orange" />, name: "Saladas e legumes" },
  { icon: <CakeSlice className="w-6 h-6 text-brand-orange" />, name: "Sobremesas caseiras" },
  { icon: <CalendarClock className="w-6 h-6 text-brand-orange" />, name: "Opções conforme disponibilidade" },
];

export default function Lunch() {
  const trackEvent = (eventName: string) => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", eventName);
    }
  };

  return (
    <section id="almoco" className="py-20 bg-brand-straw relative">
      <div className="container mx-auto px-4 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-orange font-bold tracking-widest uppercase text-sm mb-2">Almoço no Manga & Prosa</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-brand-coffeeDark mb-6 leading-tight">
            Almoço mineiro e comida caseira em Confins
          </h3>
          <p className="text-lg text-brand-coffee/90 leading-relaxed mb-4">
            No Manga & Prosa, o almoço tem sabor de comida feita com calma, com pratos brasileiros, acompanhamentos mineiros e opções que variam conforme o dia e a disponibilidade.
          </p>
          <p className="text-base text-brand-coffee/80 leading-relaxed">
            Aqui você encontra aquele tipo de comida que combina com mesa cheia, tempero de casa e uma boa prosa: arroz, feijão, carnes, legumes, saladas, massas, pratos mineiros e acompanhamentos preparados para quem quer comer bem na região de Confins.
          </p>
        </div>

        {/* Categorias - Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16">
          {lunchCategories.map((category, idx) => (
            <div key={idx} className="bg-white border border-brand-woodLight/50 rounded-2xl p-6 flex flex-col items-center text-center gap-4 hover:bg-brand-strawDark/10 transition-colors shadow-sm">
              <div className="w-12 h-12 rounded-full bg-brand-straw flex items-center justify-center">
                {category.icon}
              </div>
              <h4 className="font-bold text-brand-coffeeDark text-base md:text-lg">{category.name}</h4>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="https://wa.me/5531990893313?text=Ol%C3%A1%2C%20quais%20s%C3%A3o%20as%20op%C3%A7%C3%B5es%20de%20almo%C3%A7o%20hoje%20no%20Manga%20%26%20Prosa%3F"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("click_consultar_almoco")}
            className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1DA851] text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:-translate-y-0.5"
            aria-label="Consultar almoço no WhatsApp"
          >
            <WhatsAppIcon className="w-5 h-5" />
            Consultar cardápio do dia
          </a>
          
          <a
            href="https://www.google.com/maps/search/?api=1&query=MG-424%2C%20119%20-%20Lagoa%20dos%20Mares%2C%20Confins%20-%20MG%2C%2033500-000"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("click_rota_google_maps")}
            className="flex items-center justify-center gap-2 bg-transparent hover:bg-white/50 text-brand-coffeeDark border-2 border-brand-woodDark px-8 py-4 rounded-full font-bold transition-all hover:-translate-y-0.5"
            aria-label="Ver rota no Google Maps"
          >
            <Image src={pinIcon} alt="Localização" width={20} height={20} className="brightness-0 invert shrink-0" />
            Ver rota no Google Maps
          </a>
        </div>

      </div>
    </section>
  );
}
