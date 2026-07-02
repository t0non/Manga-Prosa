import Header from "@/components/Header";
import Hero from "@/components/Hero";
import QuickChoices from "@/components/QuickChoices";
import TargetAudience from "@/components/TargetAudience";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Location from "@/components/Location";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import JsonLdSchema from "@/components/JsonLdSchema";

export default function Home() {
  return (
    <>
      <JsonLdSchema />
      <Header />
      <main>
        <Hero />
        <QuickChoices />
        <TargetAudience />
        <About />
        <QuickChoices title="Decidiu o que vai querer uai?!" />
        <Gallery />
        <Location />
        <Reviews />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
