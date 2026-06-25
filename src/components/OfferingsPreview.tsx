import { Coffee, Utensils, Soup, CakeSlice } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";

export default function OfferingsPreview() {
  const items = [
    {
      icon: Coffee,
      title: "Café da manhã e Lanches",
      desc: "Pão de queijo quentin, salgados, broa, bolo e aquele café passado na hora pra começar bem o dia."
    },
    {
      icon: Utensils,
      title: "Almoço Mineiro",
      desc: "Comida caseira no fogão a lenha, carne de panela, feijão tropeiro e tudo de bom que a nossa culinária tem."
    },
    {
      icon: Soup,
      title: "Marmitex",
      desc: "Bem servida e no capricho. Ótima opção pra quem trabalha na região de Confins ou tá passando rapidin."
    },
    {
      icon: CakeSlice,
      title: "Sobremesas",
      desc: "Docinho de leite, goiabada e outras delícias caseiras pra fechar o almoço com chave de ouro."
    }
  ];

  return (
    <section id="cardapio" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-[1200px] mx-auto px-4 md:px-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-coffeeDark mb-4">
            Do café quentin ao almoço bem servido
          </h2>
          <p className="text-brand-coffee text-[15px] md:text-lg font-medium">
            Aqui tem opção pra começar o dia, fazer uma parada no caminho, almoçar com calma ou garantir sua marmitex.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 mb-12">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="bg-brand-strawDark p-6 rounded-2xl border border-brand-woodLight hover:border-brand-orange transition-colors group">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-5 shadow-sm group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-brand-orange" />
                </div>
                <h3 className="font-bold text-brand-coffeeDark text-xl mb-3">{item.title}</h3>
                <p className="text-brand-coffee text-sm md:text-[15px] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="/cardapio"
            className="inline-flex items-center justify-center bg-brand-coffeeDark text-white px-8 py-3.5 rounded-full font-bold hover:bg-brand-coffee transition-colors w-full sm:w-auto"
          >
            Ver cardápio completo
          </a>
          <a
            href="https://wa.me/5531990893313?text=Ol%C3%A1%2C%20quais%20s%C3%A3o%20as%20op%C3%A7%C3%B5es%20de%20marmitex%20hoje%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1DA851] text-white px-8 py-3.5 rounded-full font-bold transition-colors w-full sm:w-auto"
          >
            <WhatsAppIcon className="w-5 h-5" />
            Chamar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
