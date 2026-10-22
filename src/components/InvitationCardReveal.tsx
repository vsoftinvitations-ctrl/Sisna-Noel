import React from "react";
import { motion } from "framer-motion";
import { weddingData } from "../data/weddingData";

export const InvitationCardReveal: React.FC = () => {
  return (
    <>
      {/* 1. ORIGINAL MOBILE & TABLET LAYOUT (100% Unchanged original card design & image) */}
      <section className="relative py-12 sm:py-20 px-4 flex justify-center bg-[#FAF7F2] lg:hidden">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative w-full max-w-2xl bg-[#FDFBF7] border border-[#C5A059]/40 p-8 sm:p-14 rounded-2xl sm:rounded-3xl shadow-xl text-center paper-card overflow-hidden"
        >
          {/* Fine Inner Double Gold Border */}
          <div className="absolute inset-3 border border-[#C5A059]/30 rounded-xl pointer-events-none z-10" />
          <div className="absolute inset-5 border border-[#C5A059]/15 rounded-lg pointer-events-none z-10" />

          {/* Ambient Bride Photo — soft background for romance */}
          <div className="absolute inset-0 rounded-2xl sm:rounded-3xl overflow-hidden pointer-events-none">
            <img
              src="/images/bride.png"
              alt=""
              aria-hidden="true"
              className="w-full h-full object-cover object-[center_20%] opacity-[0.13]"
            />
            {/* Warm cream overlay so text stays crisp */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#FDFBF7]/60 via-[#FDFBF7]/40 to-[#FDFBF7]/70" />
          </div>

          {/* Top Subtitle */}
          <div className="flex flex-col items-center justify-center mb-6">
            <p className="text-xs sm:text-sm tracking-[0.3em] text-[#C5A059] font-medium uppercase">
              With the Blessings of Our Families
            </p>
          </div>

          {/* Couple Names */}
          <div className="my-8">
            <h1 className="font-calligraphy text-4xl sm:text-6xl text-[#3A2E2B] font-normal tracking-wide leading-relaxed mb-1">
              {weddingData.couple.bride}
            </h1>
            <p className="font-calligraphy text-3xl sm:text-5xl text-[#C5A059] my-1">
              &amp;
            </p>
            <h1 className="font-calligraphy text-4xl sm:text-6xl text-[#3A2E2B] font-normal tracking-wide leading-relaxed mt-1">
              {weddingData.couple.groom}
            </h1>
          </div>

          {/* Invitation Text */}
          <div className="max-w-md mx-auto my-8">
            <p className="font-serif text-sm sm:text-lg italic text-[#5C534E] leading-relaxed">
              Request the honour of your presence as they begin their new journey together in Christ.
            </p>
          </div>

          {/* Divider with Bespoke Wax Seal */}
          <div className="flex items-center justify-center gap-4 my-6">
            <div className="w-12 sm:w-16 h-[1px] bg-[#C5A059]/40" />
            <div className="w-10 h-10 sm:w-12 sm:h-12 drop-shadow-md shrink-0">
              <img
                src="/images/wax_seal.png?v=3"
                alt={`${weddingData.couple.bride} & ${weddingData.couple.groom} Wax Seal`}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="w-12 sm:w-16 h-[1px] bg-[#C5A059]/40" />
          </div>

          {/* Event Details */}
          <div className="space-y-2">
            <p className="font-playfair text-xl sm:text-2xl font-bold tracking-widest text-[#3A2E2B]">
              {weddingData.wedding.date.toUpperCase()}
            </p>
            <p className="text-xs sm:text-sm tracking-wider text-[#C5A059] font-semibold uppercase">
              {weddingData.wedding.time}
            </p>
            <p className="font-serif text-base sm:text-xl text-[#3A2E2B] font-medium pt-2">
              {weddingData.wedding.venue}
            </p>
            <p className="text-xs sm:text-sm text-[#5C534E] tracking-wide">
              {weddingData.wedding.location}
            </p>
          </div>
        </motion.div>
      </section>

      {/* 2. DESKTOP VIEW ONLY (Full-Screen Couple Photo, Zero Square Box Design) */}
      <section className="relative min-h-screen w-full hidden lg:flex items-center justify-center overflow-hidden bg-[#FAF7F2] py-16 px-8">
        {/* Full-Screen Romantic Couple Image Layer on Desktop */}
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <img
            src="/images/bride.png?v=3"
            alt={`${weddingData.couple.bride} & ${weddingData.couple.groom}`}
            className="w-full h-full object-cover object-[center_28%] opacity-90 filter brightness-[1.02]"
          />
          {/* Soft Warm Luxury Gradient Overlay ensuring text legibility while couple is radiant */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#FAF7F2]/75 via-[#FAF7F2]/45 to-[#FAF7F2]/80" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#FDFBF7]/60 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Invitation Content - Seamless Full-Screen Typography (No Square Box, No Borders) */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 w-full max-w-4xl text-center p-8"
        >
          {/* Top Subtitle */}
          <div className="flex flex-col items-center justify-center mb-6">
            <p
              className="text-sm tracking-[0.3em] text-[#9B7E34] font-semibold uppercase"
              style={{ textShadow: "0 1px 8px rgba(255, 255, 255, 0.9)" }}
            >
              With the Blessings of Our Families
            </p>
          </div>

          {/* Couple Names */}
          <div className="my-8">
            <h1
              className="font-calligraphy text-7xl lg:text-8xl text-[#2C221E] font-normal tracking-wide leading-tight mb-1"
              style={{ textShadow: "0 2px 14px rgba(255, 255, 255, 0.95)" }}
            >
              {weddingData.couple.bride}
            </h1>
            <p
              className="font-calligraphy text-5xl lg:text-6xl text-[#C5A059] my-1"
              style={{ textShadow: "0 1px 10px rgba(255, 255, 255, 0.9)" }}
            >
              &amp;
            </p>
            <h1
              className="font-calligraphy text-7xl lg:text-8xl text-[#2C221E] font-normal tracking-wide leading-tight mt-1"
              style={{ textShadow: "0 2px 14px rgba(255, 255, 255, 0.95)" }}
            >
              {weddingData.couple.groom}
            </h1>
          </div>

          {/* Invitation Text */}
          <div className="max-w-lg mx-auto my-8">
            <p
              className="font-serif text-xl italic text-[#4A3E39] leading-relaxed"
              style={{ textShadow: "0 1px 10px rgba(255, 255, 255, 0.9)" }}
            >
              Request the honour of your presence as they begin their new journey together in Christ.
            </p>
          </div>

          {/* Divider with Bespoke Wax Seal */}
          <div className="flex items-center justify-center gap-4 my-6">
            <div className="w-24 h-[1px] bg-[#C5A059]/60" />
            <div className="w-14 h-14 drop-shadow-lg shrink-0">
              <img
                src="/images/wax_seal.png?v=3"
                alt={`${weddingData.couple.bride} & ${weddingData.couple.groom} Wax Seal`}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="w-24 h-[1px] bg-[#C5A059]/60" />
          </div>

          {/* Event Details */}
          <div className="space-y-2">
            <p
              className="font-playfair text-3xl font-bold tracking-widest text-[#2C221E]"
              style={{ textShadow: "0 1px 10px rgba(255, 255, 255, 0.9)" }}
            >
              {weddingData.wedding.date.toUpperCase()}
            </p>
            <p
              className="text-sm tracking-wider text-[#9B7E34] font-semibold uppercase"
              style={{ textShadow: "0 1px 8px rgba(255, 255, 255, 0.9)" }}
            >
              {weddingData.wedding.time}
            </p>
            <p
              className="font-serif text-2xl text-[#2C221E] font-medium pt-2"
              style={{ textShadow: "0 1px 10px rgba(255, 255, 255, 0.9)" }}
            >
              {weddingData.wedding.venue}
            </p>
            <p
              className="text-sm text-[#4A3E39] tracking-wide"
              style={{ textShadow: "0 1px 8px rgba(255, 255, 255, 0.9)" }}
            >
              {weddingData.wedding.location}
            </p>
          </div>
        </motion.div>
      </section>
    </>
  );
};
