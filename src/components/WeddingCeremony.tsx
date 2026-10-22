import React from "react";
import { motion } from "framer-motion";
import { MapPin, Calendar, Clock } from "lucide-react";
import { weddingData } from "../data/weddingData";

export const WeddingCeremony: React.FC = () => {
  return (
    <section id="ceremony" className="py-10 sm:py-20 px-4 bg-[#FAF7F2]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="paper-card rounded-xl sm:rounded-sm overflow-hidden border border-[#C5A059]/40 grid grid-cols-1 md:grid-cols-12 shadow-xl"
        >
          {/* Illustration Column */}
          <div className="md:col-span-6 relative h-64 sm:h-80 md:h-auto min-h-[220px] overflow-hidden border-b md:border-b-0 md:border-r border-[#C5A059]/20 bg-[#FDFBF7]">
            <img
              src="/images/church_art.png"
              alt={weddingData.wedding.venue}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Details Column */}
          <div className="md:col-span-6 p-5 sm:p-10 flex flex-col justify-between text-center md:text-left bg-[#FDFBF7]">
            <div>
              <p className="text-[10px] sm:text-xs tracking-[0.25em] sm:tracking-[0.3em] text-[#C5A059] font-medium uppercase mb-1 sm:mb-2">
                Sacred Nuptial Covenant
              </p>
              <h2 className="font-serif text-2xl sm:text-4xl text-[#3A2E2B] font-semibold tracking-wide mb-4 sm:mb-6 uppercase">
                THE WEDDING CEREMONY
              </h2>

              <div className="space-y-2.5 sm:space-y-4 mb-5 sm:mb-8 text-[#3A2E2B]">
                <div className="flex items-center justify-center md:justify-start gap-2.5 sm:gap-3">
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-[#C5A059]" />
                  <span className="font-playfair text-base sm:text-lg font-semibold tracking-wide">
                    {weddingData.wedding.date}
                  </span>
                </div>

                <div className="flex items-center justify-center md:justify-start gap-2.5 sm:gap-3">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-[#C5A059]" />
                  <span className="font-sans text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#C5A059]">
                    {weddingData.wedding.time}
                  </span>
                </div>

                <div className="flex items-start justify-center md:justify-start gap-2.5 sm:gap-3 pt-1 sm:pt-2">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#C5A059] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-[#3A2E2B]">
                      {weddingData.wedding.venue}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#5C534E]">
                      {weddingData.wedding.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Link Button */}
            <a
              href={weddingData.wedding.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-[#FAF7F2] border border-[#C5A059] text-[#3A2E2B] font-medium text-[11px] sm:text-xs tracking-widest uppercase hover:bg-[#C5A059] hover:text-white transition-all duration-300 shadow-sm"
            >
              <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>View Church Location</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
