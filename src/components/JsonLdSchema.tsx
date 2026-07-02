export default function JsonLdSchema() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://manga-prosa-gm2j.vercel.app";

  const restaurantSchema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "Restaurante Manga & Prosa",
    "url": siteUrl,
    "image": [
      `${siteUrl}/Imagem/fora1.jpg`,
      `${siteUrl}/Imagem/fora2.jpg`,
      `${siteUrl}/Imagem/dentro1.jpg`
    ],
    "telephone": "+5531990893313",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "MG-424, 119 - Lagoa dos Mares",
      "addressLocality": "Confins",
      "addressRegion": "MG",
      "postalCode": "33500-000",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-19.6278",
      "longitude": "-43.9925"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "07:00",
        "closes": "16:00"
      }
    ],
    "servesCuisine": [
      "Comida mineira",
      "Comida caseira",
      "Café da manhã",
      "Almoço caseiro",
      "Marmitex",
      "Lanches",
      "Sobremesas"
    ],
    "priceRange": "$$",
    "areaServed": [
      "Confins",
      "Lagoa dos Mares",
      "MG-424",
      "São José da Lapa",
      "Vespasiano",
      "Lagoa Santa",
      "Região do Aquabeat"
    ],
    "hasMenu": `${siteUrl}/cardapio`,
    "description": "Restaurante de comida caseira mineira em Confins - MG, na MG-424, 119 - Lagoa dos Mares. Café da manhã, almoço caseiro, marmitex, lanches e sobremesas. Pertim do Aquabeat.",
    "currenciesAccepted": "BRL",
    "paymentAccepted": "Dinheiro, Pix, Cartão",
    "keywords": "restaurante em Confins, comida caseira Confins, almoço Confins MG, marmitex Confins, café da manhã Confins, restaurante perto Aquabeat, restaurante MG-424, onde comer Confins"
  };

  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Restaurante Manga & Prosa",
    "url": siteUrl,
    "description": "Restaurante em Confins - MG. Comida caseira mineira, café da manhã, almoço bem servido e marmitex na beira da MG-424, pertim do Aquabeat.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${siteUrl}/cardapio`,
      "query-input": "required name=search_term_string"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Manga & Prosa — Restaurante em Confins MG",
        "item": siteUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Cardápio — Café, Almoço e Marmitex",
        "item": `${siteUrl}/cardapio`
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Onde fica o Manga & Prosa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "O Manga & Prosa fica na MG-424, 119 - Lagoa dos Mares, em Confins - MG, CEP 33500-000. Um lugar fácil de achar e ótimo pra estacionar e comer bem."
        }
      },
      {
        "@type": "Question",
        "name": "O Manga & Prosa fica perto do Aquabeat?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sim, o Manga & Prosa fica na beira da MG-424, bem pertim do Aquabeat, em Confins - MG. É uma parada gostosa pra quem está indo ou voltando do parque aquático."
        }
      },
      {
        "@type": "Question",
        "name": "Onde comer perto do Aquabeat?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "O Manga & Prosa é uma ótima opção para comer perto do Aquabeat em Confins - MG. Fica na beira da MG-424, número 119, com comida caseira mineira, café da manhã, almoço e marmitex bem servida."
        }
      },
      {
        "@type": "Question",
        "name": "Tem almoço caseiro em Confins?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sim. O Manga & Prosa serve almoço caseiro em Confins, com comida feita no fogão a lenha: arroz, feijão, carne, legumes, salada e acompanhamentos fresquinhos do dia."
        }
      },
      {
        "@type": "Question",
        "name": "Tem marmitex em Confins?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sim. O Manga & Prosa oferece marmitex bem servida em Confins. As combinações variam durante a semana. Consulte as opções do dia pelo WhatsApp: (31) 99089-3313."
        }
      },
      {
        "@type": "Question",
        "name": "Tem café da manhã perto do Aquabeat?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sim. O Manga & Prosa serve café da manhã na MG-424 em Confins, pertim do Aquabeat. Tem café passado na hora, pão de queijo quentinho, salgados e quitandas."
        }
      },
      {
        "@type": "Question",
        "name": "Como faço para chegar ao Manga & Prosa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "O Manga & Prosa fica na MG-424, número 119, no bairro Lagoa dos Mares, em Confins - MG. Basta buscar 'Manga & Prosa Confins' no Google Maps ou abrir a rota diretamente pelo site."
        }
      },
      {
        "@type": "Question",
        "name": "Qual o telefone do Manga & Prosa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "O telefone e WhatsApp do Manga & Prosa é (31) 99089-3313. Você pode ligar ou enviar mensagem para consultar o cardápio do dia, marmitex e informações."
        }
      }
    ]
  };

  const jsonLdData = [
    restaurantSchema,
    webSiteSchema,
    breadcrumbSchema,
    faqSchema
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData, null, 0) }}
    />
  );
}
