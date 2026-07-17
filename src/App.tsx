import React from "react";
import Hero from "./Hero";
import FlagshipEvents from "./FlagshipEvents";
import Partners from "./Partners";
import Footer from "./Footer"; // 1. Import the new block

export default function App() {
  return (
    <div className="relative min-h-screen w-full bg-[#FAF7F0] text-stone-900 overflow-x-hidden antialiased">
      {/* 1. High-End Flowing Floral Vine & Damask Motif Layer */}
      <div className="absolute inset-0 opacity-[0.25] pointer-events-none select-none z-0 mix-blend-multiply">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="premium-vines"
              width="160"
              height="160"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M0,80 Q40,40 80,80 T160,80"
                fill="none"
                stroke="#dfd7c2"
                strokeWidth="1.25"
              />
              <path
                d="M0,160 Q40,120 80,160 T160,160"
                fill="none"
                stroke="#dfd7c2"
                strokeWidth="1.25"
              />
              <path
                d="M80,50 C85,25 105,25 105,45 C105,65 85,75 80,95 C75,75 55,65 55,45 C55,25 75,25 80,50 Z"
                fill="none"
                stroke="#d3c7a8"
                strokeWidth="1.5"
              />
              <path
                d="M0,130 C5,105 25,105 25,125 C25,145 5,155 0,175 C-5,155 -25,145 -25,125 C-25,105 -5,105 0,130 Z"
                fill="none"
                stroke="#d3c7a8"
                strokeWidth="1"
              />
              <path
                d="M160,130 C165,105 185,105 185,125 C185,145 165,155 160,175 C155,155 135,145 135,125 C135,105 155,105 160,130 Z"
                fill="none"
                stroke="#d3c7a8"
                strokeWidth="1"
              />
              <path
                d="M40,60 Q50,50 45,40 Q35,48 40,60 Z"
                fill="none"
                stroke="#e3dac4"
                strokeWidth="1"
              />
              <path
                d="M120,60 Q110,50 115,40 Q125,48 120,60 Z"
                fill="none"
                stroke="#e3dac4"
                strokeWidth="1"
              />
              <circle
                cx="80"
                cy="53"
                r="3"
                fill="none"
                stroke="#dfd7c2"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#premium-vines)" />
        </svg>
      </div>

      {/* 2. Micro Festive Sparkles */}
      <div className="absolute inset-0 opacity-45 pointer-events-none select-none z-0">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="festive-sparkles"
              width="240"
              height="240"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="35" cy="50" r="1.5" fill="#c2125b" opacity="0.8" />
              <circle cx="110" cy="25" r="1.2" fill="#d97706" opacity="0.7" />
              <circle cx="190" cy="95" r="1.8" fill="#059669" opacity="0.5" />
              <circle cx="70" cy="170" r="1.2" fill="#c2125b" opacity="0.6" />
              <circle cx="210" cy="190" r="1.5" fill="#d97706" opacity="0.8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#festive-sparkles)" />
        </svg>
      </div>

      {/* Main Container Content */}
      <main className="relative z-10 w-full">
        <Hero />
        <FlagshipEvents />
        <Partners />
        <Footer /> {/* 2. Rendered here below Partners */}
      </main>
    </div>
  );
}
