import Image from "next/image";

import dentro1 from "../../public/Imagem/dentro1.jpg";
import dentro2 from "../../public/Imagem/dentro2.jpg";
import fora1 from "../../public/Imagem/fora1.jpg";
import fora2 from "../../public/Imagem/fora2.jpg";

const photos = [
  {
    src: fora1,
    alt: "Fachada externa do Restaurante Manga e Prosa na MG-424 em Confins MG",
    className: "col-span-2 row-span-2",
  },
  {
    src: dentro1,
    alt: "Salão interno do Restaurante Manga e Prosa com ambiente familiar e acolhedor",
    className: "col-span-1 row-span-1",
  },
  {
    src: dentro2,
    alt: "Ambiente interno rústico e confortável do Manga e Prosa em Confins",
    className: "col-span-1 row-span-1",
  },
  {
    src: fora2,
    alt: "Vista externa e área ao redor do restaurante Manga e Prosa em Lagoa dos Mares",
    className: "col-span-2 row-span-1",
  },
];

export default function Gallery() {
  return (
    <section id="ambiente" className="py-20 bg-brand-straw">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-brand-orange font-bold tracking-widest uppercase text-sm mb-2">O Espaço</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-brand-coffeeDark mb-4 drop-shadow-sm">
            Um pedacinho da roça em Confins
          </h3>
          <p className="text-lg text-brand-coffee opacity-90">
            Muito verde, madeira rústica e aquele clima de interior que faz a gente querer ficar mais um pouco.
            Venha conhecer nosso cantinho na Lagoa dos Mares.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[180px] md:auto-rows-[220px]">
          {photos.map((photo, idx) => (
            <div
              key={idx}
              className={`${photo.className} rounded-2xl md:rounded-3xl relative overflow-hidden group shadow-md border border-brand-woodDark/10`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 25vw"
                {...(idx > 0 ? { loading: "lazy" } : { priority: true })}
              />
              {/* Overlay sutil no hover */}
              <div className="absolute inset-0 bg-brand-coffeeDark/0 group-hover:bg-brand-coffeeDark/10 transition-colors duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
