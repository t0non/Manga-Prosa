import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CateringMenu from "@/components/CateringMenu";
import BreakfastMenu from "@/components/BreakfastMenu";
import Marmitex from "@/components/Marmitex";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://manga-prosa-gm2j.vercel.app";

export const metadata: Metadata = {
  title: "Cardápio | Café, Almoço Caseiro e Marmitex em Confins — Manga & Prosa",
  description: "Veja o cardápio completo do Manga & Prosa em Confins - MG. Café da manhã com pão de queijo, almoço caseiro mineiro no fogão a lenha, marmitex bem servida e sobremesas. Na MG-424, pertim do Aquabeat.",
  alternates: {
    canonical: `${siteUrl}/cardapio`,
  },
  openGraph: {
    title: "Cardápio | Café, Almoço Caseiro e Marmitex em Confins — Manga & Prosa",
    description: "Veja o cardápio completo do Manga & Prosa em Confins - MG. Café da manhã, almoço caseiro mineiro, marmitex bem servida e sobremesas na beira da MG-424.",
    url: `${siteUrl}/cardapio`,
    siteName: "Manga & Prosa",
    locale: "pt_BR",
    type: "website",
    images: [{ url: "/Imagem/fora1.jpg", width: 1200, height: 630, alt: "Cardápio do restaurante Manga e Prosa — comida caseira mineira em Confins MG" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cardápio | Manga & Prosa — Restaurante em Confins MG",
    description: "Café da manhã, almoço caseiro, marmitex e sobremesas. Na MG-424, pertim do Aquabeat.",
    images: ["/Imagem/fora1.jpg"],
  },
};

export default function CardapioPage() {
  return (
    <>
      <Header />
      <main className="pt-[5.5rem] bg-brand-straw">

        {/* Sections */}
        <BreakfastMenu />
        <CateringMenu />
        <Marmitex />

      </main>
      <Footer />
    </>
  );
}
