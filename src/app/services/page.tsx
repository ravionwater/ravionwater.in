"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Check, ArrowLeft, X, ChevronLeft, ChevronRight, Wrench, Shield, Video } from "lucide-react";

interface ServiceItem {
  id: number;
  name: string;
  desc: string;
  features: string[];
  specs: string[];
  image: string;
  category: string;
}

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  const services: ServiceItem[] = [
    {
      id: 1,
      name: "Erection, Fitment & Support",
      desc: "Structural mechanical erection of skids, tank alignment positioning, structural support engineering, and clean utility line erection.",
      features: [
        "Skid leveling, mechanical anchoring, and alignments",
        "SS support structures (MOC SS 304/316) for loop piping",
        "Utility line connections (steam, water, air, drainage)"
      ],
      specs: ["Hygienic layouts", "Structural Integrity", "Seismic Compliance Options"],
      image: "/images/sd.jpg",
      category: "Site Erection"
    },
    {
      id: 2,
      name: "Orbital Welding Services",
      desc: "Automated high-purity orbital TIG welding of SS 316L pipelines. Integrates automatic printouts for weld logs.",
      features: [
        "Welder qualification matching ASME section IX standards",
        "Full weld identification (isometric drawing mapping)",
        "Purge oxygen monitoring down to < 10 ppm during weld"
      ],
      specs: ["ASME Sec IX certified", "Weld Logs provided", "Shield gas: Ar 99.999%"],
      image: "/images/service1.jpg",
      category: "Sanitary Welding"
    },
    {
      id: 3,
      name: "Manual TIG Welding",
      desc: "Hygienic manual TIG welding for non-standard pipe connections, vessel jackets, structural supports, and utility lines.",
      features: [
        "Certified manual TIG welders for sterile standards",
        "SS purging techniques for root run integrity",
        "Smooth internal surface grinding and post-weld clean"
      ],
      specs: ["ASME Section IX", "Certified Welders", "Root Purged"],
      image: "/images/service1.jpg",
      category: "Sanitary Welding"
    },
    {
      id: 4,
      name: "Boroscopy & Videoscopy",
      desc: "Non-destructive internal inspection of sanitary orbital welds using high-resolution video boroscopes.",
      features: [
        "High-definition video recording of weld root runs",
        "Boroscope inspection reports matching FDA validation checklists",
        "Flexible video scope inspecting deep bends and joints"
      ],
      specs: ["HD Video logs", "Weld Inspection", "FDA Audit ready"],
      image: "/images/service2.jpg",
      category: "Inspection"
    },
    {
      id: 5,
      name: "Hydrotesting & Passivation",
      desc: "Hygienic pressure testing of loops followed by chemical passivation (nitric/citric acid) to build corrosion-resistant oxide layers.",
      features: [
        "Sanitary hydrostatic loop pressure testing (up to 1.5x design pressure)",
        "Passivation according to ASTM A380/A967 guidelines",
        "TOC and conductivity rinse verification logs"
      ],
      specs: ["ASTM A380 Passivation", "Hydrotest certified", "Rinse water logs"],
      image: "/images/service2.jpg",
      category: "Treatment"
    },
    {
      id: 6,
      name: "Radiography & NDT Services",
      desc: "Non-destructive testing (NDT) including radiography and dye penetrant testing of critical weld connections.",
      features: [
        "X-ray radiographic inspection of manual vessel joints",
        "Dye penetrant test for nozzle fitments and attachments",
        "Certified NDT level II technicians for verification"
      ],
      specs: ["NDT Level II", "Radiography logs", "Weld Verification"],
      image: "/images/service2.jpg",
      category: "Inspection"
    },
    {
      id: 7,
      name: "Documentation & Validation (DQ, IQ, OQ)",
      desc: "Complete documentation lifecycle generation (Validation Master Plan, DQ, IQ, OQ) following GAMP 5 Guidelines.",
      features: [
        "Design Qualification (DQ) and material test certificates (MTR)",
        "Borescope video records, weld maps, and passivation logs",
        "IQ/OQ protocols and calibration certificates for audit"
      ],
      specs: ["FDA USP EP Auditable", "GAMP 5 Guidelines", "Validation Packages"],
      image: "/images/service1.jpg",
      category: "Validation"
    },
    {
      id: 8,
      name: "Installation & Commissioning",
      desc: "On-site skid commissioning, system loop tuning, PLC HMI interface configuration, and operator training.",
      features: [
        "On-site loop flow tuning and instrumentation setup",
        "PLC loop logic verification and system dry runs",
        "Standard Operating Procedure (SOP) design support"
      ],
      specs: ["Turnkey Handover", "Operator Training", "PLC Loop Tuning"],
      image: "/images/sd.jpg",
      category: "Site Erection"
    }
  ];

  // Auto-play slideshow logic (3-second delay)
  useEffect(() => {
    if (!selectedService || isPaused) return;

    const interval = setInterval(() => {
      setSelectedService((current) => {
        if (!current) return null;
        const currentIndex = services.findIndex((s) => s.id === current.id);
        const nextIndex = (currentIndex + 1) % services.length;
        return services[nextIndex];
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [selectedService, isPaused]);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedService) return;
    const currentIndex = services.findIndex((s) => s.id === selectedService.id);
    const nextIndex = (currentIndex + 1) % services.length;
    setSelectedService(services[nextIndex]);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedService) return;
    const currentIndex = services.findIndex((s) => s.id === selectedService.id);
    const prevIndex = (currentIndex - 1 + services.length) % services.length;
    setSelectedService(services[prevIndex]);
  };

  return (
    <div className="min-h-screen pt-28 pb-16 bg-brand-deep relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-teal/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Back Link */}
        <Link href="/" className="inline-flex items-center space-x-2 text-xs font-semibold text-brand-sky hover:text-white transition-colors mb-8 group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Home</span>
        </Link>

        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-brand-cyan uppercase bg-brand-cyan/10 border border-brand-cyan/20 px-3 py-1.5 rounded-full">
            Technical Support
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-4 uppercase">
            Our Engineering <span className="text-yellow-500">Services</span> <span className="text-emerald-400">Gallery</span>
          </h1>
          <div className="w-16 h-1 bg-brand-cyan mx-auto mt-4 rounded-full"></div>
          <p className="mt-4 text-sm text-slate-600 font-medium leading-relaxed">
            Click on any service card to view the automated slideshow gallery with descriptions changing every 3 seconds.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service) => (
            <motion.div
              key={service.id}
              onClick={() => {
                setIsPaused(false);
                setSelectedService(service);
              }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="rounded-2xl overflow-hidden glass-panel border border-slate-200/80 hover:border-emerald-400/40 shadow-lg hover:shadow-emerald-500/10 cursor-pointer flex flex-col justify-between group transition-all duration-300"
            >
              {/* Image Area */}
              <div className="relative aspect-square w-full bg-slate-50 overflow-hidden flex items-center justify-center border-b border-slate-100">
                <Image
                  src={service.image}
                  alt={`${service.name} Service India`}
                  fill
                  sizes="(max-w-768px) 100vw, 33vw"
                  className="object-contain p-6 group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 bg-white border border-slate-200 text-[9px] font-bold text-brand-cyan uppercase px-2.5 py-1 rounded-md shadow-sm">
                  {service.category}
                </span>
              </div>

              {/* Title Area */}
              <div className="py-4 px-5 bg-brand-water/20 group-hover:bg-brand-water/40 transition-colors flex items-center justify-center">
                <h3 className="text-sm font-extrabold text-slate-900 text-center leading-tight group-hover:text-brand-cyan transition-colors">
                  {service.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Detail Modal Overlay */}
      <AnimatePresence mode="wait">
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
            onClick={() => setSelectedService(null)}
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
                key={selectedService.id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="relative w-full rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row bg-white border border-slate-200 min-h-[450px]"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-5 right-5 z-35 p-2.5 rounded-full bg-white border border-slate-200 text-slate-700 hover:text-slate-900 shadow-md hover:bg-slate-50 transition-all focus:outline-none cursor-pointer active:scale-90"
                  aria-label="Close details"
                >
                  <X className="w-4 h-4" />
                </button>

                {/* Modal Image Panel (Left - White background) */}
                <div className="relative md:w-1/2 aspect-video md:aspect-auto min-h-[280px] bg-white flex items-center justify-center p-6">
                  <Image
                    src={selectedService.image}
                    alt={selectedService.name}
                    fill
                    priority
                    className="object-contain p-8 animate-pulse-slow"
                  />
                  <span className="absolute top-6 left-6 bg-white border border-slate-200 text-[10px] font-bold tracking-widest text-[#0B3D91] uppercase px-3.5 py-1.5 rounded-lg shadow-sm">
                    {selectedService.category}
                  </span>
                  
                  {/* Slideshow Progress Bar */}
                  {!isPaused && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-slate-100 overflow-hidden">
                      <motion.div 
                        key={selectedService.id}
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

                {/* Modal Content Panel (Right - Light grey background) */}
                <div className="p-8 md:w-1/2 flex flex-col justify-between bg-[#F3F4F6] border-t md:border-t-0 md:border-l border-slate-200 space-y-6">
                  <div className="space-y-4">
                    <div>
                      <h2 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
                        {selectedService.name}
                      </h2>
                      <div className="w-12 h-0.5 bg-[#0B3D91] rounded-full mt-3"></div>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed font-semibold">
                      {selectedService.desc}
                    </p>

                    {/* Checklist */}
                    <ul className="space-y-2.5">
                      {selectedService.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start text-xs text-slate-600 font-semibold">
                          <span className="flex-shrink-0 w-5 h-5 rounded-md bg-brand-teal/15 flex items-center justify-center mr-3 mt-0.5">
                            <Check className="w-3.5 h-3.5 text-[#0B3D91]" />
                          </span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Specs */}
                  <div className="pt-4 border-t border-slate-200">
                    <span className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">Technical Specs</span>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedService.specs.map((spec, sIdx) => (
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
