import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  // Container animation configuration for staggered child elements
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Time gap between consecutive child animations
        delayChildren: 0.1,
      },
    },
  };

  // Item animation configuration for smooth entry upswings
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 60, damping: 15 },
    },
  };

  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center px-6 py-20 overflow-hidden">
      {/* Framer Motion Layout Wrapper */}
      <motion.div 
        className="max-w-5xl w-full mx-auto text-center relative z-10 flex flex-col items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Decorative Festive Top Ribbon */}
        <motion.div 
          variants={itemVariants}
          className="mb-6"
        >
          <span className="text-xs md:text-sm font-bold text-[#C2125B] tracking-widest uppercase bg-[#C2125B]/5 px-4 py-1.5 rounded-full border border-[#C2125B]/10 backdrop-blur-xs shadow-xs">
            ✨ Premium Experience ✨
          </span>
        </motion.div>

        {/* Main Hero Headline */}
        <motion.h1 
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-black text-stone-900 tracking-tight uppercase leading-[0.95] mb-8"
        >
          Unleash The <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C2125B] via-amber-600 to-[#C2125B] bg-[size:200%_auto] animate-[pulse_6s_ease-in-out_infinite]">
            Extraordinary
          </span>
        </motion.h1>

        {/* Supporting Subtitle Paragraph */}
        <motion.p 
          variants={itemVariants}
          className="max-w-2xl text-base md:text-lg text-stone-600 font-medium leading-relaxed mb-12"
        >
         Welcome to MAXI, the Marketing Association of XLRI website which brings marketing knowledge to life through high-impact, disguised market research weaponized as experiential public festivals.
        </motion.p>

        {/* Dynamic Action Buttons Group */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full sm:w-auto"
        >
          {/* Primary CTA Button with Scale Hover Effects */}
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "#a00e4a" }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto px-8 py-4 bg-[#C2125B] text-white font-bold text-sm uppercase tracking-wider rounded-xl shadow-lg shadow-[#C2125B]/20 border border-transparent cursor-pointer transition-colors duration-200"
          >
            Explore Events
          </motion.button>

          {/* Secondary Button with Border Hover Effects */}
          <motion.button
            whileHover={{ scale: 1.05, borderColor: "#a00e4a", color: "#a00e4a" }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto px-8 py-4 bg-white/80 backdrop-blur-xs border border-stone-200 text-stone-800 font-bold text-sm uppercase tracking-wider rounded-xl shadow-xs cursor-pointer transition-colors duration-200"
          >
            View Partners
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}
