"use client";

import Image from "next/image";
import { MapPin, Phone, MessageCircle, Map } from "lucide-react";
import heroImg from "../../public/Imagem/sessao1.png";
import pinIcon from "../../public/Imagem/pinlocalizacao.webp";
import wppIcon from "../../public/Imagem/icone do whatsapp.png";

export default function Hero() {
  const trackEvent = (eventName: string) => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", eventName);
    }
  };

  return (
    <section
      className="relative flex items-center bg-brand-coffeeDark"
      style={{ minHeight: "calc(100svh - 5.5rem)", marginTop: "5.5rem" }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImg}
          alt="Fachada do restaurante Manga e Prosa em Confins"
          fill
          priority
          className="object-cover brightness-110 saturate-110 object-[center_55%] md:object-[center_80%]"
          sizes="100vw"
          placeholder="blur"
        />
        {/* Desktop: escurece só o lado esquerdo */}
        <div
          className="absolute inset-0 hidden md:block"
          style={{
            background:
              "linear-gradient(to right, rgba(63,42,29,0.90) 0%, rgba(63,42,29,0.80) 35%, rgba(63,42,29,0.10) 58%, transparent 100%)",
          }}
        />
        {/* Mobile: overlay mais leve no topo, escuro apenas atrás do texto */}
        <div
          className="absolute inset-0 md:hidden"
          style={{
            background:
              "linear-gradient(to bottom, rgba(63,42,29,0.3) 0%, rgba(63,42,29,0.75) 50%, rgba(63,42,29,0.95) 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-4 md:px-14 pt-6 pb-[calc(80px+env(safe-area-inset-bottom))] md:py-10">
        <div className="w-full max-w-[620px]">

          {/* Selo */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-brand-straw font-semibold mb-4 backdrop-blur-sm"
            style={{ fontSize: "clamp(0.65rem, 2.5vw, 0.75rem)" }}
          >
            <MapPin className="w-3 h-3 text-brand-orange shrink-0" />
            <span>Visite o Manga &amp; Prosa em Confins - MG</span>
          </div>

          {/* H1 */}
          <h1
            className="font-bold text-brand-straw drop-shadow-lg mb-4 leading-[1.1] md:leading-[1.08] text-4xl sm:text-5xl md:text-[3.1rem]"
          >
            Restaurante em Confins para comer bem e prosear sem pressa
          </h1>

          {/* Subheadline */}
          <p
            className="text-brand-straw/90 mb-6 leading-relaxed drop-shadow-md font-medium max-w-[500px] text-[15px] md:text-base lg:text-lg"
          >
            Na beira da MG-424, em Lagoa dos Mares, o Manga & Prosa recebe você com café quentin, almoço caseiro, lanches e marmitex, pertim do Aquabeat.
          </p>

          {/* CTAs */}
          <div className="flex flex-col gap-3 mb-5 sm:flex-row sm:flex-wrap sm:gap-3">
            {/* Botão principal — ocupa toda a largura no mobile */}
            <a
              href="https://www.google.com/maps/search/?api=1&query=MG-424%2C%20119%20-%20Lagoa%20dos%20Mares%2C%20Confins%20-%20MG%2C%2033500-000"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("click_rota_google_maps")}
              className="flex items-center justify-center gap-2 bg-brand-orange hover:bg-[#A84F28] text-[#FFF7ED] px-6 py-3.5 rounded-full font-bold transition-all shadow-lg shadow-brand-orange/30 hover:-translate-y-0.5 w-full sm:w-auto text-base"
              aria-label="Ver rota no Google Maps para o restaurante"
            >
              <Image src={pinIcon} alt="Localização" width={20} height={20} className="brightness-0 invert shrink-0" />
              Ver rota no Google Maps
            </a>

            {/* Botões secundários */}
            <div className="grid grid-cols-2 gap-3 sm:flex sm:gap-3 w-full sm:w-auto">
              <a
                href="/cardapio"
                className="flex items-center justify-center gap-2 bg-white/12 hover:bg-white/20 text-brand-straw border border-white/35 px-4 py-3.5 rounded-full font-bold transition-all hover:-translate-y-0.5 backdrop-blur-sm text-sm"
                aria-label="Ver cardápio completo"
              >
                Ver cardápio
              </a>
              <a
                href="https://wa.me/5531990893313?text=Ol%C3%A1%2C%20vim%20pelo%20site%20do%20Manga%20%26%20Prosa%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent("click_whatsapp")}
                className="flex items-center justify-center gap-2 bg-white/12 hover:bg-white/20 text-brand-straw border border-white/35 px-4 py-3.5 rounded-full font-bold transition-all hover:-translate-y-0.5 backdrop-blur-sm text-sm"
                aria-label="Chamar o restaurante no WhatsApp"
              >
                <Image src={wppIcon} alt="WhatsApp" width={16} height={16} className="shrink-0 brightness-0 invert" />
                Chamar no WhatsApp
              </a>
            </div>
          </div>

          {/* Endereço e telefone — linha compacta na caixa no mobile */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 text-brand-straw/90 text-[13px] md:text-sm font-medium mt-6 bg-brand-coffeeDark/60 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none p-3.5 md:p-0 rounded-xl md:rounded-none border border-white/10 md:border-none">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-brand-orange shrink-0" />
              MG-424, 119 - Lagoa dos Mares, Confins - MG
            </span>
            <span className="hidden sm:inline text-brand-straw/50">•</span>
            <span className="flex items-center gap-1.5">
              <Phone className="w-4 h-4 text-brand-orange shrink-0" />
              <a href="tel:+5531990893313" className="hover:text-brand-orange transition-colors">
                (31) 99089-3313
              </a>
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
