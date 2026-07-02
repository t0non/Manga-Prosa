export default function About() {
  return (
    <section id="sobre" className="py-16 md:py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 md:px-10">
        
        {/* Header da Seção: Nossa História + Headline (Aparece no topo) */}
        <div className="mb-8 md:mb-12 text-center md:text-left">
          <p className="text-brand-orange font-bold text-sm uppercase tracking-widest mb-3">Nossa história</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-coffeeDark leading-tight max-w-2xl">
            Aqui a comida tem gosto de casa
          </h2>
        </div>

        {/* Corpo da Seção */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-16">

          {/* Vídeo (No mobile fica no meio, no desktop fica na direita) */}
          <div className="flex-1 order-1 md:order-2 w-full">
            <div className="relative w-full aspect-[4/3] md:aspect-[4/3] lg:aspect-square max-h-[450px] rounded-3xl overflow-hidden shadow-xl border-4 border-brand-woodLight">
              <video
                src="/Imagem/video_restaurante1.mp4"
                autoPlay
                loop
                muted
                playsInline
                aria-label="Vídeo mostrando o ambiente do restaurante Manga e Prosa em Confins MG"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Textos da História (No mobile fica no fim, no desktop na esquerda) */}
          <div className="flex-1 order-2 md:order-1">
            <div className="space-y-5 text-brand-coffee text-base md:text-lg leading-relaxed">
              <p>
                Sabe aquela comida feita com calma, no capricho e com tempero de casa? É assim que a gente prepara tudo aqui no restaurante Manga & Prosa.
              </p>
              <p>
                Um cantinho acolhedor pra quem quer comer bem, descansar da correria e prosear sem pressa. Seja pra um café quentin logo cedo, um almoço caseiro bem servido no meio do dia ou uma marmitex pra levar.
              </p>
              <p>
                Nosso restaurante fica na beira da MG-424, em Lagoa dos Mares, Confins. De portas abertas pra quem passa por aqui, mora na região ou tá a caminho do Aquabeat.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
