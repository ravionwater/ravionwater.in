"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Check, ArrowLeft, X, Wrench, Shield, Video } from "lucide-react";

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
          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight mt-4 uppercase">
            Our Engineering <span className="text-yellow-400">Services</span> <span className="text-emerald-400">Gallery</span>
          </h1>
          <div className="w-16 h-1 bg-brand-cyan mx-auto mt-4 rounded-full"></div>
          <p className="mt-4 text-sm text-brand-light font-medium leading-relaxed">
            Click on any service card to view detailed compliance workflows, welding standards, and on-site validation deliverables.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service) => (
            <motion.div
              key={service.id}
              onClick={() => setSelectedService(service)}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="rounded-2xl overflow-hidden glass-panel border border-white/5 hover:border-emerald-400/40 shadow-lg hover:shadow-emerald-500/10 cursor-pointer flex flex-col justify-between group transition-all duration-300"
            >
              {/* Image Area */}
              <div className="relative aspect-square w-full bg-brand-dark/50 overflow-hidden flex items-center justify-center border-b border-white/5">
                <Image
                  src={service.image}
                  alt={`${service.name} Service India`}
                  fill
                  sizes="(max-w-768px) 100vw, 33vw"
                  className="object-contain p-6 group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 bg-brand-deep/80 border border-white/10 text-[9px] font-bold text-brand-sky uppercase px-2.5 py-1 rounded-md">
                  {service.category}
                </span>
              </div>

              {/* Title Area */}
              <div className="py-4 px-5 bg-brand-water/20 group-hover:bg-brand-water/40 transition-colors flex items-center justify-center">
                <h3 className="text-sm font-extrabold text-white text-center leading-tight group-hover:text-brand-cyan transition-colors">
                  {service.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Detail Modal Overlay */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setSelectedService(null)}
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
                onClick={() => setSelectedService(null)}
                className="absolute top-5 right-5 z-10 p-2 rounded-full bg-black/60 border border-white/10 text-brand-light hover:text-white transition-colors hover:bg-black/80 focus:outline-none"
                aria-label="Close details"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Image Panel */}
              <div className="relative md:w-1/2 aspect-video md:aspect-auto min-h-[250px] bg-brand-dark/40 border-b md:border-b-0 md:border-r border-white/5 flex items-center justify-center p-6">
                <Image
                  src={selectedService.image}
                  alt={selectedService.name}
                  fill
                  className="object-contain p-8"
                />
                <span className="absolute top-6 left-6 bg-brand-deep/80 border border-white/10 text-[9px] font-bold text-brand-sky uppercase px-3 py-1.5 rounded-lg">
                  {selectedService.category}
                </span>
              </div>

              {/* Modal Content Panel */}
              <div className="p-8 md:w-1/2 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-black text-white leading-tight">
                      {selectedService.name}
                    </h2>
                    <div className="w-12 h-0.5 bg-brand-cyan rounded-full mt-3"></div>
                  </div>

                  <p className="text-xs text-brand-light leading-relaxed">
                    {selectedService.desc}
                  </p>

                  {/* Checklist */}
                  <ul className="space-y-2.5">
                    {selectedService.features.map((feature, fIdx) => (
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
                    {selectedService.specs.map((spec, sIdx) => (
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
