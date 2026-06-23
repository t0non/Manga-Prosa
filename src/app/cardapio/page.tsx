import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileStickyAction from "@/components/MobileStickyAction";
import Lunch from "@/components/Lunch";
import BreakfastMenu from "@/components/BreakfastMenu";
import Marmitex from "@/components/Marmitex";

export const metadata = {
  title: "Cardápio Manga & Prosa | Café, Almoço e Marmitex em Confins",
  description: "Veja o cardápio do Manga & Prosa em Confins - MG. Café da manhã, lanches, almoço caseiro, marmitex e opções do dia na beira da MG-424, pertim do Aquabeat.",
};

export default function CardapioPage() {
  return (
    <>
      <Header />
      <main className="pt-[5.5rem] pb-[72px] md:pb-0 bg-brand-straw">
        
        {/* Page Header */}
        <div className="bg-brand-coffeeDark py-16 md:py-24 text-center px-4 relative overflow-hidden">
          <div className="relative z-10 max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-brand-straw mb-6">
              Cardápio do Manga & Prosa
            </h1>
            <p className="text-xl text-brand-woodLight font-medium mb-6">
              Café da manhã, almoço caseiro, lanches e marmitex em Confins, na beira da MG-424.
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
        <Marmitex />

      </main>
      <Footer />
      <MobileStickyAction />
    </>
  );
}
