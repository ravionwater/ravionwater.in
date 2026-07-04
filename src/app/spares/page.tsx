"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Check, ArrowLeft, Settings, ShieldCheck, Activity } from "lucide-react";

interface SpareItem {
  name: string;
  desc: string;
  features: string[];
  specs: string[];
  image: string;
}

export default function SparesPage() {
  const spares: SpareItem[] = [
    {
      name: "Sanitary Pipes & Fittings",
      desc: "ASME BPE certified SS 316L electropolished tubes, elbows, tees, reducers, clamps, and ferrules designed for pharmaceutical processes.",
      features: [
        "Material: SS 316L (with MTR certificates)",
        "Internal finish: electropolished Ra < 0.375 µm",
        "ASME BPE dimensions and tolerance standards"
      ],
      specs: ["SS 316L EP", "ASME BPE compliant", "Ra < 0.4 µm"],
      image: "/images/spares1.png"
    },
    {
      name: "Diaphragm Valves",
      desc: "Hygienic manual and pneumatic weir-type diaphragm valves ensuring zero dead-leg and leak-proof flow isolation.",
      features: [
        "Diaphragm: FDA approved PTFE / EPDM backing",
        "Body design: weir-type with self-draining angles",
        "Actuation: manual handwheel or pneumatic actuator with feedback"
      ],
      specs: ["FDA USP class VI", "Zero Dead-Leg", "CIP/SIP Rated"],
      image: "/images/spares1.png"
    },
    {
      name: "Sanitary Ball Valves",
      desc: "Hygienic multi-port ball valves designed for clean utility systems (e.g. compressed air, nitrogen, raw water lines).",
      features: [
        "Cavity-filled PTFE seats to prevent fluid stagnation",
        "Three-piece design for easy in-line maintenance",
        "Triclamp or orbital weld connections"
      ],
      specs: ["SS 316L MOC", "Cavity Filled", "Tri-Clamp Ends"],
      image: "/images/spares1.png"
    },
    {
      name: "Steam Accessories",
      desc: "Hygienic thermodynamic and bellows steam traps, sanitary sample valves, air vents, and vacuum breakers.",
      features: [
        "Sanitary thermodynamic trap design for rapid condensate removal",
        "Sanitary spring-loaded check valves and pressure regulators",
        "Zero dead-leg sample valves with steam sanitization port"
      ],
      specs: ["Clean Steam trap", "EP MOC", "SIP Sterilizable"],
      image: "/images/spares1.png"
    },
    {
      name: "Pumps & High Pressure Pumps",
      desc: "Hygienic centrifugal pumps for loop circulation and multi-stage high pressure vertical pumps for RO feed lines.",
      features: [
        "Centrifugal loop pumps in electropolished SS 316L",
        "Hygienic double mechanical seal with water flush port option",
        "Variable frequency drive (VFD) compatibility for loop velocity control"
      ],
      specs: ["SS 316L impeller", "VFD compatible", "Hygienic Seals"],
      image: "/images/spares2.png"
    },
    {
      name: "Membranes & EDI Modules",
      desc: "High-rejection Reverse Osmosis (RO) membranes, Ultrafiltration (UF) modules, and Electrodeionization (EDI) stacks.",
      features: [
        "Sanitary spiral-wound hot water sanitizable RO membranes",
        "Continuous EDI cells for chemical-free demineralization",
        "High silica and boron rejection characteristics"
      ],
      specs: ["RO Membranes", "EDI cells", "Hot-Water Sanitizable"],
      image: "/images/spares2.png"
    },
    {
      name: "Filters & Cartridges",
      desc: "Hygienic cartridge filter housings, sterile grade hydrophobic vent filters, and particulate/bacteria retention filter membranes.",
      features: [
        "0.22 micron sterile grade hydrophobic vent filters for storage tanks",
        "Multi-cartridge housings in electropolished SS 316L MOC",
        "Steam-sterilizable filter elements for absolute retention"
      ],
      specs: ["0.22 µm absolute", "Hydrophobic Vent", "Integrity Testable"],
      image: "/images/spares2.png"
    },
    {
      name: "UPVC Pipes & Fittings",
      desc: "Heavy-duty industrial grade UPVC piping and valves for pretreatment, chemical dosing, and soft water headers.",
      features: [
        "Schedule 80 UPVC piping with socket fusion joints",
        "Chemical resistance to chlorine, acids, and regenerants",
        "Industrial UPVC ball valves and butterfly valves"
      ],
      specs: ["Sch 80 UPVC", "Chemical Resistant", "Pretreatment Use"],
      image: "/images/spares2.png"
    },
    {
      name: "FRP Vessels",
      desc: "Corrosion-proof fiberglass reinforced plastic vessels for multimedia filtration, softeners, and carbon filter columns.",
      features: [
        "Heavy-duty PE liner wrapped with high tensile fiberglass",
        "Top and bottom threaded opening connections",
        "Compatible with multiport auto-regeneration control heads"
      ],
      specs: ["FRP Shell", "Corrosion Proof", "Max 10 bar rated"],
      image: "/images/spares2.png"
    },
    {
      name: "Sanitary Instruments",
      desc: "High-accuracy process sensors including temperature transmitters, pressure gauges, conductivity sensors, and online TOC analyzers.",
      features: [
        "Sanitary inline conductivity sensors with TC compensation",
        "Non-contact sanitary pressure transmitters with diaphragm seals",
        "Online TOC analyzers complying with USP 643 regulations"
      ],
      specs: ["TOC Analyser", "Conductivity cell", "USP 643/645 Compliant"],
      image: "/images/spares1.png"
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
            Sanitary <span className="text-gradient-cyan-blue">Spares & Components</span>
          </h1>
          <div className="w-16 h-1 bg-brand-cyan mx-auto mt-4 rounded-full"></div>
          <p className="mt-4 text-sm text-brand-light font-medium leading-relaxed">
            Maintain the validation integrity of your pure water systems with ASME BPE, FDA, and USP compliant sanitary components, valves, membranes, and instrumentation.
          </p>
        </div>

        {/* Spares Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {spares.map((spare, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              whileHover={{ y: -6 }}
              className="rounded-2xl overflow-hidden glass-panel border border-white/5 flex flex-col justify-between h-full shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              <div>
                {/* Image */}
                <div className="relative aspect-video w-full bg-brand-blue/10 overflow-hidden">
                  <Image
                    src={spare.image}
                    alt={`${spare.name} Supplier India`}
                    fill
                    sizes="(max-w-768px) 100vw, 33vw"
                    className="object-contain p-4 group-hover:scale-[1.02] transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/30 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-lg font-bold text-white leading-tight group-hover:text-brand-cyan transition-colors">
                    {spare.name}
                  </h3>
                  <p className="text-xs text-brand-light leading-relaxed">
                    {spare.desc}
                  </p>

                  {/* Checklist */}
                  <ul className="space-y-2 pt-2">
                    {spare.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start text-xs text-brand-light">
                        <span className="flex-shrink-0 w-4 h-4 rounded bg-brand-cyan/15 flex items-center justify-center mr-2 mt-0.5">
                          <Check className="w-3 h-3 text-brand-cyan" />
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Footer Specs */}
              <div className="p-6 pt-0">
                <div className="pt-4 border-t border-white/5 flex flex-wrap gap-1.5">
                  {spare.specs.map((spec, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-[9px] font-bold tracking-wider text-brand-light bg-white/5 border border-white/10 px-2 py-0.5 rounded uppercase"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
