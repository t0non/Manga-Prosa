import { Coffee, Map, Clock, Heart } from "lucide-react";

const reasons = [
  {
    icon: <Map className="w-8 h-8 text-brand-orange" />,
    title: "Localização fácil",
    description: "Na beira da MG-424 em Confins. Fácil de achar, fácil de estacionar. O ponto de encontro perfeito."
  },
  {
    icon: <Heart className="w-8 h-8 text-brand-orange" />,
    title: "Ambiente que abraça",
    description: "Esqueça a pressa. Nosso espaço foi pensado para você se sentir em casa, com aquela paz que só o interior tem."
  },
  {
    icon: <Coffee className="w-8 h-8 text-brand-orange" />,
    title: "Comida regional",
    description: "Pratos generosos, ingredientes frescos e aquele tempero de fazenda que conforta a alma."
  },
  {
    icon: <Clock className="w-8 h-8 text-brand-orange" />,
    title: "Sua pausa merecida",
    description: "Ideal para um almoço com a família no fim de semana ou uma parada reconfortante no meio do dia."
  }
];

export default function Reasons() {
  return (
    <section id="motivos" className="py-20 bg-brand-straw relative">
      {/* Decorative Texture */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-coffee to-transparent" style={{ backgroundSize: '16px 16px', backgroundImage: 'radial-gradient(circle, #5E3F2C 1px, transparent 1px)' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-orange font-bold tracking-widest uppercase text-sm mb-2">Por que nos visitar?</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-brand-coffeeDark drop-shadow-sm">
            Aqui, cada visita vale a pena.
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 rounded-2xl bg-brand-strawDark/50 border border-brand-woodLight flex items-center justify-center mb-6 group-hover:-translate-y-2 transition-transform duration-300 shadow-sm">
                {reason.icon}
              </div>
              <h4 className="text-xl font-bold text-brand-coffeeDark mb-3">{reason.title}</h4>
              <p className="text-brand-coffee opacity-90 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-xl font-medium text-brand-coffeeDark">
            E, claro, <span className="text-brand-orange italic font-serif">uma boa prosa</span> vem sempre de brinde.
          </p>
        </div>
      </div>
    </section>
  );
}
