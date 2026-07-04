"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface SystemCardProps {
  title: string;
  subtitle: string;
  imageSrc: string;
  specs: string[];
  features: string[];
  delay: number;
}

export default function SystemCard({
  title,
  subtitle,
  imageSrc,
  specs,
  features,
  delay
}: SystemCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay }}
      whileHover={{ y: -6 }}
      className="group flex flex-col lg:flex-row rounded-3xl overflow-hidden glass-panel border border-white/5 shadow-2xl hover:border-brand-cyan/20 hover:shadow-brand-cyan/5 transition-all duration-300 w-full"
    >
      {/* Image Panel */}
      <div className="relative lg:w-2/5 aspect-video lg:aspect-auto min-h-[220px] bg-brand-blue/30 overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          fill
          sizes="(max-w-1024px) 100vw, 40vw"
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />
        {/* Dynamic decorative overlay */}
        <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-brand-deep/80 via-transparent to-transparent"></div>
      </div>

      {/* Content Panel */}
      <div className="p-6 sm:p-8 lg:w-3/5 flex flex-col justify-between">
        <div>
          {/* Header */}
          <div className="flex flex-col mb-4">
            <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight group-hover:text-brand-cyan transition-colors duration-300">
              {title}
            </h3>
            <span className="text-xs sm:text-sm font-semibold text-brand-sky mt-1 tracking-wider">
              {subtitle}
            </span>
          </div>

          <div className="w-12 h-0.5 bg-brand-cyan mb-6 rounded-full"></div>

          {/* Features Checklist */}
          <ul className="space-y-2.5 mb-6">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-start text-sm text-brand-light">
                <span className="flex-shrink-0 w-5 h-5 rounded-md bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center mr-3 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-brand-cyan" />
                </span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* System Specs Footer */}
        <div className="pt-5 border-t border-white/5 flex flex-wrap items-center gap-2">
          {specs.map((spec, idx) => (
            <span
              key={idx}
              className="text-[10px] sm:text-xs font-bold tracking-wider text-brand-light bg-white/5 border border-white/10 px-2.5 py-1 rounded-md uppercase"
            >
              {spec}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
