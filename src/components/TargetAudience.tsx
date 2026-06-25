import { Car, Map, Briefcase } from "lucide-react";
import Image from "next/image";
import aquabeatLogo from "../../public/Imagem/logo_aquabeat.png";
import aquatBeatBg from "../../public/Imagem/aquat_beat.jpg";
import sessao1Img from "../../public/Imagem/sessao1.png";

export default function TargetAudience() {
  const audiences = [
    {
      icon: Car,
      title: "Está indo ou voltando do Aquabeat?",
      desc: "Faça uma parada pertim para comer bem antes de seguir viagem."
    },
    {
      icon: Map,
      title: "Está passando pela MG-424?",
      desc: "Café, lanche e almoço caseiro em um ponto fácil de chegar."
    },
    {
      icon: Briefcase,
      title: "Trabalha ou mora pela região?",
      desc: "Chame no WhatsApp e consulte as opções de marmitex do dia."
    }
  ];

  return (
    <section className="py-16 bg-brand-orange relative overflow-hidden">
      {/* Background Image (Metade Esquerda) */}
      <div className="absolute top-0 left-0 w-1/2 h-full z-0">
        <Image src={aquatBeatBg} alt="Fundo Aquabeat" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Background Image (Metade Direita) */}
      <div className="absolute top-0 right-0 w-1/2 h-full z-0">
        <Image src={sessao1Img} alt="Manga e Prosa" fill className="object-cover object-center" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="max-w-[1200px] mx-auto px-4 md:px-10 relative z-10">
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-center text-white mb-10 leading-relaxed">
          Foi pro <span className="relative w-32 md:w-40 h-8 md:h-12 inline-block align-middle mx-1 drop-shadow-md">
            <Image src={aquabeatLogo} alt="Aquabeat" fill className="object-contain" />
          </span>? Passa aqui antes ou depois
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8 relative z-10 max-w-5xl mx-auto">
          {audiences.map((aud, i) => {
            return (
              <div key={i} className="md:bg-white md:p-5 md:rounded-2xl md:shadow-lg md:border md:border-brand-woodLight/50 md:border-b-4 md:border-b-brand-coffeeDark hover:shadow-xl transition-all flex flex-col items-center justify-center text-center">
                <h3 className="font-bold text-white md:text-brand-coffeeDark text-xl md:text-lg mb-2 leading-tight">
                  {aud.title}
                </h3>
                <p className="text-white/90 md:text-brand-coffee font-medium text-[15px] leading-relaxed">
                  {aud.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
