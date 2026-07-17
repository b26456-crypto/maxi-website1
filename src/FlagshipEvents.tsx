import React, { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const EVENTS_DATA = [
  {
    id: "maxi-mela",
    title: "MAXI Mela",
    category: "Flagship Fairs",
    date: "Feb 8-9, 2026",
    stats: ["1L+ Visitors", "900+ Data Points", "Experiential Marketing"],
    description:
      "MAXI Mela is a disguised marketing fair where fun-filled games secretly decode real consumer insights for partner brands. With over 1L visitors, each themed stall functions as a live behavioral experiment.",
    longDescription:
      "For over five decades, MAXI Mela has stood as the premier experiential marketing festival. By transforming rigorous data gathering models into highly engaging public fair activities, we eliminate participant response bias. Partner brands receive unadulterated consumer preference data, while visitors enjoy a flagship cultural experience.",
    timeline: [
      "09:00 AM - Stall Gates Open",
      "12:00 PM - Live Research Audits",
      "04:00 PM - Brand Interaction Hours",
      "07:00 PM - Pro-Show & Cultural Night",
    ],
    sponsors: ["Noise", "Aditya Birla Group", "AB InBev", "Kia"],
    gallery: [
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=600&q=80",
    ],
  },
  {
    id: "section-wars",
    title: "Section Wars",
    category: "Intra-College",
    date: "Oct 24-26, 2025",
    stats: ["Intense Pitches", "Midnight Audits", "Academic Glory"],
    description:
      "A relentless multi-day showdown where classroom sections compete across marketing metrics, rapid strategy briefs, and creative execution for total bragging rights.",
    longDescription:
      "Section Wars pits the brightest marketing minds of XLRI Delhi-NCR against each other in a closed-door, high-pressure ecosystem. Sections are handed live product constraints at midnight and must deliver fully integrated marketing campaigns, financial models, and operational rollouts under extreme time pressure.",
    timeline: [
      "Day 1, 10:00 PM - Case Release",
      "Day 2, 09:00 AM - Strategy Presentation R1",
      "Day 3, 02:00 AM - Midnight Pitch Audits",
      "Day 3, 04:00 PM - Grand Finale Defenses",
    ],
    sponsors: ["Unibic", "InsideIIM.com", "Decathlon"],
    gallery: [
      "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=600&q=80",
    ],
  },
];

export default function FlagshipEvents() {
  const [activeTab, setActiveTab] = useState("All");
  const [selectedEvent, setSelectedEvent] = useState<any>(null);
  
  // New minimal states required to manage form inline progression safely
  interface EventType {
  id: string;
  title: string;
  category: string;
  date: string;
  stats: string[];
  description: string;
  longDescription?: string;
}
  const [showForm, setShowForm] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", college: "" });

  useEffect(() => {
    if (selectedEvent) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      // Reset variables when modal drops completely away
      setShowForm(false);
      setIsSubmitted(false);
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedEvent]);

  const filteredEvents = useMemo(() => {
    if (activeTab === "All") return EVENTS_DATA;
    return EVENTS_DATA.filter((event) => event.category === activeTab);
  }, [activeTab]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setShowForm(false);
      setSelectedEvent(null);
      setFormData({ name: "", email: "", phone: "", college: "" });
    }, 2200);
  };

  return (
    <section className="py-20 bg-transparent text-stone-800 px-6 md:px-12 relative min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header Block */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div>
            <span className="text-xs font-bold text-[#C2125B] tracking-widest uppercase bg-[#C2125B]/5 px-3 py-1 rounded-full border border-[#C2125B]/10">
              What We Do
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-stone-900 mt-3 uppercase tracking-tight">
              Flagship Events
            </h2>
          </div>

          {/* Filter Tabs Glass */}
          <div className="flex bg-white/40 p-1.5 rounded-full border border-stone-200/80 backdrop-blur-md shadow-xs">
            {["All", "Flagship Fairs", "Intra-College"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 text-xs font-bold rounded-full uppercase tracking-wider transition-all duration-200 ${
                  activeTab === tab
                    ? "bg-[#C2125B] text-white shadow-xs"
                    : "text-stone-600 hover:text-stone-900"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Card Display */}
        <motion.div layout className="grid md:grid-cols-2 gap-8 relative z-10">
          <AnimatePresence mode="popLayout">
            {filteredEvents.map((event: any) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.35 }}
                key={event.id}
                className="group relative bg-white/40 backdrop-blur-md border border-stone-200/80 hover:border-stone-400 rounded-2xl p-6 md:p-8 flex flex-col justify-between shadow-xs hover:shadow-md transition-all duration-300"
              >
                <div>
                  <div className="flex justify-between items-center mb-4 border-b border-stone-200/40 pb-3">
                    <span className="text-[10px] uppercase tracking-widest text-[#C2125B] font-bold bg-[#C2125B]/5 px-2.5 py-1 rounded border border-[#C2125B]/10">
                      {event.category}
                    </span>
                    <span className="text-xs text-stone-500 font-semibold">
                      {event.date}
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-stone-900 uppercase tracking-tight">
                    {event.title}
                  </h3>
                  <p className="text-stone-600 mt-3 text-sm leading-relaxed font-medium line-clamp-3">
                    {event.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-200/40 flex items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {event.stats.slice(0, 2).map((stat: string, i: number) => (
                      <span
                        key={i}
                        className="text-[11px] bg-white/60 backdrop-blur-xs px-2.5 py-1 rounded border border-stone-200 text-stone-700 font-semibold shadow-3xs"
                      >
                        {stat}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => setSelectedEvent(event)}
                    className="text-xs font-bold text-white bg-[#C2125B] hover:bg-[#a00e4a] whitespace-nowrap px-5 py-2.5 rounded-xl transition-all duration-200 uppercase tracking-wider shadow-xs hover:translate-y-[-1px]"
                  >
                    Know More →
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* --- RE-ENGINEERED DYNAMIC DETAILS GLASS MODAL --- */}
      <AnimatePresence>
        {selectedEvent && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
            {/* Ambient Shadow Layer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedEvent(null)}
              className="absolute inset-0 bg-stone-950/40 backdrop-blur-xl"
            />

            {/* Modal Canvas Window */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 15 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="bg-[#FCFBF7]/90 backdrop-blur-2xl w-full max-w-4xl max-h-[85vh] rounded-2xl shadow-2xl overflow-y-auto relative z-10 border border-white/20"
            >
              {/* Header Control Header */}
              <div className="sticky top-0 bg-[#FCFBF7]/70 backdrop-blur-md px-6 py-4 border-b border-stone-200/60 flex justify-between items-center z-20">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] uppercase tracking-widest text-[#C2125B] font-bold bg-[#C2125B]/5 px-2.5 py-1 rounded border border-[#C2125B]/10">
                    {selectedEvent.category}
                  </span>
                  <span className="text-xs text-stone-500 font-bold">
                    {selectedEvent.date}
                  </span>
                </div>
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="w-8 h-8 flex items-center justify-center rounded-xl bg-stone-200/60 hover:bg-stone-200 text-stone-700 font-bold transition-all text-sm"
                  aria-label="Close modal"
                >
                  ✕
                </button>
              </div>

              {/* Dynamic Content Switching Layer based on Form State */}
              <div className="p-6 md:p-8">
                {showForm ? (
                  isSubmitted ? (
                    /* Clean Submission Confirmation Message view inside modal context */
                    <div className="py-20 text-center space-y-4 flex flex-col items-center justify-center">
                      <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500 text-emerald-600 rounded-full flex items-center justify-center text-2xl font-bold">
                        ✓
                      </div>
                      <h4 className="text-2xl font-black text-stone-900 uppercase tracking-tight">Registration Complete!</h4>
                      <p className="text-sm font-bold text-stone-500 uppercase tracking-wide">Your pass has been locked for {selectedEvent.title}.</p>
                    </div>
                  ) : (
                    /* The Structured Form view block mapping layout context cleanly */
                    <form onSubmit={handleFormSubmit} className="max-w-xl mx-auto space-y-6 py-4">
                      <div className="border-b border-stone-200/60 pb-4">
                        <span className="text-[10px] uppercase font-black tracking-widest text-amber-600">Secure Slot</span>
                        <h3 className="text-2xl font-black text-stone-900 uppercase tracking-tight mt-0.5">Event Pass</h3>
                        <p className="text-xs font-bold text-stone-400 mt-1">Registering for: <span className="text-[#C2125B] font-black">{selectedEvent.title}</span></p>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <label className="block text-[10px] font-black uppercase tracking-wider text-stone-500 mb-1.5">Full Name</label>
                          <input 
                            type="text" name="name" required value={formData.name} onChange={handleInputChange}
                            placeholder="e.g. Rahul Sharma"
                            className="w-full px-4 py-3 bg-white border border-stone-200 rounded-xl text-sm font-medium focus:outline-none focus:border-[#C2125B] focus:ring-1 focus:ring-[#C2125B] transition-all"
                          />
                        </div>

                        <div>
                          <label className="block text-[10px] font-black uppercase tracking-wider text-stone-500 mb-1.5">Email Address</label>
                          <input 
                            type="email" name="email" required value={formData.email} onChange={handleInputChange}
                            placeholder="name@xlri.ac.in"
                            className="w-full px-4 py-3 bg-white border border-stone-200 rounded-xl text-sm font-medium focus:outline-none focus:border-[#C2125B] focus:ring-1 focus:ring-[#C2125B] transition-all"
                          />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-[10px] font-black uppercase tracking-wider text-stone-500 mb-1.5">Phone Number</label>
                            <input 
                              type="tel" name="phone" required value={formData.phone} onChange={handleInputChange}
                              placeholder="98765XXXXX"
                              className="w-full px-4 py-3 bg-white border border-stone-200 rounded-xl text-sm font-medium focus:outline-none focus:border-[#C2125B] focus:ring-1 focus:ring-[#C2125B] transition-all"
                            />
                          </div>
                          <div>
                            <label className="block text-[10px] font-black uppercase tracking-wider text-stone-500 mb-1.5">Institution / Campus</label>
                            <input 
                              type="text" name="college" required value={formData.college} onChange={handleInputChange}
                              placeholder="e.g. XLRI Delhi"
                              className="w-full px-4 py-3 bg-white border border-stone-200 rounded-xl text-sm font-medium focus:outline-none focus:border-[#C2125B] focus:ring-1 focus:ring-[#C2125B] transition-all"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="pt-4 flex flex-col sm:flex-row gap-3">
                        <button 
                          type="button"
                          onClick={() => setShowForm(false)}
                          className="w-full sm:w-auto px-6 py-3 border border-stone-300 text-stone-700 font-bold rounded-xl text-xs uppercase tracking-widest hover:bg-stone-100 transition-colors"
                        >
                          Back
                        </button>
                        <button 
                          type="submit"
                          className="w-full sm:flex-1 py-3 bg-[#C2125B] hover:bg-[#a00e4a] text-white font-bold rounded-xl text-xs uppercase tracking-widest transition-all shadow-md shadow-[#C2125B]/10 hover:translate-y-[-1px]"
                        >
                          Submit Registration
                        </button>
                      </div>
                    </form>
                  )
                ) : (
                  /* Original Main Description Canvas Scroll Layout View Block */
                  <div className="space-y-8">
                    <div className="space-y-3">
                      <h3 className="text-3xl md:text-4xl font-black text-stone-900 uppercase tracking-tight">
                        {selectedEvent.title}
                      </h3>
                      <p className="text-stone-700 text-sm md:text-base leading-relaxed font-medium">
                        {selectedEvent.longDescription}
                      </p>
                    </div>

                    {/* Grid Metric Highlights */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {selectedEvent.stats.map((stat: string, i: number) => (
                        <div
                          key={i}
                          className="p-4 bg-white/50 border border-stone-200/80 rounded-xl text-center shadow-3xs"
                        >
                          <span className="block text-xl font-black text-[#C2125B]">
                            {stat.split(" ")[0]}
                          </span>
                          <span className="text-xs text-stone-500 font-bold uppercase tracking-wider">
                            {stat.split(" ").slice(1).join(" ") || "Metric"}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Split Details Section */}
                    <div className="grid md:grid-cols-2 gap-8">
                      {/* Gallery */}
                      <div className="space-y-3">
                        <h4 className="text-xs font-black text-stone-400 uppercase tracking-widest">
                          Event Archive Gallery
                        </h4>
                        <div className="grid grid-cols-2 gap-3">
                          {selectedEvent.gallery.map((imgUrl: string, i: number) => (
                            <div
                              key={i}
                              className="overflow-hidden rounded-xl border border-stone-200/80 shadow-3xs"
                            >
                              <img
                                src={imgUrl}
                                alt={`${selectedEvent.title} archive asset ${
                                  i + 1
                                }`}
                                className="w-full h-32 object-cover hover:scale-[1.04] transition-transform duration-300"
                              />
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Operational Flow Itinerary */}
                      <div className="space-y-3">
                        <h4 className="text-xs font-black text-stone-400 uppercase tracking-widest">
                          Event Itinerary Timeline
                        </h4>
                        <div className="bg-white/40 border border-stone-200/60 p-4 rounded-xl space-y-3 shadow-3xs">
                          {selectedEvent.timeline.map((item: string, i: number) => (
                            <div
                              key={i}
                              className="flex items-start gap-3 text-xs font-semibold"
                            >
                              <span className="text-[#C2125B] mt-0.5">▪</span>
                              <span className="text-stone-700 leading-tight">
                                {item}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Partners Ribbon */}
                    <div className="space-y-3 pt-2">
                      <h4 className="text-xs font-black text-stone-400 uppercase tracking-widest">
                        Strategic Brand Partners
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedEvent.sponsors.map((sponsor: string, i: number) => (
                          <span
                            key={i}
                            className="px-4 py-2 bg-white/60 border border-stone-200/60 rounded-xl text-xs font-bold text-stone-800 shadow-3xs"
                          >
                            {sponsor}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Footer Portal CTA */}
                    <div className="pt-6 border-t border-stone-200/60 flex justify-end">
                      <button
                        onClick={() => setShowForm(true)}
                        className="w-full sm:w-auto px-8 py-4 bg-[#C2125B] hover:bg-[#a00e4a] text-white font-bold rounded-xl shadow-md uppercase text-xs tracking-widest transition-all duration-200 hover:translate-y-[-1px]"
                      >
                        Register For This Event
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
