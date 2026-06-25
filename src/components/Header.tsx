"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, MapPin } from "lucide-react";
import logoImg from "../../public/Imagem/logo.png";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-2" : "bg-white py-3 md:py-4"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-4 md:px-10 flex items-center justify-between">
        
        {/* Mobile Spacer (Balances the hamburger menu so logo centers) */}
        <div className="md:hidden w-10"></div>

        {/* Logo */}
        <a href="#" className="relative z-50 flex items-center justify-center md:justify-start" onClick={() => setIsMobileMenuOpen(false)}>
          <div className="relative w-36 md:w-48 h-16 md:h-20">
            <Image
              src={logoImg}
              alt="Manga & Prosa Logo"
              fill
              className="object-contain object-center md:object-left"
              priority
            />
          </div>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 font-bold text-[15px] text-brand-coffee">
          <a href="#sobre" className="hover:text-brand-orange transition-colors">Sobre</a>
          <a href="#ambiente" className="hover:text-brand-orange transition-colors">Ambiente</a>
          <a href="#cardapio" className="hover:text-brand-orange transition-colors">Cardápio</a>
          <a href="#localizacao" className="hover:text-brand-orange transition-colors">Localização</a>
          <a href="#avaliacoes" className="hover:text-brand-orange transition-colors">Avaliações</a>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <a
            href="https://www.google.com/maps/search/?api=1&query=MG-424%2C%20119%20-%20Lagoa%20dos%20Mares%2C%20Confins%20-%20MG%2C%2033500-000"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-brand-orange hover:bg-[#A84F28] text-white px-5 py-2.5 rounded-full font-bold transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 text-[15px]"
          >
            <MapPin className="w-4 h-4" />
            Como chegar
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden relative z-50 p-2 -mr-2 text-brand-coffeeDark"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out flex flex-col md:hidden pt-24 px-6 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col gap-6 text-xl font-bold text-brand-coffeeDark">
          <a href="#sobre" onClick={() => setIsMobileMenuOpen(false)} className="border-b border-brand-woodLight/50 pb-4">Sobre</a>
          <a href="#ambiente" onClick={() => setIsMobileMenuOpen(false)} className="border-b border-brand-woodLight/50 pb-4">Ambiente</a>
          <a href="#cardapio" onClick={() => setIsMobileMenuOpen(false)} className="border-b border-brand-woodLight/50 pb-4">Cardápio</a>
          <a href="#localizacao" onClick={() => setIsMobileMenuOpen(false)} className="border-b border-brand-woodLight/50 pb-4">Localização</a>
          <a href="#avaliacoes" onClick={() => setIsMobileMenuOpen(false)} className="border-b border-brand-woodLight/50 pb-4">Avaliações</a>
        </nav>
        
        <div className="mt-8">
          <a
            href="https://www.google.com/maps/search/?api=1&query=MG-424%2C%20119%20-%20Lagoa%20dos%20Mares%2C%20Confins%20-%20MG%2C%2033500-000"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center justify-center gap-2 bg-brand-orange text-white px-6 py-4 rounded-full font-bold shadow-md w-full"
          >
            <MapPin className="w-5 h-5" />
            Como chegar
          </a>
        </div>
      </div>
    </header>
  );
}
