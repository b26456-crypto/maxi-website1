import React from "react";

const PARTNERS = {
  research: [
    {
      name: "Dabur",
      logo: "https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?w=120&auto=format&fit=crop&q=60",
    }, // Substitute with clear logo assets
    { name: "Noise", label: "noise" },
    { name: "Aditya Birla Group", label: "ADITYA BIRLA GROUP" },
    { name: "AB InBev", label: "ABInBev" },
    { name: "Reckitt", label: "reckitt" },
    { name: "Kia", label: "KIA" },
  ],
  event: [
    { name: "Unibic", label: "UNIBIC" },
    { name: "Fever FM", label: "fever" },
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

      {/* Row 1: Research Partners (Infinite Scroll Right-to-Left) */}
      <div className="space-y-10">
        <div>
          <div className="max-w-6xl mx-auto px-6 mb-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#C2125B]">
              Research Partners
            </h3>
          </div>

          {/* Loop Container */}
          <div className="w-full relative flex overflow-x-hidden border-y border-stone-200/60 bg-white/40 backdrop-blur-md py-6">
            <div className="animate-marquee whitespace-nowrap flex gap-8 items-center minimal-ticker">
              {[
                ...PARTNERS.research,
                ...PARTNERS.research,
                ...PARTNERS.research,
              ].map((partner, index) => (
                <div
                  key={index}
                  className="inline-flex items-center justify-center min-w-[160px] h-20 px-6 bg-white border border-stone-200/80 rounded-xl shadow-xs font-black text-stone-800 tracking-tight text-center text-lg hover:border-stone-400 transition-colors mx-4"
                >
                  {partner.label || partner.name}
                </div>
              ))}
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
            <div className="animate-marqueeReverse whitespace-nowrap flex gap-8 items-center minimal-ticker">
              {[...PARTNERS.event, ...PARTNERS.event, ...PARTNERS.event].map(
                (partner, index) => (
                  <div
                    key={index}
                    className="inline-flex items-center justify-center min-w-[160px] h-20 px-6 bg-white border border-stone-200/80 rounded-xl shadow-xs font-black text-stone-800 tracking-tight text-center text-lg hover:border-stone-400 transition-colors mx-4"
                  >
                    {partner.label || partner.name}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Inject custom marquee animation styles into the page header */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.33%); }
        }
        @keyframes marqueeReverse {
          0% { transform: translateX(-33.33%); }
          100% { transform: translateX(0%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        .animate-marqueeReverse {
          animation: marqueeReverse 25s linear infinite;
        }
        .animate-marquee:hover, .animate-marqueeReverse:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
