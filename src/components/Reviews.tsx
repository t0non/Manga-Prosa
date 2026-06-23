import { Star, MapPin } from "lucide-react";
import Image from "next/image";
import pinIcon from "../../public/Imagem/pinlocalizacao.webp";

const GoogleIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

// Removed fake reviews array

export default function Reviews() {
  return (
    <section className="py-20 bg-brand-straw">
      <div className="container mx-auto px-4">
        
        <div className="bg-brand-coffee rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 text-center shadow-xl border border-brand-woodDark">
          <div className="relative z-10">
            <span className="text-brand-orange font-bold tracking-widest uppercase text-sm mb-2 block">AVALIAÇÕES</span>
            <h2 className="text-3xl md:text-5xl font-bold text-brand-straw mb-6">
              Já passou pelo Manga & Prosa?
            </h2>
            <p className="text-lg text-brand-woodLight mb-12 max-w-2xl mx-auto">
              Se você já veio comer com a gente, sua avaliação ajuda outras pessoas de Confins, Lagoa dos Mares e da região da MG-424 a encontrarem o Manga & Prosa.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 flex-wrap">
              <a
                href="#" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-transparent text-brand-straw border-2 border-brand-woodDark hover:bg-brand-woodDark hover:text-brand-straw px-8 py-4 rounded-full font-bold transition-all md:hover:-translate-y-1"
                aria-label="Ver no Google"
                onClick={() => {
                  if (typeof window !== "undefined" && (window as any).gtag) {
                    (window as any).gtag('event', 'click_ver_google');
                  }
                }}
              >
                <GoogleIcon className="w-5 h-5" />
                Ver no Google
              </a>

              <a
                href="#" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-transparent text-brand-straw border-2 border-[#FBBC05] hover:bg-[#FBBC05]/10 hover:text-brand-straw px-8 py-4 rounded-full font-bold transition-all md:hover:-translate-y-1"
                aria-label="Deixar avaliação no Google"
                onClick={() => {
                  if (typeof window !== "undefined" && (window as any).gtag) {
                    (window as any).gtag('event', 'click_avaliar_google');
                  }
                }}
              >
                <Star className="w-5 h-5 text-[#FBBC05]" />
                Deixar avaliação
              </a>
              
              <a
                href="https://www.google.com/maps/search/?api=1&query=MG-424%2C%20119%20-%20Lagoa%20dos%20Mares%2C%20Confins%20-%20MG%2C%2033500-000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-brand-orange hover:bg-[#A84F28] text-[#FFF7ED] shadow-lg shadow-brand-orange/20 px-8 py-4 rounded-full font-bold transition-all md:hover:-translate-y-1"
                aria-label="Ver rota no Google Maps para o restaurante"
                onClick={() => {
                  if (typeof window !== "undefined" && (window as any).gtag) {
                    (window as any).gtag('event', 'click_rota_google_maps');
                  }
                }}
              >
                <Image src={pinIcon} alt="Localização" width={20} height={20} className="brightness-0 invert shrink-0" />
                Como chegar
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
