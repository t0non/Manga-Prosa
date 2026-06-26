import { MapPin, Navigation, Phone } from "lucide-react";
import Image from "next/image";
import WhatsAppIcon from "./WhatsAppIcon";
import locationBg from "../../public/Imagem/fora2.jpg";

export default function Location() {
  return (
    <section id="localizacao" className="py-16 md:py-24 relative border-y border-brand-woodLight/50 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image src={locationBg} alt="Fachada do restaurante Manga e Prosa na MG-424, Confins MG" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="max-w-[1200px] mx-auto px-4 md:px-10 relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          {/* Info */}
          <div className="flex-1 w-full text-center lg:text-left">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              Onde comer em Confins na beira da MG-424
            </h2>
            <p className="text-white/85 text-[15px] md:text-lg mb-8 leading-relaxed font-medium">
              O Manga & Prosa fica em Lagoa dos Mares, Confins - MG, na MG-424, número 119. Uma parada fácil pra quem está indo ou voltando do Aquabeat, trabalhando pela região ou procurando almoço caseiro por perto.
            </p>

            <div className="bg-white p-6 rounded-2xl border border-brand-woodLight shadow-sm mb-8 text-left">
              <div className="flex items-start gap-4 mb-4">
                <MapPin className="w-6 h-6 text-brand-orange shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-brand-coffeeDark mb-1">Endereço</h3>
                  <p className="text-brand-coffee text-sm md:text-base">
                    Manga & Prosa<br />
                    MG-424, 119 - Lagoa dos Mares<br />
                    Confins - MG, 33500-000
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-brand-orange shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-brand-coffeeDark mb-1">Telefone / WhatsApp</h3>
                  <p className="text-brand-coffee text-sm md:text-base">
                    (31) 99089-3313
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
              <a
                href="https://www.google.com/maps/search/?api=1&query=MG-424%2C%20119%20-%20Lagoa%20dos%20Mares%2C%20Confins%20-%20MG%2C%2033500-000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-brand-orange hover:bg-[#A84F28] text-white px-6 py-3.5 rounded-full font-bold transition-colors shadow-md w-full sm:w-auto"
              >
                <Navigation className="w-5 h-5" />
                Abrir rota no Google Maps
              </a>
              <a
                href="https://wa.me/5531990893313"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1DA851] text-white px-6 py-3.5 rounded-full font-bold transition-colors shadow-md w-full sm:w-auto"
              >
                <WhatsAppIcon className="w-5 h-5" />
                Chamar no WhatsApp
              </a>
              <a
                href="tel:+5531990893313"
                className="flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 text-white border border-white/40 px-6 py-3.5 rounded-full font-bold transition-colors shadow-md w-full sm:w-auto"
              >
                <Phone className="w-5 h-5" />
                Ligar agora
              </a>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="flex-1 w-full">
            <div className="w-full aspect-[4/3] bg-brand-woodLight rounded-3xl overflow-hidden shadow-lg border-4 border-white relative group">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-brand-orange mx-auto mb-2 opacity-50" />
                  <span className="text-brand-coffeeDark/50 font-bold">Mapa Integrado</span>
                </div>
              </div>
              {/* O iframe do Google Maps entraria aqui */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15024.46083439401!2d-44.0250!3d-19.6450!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDM4JzQyLjAiUyA0NMKwMDEnMzAuMCJX!5e0!3m2!1spt-BR!2sbr!4v1620000000000!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 opacity-80 group-hover:opacity-100 transition-opacity duration-300"
              ></iframe>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
