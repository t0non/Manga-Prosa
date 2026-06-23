"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Onde fica o Manga & Prosa?",
      answer: "O Manga & Prosa fica na MG-424, 119 - Lagoa dos Mares, em Confins - MG, pertim do Aquabeat."
    },
    {
      question: "O Manga & Prosa fica perto do Aquabeat?",
      answer: "Sim, o Manga & Prosa fica na região da MG-424 e pode ser uma parada gostosa para quem está indo ou voltando do Aquabeat. Para confirmar a rota certinha, clique em “Como chegar”."
    },
    {
      question: "O Manga & Prosa serve almoço em Confins?",
      answer: "Sim. O restaurante oferece almoço caseiro, pratos do dia e opções com aquele tempero mineiro, conforme a disponibilidade."
    },
    {
      question: "Tem marmitex no Manga & Prosa?",
      answer: "Sim. O Manga & Prosa oferece opções de marmitex em Confins. As combinações podem variar durante a semana, então o ideal é consultar pelo WhatsApp."
    },
    {
      question: "Tem café da manhã e lanches?",
      answer: "Sim. O Manga & Prosa é uma opção para café da manhã, lanches, salgados, pão de queijo e uma parada rápida na MG-424."
    },
    {
      question: "Como falar com o Manga & Prosa?",
      answer: "Você pode chamar pelo WhatsApp ou ligar para (31) 99089-3313."
    }
  ];

  return (
    <section id="duvidas" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl relative z-10">

        <div className="text-center mb-16">
          <h2 className="text-brand-orange font-bold tracking-widest uppercase text-sm mb-2">Dúvidas Frequentes</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-brand-coffeeDark drop-shadow-sm">
            Perguntas sobre o Restaurante
          </h3>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-brand-strawDark/20 p-6 md:p-8 rounded-[2rem] border border-brand-woodLight/50 shadow-sm transition-all duration-300"
            >
              <button
                className="w-full text-left flex justify-between items-center"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-xl font-bold text-brand-coffeeDark mb-3">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-brand-coffee transition-transform duration-300 shrink-0 ${openIndex === index ? 'rotate-180' : ''}`}
                />
              </button>
              
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-48 py-5 opacity-100' : 'max-h-0 py-0 opacity-0'
                }`}
              >
                <p className="text-brand-coffee opacity-90 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
