import React, { useRef, useState } from "react";
import gsap from "gsap";
import confetti from "canvas-confetti";
import { weddingData } from "../data/weddingData";
import { startGlobalMusic } from "../utils/audioManager";

interface GatefoldOpeningProps {
  onOpenComplete: () => void;
}

export const GatefoldOpening: React.FC<GatefoldOpeningProps> = ({
  onOpenComplete,
}) => {
  const [isOpening, setIsOpening] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  const handleOpen = () => {
    if (isOpening) return;
    setIsOpening(true);

    // 1. Play synchronized background music
    startGlobalMusic();

    // 2. Trigger golden celebratory confetti burst
    confetti({
      particleCount: 80,
      spread: 85,
      origin: { x: 0.5, y: 0.75 },
      colors: ["#D4AF37", "#C5A059", "#FAF7F2", "#EBDAC5", "#B8860B"],
      disableForReducedMotion: true,
    });

    // 3. Smooth cinematic fadeout into main website
    const tl = gsap.timeline({
      onComplete: () => {
        onOpenComplete();
      },
    });

    tl.to(buttonRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.4,
      ease: "power2.in",
    });

    tl.to(
      containerRef.current,
      {
        opacity: 0,
        duration: 0.8,
        ease: "power2.inOut",
      },
      "-=0.1"
    );
  };

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex flex-col items-center justify-between overflow-hidden select-none"
    >
      {/* Background Couple Photo Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src="/images/bride.png?v=3"
          alt={`${weddingData.couple.bride} & ${weddingData.couple.groom}`}
          className="w-full h-full object-cover object-[center_35%] md:object-[center_30%] opacity-90 filter brightness-100"
        />
        {/* Soft Warm Luxury Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAF7F2]/20 via-[#FAF7F2]/30 to-[#FAF7F2]/70" />
      </div>

      {/* Ornate Corner Botanical Accents */}
      <div className="absolute top-6 left-6 w-16 sm:w-20 h-16 sm:h-20 opacity-40 pointer-events-none border-t border-l border-[#C5A059] p-2 z-10">
        <div className="w-full h-full border-t border-l border-[#C5A059]/50" />
      </div>
      <div className="absolute top-6 right-6 w-16 sm:w-20 h-16 sm:h-20 opacity-40 pointer-events-none border-t border-r border-[#C5A059] p-2 z-10">
        <div className="w-full h-full border-t border-r border-[#C5A059]/50" />
      </div>
      <div className="absolute bottom-6 left-6 w-16 sm:w-20 h-16 sm:h-20 opacity-40 pointer-events-none border-b border-l border-[#C5A059] p-2 z-10">
        <div className="w-full h-full border-b border-l border-[#C5A059]/50" />
      </div>
      <div className="absolute bottom-6 right-6 w-16 sm:w-20 h-16 sm:h-20 opacity-40 pointer-events-none border-b border-r border-[#C5A059] p-2 z-10">
        <div className="w-full h-full border-b border-r border-[#C5A059]/50" />
      </div>

      {/* Top Header Cue (Subtle) */}
      <div className="relative z-10 pt-10 text-center w-full px-4">
        <p className="text-[10px] sm:text-xs tracking-[0.35em] text-[#3A2E2B]/80 font-medium uppercase drop-shadow-sm">
          Wedding Invitation
        </p>
      </div>

      {/* Downside: Couple Name & ONLY 1 BUTTON "Open Invitation" — no box, text on photo */}
      <div
        ref={buttonRef}
        className="relative z-30 pb-10 sm:pb-14 text-center w-full px-4 flex flex-col items-center"
      >
        {/* Upper Writing */}
        <p className="font-cinzel text-[11px] sm:text-xs tracking-[0.3em] text-[#2C221E] font-bold uppercase mb-2" style={{textShadow:'0 1px 8px rgba(255,255,255,0.9)'}}>
          Together With Their Families
        </p>

        {/* Couple Name in Parisienne Script */}
        <h2 className="font-parisienne text-4xl sm:text-5xl text-[#2C221E] font-bold leading-tight" style={{textShadow:'0 2px 10px rgba(255,255,255,0.85)'}}>
          Sisna
        </h2>
        <p className="font-calligraphy text-2xl sm:text-3xl text-[#2C221E] my-0.5" style={{textShadow:'0 1px 8px rgba(255,255,255,0.85)'}}>
          &amp;
        </p>
        <h2 className="font-parisienne text-4xl sm:text-5xl text-[#2C221E] font-bold leading-tight" style={{textShadow:'0 2px 10px rgba(255,255,255,0.85)'}}>
          Noel
        </h2>

        {/* Divider */}
        <div className="w-24 border-t border-[#C5A059]/60 my-2.5" />

        {/* Lower Writing */}
        <p className="font-cinzel text-[10px] sm:text-[11px] tracking-[0.25em] text-[#3A2E2B] font-semibold uppercase" style={{textShadow:'0 1px 8px rgba(255,255,255,0.9)'}}>
          Request The Honour Of Your Presence
        </p>
        <p className="font-playfair text-xs sm:text-sm tracking-[0.2em] text-[#2C221E] font-bold uppercase mt-1 mb-5" style={{textShadow:'0 1px 8px rgba(255,255,255,0.9)'}}>
          30 December 2026 • Ponkunnam
        </p>

        {/* Open Invitation Button */}
        <button
          onClick={handleOpen}
          disabled={isOpening}
          className="inline-flex items-center justify-center px-8 sm:px-10 py-2.5 sm:py-3 rounded-full bg-[#3A2E2B] border border-[#C5A059] text-[#FAF7F2] hover:bg-[#C5A059] hover:text-[#2C221E] font-medium text-xs sm:text-[13px] tracking-[0.2em] uppercase shadow-lg transition-all duration-200 active:scale-95 cursor-pointer"
        >
          <span>Open Invitation</span>
        </button>
      </div>
    </div>
  );
};

export default GatefoldOpening;
