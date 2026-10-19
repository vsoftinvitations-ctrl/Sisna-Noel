import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import { weddingData } from "../data/weddingData";

interface GalleryItem {
  url: string;
  title: string;
  subtitle: string;
  position: string;
}

const galleryItems: GalleryItem[] = [
  {
    url: "/images/gallary1.png",
    title: `${weddingData.couple.groom} & ${weddingData.couple.bride}`,
    subtitle: "Pre-wedding Romance",
    position: "object-center",
  },
  {
    url: "/images/gallary2.png",
    title: "A Moment Together",
    subtitle: `${weddingData.couple.bride} & ${weddingData.couple.groom}`,
    position: "object-center",
  },
  {
    url: "/images/gallary3.png",
    title: "Love in Every Frame",
    subtitle: `${weddingData.couple.groom} & ${weddingData.couple.bride}`,
    position: "object-center",
  },
];

export const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-20 px-4 bg-[#FAF7F2]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <p className="text-xs tracking-[0.3em] text-[#C5A059] font-medium uppercase mb-2">
            Moments &amp; Memories
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#3A2E2B] font-semibold tracking-wide">
            WEDDING GALLERY
          </h2>
          <div className="w-16 h-[1px] bg-[#C5A059] mx-auto mt-4" />
        </motion.div>

        {/* Luxury Album Grid Layout with 3 Selected Photos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.url}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              onClick={() => setSelectedImage(item.url)}
              className="relative aspect-[3/4] rounded-sm overflow-hidden border border-[#C5A059]/30 shadow-md group cursor-pointer bg-[#FDFBF7]"
            >
              <img
                src={item.url}
                alt={item.title}
                className={`w-full h-full object-cover ${item.position} transition-transform duration-700 group-hover:scale-105`}
              />
              <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-11 h-11 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-[#3A2E2B] shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300">
                  <ZoomIn className="w-5 h-5" />
                </div>
              </div>

            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] bg-black/90 p-4 sm:p-8 flex items-center justify-center backdrop-blur-md cursor-zoom-out"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-white/80 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={selectedImage}
              alt="Enlarged photo"
              className="max-w-full max-h-[90vh] object-contain rounded-sm shadow-2xl border border-white/10"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
