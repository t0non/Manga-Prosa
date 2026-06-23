export default function JsonLdSchema() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://mangaeprosa.com.br"; // TODO: Inserir domínio real
  
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Manga & Prosa",
    "url": siteUrl,
    "logo": `${siteUrl}/icon.png`, // TODO: Inserir URL real do logo
    // "sameAs": [] // TODO: Adicionar links das redes sociais (Instagram, Facebook)
  };

  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Manga & Prosa",
    "url": siteUrl,
    "description": "Restaurante em Confins - MG. Comida regional, ambiente acolhedor e familiar na Lagoa dos Mares."
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Manga & Prosa",
    "url": siteUrl,
    "taxID": "61.574.605/0001-80",
    // "image": `${siteUrl}/fachada.jpg`, // TODO: Inserir URL real da imagem
    "telephone": "+5531990893313",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "MG-424, 119 - Lagoa dos Mares",
      "addressLocality": "Confins",
      "addressRegion": "MG",
      "postalCode": "33500-000",
      "addressCountry": "BR"
    },
    // "geo": {
    //   "@type": "GeoCoordinates",
    //   "latitude": "", // TODO: Inserir latitude real
    //   "longitude": "" // TODO: Inserir longitude real
    // },
    // "openingHoursSpecification": [
    //   {
    //     "@type": "OpeningHoursSpecification",
    //     "dayOfWeek": ["Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    //     "opens": "11:00",
    //     "closes": "16:00"
    //   }
    // ],
    // "sameAs": [] // TODO: Adicionar Google Business Profile etc.
  };

  const restaurantSchema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "Manga & Prosa",
    "url": siteUrl,
    // "image": `${siteUrl}/fachada.jpg`, // TODO: Inserir URL real da imagem principal do restaurante
    "telephone": "+5531990893313",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "MG-424, 119 - Lagoa dos Mares",
      "addressLocality": "Confins",
      "addressRegion": "MG",
      "postalCode": "33500-000",
      "addressCountry": "BR"
    },
    // "servesCuisine": "Brasileira Regional", // TODO: Preencher com a culinária real exata
    // "priceRange": "$$", // TODO: Preencher priceRange adequado (ex: $$, $$$)
    // "geo": {
    //   "@type": "GeoCoordinates",
    //   "latitude": "", // TODO: Inserir latitude real
    //   "longitude": "" // TODO: Inserir longitude real
    // },
    // "openingHoursSpecification": [
    //   // TODO: Preencher horários de funcionamento
    // ],
    // "sameAs": [] // TODO: Adicionar Instagram, Google Business Profile e outras redes
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Manga & Prosa",
        "item": siteUrl
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
          "text": "O Manga & Prosa fica na MG-424, 119 - Lagoa dos Mares, em Confins - MG, pertim do Aquabeat."
        }
      },
      {
        "@type": "Question",
        "name": "O Manga & Prosa fica perto do Aquabeat?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sim, o Manga & Prosa fica na região da MG-424 e pode ser uma parada gostosa para quem está indo ou voltando do Aquabeat. Para confirmar a rota certinha, clique em “Como chegar”."
        }
      },
      {
        "@type": "Question",
        "name": "O Manga & Prosa serve almoço em Confins?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sim. O restaurante oferece almoço caseiro, pratos do dia e opções com aquele tempero mineiro, conforme a disponibilidade."
        }
      },
      {
        "@type": "Question",
        "name": "Tem marmitex no Manga & Prosa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sim. O Manga & Prosa oferece opções de marmitex em Confins. As combinações podem variar durante a semana, então o ideal é consultar pelo WhatsApp."
        }
      },
      {
        "@type": "Question",
        "name": "Tem café da manhã e lanches?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sim. O Manga & Prosa é uma opção para café da manhã, lanches, salgados, pão de queijo e uma parada rápida na MG-424."
        }
      },
      {
        "@type": "Question",
        "name": "Como falar com o Manga & Prosa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Você pode chamar pelo WhatsApp ou ligar para (31) 99089-3313."
        }
      }
    ]
  };

  // Combinando os schemas em um array
  const jsonLdData = [
    organizationSchema,
    webSiteSchema,
    localBusinessSchema,
    restaurantSchema,
    breadcrumbSchema,
    faqSchema
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
    />
  );
}
