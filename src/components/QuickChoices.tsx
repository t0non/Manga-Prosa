import Image from "next/image";
import cafeImg from "../../public/Imagem/café.png";
import almocoImg from "../../public/Imagem/Almoço.png";
import marmitexImg from "../../public/Imagem/Marmitex.png";
import sobremesaImg from "../../public/Imagem/Sobremesa.png";
import efeitoCafeImg from "../../public/Imagem/efeitocafe.png";
import garfoImg from "../../public/Imagem/garfo.png";

export default function QuickChoices() {
  const choices = [
    { image: cafeImg, title: "Café da manhã", desc: "A partir das 7h", link: "/#cardapio" },
    { image: almocoImg, title: "Almoço caseiro", desc: "Feito no fogão a lenha", link: "/#cardapio" },
    { image: marmitexImg, title: "Marmitex", desc: "Bem servida", link: "https://wa.me/5531990893313" },
    { image: sobremesaImg, title: "Sobremesas", desc: "Doces caseiros", link: "/#cardapio" },
  ];

  return (
    <section className="py-12 bg-brand-straw relative z-20 overflow-hidden">
      
      {/* Efeito Café no lado esquerdo em cima — sutil */}
      <div className="absolute top-0 -left-10 md:-top-6 md:-left-10 w-32 h-44 md:w-40 md:h-56 opacity-20 blur-[1px] pointer-events-none z-30">
        <Image src={efeitoCafeImg} alt="" fill className="object-contain" />
      </div>

      {/* Garfo no lado direito embaixo — sutil */}
      <div className="absolute -bottom-16 -right-10 md:-bottom-32 md:-right-20 w-40 h-52 md:w-56 md:h-[320px] opacity-15 pointer-events-none -rotate-12 z-30">
        <Image src={garfoImg} alt="" fill className="object-contain" />
      </div>

      <div className="max-w-[1200px] mx-auto px-4 md:px-10 relative z-40">
        <h2 className="font-serif text-3xl font-bold text-brand-coffeeDark text-center mb-10">
          Tá com fome de quê hoje?
        </h2>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {choices.map((choice, i) => (
            <a 
              key={i} 
              href={choice.link}
              className="group flex flex-col items-center text-center h-full"
            >
              <h3 className="font-bold text-brand-orange text-lg md:text-xl mb-1 leading-tight">{choice.title}</h3>
              <p className="text-[13px] md:text-[15px] text-brand-coffee leading-snug mb-4">{choice.desc}</p>
              
              <div className="relative w-full h-32 md:h-40 mt-auto group-hover:scale-[1.05] transition-transform">
                <Image 
                  src={choice.image} 
                  alt={choice.title} 
                  fill 
                  className="object-contain" 
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
