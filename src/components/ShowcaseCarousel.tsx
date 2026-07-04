"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";

interface ShowcaseItem {
  id: number;
  title: string;
  subtitle: string;
  category: string;
  imageSrc: string;
  description: string;
  specs: string[];
  features: string[];
}

export default function ShowcaseCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const items: ShowcaseItem[] = [
    {
      id: 1,
      title: "Purified Water (PW) Systems",
      subtitle: "RO + EDI Generation & Distribution",
      category: "PW Systems",
      imageSrc: "/images/pw_system.png",
      description: "Double pass Reverse Osmosis (RO) with Electro-Deionization (EDI) for chemical-free Purified Water generation.",
      specs: ["USP/EP PW Quality", "Conductivity < 1.3 µS/cm", "TOC < 500 ppb", "ASME BPE Standard"],
      features: [
        "Chemical-free continuous sanitization & demineralization.",
        "Fully automated hot water sanitization cycle (up to 85°C).",
        "Integrated PLC controller with 21 CFR Part 11 Audit Trail compliance."
      ]
    },
    {
      id: 2,
      title: "Water for Injection (WFI) Systems",
      subtitle: "Multi-Effect & Vapor Compression Distillation",
      category: "WFI Systems",
      imageSrc: "/images/wfi_system.png",
      description: "Produces high purity sterile water with multi-stage pyrogen and endotoxin reduction.",
      specs: ["Endotoxin < 0.25 EU/ml", "USP/EP WFI Compliant", "SS 316L EP Finish", "GAMP 5 Automation"],
      features: [
        "Vapor compression and multi-effect thermal distillation plant.",
        "Double tube-sheet design for feed water preheaters to prevent cross-contamination.",
        "High efficiency operation reducing utilities consumption."
      ]
    },
    {
      id: 3,
      title: "Pure Steam Generators (PSG)",
      subtitle: "Saturated Pure Steam for Sterilization & SIP",
      category: "Pure Steam",
      imageSrc: "/images/psg_system.png",
      description: "Generates sterile, dry saturated steam complying with EN 285 standards for autoclaves and SIP sanitization.",
      specs: ["Non-Condensables < 3.5%", "Dryness Fraction > 0.9", "EN 285 Standard", "IQ/OQ Documentation"],
      features: [
        "Centrifugal separation chamber ensures dry, high-quality steam output.",
        "Equipped with degasser column to remove non-condensable gases.",
        "Compliance with EN 285 and HTM 2010 sterilization guidelines."
      ]
    },
    {
      id: 4,
      title: "Flow Monitoring Skid",
      subtitle: "Process Valve & Sensor Calibration Loop",
      category: "PW Systems",
      imageSrc: "/images/gallery_1.png",
      description: "Sanitary diaphragm control valve with digital flow monitoring loop for precise flow regulation.",
      specs: ["ASME BPE MOC", "Digital Display", "SS 316L Piping"],
      features: [
        "High precision monitoring sensor calibration.",
        "Sanitary clamp connection for zero dead-leg design.",
        "Customizable control algorithms via SCADA integration."
      ]
    },
    {
      id: 5,
      title: "Sanitary Filtration Unit",
      subtitle: "Hygienic Membrane Filtration Housing",
      category: "Distribution Loops",
      imageSrc: "/images/gallery_2.png",
      description: "Ultra-filtration membrane multi-cartridge housing assembly for bacteria and particle retention.",
      specs: ["Bacteria Retention", "0.22 Micron Filters", "EP Finish MOC"],
      features: [
        "Hygienic mirror-polished sanitary surface finish.",
        "Integrated integrity testing ports.",
        "Compatible with CIP/SIP sanitization cycles."
      ]
    },
    {
      id: 6,
      title: "Distribution Piping Loop",
      subtitle: "High Purity Storage & Distribution Loop",
      category: "Distribution Loops",
      imageSrc: "/images/piping_loop.png",
      description: "Orbital-welded 316L stainless steel loop system for continuous high-purity water circulation.",
      specs: ["Orbital Welded", "SS 316L EP Finish", "ASME BPE Standard"],
      features: [
        "Zero dead-leg sanitary valve integration.",
        "Fully self-draining sloped pipeline design.",
        "Borescope video logs and certified weld logs provided."
      ]
    },
    {
      id: 7,
      title: "PLC Touch Control Center",
      subtitle: "SCADA HMI Touchscreen Console",
      category: "PW Systems",
      imageSrc: "/images/gallery_3.png",
      description: "HMI PLC screen with SCADA graphics for automated process flow control and real-time monitoring.",
      specs: ["GAMP 5 Compliant", "Audit Trail active", "Multi-user access"],
      features: [
        "Intuitive touchscreen interface with detailed flow diagrams.",
        "Automatic alarm escalation and notification system.",
        "Trend analysis logs for critical variables (Conductivity, TOC, Temp)."
      ]
    }
  ];

  // Auto-play timer
  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
      }, 3000); // 3 seconds delay
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isPlaying, items.length]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  const currentItem = items[currentIndex];

  return (
    <section id="gallery" className="pt-8 pb-16 relative overflow-hidden bg-brand-deep/30">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-teal/5 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <span className="text-xs font-bold tracking-widest text-brand-cyan uppercase bg-brand-cyan/10 border border-brand-cyan/20 px-3 py-1.5 rounded-full">
            State-of-the-Art Showcase
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-4">
            System & Project <span className="text-gradient-cyan-blue">Gallery</span>
          </h2>
          <div className="w-16 h-1 bg-brand-cyan mx-auto mt-4 rounded-full"></div>
          <p className="mt-4 text-sm text-brand-light font-medium">
            Browse our full range of high-purity water generation skids, distribution loops, and automation interfaces. Slides auto-rotate every 3 seconds. Hover to pause.
          </p>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative max-w-6xl mx-auto"
          onMouseEnter={() => setIsPlaying(false)}
          onMouseLeave={() => setIsPlaying(true)}
        >
          {/* Main Card */}
          <div className="min-h-[600px] lg:min-h-[480px] rounded-3xl overflow-hidden glass-panel border border-white/10 shadow-2xl relative flex flex-col lg:flex-row w-full transition-all duration-300">
            
            {/* Image Panel with AnimatePresence */}
            <div className="relative lg:w-1/2 aspect-video lg:aspect-auto min-h-[250px] lg:min-h-full bg-brand-blue/20 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentItem.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 w-full h-full"
                >
                  <Image
                    src={currentItem.imageSrc}
                    alt={currentItem.title}
                    fill
                    priority
                    sizes="(max-w-1024px) 100vw, 50vw"
                    className="object-contain p-6 group-hover:scale-[1.02] transition-transform duration-750"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-brand-deep/20 via-transparent to-transparent pointer-events-none"></div>
                  
                  {/* Category Badge */}
                  <span className="absolute top-6 left-6 bg-brand-deep/80 border border-white/10 text-brand-sky text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-lg backdrop-blur-sm shadow-md">
                    {currentItem.category}
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Content Panel with AnimatePresence */}
            <div className="p-8 sm:p-10 lg:w-1/2 flex flex-col justify-between relative bg-brand-blue/10 backdrop-blur-sm lg:border-l border-white/5">
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentItem.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6"
                >
                  {/* Header */}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                      {currentItem.title}
                    </h3>
                    <span className="text-xs font-semibold text-brand-sky block mt-1 tracking-wider">
                      {currentItem.subtitle}
                    </span>
                  </div>

                  <div className="w-12 h-0.5 bg-brand-cyan rounded-full"></div>

                  {/* Description */}
                  <p className="text-xs text-brand-light leading-relaxed">
                    {currentItem.description}
                  </p>

                  {/* Features Checklist */}
                  <ul className="space-y-3">
                    {currentItem.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-xs text-brand-light">
                        <span className="flex-shrink-0 w-4 h-4 rounded-md bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center mr-3 mt-0.5">
                          <Check className="w-3 h-3 text-brand-cyan" />
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Specifications Footer */}
                  <div className="pt-6 border-t border-white/5 flex flex-wrap gap-2">
                    {currentItem.specs.map((spec, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] sm:text-xs font-bold tracking-wider text-brand-light bg-white/5 border border-white/10 px-3 py-1 rounded-md uppercase"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Progress Bar & Controls */}
              <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                {/* Play/Pause indicator */}
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="p-2 rounded-lg text-brand-light hover:text-white hover:bg-white/5 transition-all focus:outline-none"
                  aria-label={isPlaying ? "Pause autoplay" : "Start autoplay"}
                >
                  {isPlaying ? (
                    <Pause className="w-4 h-4 text-brand-cyan animate-pulse" />
                  ) : (
                    <Play className="w-4 h-4 text-brand-light" />
                  )}
                </button>

                {/* Pagination Dots */}
                <div className="flex space-x-2">
                  {items.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                        currentIndex === idx ? "bg-brand-cyan w-6" : "bg-white/20 hover:bg-white/40"
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    ></button>
                  ))}
                </div>

                {/* Slide index */}
                <span className="text-xs font-semibold text-brand-light uppercase tracking-wider">
                  {currentIndex + 1} / {items.length}
                </span>
              </div>
            </div>
          </div>

          {/* Left Arrow Button */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 lg:-left-16 p-3 rounded-full bg-brand-deep/80 border border-white/10 text-brand-light hover:text-white hover:border-brand-cyan/50 hover:bg-brand-blue/80 shadow-lg transition-all focus:outline-none active:scale-90"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 lg:-right-16 p-3 rounded-full bg-brand-deep/80 border border-white/10 text-brand-light hover:text-white hover:border-brand-cyan/50 hover:bg-brand-blue/80 shadow-lg transition-all focus:outline-none active:scale-90"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
