import { MapPin, Navigation, Clock, Phone, Map } from "lucide-react";
import Image from "next/image";
import pinIcon from "../../public/Imagem/pinlocalizacao.webp";
import wppIcon from "../../public/Imagem/icone do whatsapp.png";

export default function Location() {
  return (
    <section id="localizacao" className="py-20 bg-brand-coffee relative">
      <div className="container mx-auto px-4 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-orange font-bold tracking-widest uppercase text-sm mb-2">Nossa Localização</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-brand-straw mb-6 leading-tight">
            Pertim do Aquabeat, na beira da MG-424
          </h3>
        </div>

        <div className="bg-brand-coffeeDark rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border border-brand-woodDark/30">
          <div className="grid lg:grid-cols-2">
            
            <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <p className="text-brand-woodLight/90 text-base md:text-lg mb-8 leading-relaxed">
                O Manga & Prosa fica em Lagoa dos Mares, Confins - MG, na beira da MG-424. Uma parada gostosa para quem está pela região, indo ou voltando do Aquabeat, ou procurando café da manhã, almoço, lanches e marmitex por perto.
              </p>
              
              <div className="bg-brand-coffee p-6 md:p-8 rounded-2xl border border-brand-woodDark/20 mb-8">
                <h4 className="font-bold text-brand-straw text-xl md:text-2xl mb-4">Manga & Prosa</h4>
                <div className="space-y-4">
                  <p className="flex items-start gap-3 text-brand-woodLight text-base md:text-lg">
                    <MapPin className="w-6 h-6 text-brand-orange shrink-0 mt-1" />
                    <span>MG-424, 119 - Lagoa dos Mares<br />Confins - MG, 33500-000</span>
                  </p>
                  <p className="flex items-center gap-3 text-brand-woodLight text-base md:text-lg">
                    <Phone className="w-6 h-6 text-brand-orange shrink-0" />
                    <span>Telefone: <a href="tel:+5531990893313" className="hover:text-brand-orange transition-colors" aria-label="Ligar para (31) 99089-3313">(31) 99089-3313</a></span>
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=MG-424%2C%20119%20-%20Lagoa%20dos%20Mares%2C%20Confins%20-%20MG%2C%2033500-000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-brand-orange hover:bg-[#A84F28] text-[#FFF7ED] px-6 py-4 rounded-full font-bold transition-all shadow-lg shadow-brand-orange/20 md:hover:-translate-y-1"
                  aria-label="Abrir rota no Google Maps para o restaurante"
                  onClick={() => {
                    if (typeof window !== "undefined" && (window as any).gtag) {
                      (window as any).gtag('event', 'click_rota_google_maps');
                    }
                  }}
                >
                  <Image src={pinIcon} alt="Localização" width={20} height={20} className="brightness-0 invert shrink-0" />
                  Abrir rota no Google Maps
                </a>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <a
                    href="tel:+5531990893313"
                    className="flex items-center justify-center gap-2 bg-transparent hover:bg-brand-coffee text-brand-straw border-2 border-brand-woodDark px-6 py-4 rounded-full font-bold transition-all md:hover:-translate-y-1"
                    aria-label="Ligar para o restaurante"
                    onClick={() => {
                      if (typeof window !== "undefined" && (window as any).gtag) {
                        (window as any).gtag('event', 'click_ligar');
                      }
                    }}
                  >
                    <Phone className="w-5 h-5" />
                    Ligar para o restaurante
                  </a>
                  <a
                    href="https://wa.me/5531990893313?text=Ol%C3%A1%2C%20vim%20pelo%20site%20do%20Manga%20%26%20Prosa%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-transparent hover:bg-brand-coffee text-brand-straw border-2 border-brand-woodDark px-6 py-4 rounded-full font-bold transition-all md:hover:-translate-y-1"
                    aria-label="Chamar o restaurante no WhatsApp"
                    onClick={() => {
                      if (typeof window !== "undefined" && (window as any).gtag) {
                        (window as any).gtag('event', 'click_whatsapp');
                      }
                    }}
                  >
                    <Image src={wppIcon} alt="WhatsApp" width={20} height={20} className="brightness-0 invert" />
                    Chamar no WhatsApp
                  </a>
                </div>
                
                {/* TODO: Adicionar Link do Google Business Profile e link de avaliação do Google quando disponíveis */}
                {/* 
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                  <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 text-brand-woodLight hover:text-brand-orange font-medium py-2">
                    <ExternalLink className="w-4 h-4" /> Ver Perfil no Google
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 text-brand-woodLight hover:text-brand-orange font-medium py-2">
                    <Star className="w-4 h-4" /> Deixar uma avaliação
                  </a>
                </div> 
                */}
              </div>
            </div>

            <div className="relative min-h-[320px] md:min-h-[480px] lg:min-h-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3756.1234!2d-43.9659!3d-19.6328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sMG-424%2C%20119%20-%20Lagoa%20dos%20Mares%2C%20Confins%20-%20MG%2C%2033500-000!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                title="Localização do Manga e Prosa no Google Maps"
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
