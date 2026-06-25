"use client";

import Image from "next/image";
import wazeIcon from "../../public/Imagem/logo_waze.png";
import WhatsAppIcon from "./WhatsAppIcon";

export default function Gallery() {
  const mediaItems = [
    { type: 'video', src: '/Imagem/video_restaurante2.mp4', alt: 'Ambiente do restaurante' },
    { type: 'image', src: '/Imagem/imagem_restaurante5.jpeg', alt: 'Delícias do Manga & Prosa' },
    { type: 'video', src: '/Imagem/video_restaurante3.mp4', alt: 'Detalhes do salão' },
    { type: 'image', src: '/Imagem/imagem_restaurante6.jpeg', alt: 'Comida caseira' },
    { type: 'video', src: '/Imagem/video_restaurante4.mp4', alt: 'Clima agradável' },
    { type: 'video', src: '/Imagem/video_restaurante5.mp4', alt: 'Área externa' },
  ];

  return (
    <section id="ambiente" className="py-16 md:py-24 bg-brand-strawDark">
      <div className="max-w-[1200px] mx-auto px-4 md:px-10">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-center text-brand-coffeeDark mb-10">
          Um cantin gostoso pra comer e prosear
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {mediaItems.map((item, i) => (
            <div key={i} className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm group bg-black/5">
              {item.type === 'video' ? (
                <video
                  src={item.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="https://www.google.com/maps/search/?api=1&query=MG-424%2C%20119%20-%20Lagoa%20dos%20Mares%2C%20Confins%20-%20MG%2C%2033500-000"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-[#33CCFF] hover:bg-[#00B4D8] text-white px-8 py-4 rounded-full font-bold transition-all shadow-md hover:-translate-y-0.5 w-full sm:w-auto"
          >
            <Image src={wazeIcon} alt="Waze" width={24} height={24} />
            Como chegar
          </a>
          <a
            href="https://wa.me/5531990893313"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1DA851] text-white px-8 py-4 rounded-full font-bold transition-all shadow-md hover:-translate-y-0.5 w-full sm:w-auto"
          >
            <WhatsAppIcon className="w-6 h-6" />
            Chamar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
