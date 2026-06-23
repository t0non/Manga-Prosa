"use client";

import Image from "next/image";
import { MapPin, Leaf, Coffee, Clock } from "lucide-react";
import fora1 from "../../public/Imagem/fora1.jpg";
import fora2 from "../../public/Imagem/fora2.jpg";
import dentro1 from "../../public/Imagem/dentro1.jpg";
import dentro2 from "../../public/Imagem/dentro2.jpg";
import pinIcon from "../../public/Imagem/pinlocalizacao.webp";

const highlights = [
  {
    icon: <MapPin className="w-5 h-5 text-brand-orange" />,
    title: "Comida caseira",
    desc: "Almoço com tempero de casa, pratos do dia e aquele gostinho de Minas.",
  },
  {
    icon: <Leaf className="w-5 h-5 text-brand-orange" />,
    title: "Parada na MG-424",
    desc: "Fácil de chegar, fácil de parar e bom para quem está passando por Confins ou indo para a região do Aquabeat.",
  },
  {
    icon: <Coffee className="w-5 h-5 text-brand-orange" />,
    title: "Ambiente acolhedor",
    desc: "Um espaço rústico, tranquilo e cercado de verde para comer sem correria.",
  },
  {
    icon: <Clock className="w-5 h-5 text-brand-orange" />,
    title: "Café, almoço e lanches",
    desc: "Do café da manhã ao marmitex, tem opção para diferentes momentos do dia.",
  },
];

export default function About() {
  return (
    <section id="sobre" className="py-20 bg-brand-straw relative">
      <div className="container mx-auto px-4">

        {/* Seção Sobre */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="text-brand-orange font-bold tracking-widest uppercase text-xs mb-3 block">
            Nossa História
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-brand-coffeeDark leading-tight mb-6">
            Bem-vindo ao Manga & Prosa
          </h2>
          <p className="text-lg text-brand-coffee/90 leading-relaxed mb-4">
            Aqui no Manga & Prosa, a ideia é simples: comida boa, lugar tranquilo e uma prosa sem pressa. Estamos na beira da MG-424, em Lagoa dos Mares, Confins, pertim do Aquabeat, recebendo quem passa por aqui com café quentin, almoço caseiro, lanches, marmitex e aquele tempero que lembra casa de vó.
          </p>
          <p className="text-lg text-brand-coffee/90 leading-relaxed">
            Seja para uma parada rápida, um almoço com calma ou uma marmita bem servida, a gente prepara tudo com carinho para você comer bem e seguir o dia satisfeito.
          </p>
        </div>

        {/* Cards Seguros (Sobre) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-brand-woodLight/50 rounded-2xl p-6 flex flex-col gap-4 hover:-translate-y-1 transition-transform duration-300 shadow-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-straw flex items-center justify-center shadow-sm">
                {item.icon}
              </div>
              <h3 className="font-bold text-brand-coffeeDark text-base md:text-lg leading-snug">
                {item.title}
              </h3>
              <p className="text-brand-coffee/80 text-sm md:text-base leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Título da seção Ambiente */}
        <div className="text-center max-w-3xl mx-auto mb-14" id="ambiente">
          <span className="text-brand-orange font-bold tracking-widest uppercase text-xs mb-3 block">
            O Espaço
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-brand-coffeeDark leading-tight mb-5">
            Um cantim gostoso para comer bem e prosear sem pressa
          </h2>
          <p className="text-lg text-brand-coffee/90 leading-relaxed">
            Na beira da MG-424, o Manga & Prosa tem aquele clima de parada boa: espaço rústico, natureza por perto e uma cozinha feita para receber quem gosta de comida simples, bem feita e com sabor de casa.
          </p>
        </div>

        {/* Grid de fotos reais */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[160px] md:auto-rows-[210px] mb-14">
          {/* Foto grande — fachada principal */}
          <div className="col-span-2 row-span-2 rounded-2xl md:rounded-3xl relative overflow-hidden group shadow-md">
            <Image
              src={fora1}
              alt="Fachada externa do Restaurante Manga e Prosa na MG-424 em Confins MG"
              fill
              priority
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-brand-coffeeDark/0 group-hover:bg-brand-coffeeDark/10 transition-colors duration-500" />
          </div>

          {/* Pequena — dentro 1 */}
          <div className="col-span-1 rounded-2xl relative overflow-hidden group shadow-md">
            <Image
              src={dentro1}
              alt="Salão interno do Manga e Prosa com ambiente familiar e acolhedor em Confins"
              fill
              loading="lazy"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="25vw"
            />
            <div className="absolute inset-0 bg-brand-coffeeDark/0 group-hover:bg-brand-coffeeDark/10 transition-colors duration-500" />
          </div>

          {/* Pequena — dentro 2 */}
          <div className="col-span-1 rounded-2xl relative overflow-hidden group shadow-md">
            <Image
              src={dentro2}
              alt="Ambiente interno rústico e confortável do restaurante Manga e Prosa"
              fill
              loading="lazy"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="25vw"
            />
            <div className="absolute inset-0 bg-brand-coffeeDark/0 group-hover:bg-brand-coffeeDark/10 transition-colors duration-500" />
          </div>

          {/* Larga — fora 2 */}
          <div className="col-span-2 rounded-2xl relative overflow-hidden group shadow-md">
            <Image
              src={fora2}
              alt="Vista externa e área ao redor do restaurante Manga e Prosa em Lagoa dos Mares"
              fill
              loading="lazy"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-brand-coffeeDark/0 group-hover:bg-brand-coffeeDark/10 transition-colors duration-500" />
          </div>
        </div>

        {/* CTA abaixo das fotos */}
        <div className="flex justify-center mb-14">
          <a
            href="https://www.google.com/maps/search/?api=1&query=MG-424%2C%20119%20-%20Lagoa%20dos%20Mares%2C%20Confins%20-%20MG%2C%2033500-000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-brand-orange hover:bg-[#A84F28] text-[#FFF7ED] px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:-translate-y-0.5 text-lg"
            aria-label="Ver rota no Google Maps para o restaurante"
          >
            <Image src={pinIcon} alt="Localização" width={20} height={20} className="brightness-0 invert shrink-0" />
            Venha conhecer o nosso espaço
          </a>
        </div>



      </div>
    </section>
  );
}
