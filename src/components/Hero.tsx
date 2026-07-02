"use client";

import Image from "next/image";
import { MapPin } from "lucide-react";
import heroImg from "../../public/Imagem/sessao11.avif";

export default function Hero() {
  const trackEvent = (eventName: string) => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", eventName);
    }
  };

  return (
    <section
      className="relative overflow-hidden flex items-center"
      style={{ minHeight: "calc(100svh - 4rem)", marginTop: "4rem" }}
    >
      {/* Background Image */}
      <Image
        src={heroImg}
        alt="Restaurante Manga e Prosa em Confins MG — comida caseira mineira na beira da MG-424"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
        placeholder="blur"
      />

      {/* Overlay gradient — forte embaixo, mais suave em cima */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/65 to-black/30" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 md:px-10 py-16 md:py-28">
        <div className="max-w-[560px] flex flex-col items-center text-center md:items-start md:text-left gap-5">

          {/* Google social proof */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-3.5 py-2 rounded-full">
            <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-3.5 h-3.5 fill-[#FABB05]" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              ))}
            </div>
            <span className="text-white/90 text-xs font-semibold">O mais bem avaliado da região</span>
          </div>

          {/* Selo localização */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-brand-orange/90 text-white font-semibold text-xs tracking-wide shadow-sm">
            <MapPin className="w-3 h-3" />
            <span>Perto do Aquabeat • MG-424</span>
          </div>

          {/* H1 */}
          <h1 className="font-serif text-white font-bold leading-[1.08] text-[2.1rem] sm:text-4xl md:text-5xl drop-shadow-lg">
            Restaurante de comida mineira no fogão a lenha
          </h1>

          {/* Subtítulo */}
          <p className="text-white/80 leading-relaxed text-[15px] md:text-lg max-w-[480px]">
            O <strong>Manga & Prosa</strong> é a sua parada perfeita em Confins! Almoço caseiro, café da manhã, lanches e marmitex na beira da MG-424, pertim do Aquabeat.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 w-full pt-1">
            <a
              href="https://www.google.com/maps/search/?api=1&query=MG-424%2C%20119%20-%20Lagoa%20dos%20Mares%2C%20Confins%20-%20MG%2C%2033500-000"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("click_rota_google_maps")}
              className="flex items-center justify-center gap-2 bg-brand-orange hover:bg-[#A84F28] text-white px-7 py-4 rounded-full font-bold transition-all shadow-lg w-full sm:w-auto text-base"
            >
              <MapPin className="w-5 h-5 shrink-0" />
              Ver rota no Google Maps
            </a>

            <a
              href="/cardapio"
              onClick={() => trackEvent("click_ver_cardapio")}
              className="flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 border border-white/30 text-white px-7 py-4 rounded-full font-bold transition-all w-full sm:w-auto text-base backdrop-blur-sm"
            >
              Ver cardápio completo
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
