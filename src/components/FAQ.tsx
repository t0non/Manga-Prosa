"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  // Primeira pergunta aberta por padrão — garante que o Google leia o conteúdo
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const questions = [
    {
      q: "Onde fica o Manga & Prosa?",
      a: "O Manga & Prosa fica na MG-424, número 119, no bairro Lagoa dos Mares em Confins - MG, CEP 33500-000. Um lugar fácil de achar e ótimo pra estacionar e comer bem."
    },
    {
      q: "O Manga & Prosa fica perto do Aquabeat?",
      a: "Pertim demais da conta! Se você tá indo ou voltando do Aquabeat e bateu aquela fome, é só dar uma paradinha aqui com a gente. Fica bem no caminho da MG-424, em Confins - MG."
    },
    {
      q: "Onde comer perto do Aquabeat?",
      a: "O Manga & Prosa é uma parada gostosa pra quem visita o Aquabeat em Confins - MG. Fica na beira da MG-424, com comida caseira mineira, café da manhã, almoço e marmitex bem servida."
    },
    {
      q: "Tem almoço caseiro em Confins?",
      a: "Tem sim! Servimos almoço caseiro com aquele tempero de roça, feito fresquinho no dia. Comida no fogão a lenha, arroz, feijão, carne e acompanhamentos. As opções variam, mas sempre tem uma comida boa te esperando."
    },
    {
      q: "Tem marmitex em Confins?",
      a: "Tem! Nossas marmitex são super bem servidas. É a escolha certa pra quem tá trabalhando na região ou quer levar nosso tempero pra casa. É só chamar no WhatsApp pra ver o cardápio do dia."
    },
    {
      q: "Tem café da manhã perto do Aquabeat?",
      a: "Claro! Tem café passado na hora, pão de queijo quentin, salgados e quitandas. Uma parada perfeita pra quem vem de longe ou tá passando pela MG-424 antes de curtir o Aquabeat."
    },
    {
      q: "Como faço para chegar ao Manga & Prosa?",
      a: "É bem fácil! A gente fica na MG-424, número 119, no bairro Lagoa dos Mares, em Confins - MG. Basta abrir o Google Maps e buscar por 'Manga & Prosa Confins' ou clicar no botão 'Como chegar' aqui no site."
    },
    {
      q: "Qual o telefone do Manga & Prosa?",
      a: "Você pode ligar ou chamar no WhatsApp pelo número (31) 99089-3313. A gente responde por lá pra tirar dúvidas, consultar marmitex do dia ou fazer reserva."
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-brand-strawDark" aria-labelledby="faq-heading">
      <div className="max-w-[800px] mx-auto px-4 md:px-10">
        <h2 id="faq-heading" className="font-serif text-3xl md:text-4xl font-bold text-center text-brand-coffeeDark mb-4">
          Perguntas Frequentes
        </h2>
        <p className="text-center text-brand-coffee font-medium text-[15px] mb-12 max-w-xl mx-auto">
          Dúvidas sobre o Manga &amp; Prosa? A gente responde!
        </p>

        {/* Using div-based accordion with first item open by default for SEO */}
        <div className="space-y-4" role="list">
          {questions.map((item, i) => (
            <div key={i} className="bg-white rounded-2xl border border-brand-woodLight overflow-hidden" role="listitem">
              <button
                onClick={() => toggleAccordion(i)}
                className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-brand-straw/50 transition-colors"
                aria-expanded={openIndex === i}
                aria-controls={`faq-answer-${i}`}
                id={`faq-question-${i}`}
              >
                <span className="font-bold text-brand-coffeeDark text-lg pr-4">{item.q}</span>
                <ChevronDown className={`w-5 h-5 text-brand-orange transition-transform duration-300 shrink-0 ${openIndex === i ? "rotate-180" : ""}`} />
              </button>
              <div
                id={`faq-answer-${i}`}
                role="region"
                aria-labelledby={`faq-question-${i}`}
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === i ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
              >
                <div className="p-5 pt-0 text-brand-coffee font-medium border-t border-brand-woodLight/30 mt-2 leading-relaxed">
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
