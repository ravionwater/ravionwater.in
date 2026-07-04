"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Check, ArrowLeft, Wrench, Shield, Video } from "lucide-react";

interface ServiceItem {
  name: string;
  desc: string;
  features: string[];
  specs: string[];
  image: string;
}

export default function ServicesPage() {
  const services: ServiceItem[] = [
    {
      name: "Erection, Fitment & Support",
      desc: "Structural mechanical erection of skids, tank alignment positioning, structural support engineering, and clean utility line erection.",
      features: [
        "Skid leveling, mechanical anchoring, and alignments",
        "SS support structures (MOC SS 304/316) for loop piping",
        "Utility line connections (steam, water, air, drainage)"
      ],
      specs: ["Hygienic layouts", "Structural Integrity", "Seismic Compliance Options"],
      image: "/images/sd.jpg"
    },
    {
      name: "Orbital Welding Services",
      desc: "Automated high-purity orbital TIG welding of SS 316L pipelines. Integrates automatic printouts for weld logs.",
      features: [
        "Welder qualification matching ASME section IX standards",
        "Full weld identification (isometric drawing mapping)",
        "Purge oxygen monitoring down to < 10 ppm during weld"
      ],
      specs: ["ASME Sec IX certified", "Weld Logs provided", "Shield gas: Ar 99.999%"],
      image: "/images/service1.jpg"
    },
    {
      name: "Manual TIG Welding",
      desc: "Hygienic manual TIG welding for non-standard pipe connections, vessel jackets, structural supports, and utility lines.",
      features: [
        "Certified manual TIG welders for sterile standards",
        "SS purging techniques for root run integrity",
        "Smooth internal surface grinding and post-weld clean"
      ],
      specs: ["ASME Section IX", "Certified Welders", "Root Purged"],
      image: "/images/service1.jpg"
    },
    {
      name: "Boroscopy & Videoscopy",
      desc: "Non-destructive internal inspection of sanitary orbital welds using high-resolution video boroscopes.",
      features: [
        "High-definition video recording of weld root runs",
        "Boroscope inspection reports matching FDA validation checklists",
        "Flexible video scope inspecting deep bends and joints"
      ],
      specs: ["HD Video logs", "Weld Inspection", "FDA Audit ready"],
      image: "/images/service2.jpg"
    },
    {
      name: "Hydrotesting & Passivation",
      desc: "Hygienic pressure testing of loops followed by chemical passivation (nitric/citric acid) to build corrosion-resistant oxide layers.",
      features: [
        "Sanitary hydrostatic loop pressure testing (up to 1.5x design pressure)",
        "Passivation according to ASTM A380/A967 guidelines",
        "TOC and conductivity rinse verification logs"
      ],
      specs: ["ASTM A380 Passivation", "Hydrotest certified", "Rinse water logs"],
      image: "/images/service2.jpg"
    },
    {
      name: "Radiography & NDT Services",
      desc: "Non-destructive testing (NDT) including radiography and dye penetrant testing of critical weld connections.",
      features: [
        "X-ray radiographic inspection of manual vessel joints",
        "Dye penetrant test for nozzle fitments and attachments",
        "Certified NDT level II technicians for verification"
      ],
      specs: ["NDT Level II", "Radiography logs", "Weld Verification"],
      image: "/images/service2.jpg"
    },
    {
      name: "Documentation & Validation (DQ, IQ, OQ)",
      desc: "Complete documentation lifecycle generation (Validation Master Plan, DQ, IQ, OQ) following GAMP 5 Guidelines.",
      features: [
        "Design Qualification (DQ) and material test certificates (MTR)",
        "Borescope video records, weld maps, and passivation logs",
        "IQ/OQ protocols and calibration certificates for audit"
      ],
      specs: ["FDA USP EP Auditable", "GAMP 5 Guidelines", "Validation Packages"],
      image: "/images/service1.jpg"
    },
    {
      name: "Installation & Commissioning",
      desc: "On-site skid commissioning, system loop tuning, PLC HMI interface configuration, and operator training.",
      features: [
        "On-site loop flow tuning and instrumentation setup",
        "PLC loop logic verification and system dry runs",
        "Standard Operating Procedure (SOP) design support"
      ],
      specs: ["Turnkey Handover", "Operator Training", "PLC Loop Tuning"],
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
            Technical Support
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-4">
            Our Engineering <span className="text-gradient-cyan-blue">Services</span>
          </h1>
          <div className="w-16 h-1 bg-brand-cyan mx-auto mt-4 rounded-full"></div>
          <p className="mt-4 text-sm text-brand-light font-medium leading-relaxed">
            From sanitary orbital welding and detailed video boroscopy to full GAMP 5 documentation and site validation packages (DQ, IQ, OQ).
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
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
                    src={service.image}
                    alt={`${service.name} Service India`}
                    fill
                    sizes="(max-w-768px) 100vw, 33vw"
                    className="object-contain p-4 group-hover:scale-[1.02] transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/30 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-lg font-bold text-white leading-tight group-hover:text-brand-cyan transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-xs text-brand-light leading-relaxed">
                    {service.desc}
                  </p>

                  {/* Checklist */}
                  <ul className="space-y-2 pt-2">
                    {service.features.map((feature, fIdx) => (
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
                  {service.specs.map((spec, sIdx) => (
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
