"use client";

import { Utensils, CakeSlice, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import cafeImg from "../../public/Imagem/cafedamanha.png";
import almocoImg from "../../public/Imagem/comidacaseira.png";
import sobremesaImg from "../../public/Imagem/sobremesas.png";
import pratoImg from "../../public/Imagem/prato.png";

const offerings = [
  {
    image: cafeImg,
    title: "Café da manhã e lanches",
    desc: "Café, pão de queijo, salgados e lanches para quem quer uma parada gostosa em Confins.",
  },
  {
    image: almocoImg,
    title: "Almoço mineiro e comida caseira",
    desc: "Pratos do dia, comida de roça, arroz, feijão, carnes, legumes e acompanhamentos com tempero de casa.",
  },
  {
    image: pratoImg,
    title: "Marmitex",
    desc: "Para quem quer praticidade sem abrir mão de uma refeição bem servida.",
  },
  {
    image: sobremesaImg,
    title: "Sobremesas e acompanhamentos",
    desc: "Doces caseiros e acompanhamentos que variam conforme o dia e a disponibilidade.",
  },
];

export default function OfferingsPreview() {
  return (
    <section id="o-que-temos" className="py-20 bg-white relative">
      <div className="container mx-auto px-4 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-orange font-bold tracking-widest uppercase text-sm mb-2">Nossas Especialidades</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-brand-coffeeDark mb-6 leading-tight">
            Do café quentin ao almoço caseiro
          </h3>
          <p className="text-lg text-brand-coffee/90 leading-relaxed">
            Aqui tem opção para começar o dia, fazer uma parada no caminho, almoçar com calma ou garantir aquela marmitex bem servida.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12">
          {offerings.map((item, idx) => (
            <div key={idx} className="bg-brand-straw rounded-3xl border border-brand-woodLight/50 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 flex flex-col text-center overflow-hidden">
              {item.image ? (
                <div className="w-full h-40 md:h-48 relative mb-6">
                  <Image src={item.image} alt={item.title} fill className="object-cover" />
                </div>
              ) : (
                <div className="flex justify-center mt-8 mb-4">
                  {item.icon}
                </div>
              )}
              <div className={`px-8 pb-8 ${!item.image ? "pt-0" : ""}`}>
                <h4 className="font-bold text-brand-coffeeDark text-xl mb-3">{item.title}</h4>
                <p className="text-brand-coffee/80 leading-relaxed text-sm">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/cardapio"
            className="inline-flex items-center justify-center gap-2 bg-brand-coffee hover:bg-brand-coffeeDark text-brand-straw px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:-translate-y-0.5 text-lg"
          >
            Ver cardápio completo
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

      </div>
    </section>
  );
}
