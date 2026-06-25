"use client";

import { useState } from "react";
import { ChevronDown, Users, Info } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";

const cateringData = [
  {
    day: "Terça-feira",
    theme: "",
    pratosPrincipais: [
      "Frango com Ora-pro-nóbis",
      "Abobrinha recheada",
      "Polenta frita com queijo minas",
      "Arroz branco e Arroz mineiro",
      "Couve, taioba e almeirão refogados",
      "Feijão comum e Feijão preto temperado",
      "Macarrão na chapa",
      "Repolho com cenoura crocante",
      "Batatas temperadas e Batata recheada",
      "Joelho de porco com pezinho",
      "Farofa de cenoura",
      "Lasanha de massa",
      "Mandioca frita",
      "Carne seca com cabotiá",
      "Churrasco (opcional na segunda etapa)"
    ],
    saladas: [
      "Repolho verde e roxo",
      "Mix de folhas (alface, tomate e rúcula)",
      "Maionese de batatas com atum",
      "Acelga, cenoura e tomate com molho",
      "Alface americana com repolho e queijo minas"
    ],
    sobremesas: [
      "Pudim de leite condensado",
      "Gelatina com abacaxi",
      "Pavê de chocolate e biscoito champanhe",
      "Mousse de maracujá",
      "Arroz doce"
    ]
  },
  {
    day: "Quarta-feira",
    theme: "Dia do Tropeiro",
    pratosPrincipais: [
      "Feijão Tropeiro tradicional",
      "Galinhada com legumes",
      "Creme de milho",
      "Costelinha suína ao barbecue de goiabada cascão",
      "Cozido de porco com legumes requintados",
      "Arroz branco e Arroz com legumes e passas",
      "Feijão comum",
      "Berinjela recheada e empanada no queijo",
      "Taioba, couve, almeirão e/ou mostarda refogadas",
      "Macarrão à carbonara",
      "Torta de palmito",
      "Bifes grelhados ao molho de vinho com legumes"
    ],
    saladas: [
      "Mix de folhas (alface, rúcula, repolho, rabanete) com tomate",
      "Salpicão de frango",
      "Salada refrescante de manga",
      "Couve crua temperada com tomatinhos",
      "Salada de manga e repolho crocante com grãos",
      "Tabule (opção vegetariana)",
      "Salada agridoce"
    ],
    sobremesas: [
      "Ambrosia (doce de ovos em calda)",
      "Mousse de abacaxi",
      "Torta de morango",
      "Queijo minas com doce"
    ]
  },
  {
    day: "Quinta-feira",
    theme: "Dia do Tutu à Mineira",
    pratosPrincipais: [
      "Tutu à mineira",
      "Frango à cerveja preta",
      "Pernil à pururuca com abacaxi",
      "Canjiquinha com costelinha",
      "Mexidão à mineira",
      "Pezinho e joelho de porco",
      "Arroz e feijão comum",
      "Suflê de queijo parmesão e alho-poró",
      "Suflê de cenoura",
      "Macarrão à bolonhesa",
      "Bolo de carne moída (boi e porco) recheado",
      "Torta de palmito e Torta assada de legumes",
      "Cenouras palito e folhas refogadas (taioba/couve)",
      "Mix de legumes (abobrinha, batata gratinada/frita)"
    ],
    saladas: [
      "Salada de trigo com queijo frescal",
      "Salada de Natal",
      "Beterraba com cebolinhas mini",
      "Salada de macarrão",
      "Salada de quinoa",
      "Salada tropical",
      "Penne com atum ou sardinha"
    ],
    sobremesas: [
      "Bombom de morango na travessa",
      "Marido gelado",
      "Mousse de limão siciliano",
      "Salada de frutas com cubos de gelatina",
      "Doce de leite com queijo minas"
    ]
  },
  {
    day: "Sexta-feira",
    theme: "Dia de Feijoada",
    pratosPrincipais: [
      "Feijoada completa com acompanhamentos",
      "Canjiquinha com suã",
      "Dobradinha com feijão branco e linguiça",
      "Arroz branco e Arroz com alho",
      "Batata gratinada ou frita e Batata doce frita",
      "Banana da terra frita",
      "Feijão simples",
      "Macarrão com provolone",
      "Farofa de cebola",
      "Berinjela empanada com queijo",
      "Mix de legumes (espinafre com molho branco, etc)",
      "Churrasco"
    ],
    saladas: [
      "Batatas cozidas temperadas com hortaliças",
      "Ovos cozidos temperados",
      "Mix de folhas verdes",
      "Couve crua temperada com tomate",
      "Salada de manga, repolho crocante e grãos",
      "Tabule e Salada agridoce"
    ],
    sobremesas: [
      "Ambrosia",
      "Mousse de abacaxi",
      "Torta de morango",
      "Queijo minas"
    ]
  },
  {
    day: "Sábado",
    theme: "Dia do Tropeirão",
    pratosPrincipais: [
      "Tropeirão reforçado",
      "Frango pinga e frita com pimenta biquinho",
      "Moranga recheada com carne seca",
      "Costela de porco com barbecue",
      "Arroz branco e Arroz com bacon",
      "Feijão comum e Feijão preto temperado",
      "Dobradinha com feijão branco e linguiça",
      "Lasanha de frango com catupiry",
      "Batatas gratinadas e Batata doce frita",
      "Banana da terra frita",
      "Farofa de cebola",
      "Legumes variados ao molho branco",
      "Churrasco"
    ],
    saladas: [
      "Salada de trigo com queijo frescal",
      "Salada de Natal",
      "Beterraba com cebolinhas mini",
      "Salada de macarrão",
      "Salada de quinoa",
      "Salada tropical"
    ],
    sobremesas: [
      "Pudim de leite condensado",
      "Gelatina com abacaxi",
      "Pavê de chocolate e biscoito champanhe",
      "Mousse de maracujá",
      "Arroz doce"
    ]
  },
  {
    day: "Domingo",
    theme: "Almoço Especial em Família",
    pratosPrincipais: [
      "Língua ao vinho tinto",
      "Vaca atolada",
      "Canjiquinha com costela",
      "Frango com ora-pro-nóbis e quiabo",
      "Pezinho e joelho de porco (assado e cozido)",
      "Fígado com jiló",
      "Lasanha de frango com catupiry",
      "Arroz branco e Arroz à grega",
      "Feijão preto e Feijão comum",
      "Macarrão com queijo e presunto",
      "Suflê de espinafre ou cenouras",
      "Berinjela frita à mineira",
      "Batatas fritas com tempero especial",
      "Farofa de banana caturra com bacon",
      "Legumes variados"
    ],
    saladas: [
      "Mix de folhas (alface, tomate, rúcula)",
      "Couve crua temperada",
      "Salada de atum com batatas"
    ],
    sobremesas: [
      "Sobremesas variadas e doces caseiros"
    ]
  },
  {
    day: "Opções Coringa",
    theme: "Pratos Extras e Clássicos",
    pratosPrincipais: [
      "Canjiquinha com costelinha de porco",
      "Frango pinga e frita com pimenta biquinho",
      "Frango com quiabo e Angu",
      "Moranga com carne de sol/seca",
      "Batatas gratinadas (molho branco e parmesão)",
      "Churrasco",
      "Macarrão na chapa e Macarrão à bolonhesa",
      "Dobradinha com feijão branco e linguiça",
      "Bifes de berinjela",
      "Batata doce frita e Batata frita",
      "Banana da terra frita",
      "Farofa de cebola",
      "Couve e taioba refogadas",
      "Arroz branco e Feijão temperado com pele"
    ],
    saladas: [
      "Batatas cozidas temperadas com hortaliças",
      "Ovos cozidos temperados"
    ],
    sobremesas: []
  }
];

export default function CateringMenu() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const trackEvent = (eventName: string) => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", eventName);
    }
  };

  return (
    <section id="eventos" className="py-20 bg-brand-strawDark relative border-t border-brand-woodLight/30">
      <div className="container mx-auto px-4 relative z-10">
        
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center gap-2 bg-brand-orange/10 text-brand-orange px-4 py-2 rounded-full mb-4">
            <Users className="w-5 h-5" />
            <span className="font-bold tracking-widest uppercase text-sm">Eventos & Grupos</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-brand-coffeeDark mb-6 leading-tight">
            Cardápio Especial para Grupos
          </h2>
          <p className="text-lg text-brand-coffee/90 leading-relaxed mb-4">
            Organizando uma excursão, confraternização ou evento? Temos um cardápio planejado para atender confortavelmente grupos de até <strong>60 pessoas</strong>.
          </p>
          
          <div className="bg-white p-4 rounded-xl border border-brand-woodLight shadow-sm inline-flex items-start md:items-center gap-3 text-left md:text-center mt-2 max-w-2xl">
            <Info className="w-6 h-6 text-brand-orange shrink-0 mt-1 md:mt-0" />
            <p className="text-sm text-brand-coffee font-medium">
              Consumo médio considerado de ~500g por pessoa. O cardápio pode sofrer pequenas alterações conforme disponibilidade dos produtos, sempre mantendo a mesma qualidade e fartura.
            </p>
          </div>
        </div>

        {/* Menu Accordion */}
        <div className="max-w-[900px] mx-auto space-y-4 mb-16" role="list">
          {cateringData.map((item, i) => (
            <div key={i} className="bg-white rounded-2xl border border-brand-woodLight overflow-hidden shadow-sm hover:shadow-md transition-shadow" role="listitem">
              <button
                onClick={() => toggleAccordion(i)}
                className="w-full flex items-center justify-between p-5 md:p-6 text-left bg-white transition-colors"
                aria-expanded={openIndex === i}
              >
                <div>
                  <span className="font-bold text-brand-coffeeDark text-xl block">{item.day}</span>
                  {item.theme && (
                    <span className="text-brand-orange font-medium text-sm mt-1 block">{item.theme}</span>
                  )}
                </div>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors ${openIndex === i ? 'bg-brand-orange text-white' : 'bg-brand-straw text-brand-coffeeDark'}`}>
                  <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""}`} />
                </div>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === i ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"}`}
              >
                <div className="p-6 pt-0 border-t border-brand-woodLight/30 mt-2">
                  <div className="grid md:grid-cols-2 gap-8 mt-4">
                    
                    {/* Pratos Principais */}
                    <div>
                      <h4 className="font-bold text-brand-coffeeDark text-lg mb-4 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-brand-orange"></span>
                        Pratos Principais
                      </h4>
                      <ul className="space-y-2">
                        {item.pratosPrincipais.map((prato, idx) => (
                          <li key={idx} className="text-brand-coffee text-sm md:text-base border-b border-brand-woodLight/30 pb-2 last:border-0">
                            {prato}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Saladas e Sobremesas */}
                    <div className="space-y-8">
                      {item.saladas.length > 0 && (
                        <div>
                          <h4 className="font-bold text-brand-coffeeDark text-lg mb-4 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[#25D366]"></span>
                            Saladas
                          </h4>
                          <ul className="space-y-2">
                            {item.saladas.map((salada, idx) => (
                              <li key={idx} className="text-brand-coffee text-sm md:text-base border-b border-brand-woodLight/30 pb-2 last:border-0">
                                {salada}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {item.sobremesas.length > 0 && (
                        <div>
                          <h4 className="font-bold text-brand-coffeeDark text-lg mb-4 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[#FFB020]"></span>
                            Sobremesas
                          </h4>
                          <ul className="space-y-2">
                            {item.sobremesas.map((sobremesa, idx) => (
                              <li key={idx} className="text-brand-coffee text-sm md:text-base border-b border-brand-woodLight/30 pb-2 last:border-0">
                                {sobremesa}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-brand-coffeeDark font-bold text-lg mb-6">
            Gostou das opções? Peça um orçamento para o seu grupo!
          </p>
          <a
            href="https://wa.me/5531990893313?text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20um%20or%C3%A7amento%20para%20o%20card%C3%A1pio%20de%20grupos%2Feventos."
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("click_orcamento_grupos")}
            className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1DA851] text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:-translate-y-0.5"
          >
            <WhatsAppIcon className="w-5 h-5" />
            Solicitar orçamento pelo WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
}
