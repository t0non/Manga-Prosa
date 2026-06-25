"use client";

import Image from "next/image";
import { MapPin, Phone, Utensils } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";
import heroImg from "../../public/Imagem/sessao1.png";

export default function Hero() {
  const trackEvent = (eventName: string) => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", eventName);
    }
  };

  return (
    <section className="bg-white relative overflow-hidden" style={{ minHeight: "calc(100svh - 4rem)", marginTop: "4rem" }}>
      <div className="max-w-[1200px] mx-auto w-full h-full flex flex-col md:flex-row">
        
        {/* Mobile Image (Visible only on mobile, top of screen) */}
        <div className="w-full h-[40vh] relative md:hidden">
          <Image
            src={heroImg}
            alt="Restaurante Manga e Prosa em Confins MG — comida caseira mineira na beira da MG-424"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
            placeholder="blur"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-white" />
        </div>

        {/* Text Content */}
        <div className="flex-1 px-4 md:px-10 py-8 md:py-16 flex flex-col justify-center relative z-10 -mt-6 md:mt-0 bg-white md:bg-transparent rounded-t-3xl md:rounded-none">
          
          <div className="max-w-[550px]">
            {/* Tag */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-brand-orange text-white font-bold mb-4 text-xs tracking-wide shadow-sm">
              <MapPin className="w-3.5 h-3.5 text-white" />
              <span>Restaurante em Confins, pertim do Aquabeat</span>
            </div>

            {/* H1 */}
            <h1 className="font-serif text-brand-coffeeDark font-bold leading-[1.1] text-[2rem] sm:text-4xl md:text-5xl mb-4">
              Comida caseira mineira na beira da MG-424
            </h1>

            {/* Subheadline */}
            <p className="text-brand-coffee mb-6 leading-relaxed font-medium text-[15px] md:text-lg">
              Café quentin, almoço bem servido, lanches e marmitex com aquele tempero de casa. Uma parada gostosa pra quem tá em Confins, Lagoa dos Mares ou passando pertim do Aquabeat.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <a
                href="https://www.google.com/maps/search/?api=1&query=MG-424%2C%20119%20-%20Lagoa%20dos%20Mares%2C%20Confins%20-%20MG%2C%2033500-000"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent("click_rota_google_maps")}
                className="flex items-center justify-center gap-2 bg-brand-orange hover:bg-[#A84F28] text-white px-6 py-3.5 rounded-full font-bold transition-all shadow-md w-full sm:w-auto text-base"
              >
                <MapPin className="w-5 h-5" />
                Como chegar
              </a>

              <a
                href="https://wa.me/5531990893313?text=Ol%C3%A1%2C%20vim%20pelo%20site%20do%20Manga%20%26%20Prosa%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent("click_whatsapp")}
                className="flex items-center justify-center gap-2 bg-white text-brand-coffeeDark border border-brand-woodLight hover:border-brand-wood px-6 py-3.5 rounded-full font-bold transition-all shadow-sm w-full sm:w-auto text-base"
              >
                <WhatsAppIcon className="w-5 h-5 shrink-0" />
                Chamar no WhatsApp
              </a>
            </div>

            <a
              href="/#cardapio"
              className="inline-flex items-center gap-2 text-brand-coffee font-semibold hover:text-brand-orange transition-colors text-sm mb-6"
            >
              <Utensils className="w-4 h-4" />
              Ver cardápio
            </a>

            {/* Microinformações */}
            <div className="text-brand-coffeeDark/80 text-sm font-medium mt-2 border-t border-brand-woodLight pt-4">
              <p>MG-424, 119 • Lagoa dos Mares • Confins - MG</p>
              <p className="flex items-center gap-1 mt-1 text-brand-green font-bold">
                Perto do Aquabeat
              </p>
            </div>
          </div>

        </div>

        {/* Desktop Image */}
        <div className="hidden md:flex flex-1 relative items-center justify-center p-8">
          <div className="relative w-full h-[90%] max-h-[600px] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src={heroImg}
              alt="Ambiente do restaurante Manga e Prosa em Confins MG, comida caseira mineira perto do Aquabeat"
              fill
              priority
              className="object-cover object-center hover:scale-105 transition-transform duration-700"
              sizes="50vw"
              placeholder="blur"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
