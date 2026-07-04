"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Check, ArrowLeft, X, ChevronLeft, ChevronRight, Settings, Layers, Eye } from "lucide-react";

interface SpareItem {
  id: number;
  name: string;
  desc: string;
  features: string[];
  specs: string[];
  image: string;
  category: string;
}

export default function SparesPage() {
  const [selectedSpare, setSelectedSpare] = useState<SpareItem | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  const spares: SpareItem[] = [
    {
      id: 1,
      name: "Sanitary Pipes & Fittings",
      desc: "ASME BPE certified SS 316L electropolished tubes, elbows, tees, reducers, clamps, and ferrules designed for pharmaceutical processes.",
      features: [
        "Material: SS 316L (with MTR certificates)",
        "Internal finish: electropolished Ra < 0.375 µm",
        "ASME BPE dimensions and tolerance standards"
      ],
      specs: ["SS 316L EP", "ASME BPE compliant", "Ra < 0.4 µm"],
      image: "/images/spares1.png",
      category: "Piping"
    },
    {
      id: 2,
      name: "Diaphragm Valves",
      desc: "Hygienic weir-type diaphragm valves ensuring zero dead-leg and leak-proof flow isolation for pure water piping systems.",
      features: [
        "Diaphragm: FDA approved PTFE / EPDM backing",
        "Body design: weir-type with self-draining angles",
        "Actuation: manual handwheel or pneumatic actuator"
      ],
      specs: ["FDA USP class VI", "Zero Dead-Leg", "CIP/SIP Rated"],
      image: "/images/diaphragm_valve.png",
      category: "Valves"
    },
    {
      id: 3,
      name: "Sanitary Ball Valves",
      desc: "Hygienic multi-port ball valves designed for clean utility systems (e.g. compressed air, nitrogen, raw water lines).",
      features: [
        "Cavity-filled PTFE seats to prevent fluid stagnation",
        "Three-piece design for easy in-line maintenance",
        "Triclamp or orbital weld connections"
      ],
      specs: ["SS 316L MOC", "Cavity Filled", "Tri-Clamp Ends"],
      image: "/images/ball_valve.png",
      category: "Valves"
    },
    {
      id: 4,
      name: "Steam Accessories",
      desc: "Hygienic thermodynamic and bellows steam traps, sanitary sample valves, air vents, and vacuum breakers.",
      features: [
        "Sanitary thermodynamic trap design for rapid condensate removal",
        "Sanitary spring-loaded check valves and pressure regulators",
        "Zero dead-leg sample valves with steam sanitization port"
      ],
      specs: ["Clean Steam trap", "EP MOC", "SIP Sterilizable"],
      image: "/images/steam_accessories.png",
      category: "Clean Steam"
    },
    {
      id: 5,
      name: "Pumps & High Pressure Pumps",
      desc: "Hygienic centrifugal pumps for loop circulation and multi-stage high pressure vertical pumps for RO feed lines.",
      features: [
        "Centrifugal loop pumps in electropolished SS 316L MOC",
        "Hygienic double mechanical seal with water flush port option",
        "Variable frequency drive (VFD) compatibility for loop velocity control"
      ],
      specs: ["SS 316L impeller", "VFD compatible", "Hygienic Seals"],
      image: "/images/spares2.png",
      category: "Pumps"
    },
    {
      id: 6,
      name: "Membranes & EDI Modules",
      desc: "High-rejection Reverse Osmosis (RO) membranes, Ultrafiltration (UF) modules, and Electrodeionization (EDI) stacks.",
      features: [
        "Sanitary spiral-wound hot water sanitizable RO membranes",
        "Continuous EDI cells for chemical-free demineralization",
        "High silica and boron rejection characteristics"
      ],
      specs: ["RO Membranes", "EDI cells", "Hot-Water Sanitizable"],
      image: "/images/membranes_edi.png",
      category: "Filtration"
    },
    {
      id: 7,
      name: "Filters & Cartridges",
      desc: "Hygienic cartridge filter housings, sterile grade hydrophobic vent filters, and particulate/bacteria retention filter membranes.",
      features: [
        "0.22 micron sterile grade hydrophobic vent filters for storage tanks",
        "Multi-cartridge housings in electropolished SS 316L MOC",
        "Steam-sterilizable filter elements for absolute retention"
      ],
      specs: ["0.22 µm absolute", "Hydrophobic Vent", "Integrity Testable"],
      image: "/images/spares2.png",
      category: "Filtration"
    },
    {
      id: 8,
      name: "UPVC Pipes & Fittings",
      desc: "Heavy-duty industrial grade UPVC piping and valves for pretreatment, chemical dosing, and soft water headers.",
      features: [
        "Schedule 80 UPVC piping with socket fusion joints",
        "Chemical resistance to chlorine, acids, and regenerants",
        "Industrial UPVC ball valves and butterfly valves"
      ],
      specs: ["Sch 80 UPVC", "Chemical Resistant", "Pretreatment Use"],
      image: "/images/spares2.png",
      category: "Piping"
    },
    {
      id: 9,
      name: "FRP Vessels",
      desc: "Corrosion-proof fiberglass reinforced plastic vessels for multimedia filtration, softeners, and carbon filter columns.",
      features: [
        "PE liner wrapped with high tensile fiberglass",
        "Top and bottom threaded opening connections",
        "Compatible with multiport auto-regeneration control heads"
      ],
      specs: ["FRP Shell", "Corrosion Proof", "Max 10 bar rated"],
      image: "/images/spares2.png",
      category: "Pretreatment"
    },
    {
      id: 10,
      name: "Sanitary Instruments",
      desc: "High-accuracy process sensors including temperature transmitters, pressure gauges, conductivity sensors, and online TOC analyzers.",
      features: [
        "Sanitary inline conductivity sensors with TC compensation",
        "Non-contact sanitary pressure transmitters with diaphragm seals",
        "Online TOC analyzers complying with USP 643 regulations"
      ],
      specs: ["TOC Analyser", "Conductivity cell", "USP 643/645 Compliant"],
      image: "/images/spares1.png",
      category: "Instruments"
    }
  ];

  // Auto-play slideshow logic (3-second delay)
  useEffect(() => {
    if (!selectedSpare || isPaused) return;

    const interval = setInterval(() => {
      setSelectedSpare((current) => {
        if (!current) return null;
        const currentIndex = spares.findIndex((s) => s.id === current.id);
        const nextIndex = (currentIndex + 1) % spares.length;
        return spares[nextIndex];
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [selectedSpare, isPaused]);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedSpare) return;
    const currentIndex = spares.findIndex((s) => s.id === selectedSpare.id);
    const nextIndex = (currentIndex + 1) % spares.length;
    setSelectedSpare(spares[nextIndex]);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedSpare) return;
    const currentIndex = spares.findIndex((s) => s.id === selectedSpare.id);
    const prevIndex = (currentIndex - 1 + spares.length) % spares.length;
    setSelectedSpare(spares[prevIndex]);
  };

  return (
    <div className="min-h-screen pt-28 pb-16 bg-brand-deep relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-brand-teal/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Back Link */}
        <Link href="/" className="inline-flex items-center space-x-2 text-xs font-semibold text-brand-sky hover:text-white transition-colors mb-8 group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Home</span>
        </Link>

        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-brand-cyan uppercase bg-brand-cyan/10 border border-brand-cyan/20 px-3 py-1.5 rounded-full">
            Component Warehouse
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight mt-4 uppercase">
            Sanitary <span className="text-yellow-500">Spares</span> & <span className="text-emerald-500">Components Gallery</span>
          </h1>
          <div className="w-16 h-1 bg-brand-cyan mx-auto mt-4 rounded-full"></div>
          <p className="mt-4 text-sm text-slate-300 font-medium leading-relaxed">
            Click on any spare component card to view the automated slideshow gallery with descriptions changing every 3 seconds.
          </p>
        </div>

        {/* Spares Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {spares.map((spare) => (
            <motion.div
              key={spare.id}
              onClick={() => {
                setIsPaused(false);
                setSelectedSpare(spare);
              }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="rounded-2xl overflow-hidden glass-panel border border-white/10 hover:border-orange-400/40 shadow-lg hover:shadow-orange-500/10 cursor-pointer flex flex-col justify-between group transition-all duration-300"
            >
              {/* Image Area */}
              <div className="relative aspect-square w-full bg-white overflow-hidden flex items-center justify-center border-b border-white/5">
                <Image
                  src={spare.image}
                  alt={`${spare.name} Supplier India`}
                  fill
                  sizes="(max-w-768px) 100vw, 33vw"
                  className="object-contain p-6 group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 bg-white border border-slate-200 text-[9px] font-bold text-brand-cyan uppercase px-2.5 py-1 rounded-md shadow-sm">
                  {spare.category}
                </span>
              </div>

              {/* Title Area */}
              <div className="py-4 px-5 bg-brand-dark/40 group-hover:bg-brand-dark/70 transition-colors flex items-center justify-center">
                <h3 className="text-sm font-extrabold text-white text-center leading-tight group-hover:text-brand-cyan transition-colors">
                  {spare.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Detail Modal Overlay */}
      <AnimatePresence mode="wait">
        {selectedSpare && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
            onClick={() => setSelectedSpare(null)}
          >
            {/* Modal Container */}
            <div 
              className="relative max-w-4xl w-full flex items-center"
              onClick={(e) => e.stopPropagation()}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* Left Arrow Button */}
              <button
                onClick={handlePrev}
                className="absolute -left-4 md:-left-16 z-20 p-3 rounded-full bg-brand-cyan/20 border border-brand-cyan/40 text-brand-cyan hover:text-white hover:bg-brand-cyan/40 transition-all focus:outline-none active:scale-95 shadow-lg"
                aria-label="Previous system"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Animated Slideshow Card */}
              <motion.div
                key={selectedSpare.id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="relative w-full rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row bg-brand-dark border border-white/10 min-h-[450px]"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedSpare(null)}
                  className="absolute top-5 right-5 z-35 p-2.5 rounded-full bg-brand-deep border border-white/10 text-slate-300 hover:text-white shadow-md hover:bg-brand-dark transition-all focus:outline-none cursor-pointer active:scale-90"
                  aria-label="Close details"
                >
                  <X className="w-4 h-4" />
                </button>

                {/* Modal Image Panel (Left - White background) */}
                <div className="relative md:w-1/2 aspect-video md:aspect-auto min-h-[280px] bg-white flex items-center justify-center p-6">
                  <Image
                    src={selectedSpare.image}
                    alt={selectedSpare.name}
                    fill
                    priority
                    className="object-contain p-8 animate-pulse-slow"
                  />
                  <span className="absolute top-6 left-6 bg-white border border-slate-200 text-[10px] font-bold tracking-widest text-brand-cyan uppercase px-3.5 py-1.5 rounded-lg shadow-sm">
                    {selectedSpare.category}
                  </span>
                  
                  {/* Slideshow Progress Bar */}
                  {!isPaused && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-slate-200 overflow-hidden">
                      <motion.div 
                        key={selectedSpare.id}
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 3, ease: "linear" }}
                        className="h-full bg-gradient-to-r from-brand-teal to-brand-cyan"
                      />
                    </div>
                  )}
                  {isPaused && (
                    <span className="absolute bottom-6 left-6 text-[10px] font-bold text-amber-600 bg-white border border-slate-200 px-3.5 py-1.5 rounded-lg shadow-sm uppercase tracking-wider">
                      Slideshow Paused
                    </span>
                  )}
                </div>

                {/* Modal Content Panel (Right - Medium dark background) */}
                <div className="p-8 md:w-1/2 flex flex-col justify-between bg-brand-dark border-t md:border-t-0 md:border-l border-white/5 space-y-6">
                  <div className="space-y-4">
                    <div>
                      <h2 className="text-xl sm:text-2xl font-black text-white leading-tight">
                        {selectedSpare.name}
                      </h2>
                      <div className="w-12 h-0.5 bg-brand-cyan rounded-full mt-3"></div>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed font-semibold">
                      {selectedSpare.desc}
                    </p>

                    {/* Checklist */}
                    <ul className="space-y-2.5">
                      {selectedSpare.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start text-xs text-slate-300 font-semibold">
                          <span className="flex-shrink-0 w-5 h-5 rounded-md bg-brand-teal/15 flex items-center justify-center mr-3 mt-0.5">
                            <Check className="w-3.5 h-3.5 text-brand-cyan" />
                          </span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Specs */}
                  <div className="pt-4 border-t border-white/5">
                    <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Technical Specs</span>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedSpare.specs.map((spec, sIdx) => (
                        <span
                          key={sIdx}
                          className="text-[9px] font-bold tracking-wider text-slate-700 bg-white border border-slate-200/80 px-3 py-1.5 rounded-md uppercase shadow-sm"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right Arrow Button */}
              <button
                onClick={handleNext}
                className="absolute -right-4 md:-right-16 z-20 p-3 rounded-full bg-brand-cyan/20 border border-brand-cyan/40 text-brand-cyan hover:text-white hover:bg-brand-cyan/40 transition-all focus:outline-none active:scale-95 shadow-lg"
                aria-label="Next system"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
