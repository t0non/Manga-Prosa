"use client";

import { Coffee, Utensils, Wheat, CupSoda, MapPin, MessageCircle, Phone, Cookie } from "lucide-react";
import Image from "next/image";
import pinIcon from "../../public/Imagem/pinlocalizacao.webp";
import wppIcon from "../../public/Imagem/icone do whatsapp.png";

export default function BreakfastMenu() {
  const trackEvent = (eventName: string) => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", eventName);
    }
  };

  const categories = [
    {
      title: "Cafés e bebidas quentes",
      icon: <Coffee className="w-6 h-6 text-brand-orange" />,
      items: [
        { name: "Café simples", price: "Consulte" },
        { name: "Café pingado", price: "Consulte" },
        { name: "Achocolatado", price: "Consulte" },
      ]
    },
    {
      title: "Pães e lanches",
      icon: <Wheat className="w-6 h-6 text-brand-orange" />,
      items: [
        { name: "Pão com manteiga", price: "Consulte" },
        { name: "Pão com mortadela", price: "Consulte" },
        { name: "Pão com presunto", price: "Consulte" },
        { name: "Pão com queijo", price: "Consulte" },
        { name: "Misto quente", price: "Consulte" },
        { name: "Ovo cozido ou frito", price: "Consulte" },
        { name: "Bolo", price: "Consulte" },
      ]
    },
    {
      title: "Salgados",
      icon: <Utensils className="w-6 h-6 text-brand-orange" />,
      items: [
        { name: "Coxinha simples", price: "Consulte" },
        { name: "Coxinha com catupiry", price: "Consulte" },
        { name: "Empada de calabresa", price: "Consulte" },
        { name: "Empada simples", price: "Consulte" },
        { name: "Enrolado de salsicha", price: "Consulte" },
        { name: "Enrolado assado", price: "Consulte" },
        { name: "Esfirra", price: "Consulte" },
        { name: "Tortinha de frango", price: "Consulte" },
        { name: "Tortinha de frango com requeijão", price: "Consulte" },
        { name: "Quibe", price: "Consulte" },
      ]
    },
    {
      title: "Pão de queijo",
      icon: <Cookie className="w-6 h-6 text-brand-orange" />,
      items: [
        { name: "Pão de queijo", price: "Consulte" },
        { name: "Pão de queijo recheado", price: "Consulte" },
      ]
    },
    {
      title: "Pastéis fritos",
      icon: <Utensils className="w-6 h-6 text-brand-orange" />,
      items: [
        { name: "Pastel frito de carne", price: "Consulte" },
        { name: "Pastel frito de presunto e queijo", price: "Consulte" },
        { name: "Pastel frito de milho com requeijão", price: "Consulte" },
      ]
    },
    {
      title: "Bebidas frias",
      icon: <CupSoda className="w-6 h-6 text-brand-orange" />,
      items: [
        { name: "Suco de caixinha", price: "Consulte" },
        { name: "Sucos naturais", price: "Consulte" },
      ]
    }
  ];

  return (
    <section id="lanches" className="py-20 bg-white relative border-b border-brand-woodLight/30">
      <div className="container mx-auto px-4 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-orange font-bold tracking-widest uppercase text-sm mb-2">Para qualquer hora do dia</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-brand-coffeeDark mb-6 drop-shadow-sm">
            Café da manhã e lanches na MG-424
          </h3>
          <p className="text-lg text-brand-coffee opacity-90 leading-relaxed">
            Passe pelo Manga & Prosa para tomar um café, comer um pão de queijo, pedir um salgado ou fazer aquele lanche rápido em Confins.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {categories.map((category, idx) => (
            <div key={idx} className="bg-brand-straw p-8 rounded-[2rem] border border-brand-woodLight shadow-sm hover:shadow-md transition-shadow">
              <h4 className="text-xl font-bold text-brand-coffeeDark mb-6 flex items-center gap-3">
                <span className="p-2 bg-brand-straw rounded-xl border border-brand-woodLight/50">
                  {category.icon}
                </span>
                {category.title}
              </h4>
              <ul className="space-y-4">
                {category.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex justify-between items-baseline gap-2 group">
                    <span className="text-brand-coffee font-medium group-hover:text-brand-orange transition-colors">{item.name}</span>
                    <div className="flex-grow border-b border-dotted border-brand-coffee/30 relative -top-1"></div>
                    <span className="text-brand-coffeeDark font-bold whitespace-nowrap text-sm">{item.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-medium text-brand-woodDark italic mb-8">
            * Valores e itens sujeitos a alteração. Consulte a disponibilidade no restaurante ou pelo WhatsApp.
          </p>
          <div className="bg-brand-straw p-6 rounded-2xl border border-brand-woodLight/50">
            <p className="text-brand-coffee font-medium text-sm md:text-base leading-relaxed">
              O Manga & Prosa fica na MG-424, em Lagoa dos Mares, Confins - MG, e é uma opção para quem procura café da manhã, lanches, salgados e uma parada gostosa para comer bem na região.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
          <a
            href="https://wa.me/5531990893313?text=Ol%C3%A1%2C%20vim%20pelo%20site%20do%20Manga%20%26%20Prosa%20e%20gostaria%20de%20consultar%20o%20card%C3%A1pio%20de%20lanches."
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent('click_cardapio_whatsapp')}
            className="flex items-center justify-center gap-2 bg-brand-orange hover:bg-[#A84F28] text-[#FFF7ED] px-8 py-4 rounded-full font-bold transition-all shadow-lg shadow-brand-orange/20 md:hover:-translate-y-1 w-full sm:w-auto"
            aria-label="Chamar o restaurante no WhatsApp"
          >
            <Image src={wppIcon} alt="WhatsApp" width={20} height={20} className="brightness-0 invert" />
            Chamar no WhatsApp
          </a>

          <a
            href="https://www.google.com/maps/search/?api=1&query=MG-424%2C%20119%20-%20Lagoa%20dos%20Mares%2C%20Confins%20-%20MG%2C%2033500-000"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent('click_cardapio_rota')}
            className="flex items-center justify-center gap-2 bg-transparent text-brand-coffee border-2 border-brand-coffee hover:bg-brand-coffee hover:text-[#FFF7ED] px-8 py-4 rounded-full font-bold transition-all md:hover:-translate-y-1 w-full sm:w-auto"
            aria-label="Ver rota no Google Maps para o restaurante"
          >
            <Image src={pinIcon} alt="Localização" width={20} height={20} className="brightness-0 invert shrink-0" />
            Ver rota no Google Maps
          </a>

          <a
            href="tel:+5531990893313"
            onClick={() => trackEvent('click_cardapio_ligar')}
            className="flex items-center justify-center gap-2 bg-transparent text-brand-coffee border-2 border-brand-coffee hover:bg-brand-coffee hover:text-[#FFF7ED] px-8 py-4 rounded-full font-bold transition-all md:hover:-translate-y-1 w-full sm:w-auto"
            aria-label="Ligar para o restaurante"
          >
            <Phone className="w-5 h-5" />
            Ligar agora
          </a>
        </div>
      </div>
    </section>
  );
}
