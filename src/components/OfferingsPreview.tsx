import WhatsAppIcon from "./WhatsAppIcon";

export default function OfferingsPreview() {
  const items = [
    {
      emoji: "☕",
      title: "Café da manhã e Lanches",
      desc: "Pão de queijo quentin, salgados, broa, bolo e aquele café passado na hora pra começar bem o dia."
    },
    {
      emoji: "🍽️",
      title: "Almoço Mineiro",
      desc: "Comida caseira no fogão a lenha, carne de panela, feijão tropeiro e tudo de bom que a nossa culinária tem."
    },
    {
      emoji: "🥡",
      title: "Marmitex",
      desc: "Bem servida e no capricho. Ótima opção pra quem trabalha na região de Confins ou tá passando rapidin."
    },
    {
      emoji: "🍮",
      title: "Sobremesas",
      desc: "Docinho de leite, goiabada e outras delícias caseiras pra fechar o almoço com chave de ouro."
    }
  ];

  return (
    <section id="cardapio" className="py-16 md:py-24 bg-brand-straw">
      <div className="max-w-[1200px] mx-auto px-4 md:px-10">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-brand-orange font-bold text-sm uppercase tracking-widest mb-3">Cardápio</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-coffeeDark mb-4">
            Do café quentin ao almoço bem servido
          </h2>
          <p className="text-brand-coffee text-base leading-relaxed">
            Tem opção pra começar o dia, fazer uma parada no caminho, almoçar com calma ou garantir sua marmitex.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {items.map((item, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-brand-woodLight/60 hover:shadow-md transition-shadow">
              <div className="text-3xl mb-4">{item.emoji}</div>
              <h3 className="font-bold text-brand-coffeeDark text-lg mb-2 leading-tight">{item.title}</h3>
              <p className="text-brand-coffee text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="/cardapio"
            className="inline-flex items-center justify-center bg-brand-coffeeDark hover:bg-brand-coffee text-white px-8 py-4 rounded-full font-bold transition-colors shadow-md w-full sm:w-auto"
          >
            Ver cardápio completo
          </a>
          <a
            href="https://wa.me/5531990893313?text=Ol%C3%A1%2C%20quais%20s%C3%A3o%20as%20op%C3%A7%C3%B5es%20de%20marmitex%20hoje%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1DA851] text-white px-8 py-4 rounded-full font-bold transition-colors shadow-md w-full sm:w-auto"
          >
            <WhatsAppIcon className="w-5 h-5" />
            Chamar no WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
}
