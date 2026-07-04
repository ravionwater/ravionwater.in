"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Check, ArrowLeft, X, ShieldAlert, Cpu, Settings, Wrench } from "lucide-react";

interface ProductItem {
  id: number;
  name: string;
  desc: string;
  features: string[];
  specs: string[];
  image: string;
  category: string;
}

export default function ProductsPage() {
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);

  const products: ProductItem[] = [
    {
      id: 1,
      name: "Purified Water (PW) Generation",
      desc: "FDA-compliant RO + EDI modular skids featuring chemical-free continuous demineralization and fully automated thermal sanitization loops.",
      features: [
        "Double-pass Reverse Osmosis with EDI configuration",
        "PLC control system with 21 CFR Part 11 Audit Trail",
        "Chemical-free hot water sanitization (up to 85°C)"
      ],
      specs: ["USP/EP PW Quality", "TOC < 500 ppb", "Conductivity < 1.3 µS/cm"],
      image: "/images/pw_system.png",
      category: "PW Systems"
    },
    {
      id: 2,
      name: "PW Storage & Distribution Systems",
      desc: "Hygienic storage tanks integrated with continuous loop circulation, UV sanitizers, and ozone dosing/destruction loops.",
      features: [
        "Electropolished SS 316L storage tanks (Ra < 0.4 µm)",
        "Velocity-controlled loop pumps to prevent biofilm",
        "Ozone sanitization with online TOC/O3 monitoring"
      ],
      specs: ["Zero Dead-Legs", "Continuous UV Dosing", "ASME BPE Standard"],
      image: "/images/loop.png",
      category: "Distribution"
    },
    {
      id: 3,
      name: "Multi-Column Distillation Plants (WFI)",
      desc: "Thermal distillation systems designed for high-capacity sterile water generation using multi-stage evaporation and separation of pyrogens.",
      features: [
        "Multi-effect energy efficient design (up to 8 columns)",
        "Double tube-sheet exchangers for cross-contamination safety",
        "Integrated degassing column for non-condensable gases"
      ],
      specs: ["USP/EP WFI Quality", "Endotoxin < 0.25 EU/ml", "Conductivity < 1.1 µS/cm"],
      image: "/images/wfi_system.png",
      category: "WFI Systems"
    },
    {
      id: 4,
      name: "WFI Storage & Distribution Systems",
      desc: "Hygienic distribution networks circulating Water for Injection under dynamic self-draining sloped pipelines.",
      features: [
        "Continuous hot loop circulation (above 80°C)",
        "Zero dead-leg sanitary block valves",
        "Sub-cooled loop configuration for points-of-use"
      ],
      specs: ["SS 316L EP Finish", "ASME IX Welded", "Full Borescope Logs"],
      image: "/images/system1.jpg",
      category: "Distribution"
    },
    {
      id: 5,
      name: "Pure Steam Generation Systems (PSG)",
      desc: "Sterile, pyrogen-free saturated steam generators complying with EN 285 guidelines for clean room autoclaves and SIP sterilization.",
      features: [
        "High-velocity centrifugal separation chamber",
        "Degasser column to keep non-condensables below 3.5%",
        "Rapid response variable feed water controls"
      ],
      specs: ["EN 285 Compliant", "Dryness Fraction > 0.9", "Sterile & Pyrogen-Free"],
      image: "/images/psg_system.png",
      category: "Pure Steam"
    },
    {
      id: 6,
      name: "Pure Steam Distribution Systems",
      desc: "Sanitary clean steam distribution piping networks utilizing hygienic trap assemblies and condensate coolers.",
      features: [
        "Self-draining sanitary sloped pipelines",
        "Sanitary thermodynamic and bellows steam traps",
        "Point-of-use sample cooling stations"
      ],
      specs: ["High Pressure Rated", "ASME BPE Fittings", "EPDM/PTFE Seals"],
      image: "/images/system2.jpg",
      category: "Pure Steam"
    },
    {
      id: 7,
      name: "Pretreatment Systems",
      desc: "Custom modular pretreatment filtration assemblies to shield and extend the lifecycle of downstream RO/EDI units.",
      features: [
        "Multimedia sand, activated carbon, and softener beds",
        "Ultrafiltration (UF) modular pre-barrier filters",
        "Automated backwash and regeneration cycles"
      ],
      specs: ["Raw Water Treatment", "FRP/SS Vessels", "Auto-Control Valves"],
      image: "/images/PWG.jpg",
      category: "Pretreatment"
    },
    {
      id: 8,
      name: "CIP / SIP Systems",
      desc: "Mobile or stationary Clean-in-Place and Steam-in-Place skids for chemical washing and sanitization of pharmaceutical equipment.",
      features: [
        "Multi-tank chemical recipe dosing",
        "Heat exchangers for automated temperature cycles",
        "PLC control with validation log printouts"
      ],
      specs: ["Mobile/Stationary", "Double Tube-Sheet", "Sanitary Pumps"],
      image: "/images/project.png",
      category: "PW Systems"
    },
    {
      id: 9,
      name: "All Types of SS Vessels",
      desc: "Custom storage vessels, mixing tanks, and pressure reactors designed and fabricated under sterile standards.",
      features: [
        "Jacketed and insulated vessels with cladding",
        "Sanitary magnetic stirrer integration option",
        "ASME Sec VIII pressure code compliance option"
      ],
      specs: ["SS 316L electropolished", "Ra < 0.4 µm finish", "ASME VIII Standard"],
      image: "/images/sd.jpg",
      category: "PW Systems"
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
            Hygienic Catalog
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-4">
            Our High-Purity <span className="text-gradient-cyan-blue">Products Gallery</span>
          </h1>
          <div className="w-16 h-1 bg-brand-cyan mx-auto mt-4 rounded-full"></div>
          <p className="mt-4 text-sm text-brand-light font-medium leading-relaxed">
            Click on any product image card to view detailed engineering specifications, features lists, and pharmacopoeia compliance credentials.
          </p>
        </div>

        {/* Products Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {products.map((product) => (
            <motion.div
              key={product.id}
              onClick={() => setSelectedProduct(product)}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ duration: 0.3 }}
              className="rounded-2xl overflow-hidden glass-panel border border-white/5 shadow-lg hover:shadow-2xl cursor-pointer flex flex-col justify-between group transition-all duration-300"
            >
              {/* Image Area */}
              <div className="relative aspect-square w-full bg-brand-dark/50 overflow-hidden flex items-center justify-center border-b border-white/5">
                <Image
                  src={product.image}
                  alt={`${product.name} Manufacturer India`}
                  fill
                  sizes="(max-w-768px) 100vw, 33vw"
                  className="object-contain p-6 group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 bg-brand-deep/80 border border-white/10 text-[9px] font-bold text-brand-sky uppercase px-2.5 py-1 rounded-md">
                  {product.category}
                </span>
              </div>

              {/* Title Area */}
              <div className="py-4 px-5 bg-brand-water/20 group-hover:bg-brand-water/40 transition-colors flex items-center justify-center">
                <h3 className="text-sm font-extrabold text-white text-center leading-tight group-hover:text-brand-cyan transition-colors">
                  {product.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Detail Modal Overlay */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setSelectedProduct(null)}
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
                onClick={() => setSelectedProduct(null)}
                className="absolute top-5 right-5 z-10 p-2 rounded-full bg-black/60 border border-white/10 text-brand-light hover:text-white transition-colors hover:bg-black/80 focus:outline-none"
                aria-label="Close details"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Image Panel */}
              <div className="relative md:w-1/2 aspect-video md:aspect-auto min-h-[250px] bg-brand-dark/40 border-b md:border-b-0 md:border-r border-white/5 flex items-center justify-center p-6">
                <Image
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  fill
                  className="object-contain p-8"
                />
                <span className="absolute top-6 left-6 bg-brand-deep/80 border border-white/10 text-[9px] font-bold text-brand-sky uppercase px-3 py-1.5 rounded-lg">
                  {selectedProduct.category}
                </span>
              </div>

              {/* Modal Content Panel */}
              <div className="p-8 md:w-1/2 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-black text-white leading-tight">
                      {selectedProduct.name}
                    </h2>
                    <div className="w-12 h-0.5 bg-brand-cyan rounded-full mt-3"></div>
                  </div>

                  <p className="text-xs text-brand-light leading-relaxed">
                    {selectedProduct.desc}
                  </p>

                  {/* Checklist */}
                  <ul className="space-y-2.5">
                    {selectedProduct.features.map((feature, fIdx) => (
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
                    {selectedProduct.specs.map((spec, sIdx) => (
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
