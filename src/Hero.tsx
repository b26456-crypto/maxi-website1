import React, { useState } from "react";

export default function Hero() {
  const [showLegacy, setShowLegacy] = useState(false);

  const scrollToEvents = () => {
    const eventsSection = document.querySelector("section:nth-of-type(2)");
    if (eventsSection) {
      eventsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center bg-transparent text-slate-900 px-6 md:px-12 overflow-hidden">
      {/* SVG Vector Blueprint Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none z-0">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid"
              width="24"
              height="24"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 24 0 L 0 0 0 24"
                fill="none"
                stroke="#c2125b"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12 items-center relative z-10 w-full py-16">
        {/* Left Column: Premium Typographic Layout */}
        <div className="space-y-8 text-center md:text-left md:col-span-6">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#C2125B]/10 to-amber-500/10 text-[#C2125B] px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase border border-[#C2125B]/20 backdrop-blur-md">
            <span>Est. 1971</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#C2125B] animate-pulse" />
            <span className="text-stone-600">XLRI Delhi-NCR</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-stone-900 uppercase font-sans leading-[0.95]">
            Decoding The <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C2125B] via-[#e11d48] to-amber-600">
              Consumer Mind.
            </span>
          </h1>

          <p className="text-base md:text-xl text-stone-600 font-medium max-w-xl leading-relaxed">
            The Marketing Association of XLRI brings marketing knowledge to life
            through high-impact, disguised market research weaponized as
            experiential public festivals.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
            <button
              onClick={() => setShowLegacy(true)}
              className="px-8 py-4 bg-[#C2125B] hover:bg-[#a00f4a] text-white font-bold rounded-xl text-xs uppercase tracking-widest transition-all duration-300 shadow-lg shadow-[#C2125B]/20 hover:translate-y-[-2px]"
            >
              Discover MAXI
            </button>
            <button
              onClick={scrollToEvents}
              className="px-8 py-4 bg-white/60 hover:bg-white text-stone-800 font-bold rounded-xl border border-stone-300/80 hover:border-stone-400 text-xs uppercase tracking-widest transition-all duration-300 backdrop-blur-md hover:translate-y-[-2px]"
            >
              Explore Events
            </button>
          </div>
        </div>

        {/* Right Column: Clean Editorial Fact Blocks instead of the Monitor */}
        <div className="md:col-span-6 w-full space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Fact Block 1 */}
            <div className="p-6 bg-white/60 border border-stone-200/60 rounded-2xl shadow-sm backdrop-blur-sm space-y-2">
              <span className="text-2xl">🔬</span>
              <h3 className="text-xs font-black uppercase tracking-wider text-stone-400">
                Research Framework
              </h3>
              <p className="text-base font-bold text-stone-800 leading-snug">
                Advanced disguised behavioral systems mapping clean, organic
                responses.
              </p>
            </div>

            {/* Fact Block 2 */}
            <div className="p-6 bg-white/60 border border-stone-200/60 rounded-2xl shadow-sm backdrop-blur-sm space-y-2">
              <span className="text-2xl">🎯</span>
              <h3 className="text-xs font-black uppercase tracking-wider text-stone-400">
                Target Scope
              </h3>
              <p className="text-base font-bold text-stone-800 leading-snug">
                Immersive experiential public fairs eliminating response bias
                completely.
              </p>
            </div>

            {/* Fact Block 3 (Spans full width on desktop) */}
            <div className="p-6 bg-gradient-to-br from-white/80 to-[#FCFBF7]/40 border border-stone-200/60 sm:col-span-2 rounded-2xl shadow-md backdrop-blur-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <h3 className="text-xs font-black uppercase tracking-wider text-[#C2125B]">
                  Empirical Scale
                </h3>
                <p className="text-stone-600 text-sm font-medium max-w-sm">
                  Continuous structural audits driving insights across
                  multi-generational audience footprints.
                </p>
              </div>
              <div className="shrink-0 bg-[#C2125B]/5 border border-[#C2125B]/20 px-4 py-3 rounded-xl text-center">
                <span className="block text-xl font-black text-[#C2125B]">
                  900,000+
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-stone-500">
                  Data Points Logged
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Legacy History Overlay Panel */}
      {showLegacy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-stone-950/40 backdrop-blur-xl">
          <div className="bg-[#FCFBF7]/95 border border-white/20 w-full max-w-2xl rounded-2xl shadow-2xl overflow-y-auto p-6 md:p-8 max-h-[80vh] relative">
            <div className="flex justify-between items-center border-b border-stone-200 pb-4 mb-6">
              <div>
                <span className="text-[10px] uppercase font-black tracking-widest text-[#C2125B]">
                  Our Legacy
                </span>
                <h2 className="text-2xl font-black text-stone-900 uppercase mt-0.5">
                  The MAXI History
                </h2>
              </div>
              <button
                onClick={() => setShowLegacy(false)}
                className="w-8 h-8 flex items-center justify-center rounded-xl bg-stone-200/60 hover:bg-stone-200 text-stone-800 transition-all font-bold text-sm"
              >
                ✕
              </button>
            </div>

            <div className="space-y-6 text-sm text-stone-700 leading-relaxed font-medium">
              <p>
                Founded in <strong className="text-stone-900">1971</strong>, the
                Marketing Association of XLRI (MAXI) pioneered the concept of{" "}
                <strong className="text-[#C2125B]">
                  Disguised Market Research
                </strong>{" "}
                in India, setting a precedent referenced in global academic
                circles.
              </p>
              <div className="border-l-2 border-[#C2125B]/40 pl-4 py-1 my-4 space-y-4">
                <div>
                  <h4 className="font-black text-stone-900 text-xs uppercase tracking-wider">
                    The Early Era (1970s - 1980s)
                  </h4>
                  <p className="text-xs text-stone-600 mt-0.5">
                    Created to bridge scientific academic metrics with live
                    execution, generating consumer insight fields long before
                    modern digital tracking existed.
                  </p>
                </div>
                <div>
                  <h4 className="font-black text-stone-900 text-xs uppercase tracking-wider">
                    The Mela Evolution
                  </h4>
                  <p className="text-xs text-stone-600 mt-0.5">
                    Transformed tedious surveys into immersive experiential
                    street festivals, extracting raw, clean data by tracking
                    organic behavioral feedback without participant response
                    bias.
                  </p>
                </div>
              </div>
              <p>
                Today, operating across expansive footprints including the
                high-tech XLRI Delhi-NCR framework, MAXI scales these
                traditional disciplines into real-time analytical ecosystems for
                premier Fortune 500 conglomerates.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
