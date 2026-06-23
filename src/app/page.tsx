import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import OfferingsPreview from "@/components/OfferingsPreview";
import Location from "@/components/Location";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import JsonLdSchema from "@/components/JsonLdSchema";
import MobileStickyAction from "@/components/MobileStickyAction";

export default function Home() {
  return (
    <>
      <JsonLdSchema />
      <Header />
      <main className="pb-[72px] md:pb-0">
        <Hero />
        <About />
        <OfferingsPreview />
        <Location />
        <Reviews />
        <FAQ />
      </main>
      <Footer />
      <MobileStickyAction />
    </>
  );
}
