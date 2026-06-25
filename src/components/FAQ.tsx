"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const questions = [
    {
      q: "Onde fica o Manga & Prosa?",
      a: "A gente fica bem na beira da MG-424, número 119, no bairro Lagoa dos Mares em Confins - MG. Um lugar fácil de achar e ótimo pra estacionar e comer bem."
    },
    {
      q: "Fica pertim do Aquabeat mesmo?",
      a: "Pertim demais da conta! Se você tá indo ou voltando do Aquabeat e bateu aquela fome, é só dar uma paradinha aqui com a gente. Fica bem no caminho da MG-424."
    },
    {
      q: "Vocês servem almoço caseiro todos os dias?",
      a: "Servimos um almoço com aquele tempero de roça. Como preparamos tudo fresquinho no dia, as opções variam, mas sempre tem uma comida boa no fogão a lenha te esperando."
    },
    {
      q: "Tem opção de marmitex pra levar?",
      a: "Tem sim! Nossas marmitex são super bem servidas. É a escolha certa pra quem tá trabalhando na região ou quer levar nosso tempero pra casa. É só chamar no WhatsApp pra ver o cardápio do dia."
    },
    {
      q: "E café da manhã, tem?",
      a: "Claro! Tem café passado na hora, pão de queijo quentin, salgados e quitandas. Uma parada perfeita pra começar a viagem com o pé direito."
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-brand-strawDark">
      <div className="max-w-[800px] mx-auto px-4 md:px-10">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-center text-brand-coffeeDark mb-12">
          Perguntas Frequentes
        </h2>

        <div className="space-y-4">
          {questions.map((item, i) => (
            <div key={i} className="bg-white rounded-2xl border border-brand-woodLight overflow-hidden">
              <button
                onClick={() => toggleAccordion(i)}
                className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-brand-straw/50 transition-colors"
              >
                <span className="font-bold text-brand-coffeeDark text-lg pr-4">{item.q}</span>
                <ChevronDown className={`w-5 h-5 text-brand-orange transition-transform duration-300 shrink-0 ${openIndex === i ? "rotate-180" : ""}`} />
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === i ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
              >
                <div className="p-5 pt-0 text-brand-coffee font-medium border-t border-brand-woodLight/30 mt-2">
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
