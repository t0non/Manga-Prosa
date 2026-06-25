import Image from "next/image";
import wazeIcon from "../../public/Imagem/logo_waze.png";
import WhatsAppIcon from "./WhatsAppIcon";

export default function Reviews() {
  return (
    <section id="avaliacoes" className="py-16 md:py-24 bg-brand-straw">
      <div className="max-w-[1200px] mx-auto px-4 md:px-10">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-center text-brand-coffeeDark mb-4">
          Quem passa por aqui, volta com uma boa prosa
        </h2>
        <p className="text-center text-brand-coffee font-medium text-[15px] md:text-lg mb-12 max-w-xl mx-auto leading-relaxed">
          Veja o que os clientes estão falando sobre o Manga &amp; Prosa no Google.
        </p>

        {/* Google Reviews CTA Card */}
        <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-md border border-brand-woodLight p-8 md:p-10 text-center mb-12">
          {/* Google Icon */}
          <div className="flex justify-center mb-4">
            <svg className="w-10 h-10" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
          </div>

          {/* Stars */}
          <div className="flex justify-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-7 h-7 fill-[#FABB05] text-[#FABB05]" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            ))}
          </div>

          <p className="text-brand-coffeeDark font-bold text-xl mb-1">Manga &amp; Prosa</p>
          <p className="text-brand-coffee text-sm mb-6">Avaliações verificadas no Google</p>

          <p className="text-brand-coffee font-medium text-[15px] leading-relaxed mb-8 italic">
            "Quer saber o que os clientes tão falando? A gente convida você a conferir as avaliações reais no Google e, se vier tomar um café ou almoçar aqui, deixar a sua também!"
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://www.google.com/search?q=Manga+%26+Prosa+Confins+MG#lrd=0x0:0x0,1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-brand-coffeeDark hover:bg-brand-coffee text-white px-7 py-3.5 rounded-full font-bold transition-all shadow-md hover:-translate-y-0.5 w-full sm:w-auto"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#fff"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#fff"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#fff"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#fff"/>
              </svg>
              Ver avaliações no Google
            </a>
            <a
              href="https://www.google.com/search?q=Manga+%26+Prosa+Confins+MG#lrd=0x0:0x0,3"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-white border-2 border-brand-coffeeDark text-brand-coffeeDark hover:bg-brand-straw px-7 py-3.5 rounded-full font-bold transition-all shadow-md hover:-translate-y-0.5 w-full sm:w-auto"
            >
              Deixar uma avaliação
            </a>
          </div>
        </div>

        {/* Bottom CTAs */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="https://www.google.com/maps/search/?api=1&query=MG-424%2C%20119%20-%20Lagoa%20dos%20Mares%2C%20Confins%20-%20MG%2C%2033500-000"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-[#33CCFF] hover:bg-[#00B4D8] text-white px-8 py-4 rounded-full font-bold transition-all shadow-md hover:-translate-y-0.5 w-full sm:w-auto"
          >
            <Image src={wazeIcon} alt="Waze" width={24} height={24} />
            Como chegar
          </a>
          <a
            href="https://wa.me/5531990893313"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1DA851] text-white px-8 py-4 rounded-full font-bold transition-all shadow-md hover:-translate-y-0.5 w-full sm:w-auto"
          >
            <WhatsAppIcon className="w-6 h-6" />
            Chamar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
