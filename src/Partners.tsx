import React from "react";

const PARTNERS = {
  research: [
    { name: "Dabur", label: "DABUR" },
    { name: "Noise", label: "NOISE" },
    { name: "Aditya Birla Group", label: "ADITYA BIRLA GROUP" },
    { name: "AB InBev", label: "ABInBev" },
    { name: "Reckitt", label: "RECKITT" },
    { name: "Kia", label: "KIA" },
  ],
  event: [
    { name: "Unibic", label: "UNIBIC" },
    { name: "Fever FM", label: "FEVER FM" },
    { name: "InsideIIM", label: "InsideIIM.com" },
    { name: "Orion", label: "ORION" },
    { name: "Decathlon", label: "DECATHLON" },
  ],
};

export default function Partners() {
  return (
    <section className="py-20 bg-transparent text-stone-900 overflow-hidden relative border-b border-stone-200">
      {/* Top Header Block */}
      <div className="max-w-6xl mx-auto text-center mb-16 px-6">
        <span className="text-xs font-bold text-[#C2125B] tracking-widest uppercase bg-[#C2125B]/5 px-3 py-1 rounded-full border border-[#C2125B]/10">
          Our Network
        </span>
        <h2 className="text-4xl md:text-5xl font-black text-stone-900 mt-3 uppercase tracking-tight">
          Past Partners
        </h2>
      </div>

      {/* Ticker System Wrapper */}
      <div className="space-y-10">
        {/* Row 1: Research Partners (Infinite Scroll Right-to-Left) */}
        <div>
          <div className="max-w-6xl mx-auto px-6 mb-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#C2125B]">
              Research Partners
            </h3>
          </div>

          <div className="w-full relative flex overflow-x-hidden border-y border-stone-200/60 bg-white/40 backdrop-blur-md py-6">
            {/* Double mapped layout track wrapper to ensure continuous flow seamlessly */}
            <div className="flex gap-0 whitespace-nowrap minimal-ticker-wrapper">
              <div className="animate-marquee flex items-center shrink-0">
                {[...PARTNERS.research, ...PARTNERS.research].map((partner, index) => (
                  <div
                    key={`research-1-${index}`}
                    className="inline-flex items-center justify-center min-w-[160px] h-20 px-6 bg-white border border-stone-200/80 rounded-xl shadow-xs font-black text-stone-800 tracking-tight text-center text-lg hover:border-stone-400 transition-colors mx-4 select-none"
                  >
                    {partner.label || partner.name}
                  </div>
                ))}
              </div>
              <div className="animate-marquee flex items-center shrink-0" aria-hidden="true">
                {[...PARTNERS.research, ...PARTNERS.research].map((partner, index) => (
                  <div
                    key={`research-2-${index}`}
                    className="inline-flex items-center justify-center min-w-[160px] h-20 px-6 bg-white border border-stone-200/80 rounded-xl shadow-xs font-black text-stone-800 tracking-tight text-center text-lg hover:border-stone-400 transition-colors mx-4 select-none"
                  >
                    {partner.label || partner.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Row 2: Event Partners (Infinite Scroll Left-to-Right) */}
        <div>
          <div className="max-w-6xl mx-auto px-6 mb-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-amber-600">
              Event Partners
            </h3>
          </div>

          <div className="w-full relative flex overflow-x-hidden border-y border-stone-200/60 bg-white/40 backdrop-blur-md py-6">
            <div className="flex gap-0 whitespace-nowrap minimal-ticker-wrapper">
              <div className="animate-marqueeReverse flex items-center shrink-0">
                {[...PARTNERS.event, ...PARTNERS.event].map((partner, index) => (
                  <div
                    key={`event-1-${index}`}
                    className="inline-flex items-center justify-center min-w-[160px] h-20 px-6 bg-white border border-stone-200/80 rounded-xl shadow-xs font-black text-stone-800 tracking-tight text-center text-lg hover:border-stone-400 transition-colors mx-4 select-none"
                  >
                    {partner.label || partner.name}
                  </div>
                ))}
              </div>
              <div className="animate-marqueeReverse flex items-center shrink-0" aria-hidden="true">
                {[...PARTNERS.event, ...PARTNERS.event].map((partner, index) => (
                  <div
                    key={`event-2-${index}`}
                    className="inline-flex items-center justify-center min-w-[160px] h-20 px-6 bg-white border border-stone-200/80 rounded-xl shadow-xs font-black text-stone-800 tracking-tight text-center text-lg hover:border-stone-400 transition-colors mx-4 select-none"
                  >
                    {partner.label || partner.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Inline Perfect Loop CSS Injection Layer */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marqueeReverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marqueeReverse {
          animation: marqueeReverse 30s linear infinite;
        }
        .minimal-ticker-wrapper:hover .animate-marquee,
        .minimal-ticker-wrapper:hover .animate-marqueeReverse {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
