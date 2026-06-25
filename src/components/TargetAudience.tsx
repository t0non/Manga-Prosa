import { Sunrise, Sunset, Route } from "lucide-react";
import Image from "next/image";
import aquabeatLogo from "../../public/Imagem/logo_aquabeat.png";
import aquatBeatBg from "../../public/Imagem/aquat_beat.jpg";
import sessao1Img from "../../public/Imagem/sessao1.png";

export default function TargetAudience() {
  const audiences = [
    {
      icon: Sunrise,
      title: "Antes do passeio",
      desc: "Café quentin, quitandas e lanches pra encher o tanque antes de curtir o Aquabeat."
    },
    {
      icon: Route,
      title: "Passando pela MG-424",
      desc: "Parada fácil e gostosa no caminho. Café, lanche e almoço caseiro te esperando."
    },
    {
      icon: Sunset,
      title: "Depois do passeio",
      desc: "Almoço caseiro e comida bem servida pra repor as energias na volta pra casa."
    }
  ];

  return (
    <section id="aquabeat" className="py-16 bg-brand-orange relative overflow-hidden">
      {/* Background Image (Left half) */}
      <div className="absolute top-0 left-0 w-1/2 h-full z-0">
        <Image
          src={aquatBeatBg}
          alt="Aquabeat em Confins MG, parque aquático próximo ao Manga e Prosa"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/45" />
      </div>

      {/* Background Image (Right half) */}
      <div className="absolute top-0 right-0 w-1/2 h-full z-0">
        <Image
          src={sessao1Img}
          alt="Interior do restaurante Manga e Prosa em Confins MG"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/45" />
      </div>

      <div className="max-w-[1200px] mx-auto px-4 md:px-10 relative z-10">
        {/* Heading — texto puro, sem imagem dentro */}
        <div className="text-center mb-10">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-white leading-relaxed mb-3">
            Foi pro Aquabeat? Passa aqui sô!
          </h2>
          {/* Logo Aquabeat como elemento decorativo, fora do heading */}
          <div className="flex items-center justify-center gap-3">
            <div className="h-px flex-1 bg-white/20 max-w-[80px]" />
            <div className="relative w-28 md:w-36 h-7 md:h-9 opacity-90">
              <Image
                src={aquabeatLogo}
                alt="Logo Aquabeat"
                fill
                className="object-contain drop-shadow-md"
              />
            </div>
            <div className="h-px flex-1 bg-white/20 max-w-[80px]" />
          </div>
          <p className="text-white/85 mt-4 max-w-xl mx-auto text-[15px] md:text-base font-medium leading-relaxed">
            Bateu fome antes do passeio ou na volta pra casa? O Manga&nbsp;&amp;&nbsp;Prosa fica pertim,
            na beira da MG-424, com comida caseira, café quentin, lanches e marmitex bem servida.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {audiences.map((aud, i) => {
            const Icon = aud.icon;
            return (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl shadow-lg border border-brand-woodLight/50 border-b-4 border-b-brand-coffeeDark hover:shadow-xl transition-all flex flex-col items-center text-center"
              >
                <div className="w-12 h-12 bg-brand-straw rounded-full flex items-center justify-center mb-4 shrink-0">
                  <Icon className="w-6 h-6 text-brand-orange" />
                </div>
                <h3 className="font-bold text-brand-coffeeDark text-lg mb-2 leading-tight">
                  {aud.title}
                </h3>
                <p className="text-brand-coffee font-medium text-[15px] leading-relaxed">
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
