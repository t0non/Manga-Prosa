import { MapPin, Phone } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";

export default function FinalCTA() {
  return (
    <section className="py-16 md:py-24 bg-brand-coffeeDark relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 rounded-full bg-brand-orange/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-brand-orange/10 blur-3xl pointer-events-none" />

      <div className="max-w-[800px] mx-auto px-4 md:px-10 text-center relative z-10">
        <p className="text-brand-orange font-bold text-sm uppercase tracking-widest mb-4">Vem nos visitar</p>
        <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
          Bora comer bem e prosear sem pressa?
        </h2>
        <p className="text-white/75 text-base md:text-lg mb-10 max-w-[500px] mx-auto leading-relaxed">
          Café quentin, almoço caseiro, marmitex bem servida e um lugar tranquilo pra você parar na beira da MG-424, em Confins.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 flex-wrap mb-8">
          <a
            href="https://www.google.com/maps/search/?api=1&query=MG-424%2C%20119%20-%20Lagoa%20dos%20Mares%2C%20Confins%20-%20MG%2C%2033500-000"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-brand-orange hover:bg-[#A84F28] text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:-translate-y-0.5 w-full sm:w-auto"
          >
            <MapPin className="w-5 h-5" />
            Ver rota no Google Maps
          </a>
          <a
            href="https://wa.me/5531990893313"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1DA851] text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:-translate-y-0.5 w-full sm:w-auto"
          >
            <WhatsAppIcon className="w-5 h-5" />
            Chamar no WhatsApp
          </a>
        </div>

        <p className="text-white/50 text-sm">
          Ou ligue: <a href="tel:+5531990893313" className="text-white/75 font-bold hover:text-white transition-colors">(31) 99089-3313</a>
        </p>
      </div>
    </section>
  );
}
