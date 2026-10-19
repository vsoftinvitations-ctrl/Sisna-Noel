import React from "react";
import { motion } from "framer-motion";
import { weddingData } from "../data/weddingData";

export const RSVPSection: React.FC = () => {
  const whatsappNumber = "919994195316";
  const message = encodeURIComponent(
    `Hi! I confirm my presence for ${weddingData.couple.brideShort} & ${weddingData.couple.groomShort}'s wedding on 30 Dec 2026 ✅`
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <section className="py-20 px-4 bg-[#FAF7F2] text-center">
      <div className="max-w-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Label */}
          <p className="text-xs tracking-[0.35em] text-[#C5A059] font-medium uppercase mb-2">
            Join the Celebration
          </p>

          {/* Heading */}
          <h2 className="font-serif text-3xl sm:text-4xl text-[#3A2E2B] font-semibold tracking-wide uppercase mb-4">
            RSVP
          </h2>

          <div className="w-16 h-[1px] bg-[#C5A059] mx-auto mb-6" />

          {/* Message */}
          <p className="font-serif text-sm sm:text-base text-[#5C534E] italic leading-relaxed mb-8">
            Kindly confirm your presence for the wedding of{" "}
            <span className="text-[#3A2E2B] not-italic font-medium">
              {weddingData.couple.bride}
            </span>{" "}
            &amp;{" "}
            <span className="text-[#3A2E2B] not-italic font-medium">
              {weddingData.couple.groom}
            </span>
          </p>

          {/* WhatsApp Button */}
          <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#25D366] text-white font-semibold text-sm tracking-wide shadow-lg hover:bg-[#1ebe5d] transition-all duration-300"
          >
            {/* WhatsApp Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Confirm My Presence
          </motion.a>

          {/* Sub note */}
          <p className="text-[11px] tracking-widest text-[#9A8E88] mt-5 uppercase">
            Tap to send via WhatsApp
          </p>
        </motion.div>
      </div>
    </section>
  );
};
