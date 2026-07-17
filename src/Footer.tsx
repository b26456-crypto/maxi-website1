import React from "react";

export default function Footer() {
  return (
    <div className="w-full relative z-10 mt-20">
      {/* --- FACULTY COORDINATOR SECTION --- */}
      <div className="max-w-4xl mx-auto px-6 mb-16">
        <div className="relative bg-white/80 border border-stone-200/80 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 shadow-xl shadow-stone-200/40 backdrop-blur-md transition-transform hover:scale-[1.01] duration-300 before:absolute before:inset-0 before:rounded-2xl before:border-b-4 before:border-r-4 before:border-[#C2125B]/20 before:-z-10">
          {/* Circular Image Container with Gradient Ring */}
          <div className="relative w-32 h-32 md:w-36 md:h-36 rounded-full p-1 bg-gradient-to-tr from-[#C2125B] to-amber-500 shrink-0 shadow-lg">
            <div className="w-full h-full rounded-full overflow-hidden bg-stone-100">
              {/* Using the direct placeholder image source matching the headshot */}
            </div>
          </div>

          {/* Profile Details */}
          <div className="flex-1 text-center md:text-left space-y-2">
            {/* Split Decorative Top Accent Bar */}
            <div className="w-24 h-1.5 bg-gradient-to-r from-[#C2125B] to-amber-500 rounded-full mx-auto md:mx-0 mb-3" />

            <h3 className="text-2xl md:text-3xl font-black text-stone-900 tracking-tight uppercase">
              Dr. Narasimhan Rajkumar
            </h3>
            <p className="text-sm md:text-base font-bold text-stone-500 uppercase tracking-wide">
              Faculty Coordinator,{" "}
              <span className="text-[#C2125B]">MAXI Delhi-NCR</span>
            </p>
          </div>
        </div>
      </div>

      {/* --- PREMIUM DARK FOOTER CONTAINER --- */}
      <footer className="w-full bg-[#141517] text-stone-300 border-t-4 border-[#C2125B] pt-16 pb-8 px-6 md:px-12 relative overflow-hidden">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/5">
          {/* Column 1: Brand & Identity */}
          <div className="md:col-span-4 space-y-4">
            <div className="text-2xl font-black text-white tracking-tighter flex items-center gap-1">
              {/* Custom Vector geometric markup replicating the stylized MAXI block logo */}
              <svg
                className="h-8 fill-white"
                viewBox="0 0 160 40"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 40V0h12l14 20L40 0h12v40h-10V16L29 34h-6L10 16v24H0zm60 0L74 0h11l14 40h-11l-3-10H73l-3 10H60zm17-18l-4-12-4 12h8zm31 18l12-18-11-22h12l5 12 5-12h12L121 22l12 18h-12l-6-11-6 11h-11zm24 0V0h10v40h-10z" />
              </svg>
            </div>
            <p className="text-xs text-stone-400 max-w-xs font-medium leading-relaxed">
              The oldest co-curricular committee at XLRI. Pioneering disguised
              research and fostering marketing excellence.
            </p>
          </div>

          {/* Column 2: Exact Contact Details */}
          <div className="md:col-span-5 space-y-4">
            <h4 className="text-xs font-black uppercase tracking-widest text-amber-500">
              Contact
            </h4>
            <ul className="space-y-3 text-xs font-medium text-stone-400">
              <li className="flex items-start gap-3">
                <span className="text-stone-500 mt-0.5">📍</span>
                <span>XLRI Delhi-NCR Campus, Untloda, Haryana 124103</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-stone-500">✉️</span>
                <a
                  href="mailto:maxidelhi@xlri.ac.in"
                  className="hover:text-white transition-colors"
                >
                  maxidelhi@xlri.ac.in
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-stone-500 mt-0.5">📞</span>
                <div>
                  <p>
                    Sarang Kawade -{" "}
                    <span className="text-stone-300 font-bold">
                      (mobile number)
                    </span>
                  </p>
                  <p className="mt-0.5">
                    Shauryadeep Lall -{" "}
                    <span className="text-stone-300 font-bold">
                      (mobile number)
                    </span>
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 3: Social Infrastructure */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-black uppercase tracking-widest text-amber-500">
              Follow on Social Media
            </h4>
            <div className="flex items-center gap-3">
              <a
                href="#linkedin"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-stone-400 hover:bg-[#C2125B] hover:text-white hover:border-[#C2125B] transition-all duration-300 font-bold text-sm"
              >
                in
              </a>
              <a
                href="#instagram"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-stone-400 hover:bg-[#C2125B] hover:text-white hover:border-[#C2125B] transition-all duration-300 font-bold text-sm"
              >
                📷
              </a>
              <a
                href="#youtube"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-stone-400 hover:bg-[#C2125B] hover:text-white hover:border-[#C2125B] transition-all duration-300 font-bold text-sm"
              >
                ▶
              </a>
            </div>
          </div>
        </div>

        {/* System Credits Bottom Row */}
        <div className="max-w-6xl mx-auto pt-8 text-center space-y-1.5 text-[11px] text-stone-500 font-medium">
          <p>© 2026 Marketing Association of XLRI. All rights reserved.</p>
          <p className="text-stone-600">Designed with Passion.</p>
        </div>
      </footer>
    </div>
  );
}
