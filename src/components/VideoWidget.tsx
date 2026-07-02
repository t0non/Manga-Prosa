"use client";

import { useEffect, useRef, useState } from "react";

export default function VideoWidget() {
  const [isVisible, setIsVisible] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.5) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger once on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div 
      className={`fixed bottom-[100px] left-4 sm:bottom-6 sm:left-6 z-[9999] transition-all duration-700 ease-out ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0 pointer-events-none"
      }`}
    >
      <div className="relative group cursor-pointer hover:scale-105 transition-transform duration-300">
        
        {/* Floating Text Badge */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-orange text-white text-xs font-bold px-3 py-1 rounded-full shadow-md whitespace-nowrap z-10 uppercase tracking-wider">
          VEM PRA CÁ UAI!
        </div>

        {/* Circular Video Container */}
        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-4 border-white shadow-xl bg-brand-woodDark relative">
          <video
            ref={videoRef}
            src="/Imagem/video_restaurante2.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover scale-[1.2]"
          />
          {/* Overlay to darken slightly on hover and show a play icon if wanted, or just make it clickable */}
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
        </div>
      </div>
    </div>
  );
}
