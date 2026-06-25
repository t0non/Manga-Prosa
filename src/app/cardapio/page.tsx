import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileStickyAction from "@/components/MobileStickyAction";
import Lunch from "@/components/Lunch";
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
      <main className="pt-[5.5rem] pb-[72px] md:pb-0 bg-brand-straw">
        
        {/* Page Header */}
        <div className="bg-brand-coffeeDark py-16 md:py-24 text-center px-4 relative overflow-hidden">
          <div className="relative z-10 max-w-3xl mx-auto">
            <p className="text-brand-orange font-bold tracking-widest uppercase text-sm mb-3">
              Manga &amp; Prosa · Confins, MG
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-brand-straw mb-6">
              Cardápio do Manga &amp; Prosa
            </h1>
            <p className="text-xl text-brand-woodLight font-medium mb-6">
              Café da manhã, almoço caseiro mineiro, lanches e marmitex em Confins, na beira da MG-424.
            </p>
            <div className="text-brand-straw/80 text-sm max-w-xl mx-auto space-y-1">
              <p>* Os itens podem variar conforme o dia e a disponibilidade.</p>
              <p>* Consulte valores e opções pelo WhatsApp ou diretamente no restaurante.</p>
            </div>
          </div>
        </div>

        {/* Sections */}
        <BreakfastMenu />
        <Lunch />
        <CateringMenu />
        <Marmitex />

      </main>
      <Footer />
      <MobileStickyAction />
    </>
  );
}
