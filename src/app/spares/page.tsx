"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Check, ArrowLeft, X, Settings, Layers, Eye } from "lucide-react";

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
      image: "/images/spares1.png",
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
      image: "/images/spares1.png",
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
      image: "/images/spares1.png",
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
      image: "/images/spares2.png",
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
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-4">
            Sanitary <span className="text-gradient-cyan-blue">Spares Gallery</span>
          </h1>
          <div className="w-16 h-1 bg-brand-cyan mx-auto mt-4 rounded-full"></div>
          <p className="mt-4 text-sm text-brand-light font-medium leading-relaxed">
            Click on any spare component card to view detailed specifications, technical parameters, and material descriptions.
          </p>
        </div>

        {/* Spares Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {spares.map((spare) => (
            <motion.div
              key={spare.id}
              onClick={() => setSelectedSpare(spare)}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ duration: 0.3 }}
              className="rounded-2xl overflow-hidden glass-panel border border-white/5 shadow-lg hover:shadow-2xl cursor-pointer flex flex-col justify-between group transition-all duration-300"
            >
              {/* Image Area */}
              <div className="relative aspect-square w-full bg-brand-dark/50 overflow-hidden flex items-center justify-center border-b border-white/5">
                <Image
                  src={spare.image}
                  alt={`${spare.name} Supplier India`}
                  fill
                  sizes="(max-w-768px) 100vw, 33vw"
                  className="object-contain p-6 group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 bg-brand-deep/80 border border-white/10 text-[9px] font-bold text-brand-sky uppercase px-2.5 py-1 rounded-md">
                  {spare.category}
                </span>
              </div>

              {/* Title Area */}
              <div className="py-4 px-5 bg-brand-water/20 group-hover:bg-brand-water/40 transition-colors flex items-center justify-center">
                <h3 className="text-sm font-extrabold text-white text-center leading-tight group-hover:text-brand-cyan transition-colors">
                  {spare.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Detail Modal Overlay */}
      <AnimatePresence>
        {selectedSpare && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setSelectedSpare(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative max-w-4xl w-full rounded-3xl overflow-hidden glass-panel border border-white/10 shadow-2xl flex flex-col md:flex-row bg-[#08101E] min-h-[450px]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedSpare(null)}
                className="absolute top-5 right-5 z-10 p-2 rounded-full bg-black/60 border border-white/10 text-brand-light hover:text-white transition-colors hover:bg-black/80 focus:outline-none"
                aria-label="Close details"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Image Panel */}
              <div className="relative md:w-1/2 aspect-video md:aspect-auto min-h-[250px] bg-brand-dark/40 border-b md:border-b-0 md:border-r border-white/5 flex items-center justify-center p-6">
                <Image
                  src={selectedSpare.image}
                  alt={selectedSpare.name}
                  fill
                  className="object-contain p-8"
                />
                <span className="absolute top-6 left-6 bg-brand-deep/80 border border-white/10 text-[9px] font-bold text-brand-sky uppercase px-3 py-1.5 rounded-lg">
                  {selectedSpare.category}
                </span>
              </div>

              {/* Modal Content Panel */}
              <div className="p-8 md:w-1/2 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-black text-white leading-tight">
                      {selectedSpare.name}
                    </h2>
                    <div className="w-12 h-0.5 bg-brand-cyan rounded-full mt-3"></div>
                  </div>

                  <p className="text-xs text-brand-light leading-relaxed">
                    {selectedSpare.desc}
                  </p>

                  {/* Checklist */}
                  <ul className="space-y-2.5">
                    {selectedSpare.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start text-xs text-brand-light">
                        <span className="flex-shrink-0 w-4 h-4 rounded bg-brand-cyan/15 flex items-center justify-center mr-3 mt-0.5">
                          <Check className="w-3 h-3 text-brand-cyan" />
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Specs */}
                <div className="pt-4 border-t border-white/5">
                  <span className="block text-[10px] font-bold text-brand-medium uppercase tracking-wider mb-2">Technical Specs</span>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedSpare.specs.map((spec, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[9px] font-bold tracking-wider text-brand-light bg-white/5 border border-white/10 px-2.5 py-1 rounded uppercase"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
