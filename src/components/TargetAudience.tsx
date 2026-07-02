import { Sunrise, Sunset, Route } from "lucide-react";
import Image from "next/image";
import aquabeatLogo from "../../public/Imagem/logo_aquabeat.png";
import aquatBeatBg from "../../public/Imagem/aquabeatch.jpg";
import sessao1Img from "../../public/Imagem/sessao1.png";

export default function TargetAudience() {
  const audiences = [
    {
      icon: Sunrise,
      title: "Indo pro Aquabeat?",
      desc: "Comece o dia com o pé direito! Café da manhã farto, pão de queijo quentinho e energia de sobra pra curtir as piscinas."
    },
    {
      icon: Route,
      title: "Na MG-424 a trabalho?",
      desc: "Fugindo da fome na estrada? Faça uma parada rápida e saboreie a melhor marmitex e almoço caseiro da região de Confins."
    },
    {
      icon: Sunset,
      title: "Voltando do parque?",
      desc: "Bateu aquele cansaço depois da diversão? Venha repor as energias com nosso autêntico almoço mineiro no fogão a lenha!"
    }
  ];

  return (
    <section id="aquabeat" className="py-16 md:py-24 bg-brand-orange relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={aquatBeatBg}
          alt="Aquabeat em Confins MG, parque aquático próximo ao Manga e Prosa"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="max-w-[1200px] mx-auto px-4 md:px-10 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px flex-1 bg-white/20 max-w-[60px]" />
            <div className="relative w-28 md:w-36 h-7 md:h-9 opacity-90">
              <Image
                src={aquabeatLogo}
                alt="Logo Aquabeat"
                fill
                className="object-contain drop-shadow-md"
              />
            </div>
            <div className="h-px flex-1 bg-white/20 max-w-[60px]" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            Foi pro Aquabeat? Passa aqui sô!
          </h2>
          <p className="text-white/85 max-w-xl mx-auto text-base leading-relaxed">
            Bateu fome antes do passeio ou na volta pra casa? O Manga&nbsp;&amp;&nbsp;Prosa fica pertim,
            na beira da MG-424, com comida caseira, café quentin, lanches e marmitex bem servida.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {audiences.map((aud, i) => {
            const Icon = aud.icon;
            return (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl flex flex-col items-center text-center shadow-xl hover:-translate-y-1 transition-transform"
              >
                <div className="w-14 h-14 bg-brand-orange/10 rounded-full flex items-center justify-center mb-4 shrink-0">
                  <Icon className="w-7 h-7 text-brand-orange" />
                </div>
                <h3 className="font-bold text-brand-coffeeDark text-lg mb-2 leading-tight">
                  {aud.title}
                </h3>
                <p className="text-brand-coffee text-sm leading-relaxed font-medium">
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
