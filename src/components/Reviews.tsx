"use client";

import Image from "next/image";

const reviews = [
  {
    name: "Gladstone Campos",
    avatar: "/Imagem/Gladstone Campos.png",
    text: "O Manga & Prosa é um verdadeiro achado! Uma casinha simpática, acolhedora e cheia de charme. O ambiente é agradável, o atendimento é atencioso e a experiência faz a gente se sentir em casa. Um lugar perfeito para desfrutar de uma boa refeição com tranquilidade. Com certeza voltarei e recomendo a todos!",
  },
  {
    name: "Marina Fagundes",
    avatar: "/Imagem/Marina Fagundes.png",
    text: "Comida deliciosa com ambiente familiar. Adoramos!",
  },
  {
    name: "Leonardo Lucca Villani de Castro",
    avatar: "/Imagem/Leonardo Lucca Villani de Castro.png",
    text: "Ambiente acolhedor, atendimento impecável e a comida maravilhosa!!",
  },
  {
    name: "João Lucas",
    avatar: "/Imagem/João lucas.png",
    text: "Ambiente muito bom e comida estava ótima.",
  },
  {
    name: "Leonardo Martins",
    avatar: "/Imagem/Leonardo Martins.png",
    text: "Simplesmente Perfeito: Sabor, Ambiente e Serviço! Nota Mil. 1000",
  },
  {
    name: "Bhruna Azevedo",
    avatar: "/Imagem/Bhruna Azevedo.png",
    text: "Ambiente muito aconchegante.",
  },
  {
    name: "Raphael Castro",
    avatar: "/Imagem/Raphael Castro.png",
    text: "Deliciosa comida.",
  },
];

const GoogleIcon = () => (
  <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

const Stars = () => (
  <div className="flex gap-0.5">
    {[...Array(5)].map((_, i) => (
      <svg key={i} className="w-4 h-4 fill-[#FABB05]" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ))}
  </div>
);

function ReviewCard({ review }: { review: typeof reviews[0] }) {
  return (
    <div className="shrink-0 w-[300px] md:w-[340px] bg-white rounded-2xl p-6 shadow-sm border border-brand-woodLight/60 flex flex-col gap-4 mx-3">
      {/* Header: avatar + nome + Google */}
      <div className="flex items-center gap-3">
        <div className="relative w-11 h-11 rounded-full overflow-hidden shrink-0 border-2 border-brand-woodLight">
          <Image
            src={review.avatar}
            alt={review.name}
            fill
            className="object-cover"
            sizes="44px"
          />
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-bold text-brand-coffeeDark text-sm leading-tight truncate">{review.name}</p>
          <div className="flex items-center gap-1.5 mt-1">
            <Stars />
            <GoogleIcon />
          </div>
        </div>
      </div>

      {/* Texto */}
      <p className="text-brand-coffee text-sm leading-relaxed line-clamp-4">
        "{review.text}"
      </p>
    </div>
  );
}

export default function Reviews() {
  // Duplica os cards para criar o loop infinito
  const doubled = [...reviews, ...reviews];

  return (
    <section id="avaliacoes" className="py-16 md:py-24 bg-brand-straw overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 md:px-10 mb-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-brand-orange font-bold text-sm uppercase tracking-widest mb-3">Avaliações</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-coffeeDark mb-4">
            Quem passa por aqui, volta com uma boa prosa
          </h2>
          <p className="text-brand-coffee text-base leading-relaxed">
            Avaliações verificadas no Google — veja o que nossos clientes estão dizendo.
          </p>
        </div>
      </div>

      {/* Carrossel infinito */}
      <div className="relative">
        {/* Fade esquerda */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-brand-straw to-transparent z-10 pointer-events-none" />
        {/* Fade direita */}
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-brand-straw to-transparent z-10 pointer-events-none" />

        <div className="flex animate-scroll-reviews">
          {doubled.map((review, i) => (
            <ReviewCard key={i} review={review} />
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-[1200px] mx-auto px-4 md:px-10 mt-12 flex justify-center">
        <a
          href="https://www.google.com/search?q=Manga+%26+Prosa+Confins+MG#lrd=0x0:0x0,1"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-brand-coffeeDark hover:bg-brand-coffee text-white px-8 py-4 rounded-full font-bold transition-all shadow-md w-full sm:w-auto"
        >
          <GoogleIcon />
          Ver avaliações no Google
        </a>
      </div>
    </section>
  );
}
