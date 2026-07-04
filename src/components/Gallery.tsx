"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, X } from "lucide-react";

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  description: string;
  imageSrc: string;
}

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const categories = ["All", "PW Systems", "WFI Systems", "Pure Steam", "Distribution Loops"];

  const items: GalleryItem[] = [
    {
      id: 1,
      title: "Flow Monitoring Skid",
      category: "PW Systems",
      description: "Sanitary diaphragm control valve with digital flow monitoring loop.",
      imageSrc: "/images/gallery_1.png",
    },
    {
      id: 2,
      title: "Purified Water Skid",
      category: "PW Systems",
      description: "RO + EDI Multi-stage Purified Water Generation System.",
      imageSrc: "/images/pw_system.png",
    },
    {
      id: 3,
      title: "Sanitary Filtration Unit",
      category: "Distribution Loops",
      description: "Ultra-filtration membrane multi-cartridge housing assembly.",
      imageSrc: "/images/gallery_2.png",
    },
    {
      id: 4,
      title: "Vapor Compression Column",
      category: "WFI Systems",
      description: "Multi-effect Water for Injection (WFI) distillation column.",
      imageSrc: "/images/wfi_system.png",
    },
    {
      id: 5,
      title: "Clean Steam Generator",
      category: "Pure Steam",
      description: "Pure Steam Generator skid for autoclaves and SIP sanitization.",
      imageSrc: "/images/psg_system.png",
    },
    {
      id: 6,
      title: "Distribution Piping Loop",
      category: "Distribution Loops",
      description: "Orbital-welded 316L stainless steel storage & distribution loop.",
      imageSrc: "/images/piping_loop.png",
    },
    {
      id: 7,
      title: "PLC Touch Control Center",
      category: "PW Systems",
      description: "HMI PLC screen with SCADA graphics for automated process flow control.",
      imageSrc: "/images/gallery_3.png",
    },
  ];

  const filteredItems =
    activeCategory === "All"
      ? items
      : items.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="py-24 relative overflow-hidden bg-brand-deep/20">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-teal/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white"
          >
            Project <span className="text-gradient-cyan-blue">Gallery</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="w-16 h-1 bg-brand-cyan mx-auto mt-4 rounded-full"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base text-brand-light font-medium"
          >
            Explore our state-of-the-art engineering installations. We supply robust, sanitary-grade water purification hardware designed to exceed global regulatory standards.
          </motion.p>
        </div>

        {/* Category Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 border ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-brand-teal to-brand-cyan text-white border-transparent shadow-lg shadow-brand-cyan/15 scale-105"
                  : "text-brand-light hover:text-white border-white/5 bg-white/5 hover:bg-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Stack */}
        <motion.div layout className="space-y-6 max-w-5xl mx-auto">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -4 }}
                className="group relative rounded-3xl overflow-hidden glass-panel border border-white/5 shadow-2xl hover:border-brand-cyan/25 hover:shadow-brand-cyan/5 transition-all duration-300 flex flex-col md:flex-row w-full cursor-pointer min-h-[220px]"
                onClick={() => setSelectedImage(item)}
              >
                {/* Image Panel */}
                <div className="relative md:w-2/5 aspect-video md:aspect-auto min-h-[200px] bg-brand-blue/30 overflow-hidden">
                  <Image
                    src={item.imageSrc}
                    alt={item.title}
                    fill
                    sizes="(max-w-768px) 100vw, 40vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Category Pill */}
                  <span className="absolute top-4 left-4 bg-brand-deep/80 border border-white/10 text-brand-sky text-[9px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-md backdrop-blur-sm z-10">
                    {item.category}
                  </span>
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-brand-accent/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-brand-cyan/20 border border-brand-cyan flex items-center justify-center text-white scale-75 group-hover:scale-100 transition-all duration-300">
                      <Maximize2 className="w-5 h-5 text-brand-sky" />
                    </div>
                  </div>
                </div>

                {/* Content Panel */}
                <div className="p-6 sm:p-8 md:w-3/5 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-brand-cyan transition-colors duration-300">
                      {item.title}
                    </h3>
                    <div className="w-8 h-0.5 bg-brand-cyan my-3 rounded-full"></div>
                    <p className="text-sm text-brand-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-white/5 flex flex-wrap items-center justify-between text-brand-sky text-xs font-semibold hover:text-white transition-colors">
                    <span className="flex items-center space-x-1">
                      <span>Click to view technical specifications</span>
                      <span>&rarr;</span>
                    </span>
                    <span className="text-[10px] text-brand-light font-normal tracking-wide bg-white/5 border border-white/10 px-2 py-0.5 rounded">
                      SS 316L / FDA COMPLIANT
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12 text-brand-light">
            No gallery items found for this category.
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-brand-deep/95 backdrop-blur-md flex items-center justify-center p-4 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full rounded-2xl overflow-hidden glass-panel border border-white/10 shadow-2xl flex flex-col md:flex-row cursor-default"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-brand-deep/80 border border-white/10 hover:border-white/20 text-white hover:text-brand-cyan transition-all"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Image */}
              <div className="relative aspect-video md:aspect-auto md:w-2/3 min-h-[250px] md:min-h-[450px] bg-brand-blue/20">
                <Image
                  src={selectedImage.imageSrc}
                  alt={selectedImage.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Modal Details */}
              <div className="p-6 md:p-8 md:w-1/3 flex flex-col justify-between bg-brand-blue/30 backdrop-blur-md border-t md:border-t-0 md:border-l border-white/10">
                <div>
                  <span className="text-[10px] font-bold tracking-widest text-brand-cyan uppercase bg-brand-cyan/10 border border-brand-cyan/20 px-2.5 py-1 rounded-md">
                    {selectedImage.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mt-4">
                    {selectedImage.title}
                  </h3>
                  <div className="w-8 h-0.5 bg-brand-cyan my-3 rounded-full"></div>
                  <p className="text-sm text-brand-light leading-relaxed mt-2">
                    {selectedImage.description}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-white/5 space-y-3">
                  <div className="flex justify-between items-center text-xs text-brand-light">
                    <span>MOC Grade:</span>
                    <span className="font-semibold text-white">SS 316L (EP Option)</span>
                  </div>
                  <div className="flex justify-between items-center text-xs text-brand-light">
                    <span>Compliance:</span>
                    <span className="font-semibold text-brand-sky">FDA / USP / GMP</span>
                  </div>
                  <a
                    href="#contact"
                    onClick={() => setSelectedImage(null)}
                    className="mt-4 block w-full text-center py-2.5 rounded-lg text-xs font-bold text-brand-deep bg-brand-sky hover:bg-brand-cyan hover:text-white transition-all duration-300"
                  >
                    Inquire About This Unit
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
