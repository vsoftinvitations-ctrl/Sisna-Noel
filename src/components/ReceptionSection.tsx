import React from "react";
import { motion } from "framer-motion";
import { MapPin, Calendar, Clock } from "lucide-react";
import { weddingData } from "../data/weddingData";

export const ReceptionSection: React.FC = () => {
  return (
    <section id="reception" className="py-10 sm:py-20 px-4 bg-[#F5EFEB]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="paper-card rounded-xl sm:rounded-sm overflow-hidden border border-[#C5A059]/40 grid grid-cols-1 md:grid-cols-12 shadow-xl"
        >
          {/* Details Column */}
          <div className="md:col-span-6 p-5 sm:p-10 flex flex-col justify-between text-center md:text-left bg-[#FDFBF7] order-2 md:order-1">
            <div>
              <p className="text-[10px] sm:text-xs tracking-[0.25em] sm:tracking-[0.3em] text-[#C5A059] font-medium uppercase mb-1 sm:mb-2">
                Festive Gathering
              </p>
              <h2 className="font-serif text-2xl sm:text-4xl text-[#3A2E2B] font-semibold tracking-wide mb-4 sm:mb-6">
                WEDDING RECEPTION
              </h2>

              <div className="space-y-2.5 sm:space-y-4 mb-5 sm:mb-8 text-[#3A2E2B]">
                <div className="flex items-center justify-center md:justify-start gap-2.5 sm:gap-3">
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-[#C5A059]" />
                  <span className="font-serif text-base sm:text-lg font-medium">
                    {weddingData.reception.date}
                  </span>
                </div>

                <div className="flex items-center justify-center md:justify-start gap-2.5 sm:gap-3">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-[#C5A059]" />
                  <span className="font-sans text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#C5A059]">
                    {weddingData.reception.time}
                  </span>
                </div>

                <div className="flex items-start justify-center md:justify-start gap-2.5 sm:gap-3 pt-1 sm:pt-2">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#C5A059] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-[#3A2E2B]">
                      {weddingData.reception.venue}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#5C534E]">
                      {weddingData.reception.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Link Button */}
            <a
              href={weddingData.reception.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-[#FAF7F2] border border-[#C5A059] text-[#3A2E2B] font-medium text-[11px] sm:text-xs tracking-widest uppercase hover:bg-[#C5A059] hover:text-white transition-all duration-300 shadow-sm"
            >
              <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>View Reception Location</span>
            </a>
          </div>

          {/* Illustration Column */}
          <div className="md:col-span-6 relative h-64 sm:h-80 md:h-auto min-h-[220px] overflow-hidden border-b md:border-b-0 md:border-l border-[#C5A059]/20 bg-[#FDFBF7] order-1 md:order-2">
            <img
              src="/images/reception_art.png"
              alt={weddingData.reception.venue}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
