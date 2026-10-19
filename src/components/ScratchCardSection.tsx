import React, { useRef, useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { Eye } from "lucide-react";
import { weddingData } from "../data/weddingData";

type TabId = "note";

export const ScratchCardSection: React.FC = () => {
  const activeTab: TabId = "note";
  const [revealedCards, setRevealedCards] = useState<Record<TabId, boolean>>({
    note: false,
  });
  const [isScratching, setIsScratching] = useState(false);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const lastPointRef = useRef<{ x: number; y: number } | null>(null);

  // Initialize and paint the metallic gold scratch layer for current card
  const initFoil = useCallback(() => {
    if (revealedCards[activeTab]) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;

    // Reset composite mode
    ctx.globalCompositeOperation = "source-over";

    // Rich metallic brushed gold gradient
    const grad = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    grad.addColorStop(0, "#C5A059");
    grad.addColorStop(0.25, "#E2C37B");
    grad.addColorStop(0.5, "#F7E7B4");
    grad.addColorStop(0.75, "#D4AF37");
    grad.addColorStop(1, "#A07E36");

    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Subtle metallic stipple / brushed pattern overlay
    ctx.fillStyle = "rgba(255, 255, 255, 0.12)";
    for (let i = 0; i < canvas.width; i += 4) {
      ctx.fillRect(i, 0, 1.5, canvas.height);
    }

    // Outer decorative border on foil
    ctx.strokeStyle = "rgba(255, 248, 220, 0.4)";
    ctx.lineWidth = 2;
    ctx.strokeRect(10, 10, canvas.width - 20, canvas.height - 20);

    ctx.strokeStyle = "rgba(255, 248, 220, 0.25)";
    ctx.lineWidth = 1;
    ctx.strokeRect(16, 16, canvas.width - 32, canvas.height - 32);

    // Foil Monogram & Text
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    // Golden seal circle
    ctx.beginPath();
    ctx.arc(centerX, centerY - 24, 38, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(160, 126, 54, 0.35)";
    ctx.fill();
    ctx.strokeStyle = "rgba(255, 255, 255, 0.6)";
    ctx.lineWidth = 1.5;
    ctx.stroke();

    // Monogram Initials
    ctx.font = 'normal 28px "Alex Brush", "Pinyon Script", cursive';
    ctx.fillStyle = "#FAF7F2";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.shadowColor = "rgba(0, 0, 0, 0.3)";
    ctx.shadowBlur = 4;
    ctx.fillText(weddingData.couple.initials, centerX, centerY - 24);

    // Call to action
    ctx.shadowBlur = 2;
    ctx.font = '600 13px "Inter", sans-serif';
    ctx.fillStyle = "#FAF7F2";
    ctx.fillText("✨ SCRATCH WITH FINGER OR CURSOR ✨", centerX, centerY + 36);

    ctx.font = '400 11px "Inter", sans-serif';
    ctx.fillStyle = "rgba(250, 247, 242, 0.85)";
    ctx.fillText("Rub to unveil the secret surprise", centerX, centerY + 56);
  }, [activeTab, revealedCards]);

  // Set up canvas when tab changes or component mounts (only if current card is not yet scratched)
  useEffect(() => {
    if (revealedCards[activeTab]) return;

    // slight delay to let layout compute exact pixel dimensions
    const timer = setTimeout(() => {
      initFoil();
    }, 60);

    const handleResize = () => {
      if (!revealedCards[activeTab]) {
        initFoil();
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", handleResize);
    };
  }, [activeTab, initFoil, revealedCards]);

  const triggerRevealCelebration = useCallback((tab?: TabId) => {
    const targetTab = tab || activeTab;
    setRevealedCards((prev) => ({ ...prev, [targetTab]: true }));

    // Golden Sparkle Confetti Blast
    confetti({
      particleCount: 75,
      spread: 70,
      origin: { y: 0.65 },
      colors: ["#D4AF37", "#C5A059", "#FAF7F2", "#E8D5B5", "#B8860B"],
      disableForReducedMotion: true,
    });
  }, [activeTab]);

  // Check how much of the foil has been scratched away on current card
  const calculateProgress = () => {
    const canvas = canvasRef.current;
    if (!canvas || revealedCards[activeTab]) return;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

    try {
      const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imgData.data;
      let clearPixels = 0;
      // Sample every 32nd pixel (stride of 8 in 4-byte RGBA) for fast 60fps performance
      const stride = 32;
      const totalSampled = data.length / stride;

      for (let i = 3; i < data.length; i += stride) {
        if (data[i] === 0) {
          clearPixels++;
        }
      }

      const percent = Math.round((clearPixels / totalSampled) * 100);

      // When more than 40% is scratched on this card, celebrate and auto-reveal this card!
      if (percent >= 40 && !revealedCards[activeTab]) {
        triggerRevealCelebration(activeTab);
      }
    } catch {
      // ignore security exceptions if any
    }
  };

  // Perform scratching stroke
  const scratch = (x: number, y: number) => {
    const canvas = canvasRef.current;
    if (!canvas || revealedCards[activeTab]) return;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

    ctx.globalCompositeOperation = "destination-out";
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.lineWidth = 44; // comfortable scratch brush

    ctx.beginPath();
    if (lastPointRef.current) {
      ctx.moveTo(lastPointRef.current.x, lastPointRef.current.y);
      ctx.lineTo(x, y);
    } else {
      ctx.arc(x, y, 22, 0, Math.PI * 2);
    }
    ctx.stroke();

    lastPointRef.current = { x, y };
  };

  // Touch & Mouse coordinates extractor
  const getCoordinates = (e: React.MouseEvent | React.TouchEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();

    if ("touches" in e) {
      const touch = e.touches[0];
      return {
        x: touch.clientX - rect.left,
        y: touch.clientY - rect.top,
      };
    }
    return {
      x: (e as React.MouseEvent).clientX - rect.left,
      y: (e as React.MouseEvent).clientY - rect.top,
    };
  };

  const handleStart = (e: React.MouseEvent | React.TouchEvent) => {
    if (revealedCards[activeTab]) return;
    setIsScratching(true);
    const coords = getCoordinates(e);
    lastPointRef.current = coords;
    scratch(coords.x, coords.y);
  };

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isScratching || revealedCards[activeTab]) return;
    const coords = getCoordinates(e);
    scratch(coords.x, coords.y);
  };

  const handleEnd = () => {
    setIsScratching(false);
    lastPointRef.current = null;
    calculateProgress();
  };

  return (
    <section id="scratch" className="py-20 px-4 bg-[#FAF7F2] relative z-40 overflow-hidden">
      <div className="max-w-3xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#3A2E2B] font-semibold tracking-wide">
            SCRATCH TO REVEAL
          </h2>
          <p className="font-serif italic text-sm sm:text-base text-[#5C534E] mt-2 max-w-md mx-auto">
            Use your finger or cursor to scratch off the shimmering gold foil and unlock our wedding secrets.
          </p>
          <div className="w-16 h-[1px] bg-[#C5A059] mx-auto mt-4" />
        </motion.div>


        {/* Scratch Card Frame */}
        <div className="relative paper-card rounded-2xl sm:rounded-3xl border border-[#C5A059]/40 shadow-2xl p-4 sm:p-8 bg-[#FDFBF7]">
          {/* Card Canvas Container */}
          <div
            ref={containerRef}
            className="relative w-full min-h-[260px] sm:min-h-[320px] rounded-xl sm:rounded-2xl overflow-hidden border border-[#C5A059]/30 shadow-inner select-none bg-[#FDFBF7]"
          >
            {/* UNDERLYING SECRET CONTENT (Visible as user scratches) */}
            <div className="absolute inset-0 p-4 sm:p-10 flex flex-col justify-center items-center text-center">
              <AnimatePresence mode="wait">
                {activeTab === "note" && (
                  <motion.div
                    key="tab-note"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col items-center justify-center w-full space-y-2 sm:space-y-4"
                  >
                    <span className="text-[9px] sm:text-xs tracking-[0.25em] text-[#C5A059] uppercase font-semibold">
                      From Our Hearts To Yours
                    </span>

                    <h3 className="font-calligraphy text-xl sm:text-4xl text-[#3A2E2B] leading-snug">
                      Dearest Family &amp; Friends
                    </h3>

                    <p className="font-serif italic text-[11px] sm:text-base text-[#5C534E] max-w-lg leading-relaxed px-2">
                      “Having you join our sacred covenant before God fills our hearts with immense gratitude. Your prayers, blessings, and warm presence illuminate our beginning as husband and wife.”
                    </p>

                    <div className="w-12 h-[1px] bg-[#C5A059]/50" />

                    <p className="font-calligraphy text-lg sm:text-3xl text-[#C5A059]">
                      {weddingData.couple.brideShort} &amp; {weddingData.couple.groomShort}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* SCRATCH CANVAS OVERLAY */}
            <canvas
              key={activeTab}
              ref={canvasRef}
              onMouseDown={handleStart}
              onMouseMove={handleMove}
              onMouseUp={handleEnd}
              onMouseLeave={handleEnd}
              onTouchStart={handleStart}
              onTouchMove={handleMove}
              onTouchEnd={handleEnd}
              className={`absolute inset-0 w-full h-full cursor-crosshair touch-none transition-opacity duration-700 ${revealedCards[activeTab] ? "opacity-0 pointer-events-none" : "opacity-100"
                }`}
            />
          </div>

          {/* Showcase Button Below Scratch Card (Visual Cue Only - No Click Functionality) */}
          {!revealedCards[activeTab] && (
            <div className="flex items-center justify-center gap-3 sm:gap-4 mt-6">
              <button
                type="button"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#3A2E2B] text-white shadow-md cursor-default select-none pointer-events-none"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Reveal This Note</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
