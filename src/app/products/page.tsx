"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Check, ArrowLeft, Cpu, Droplets, ShieldCheck, Layers } from "lucide-react";

interface ProductItem {
  name: string;
  desc: string;
  features: string[];
  specs: string[];
  image: string;
}

export default function ProductsPage() {
  const products: ProductItem[] = [
    {
      name: "Purified Water (PW) Generation Systems",
      desc: "FDA-compliant RO + EDI modular skids featuring chemical-free continuous demineralization and fully automated thermal sanitization loops.",
      features: [
        "Double-pass Reverse Osmosis with EDI configuration",
        "PLC control system with 21 CFR Part 11 Audit Trail",
        "Chemical-free hot water sanitization (up to 85°C)"
      ],
      specs: ["USP/EP PW Quality", "TOC < 500 ppb", "Conductivity < 1.3 µS/cm"],
      image: "/images/pw_system.png"
    },
    {
      name: "PW Storage & Distribution Systems",
      desc: "Hygienic storage tanks integrated with continuous loop circulation, UV sanitizers, and ozone dosing/destruction loops.",
      features: [
        "Electropolished SS 316L storage tanks (Ra < 0.4 µm)",
        "Velocity-controlled loop pumps to prevent biofilm",
        "Ozone sanitization with online TOC/O3 monitoring"
      ],
      specs: ["Zero Dead-Legs", "Continuous UV Dosing", "ASME BPE Standard"],
      image: "/images/loop.png"
    },
    {
      name: "Multi-Column Distillation Plants (WFI)",
      desc: "Thermal distillation systems designed for high-capacity sterile water generation using multi-stage evaporation and separation of pyrogens.",
      features: [
        "Multi-effect energy efficient design (up to 8 columns)",
        "Double tube-sheet exchangers for cross-contamination safety",
        "Integrated degassing column for non-condensable gases"
      ],
      specs: ["USP/EP WFI Quality", "Endotoxin < 0.25 EU/ml", "Conductivity < 1.1 µS/cm"],
      image: "/images/wfi_system.png"
    },
    {
      name: "WFI Storage & Distribution Systems",
      desc: "Hygienic distribution networks circulating Water for Injection under dynamic self-draining sloped pipelines.",
      features: [
        "Continuous hot loop circulation (above 80°C)",
        "Zero dead-leg sanitary block valves",
        "Sub-cooled loop configuration for points-of-use"
      ],
      specs: ["SS 316L EP Finish", "ASME IX Welded", "Full Borescope Logs"],
      image: "/images/system1.jpg"
    },
    {
      name: "Pure Steam Generation Systems (PSG)",
      desc: "Sterile, pyrogen-free saturated steam generators complying with EN 285 guidelines for clean room autoclaves and SIP sterilization.",
      features: [
        "High-velocity centrifugal separation chamber",
        "Degasser column to keep non-condensables below 3.5%",
        "Rapid response variable feed water controls"
      ],
      specs: ["EN 285 Compliant", "Dryness Fraction > 0.9", "Sterile & Pyrogen-Free"],
      image: "/images/psg_system.png"
    },
    {
      name: "Pure Steam Distribution Systems",
      desc: "Sanitary clean steam distribution piping networks utilizing hygienic trap assemblies and condensate coolers.",
      features: [
        "Self-draining sanitary sloped pipelines",
        "Sanitary thermodynamic and bellows steam traps",
        "Point-of-use sample cooling stations"
      ],
      specs: ["High Pressure Rated", "ASME BPE Fittings", "EPDM/PTFE Seals"],
      image: "/images/system2.jpg"
    },
    {
      name: "Pretreatment Systems",
      desc: "Custom modular pretreatment filtration assemblies to shield and extend the lifecycle of downstream RO/EDI units.",
      features: [
        "Multimedia sand, activated carbon, and softener beds",
        "Ultrafiltration (UF) modular pre-barrier filters",
        "Automated backwash and regeneration cycles"
      ],
      specs: ["Raw Water Treatment", "FRP/SS Vessels", "Auto-Control Valves"],
      image: "/images/PWG.jpg"
    },
    {
      name: "CIP / SIP Systems",
      desc: "Mobile or stationary Clean-in-Place and Steam-in-Place skids for chemical washing and sanitization of pharmaceutical equipment.",
      features: [
        "Multi-tank chemical recipe dosing",
        "Heat exchangers for automated temperature cycles",
        "PLC control with validation log printouts"
      ],
      specs: ["Mobile/Stationary", "Double Tube-Sheet", "Sanitary Pumps"],
      image: "/images/project.png"
    },
    {
      name: "All Types of SS Vessels",
      desc: "Custom storage vessels, mixing tanks, and pressure reactors designed and fabricated under sterile standards.",
      features: [
        "Jacketed and insulated vessels with cladding",
        "Sanitary magnetic stirrer integration option",
        "ASME Sec VIII pressure code compliance option"
      ],
      specs: ["SS 316L electropolished", "Ra < 0.4 µm finish", "ASME VIII Standard"],
      image: "/images/sd.jpg"
    }
  ];

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
            Engineering Catalog
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-4">
            Our High-Purity <span className="text-gradient-cyan-blue">Products</span>
          </h1>
          <div className="w-16 h-1 bg-brand-cyan mx-auto mt-4 rounded-full"></div>
          <p className="mt-4 text-sm text-brand-light font-medium leading-relaxed">
            From basic pretreatment filtration skids to highly automated multi-effect WFI plants and clean steam systems, our products comply with FDA, USP, and EP pharmacopoeia benchmarks.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, idx) => (
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
                    src={product.image}
                    alt={`${product.name} Manufacturer India`}
                    fill
                    sizes="(max-w-768px) 100vw, 33vw"
                    className="object-contain p-4 group-hover:scale-[1.02] transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/30 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-lg font-bold text-white leading-tight group-hover:text-brand-cyan transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-xs text-brand-light leading-relaxed">
                    {product.desc}
                  </p>

                  {/* Checklist */}
                  <ul className="space-y-2 pt-2">
                    {product.features.map((feature, fIdx) => (
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
                  {product.specs.map((spec, sIdx) => (
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
