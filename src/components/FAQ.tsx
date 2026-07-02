"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const questions = [
    {
      q: "Onde fica o Restaurante Manga & Prosa em Confins?",
      a: "O Manga & Prosa está localizado estrategicamente na beira da MG-424, número 119, no bairro Lagoa dos Mares, em Confins - MG (CEP 33500-000). Somos o restaurante mais bem avaliado da região, sendo a parada perfeita para quem busca onde comer em Confins com acesso fácil, amplo estacionamento e comida mineira de verdade."
    },
    {
      q: "O Manga & Prosa fica perto do Aquabeat em Confins?",
      a: "Sim, somos um dos restaurantes mais próximos ao Aquabeat! Se você está buscando onde comer perto do Aquabeat em Confins, o Manga & Prosa é a melhor opção na MG-424. Fica no caminho exato de ida ou volta do parque aquático. Um lugar ideal para recarregar as energias com um almoço caseiro caprichado ou um café da manhã reforçado antes da diversão."
    },
    {
      q: "Quais são as melhores opções de almoço na MG-424?",
      a: "Para quem trafega pela MG-424, o Manga & Prosa se destaca como a principal escolha de almoço caseiro mineiro. Servimos comida feita no fogão a lenha, com aquele tempero tradicional de Minas Gerais: arroz, feijão tropeiro, carne de panela, frango com quiabo e muito mais. Tudo preparado diariamente com ingredientes frescos."
    },
    {
      q: "Vocês servem café da manhã em Confins e na MG-424?",
      a: "Com certeza! Se você precisa de um lugar para tomar café da manhã na MG-424, em Confins, nossa porta está aberta cedo. Temos pão de queijo quentinho, bolo caseiro, biscoito de queijo, salgados fritos na hora, pastel e o legítimo café mineiro passado no coador. Excelente parada para ciclistas, viajantes e trabalhadores da região."
    },
    {
      q: "Tem opção de marmitex e quentinhas em Confins?",
      a: "Sim! Fornecemos a melhor marmitex de Confins e região. Nossas quentinhas são muito bem servidas e embaladas com cuidado, mantendo a comida quente e saborosa. É a opção mais buscada por trabalhadores, empresas locais e motoristas que trafegam pela MG 424 e buscam comida boa, rápida e com ótimo custo-benefício. Consulte o cardápio do dia pelo WhatsApp."
    },
    {
      q: "O ambiente é bom para ir com a família ou grandes grupos?",
      a: "Perfeito! O Manga & Prosa oferece um ambiente rústico, espaçoso e muito acolhedor, com cara de fazenda. Temos mesas grandes ideais para famílias que visitam o Aquabeat ou para confraternizações de quem mora em Confins, Lagoa Santa, Pedro Leopoldo e Vespasiano."
    },
    {
      q: "Como faço para encomendar ou consultar o cardápio?",
      a: "É muito simples e rápido. Você pode nos chamar pelo WhatsApp no número (31) 99089-3313. Por lá enviamos o cardápio do dia atualizado, recebemos encomendas de marmitex e tiramos qualquer dúvida sobre reservas ou localização na MG-424."
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-white" aria-labelledby="faq-heading">
      <div className="max-w-[800px] mx-auto px-4 md:px-10">

        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-brand-orange font-bold text-sm uppercase tracking-widest mb-3">Dúvidas Frequentes</p>
          <h2 id="faq-heading" className="font-serif text-3xl md:text-4xl font-bold text-brand-coffeeDark mb-4">
            Tudo sobre o Manga & Prosa em Confins
          </h2>
          <p className="text-brand-coffee text-base">
            Informações sobre o restaurante, localização na MG-424 e proximidade com o Aquabeat.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3" role="list">
          {questions.map((item, i) => (
            <div key={i} className="bg-brand-straw rounded-2xl border border-brand-woodLight overflow-hidden" role="listitem">
              <button
                onClick={() => toggleAccordion(i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-brand-woodLight/20 transition-colors"
                aria-expanded={openIndex === i}
                aria-controls={`faq-answer-${i}`}
                id={`faq-question-${i}`}
              >
                <span className="font-bold text-brand-coffeeDark text-base pr-4">{item.q}</span>
                <ChevronDown className={`w-5 h-5 text-brand-orange transition-transform duration-300 shrink-0 ${openIndex === i ? "rotate-180" : ""}`} />
              </button>
              <div
                id={`faq-answer-${i}`}
                role="region"
                aria-labelledby={`faq-question-${i}`}
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === i ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
              >
                <div className="px-6 pb-5 text-brand-coffee text-sm leading-relaxed border-t border-brand-woodLight/40 pt-4">
                  {item.a}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
