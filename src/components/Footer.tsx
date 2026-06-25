import Link from "next/link";
import Image from "next/image";
import { Camera, Globe, MapPin, Phone, MessageCircle, Map } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";
import logoImg from "../../public/Imagem/logo.png";
import pinIcon from "../../public/Imagem/pinlocalizacao.webp";
import topLogo from "../../public/Imagem/topmarketinglogo.jpg";

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-brand-coffeeDark pt-20 pb-10 text-brand-straw border-t border-brand-coffee">
      <div className="container mx-auto px-4">
        
        {/* CTA Banner Interno */}
        <div className="bg-white rounded-[2.5rem] p-8 md:p-16 flex flex-col items-center text-center gap-6 md:gap-8 mb-20 shadow-2xl relative overflow-hidden -mt-32">
          
          <div className="relative z-10 max-w-2xl w-full">
            <h2 className="text-3xl md:text-5xl font-bold text-brand-coffeeDark mb-4">
              Vem viver uma boa prosa no Manga & Prosa
            </h2>
            <p className="text-brand-coffee text-lg md:text-xl font-medium mb-8">
              Café quentin, almoço caseiro, marmitex bem servida e um lugar tranquilo para comer sem pressa na beira da MG-424, em Confins.
            </p>
            
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
              <a
                href="https://www.google.com/maps/search/?api=1&query=MG-424%2C%20119%20-%20Lagoa%20dos%20Mares%2C%20Confins%20-%20MG%2C%2033500-000"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-brand-orange hover:bg-[#A84F28] text-[#FFF7ED] px-8 py-4 rounded-full font-bold transition-all shadow-xl shadow-brand-orange/20 md:hover:-translate-y-1"
                aria-label="Ver como chegar no Google Maps"
              >
                <Image src={pinIcon} alt="Localização" width={20} height={20} className="brightness-0 invert shrink-0" />
                Como chegar
              </a>
              <a
                href="https://wa.me/5531990893313?text=Ol%C3%A1%2C%20vim%20pelo%20site%20do%20Manga%20%26%20Prosa%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1DA851] text-white px-8 py-4 rounded-full font-bold transition-all shadow-xl shadow-[#25D366]/20 md:hover:-translate-y-1"
                aria-label="Chamar no WhatsApp"
              >
                <WhatsAppIcon className="w-5 h-5" />
                Chamar no WhatsApp
              </a>
              <a
                href="tel:+5531990893313"
                className="hidden md:flex items-center justify-center gap-2 bg-transparent text-brand-coffee border-2 border-brand-coffee hover:bg-brand-coffee hover:text-[#FFF7ED] px-8 py-4 rounded-full font-bold transition-all"
                aria-label="Ligar agora"
              >
                <Phone className="w-5 h-5" />
                Ligar agora
              </a>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-6 hover:opacity-90 transition-opacity" aria-label="Voltar para a página inicial">
              <Image src={logoImg} alt="Manga & Prosa" className="h-20 w-auto object-contain drop-shadow-sm" />
              <span className="sr-only">Manga & Prosa</span>
            </Link>
            <p className="text-brand-strawDark leading-relaxed mb-6 opacity-90">
              Comida regional de verdade, em meio à natureza, com aquele gostinho de interior em Confins.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/mangaeprosa" target="_blank" rel="noopener noreferrer" aria-label="Visite nosso Instagram" className="w-10 h-10 rounded-full bg-brand-woodDark flex items-center justify-center text-brand-straw hover:bg-brand-orange hover:text-[#FFF7ED] transition-colors shadow-sm">
                <InstagramIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-brand-straw mb-6">Links Rápidos</h4>
            <ul className="space-y-3 text-brand-strawDark">
              <li><Link href="#sobre" className="hover:text-brand-orange transition-colors">Nossa História</Link></li>
              <li><Link href="#cardapio" className="hover:text-brand-orange transition-colors">Cardápio</Link></li>
              <li><Link href="#ambiente" className="hover:text-brand-orange transition-colors">O Espaço</Link></li>
              <li><Link href="#localizacao" className="hover:text-brand-orange transition-colors">Como Chegar</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-lg font-bold text-brand-straw mb-6">Contato e Endereço</h4>
            <address className="not-italic">
              <ul className="space-y-4 text-brand-strawDark">
                <li className="flex gap-3">
                  <MapPin className="w-5 h-5 text-brand-orange shrink-0 mt-1" />
                  <span>Manga & Prosa<br />MG-424, 119 - Lagoa dos Mares<br />Confins - MG, 33500-000</span>
                </li>
                <li className="flex gap-3">
                  <Phone className="w-5 h-5 text-brand-orange shrink-0" />
                  <span><a href="tel:+5531990893313" className="hover:text-brand-orange transition-colors">(31) 99089-3313</a></span>
                </li>
              </ul>
            </address>
          </div>
        </div>

        <div className="border-t border-brand-coffee pt-8 flex flex-col items-center justify-center gap-4 text-sm text-brand-strawDark pb-16 md:pb-0 opacity-80 text-center">
          <div className="flex flex-col gap-1">
            <p>© {new Date().getFullYear()} Restaurante Manga & Prosa. Todos os direitos reservados.</p>
            <p>CNPJ: 61.574.605/0001-80</p>
          </div>
          <div className="flex items-center gap-2">
            <span>Desenvolvido por</span>
            <a 
              href="https://topmarketingbh.com.br/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity text-brand-orange hover:text-brand-woodLight font-bold"
            >
              <Image src={topLogo} alt="Top Marketing BH" width={24} height={24} className="rounded-sm object-cover" />
              Top Marketing BH
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
