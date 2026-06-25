import Image from "next/image";
import aboutImg from "../../public/Imagem/dentro1.jpg";

export default function About() {
  return (
    <section id="sobre" className="py-16 md:py-24 bg-brand-straw">
      <div className="max-w-[1200px] mx-auto px-4 md:px-10">
        
        {/* Mobile Headline (appears before image) */}
        <h2 className="md:hidden font-serif text-3xl font-bold text-brand-coffeeDark mb-8 leading-tight text-center">
          Aqui a comida tem gosto de casa
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          {/* Text Content */}
          <div className="flex-1 order-2 md:order-1 mt-2 md:mt-0">
            {/* Desktop Headline */}
            <h2 className="hidden md:block font-serif text-4xl font-bold text-brand-coffeeDark mb-6 leading-tight">
              Aqui a comida tem gosto de casa
            </h2>
            <div className="space-y-4 text-brand-coffee text-[15px] md:text-lg leading-relaxed font-medium">
              <p>
                Sabe aquela comida feita no fogão a lenha, com paciência e tempero de vó? É assim que a gente prepara tudo aqui no Manga & Prosa.
              </p>
              <p>
                Seja para um café quentin logo cedo, um almoço bem servido no meio do dia ou um lanche no fim da tarde, nosso espaço foi feito pra você comer bem e dar uma descansada da viagem.
              </p>
              <p>
                Estamos na beira da MG-424, em Lagoa dos Mares, Confins. Um cantin rústico, acolhedor e sempre de portas abertas pra receber quem passa por aqui, seja morador, trabalhador da região ou visitante a caminho do Aquabeat.
              </p>
            </div>
          </div>

        {/* Video */}
        <div className="flex-1 order-1 md:order-2 w-full">
          <div className="relative w-full aspect-[4/3] md:aspect-square max-h-[500px] rounded-3xl overflow-hidden shadow-xl border-4 border-white">
            <video
              src="/Imagem/video_restaurante1.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        </div>
      </div>
    </section>
  );
}
