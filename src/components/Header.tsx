"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Map } from "lucide-react";
import logoImg from "../../public/Imagem/logo.png";
import pinIcon from "../../public/Imagem/pinlocalizacao.webp";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <header className="fixed top-0 w-full z-50 bg-brand-straw/90 backdrop-blur-md border-b border-brand-coffee/10 shadow-[0_4px_30px_rgba(94,63,44,0.05)] transition-all">
      <div className="container mx-auto px-4 h-[5.5rem] flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity" aria-label="Voltar ao início">
          <Image src={logoImg} alt="Manga & Prosa" className="h-16 w-auto object-contain drop-shadow-sm" priority />
          <span className="sr-only">Manga & Prosa</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-bold text-brand-coffee">
          <Link href="/#sobre" className="hover:text-brand-orange transition-colors">Sobre</Link>
          <Link href="/#ambiente" className="hover:text-brand-orange transition-colors">Ambiente</Link>
          <Link href="/cardapio" className="hover:text-brand-orange transition-colors">Cardápio</Link>
          <Link href="/cardapio#marmitex" className="hover:text-brand-orange transition-colors">Marmitex</Link>
          <Link href="/#localizacao" className="hover:text-brand-orange transition-colors">Localização</Link>
        </nav>

        <div className="hidden md:block">
          <a
            href="https://www.google.com/maps/search/?api=1&query=MG-424%2C%20119%20-%20Lagoa%20dos%20Mares%2C%20Confins%20-%20MG%2C%2033500-000"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-brand-orange hover:bg-[#A84F28] text-[#FFF7ED] px-6 py-2.5 rounded-full font-bold transition-colors shadow-lg shadow-brand-orange/20"
            aria-label="Ver como chegar pelo Google Maps"
            onClick={() => {
              if (typeof window !== "undefined" && (window as any).gtag) {
                (window as any).gtag('event', 'click_rota_google_maps', {
                  'event_category': 'engagement',
                  'event_label': 'Header CTA'
                });
              }
            }}
          >
            <Image src={pinIcon} alt="Localização" width={16} height={16} className="brightness-0 invert" />
            Como chegar
          </a>
        </div>

        <button 
          className="md:hidden p-2 text-brand-coffee" 
          aria-label="Abrir menu"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-brand-straw flex flex-col items-center justify-center p-4">
          <button 
            className="absolute top-6 right-6 p-2 text-brand-coffee"
            aria-label="Fechar menu"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X className="w-8 h-8" />
          </button>
          
          <nav className="flex flex-col items-center gap-8 text-xl font-bold text-brand-coffee">
            <Link href="/#sobre" onClick={() => setIsMobileMenuOpen(false)}>Sobre</Link>
            <Link href="/#ambiente" onClick={() => setIsMobileMenuOpen(false)}>Ambiente</Link>
            <Link href="/cardapio" onClick={() => setIsMobileMenuOpen(false)}>Cardápio</Link>
            <Link href="/cardapio#marmitex" onClick={() => setIsMobileMenuOpen(false)}>Marmitex</Link>
            <Link href="/#localizacao" onClick={() => setIsMobileMenuOpen(false)}>Localização</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
