import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { weddingData } from "../data/weddingData";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isToday: boolean;
}

export const Countdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isToday: false,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = new Date(weddingData.wedding.rawDate).getTime();
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isToday: true,
        });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds, isToday: false });
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);


  return (
    <section className="py-20 px-4 bg-[#F5EFEB] text-center relative overflow-hidden">

      {/* Ambient chapter 1 photo — brightens when countdown ends */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="/images/chapter 1.png"
          alt=""
          aria-hidden="true"
          className={`w-full h-full object-cover object-[center_30%] transition-opacity duration-1000 ${
            timeLeft.isToday ? 'opacity-[0.45]' : 'opacity-[0.28]'
          }`}
        />
        <div className={`absolute inset-0 transition-opacity duration-1000 bg-gradient-to-b ${
          timeLeft.isToday
            ? 'from-[#F5EFEB]/20 via-transparent to-[#F5EFEB]/30'
            : 'from-[#F5EFEB]/50 via-[#F5EFEB]/25 to-[#F5EFEB]/60'
        }`} />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {!timeLeft.isToday && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <p className="text-xs tracking-[0.3em] text-[#C5A059] font-medium uppercase mb-2">
            The Celebration Begins In
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#3A2E2B] font-semibold tracking-wide">
            COUNTING DOWN TO OUR SPECIAL DAY
          </h2>
          <div className="w-16 h-[1px] bg-[#C5A059] mx-auto mt-4" />
        </motion.div>
        )}

        {timeLeft.isToday ? (
          /* COMPLETION MESSAGE DISPLAYED WHEN COUNTDOWN ENDS */
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-xl mx-auto text-center relative pb-12 pt-4 absolute bottom-0 left-0 right-0"
          >
            <p className="font-italiana text-base sm:text-lg tracking-[0.3em] text-[#3A2E2B] uppercase mb-4" style={{textShadow:'0 0 20px rgba(255,255,255,1), 0 2px 8px rgba(255,255,255,0.9)'}}>
              Happily Ever After! 🤍
            </p>

            <h3 className="font-italiana text-4xl sm:text-6xl text-[#3A2E2B] font-normal leading-tight mb-4" style={{textShadow:'0 2px 14px rgba(255,255,255,0.9)'}}>
              {weddingData.couple.brideShort} &amp; {weddingData.couple.groomShort} are Married
            </h3>

            <div className="w-12 h-[1px] bg-[#C5A059]/60 mx-auto my-4" />

            <p className="font-italiana text-xl sm:text-2xl text-[#5C534E] tracking-wider font-normal" style={{textShadow:'0 1px 10px rgba(255,255,255,0.95)'}}>
              And so, their beautiful forever begins…
            </p>
          </motion.div>
        ) : (
          /* LIVE COUNTDOWN TIMER */
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-2xl mx-auto">
            {/* Days */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="paper-card p-6 rounded-sm border border-[#C5A059]/30 text-center"
            >
              <span className="font-playfair text-4xl sm:text-5xl font-medium text-[#3A2E2B] block">
                {String(timeLeft.days).padStart(2, "0")}
              </span>
              <span className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] text-[#C5A059] uppercase mt-2 block">
                Days
              </span>
            </motion.div>

            {/* Hours */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="paper-card p-6 rounded-sm border border-[#C5A059]/30 text-center"
            >
              <span className="font-playfair text-4xl sm:text-5xl font-medium text-[#3A2E2B] block">
                {String(timeLeft.hours).padStart(2, "0")}
              </span>
              <span className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] text-[#C5A059] uppercase mt-2 block">
                Hours
              </span>
            </motion.div>

            {/* Minutes */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="paper-card p-6 rounded-sm border border-[#C5A059]/30 text-center"
            >
              <span className="font-playfair text-4xl sm:text-5xl font-medium text-[#3A2E2B] block">
                {String(timeLeft.minutes).padStart(2, "0")}
              </span>
              <span className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] text-[#C5A059] uppercase mt-2 block">
                Minutes
              </span>
            </motion.div>

            {/* Seconds */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="paper-card p-6 rounded-sm border border-[#C5A059]/30 text-center"
            >
              <span className="font-playfair text-4xl sm:text-5xl font-medium text-[#3A2E2B] block">
                {String(timeLeft.seconds).padStart(2, "0")}
              </span>
              <span className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] text-[#C5A059] uppercase mt-2 block">
                Seconds
              </span>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};
