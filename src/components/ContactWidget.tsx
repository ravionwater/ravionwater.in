"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";

export default function ContactWidget() {
  const whatsappNumber = "+919985479095"; 
  const phoneNumber = "+919985479095";    
  
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Hello!%20I%20am%20interested%20in%20your%20Ravion%20Water%20Systems.%20Please%20share%20more%20information.`;
  const callUrl = `tel:${phoneNumber}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-4">
      {/* Consultation Badge */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="hidden sm:flex items-center space-x-2 bg-brand-cyan/10 border border-brand-cyan/20 px-3 py-1.5 rounded-full backdrop-blur-md"
      >
        <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse"></span>
        <span className="text-xs font-semibold text-brand-sky tracking-wide uppercase">
          Online Consultation
        </span>
      </motion.div>

      {/* Button Loop */}
      <div className="flex flex-col space-y-3">
        {/* WhatsApp Button */}
        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.2
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 text-white shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-shadow duration-300 relative group"
          aria-label="Connect on WhatsApp"
        >
          <MessageCircle className="w-7 h-7" />
          <span className="absolute right-16 bg-brand-blue/95 border border-white/10 text-white text-xs font-semibold px-3 py-1.5 rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-md">
            Chat on WhatsApp
          </span>
        </motion.a>

        {/* Call Button */}
        <motion.a
          href={callUrl}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.4
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center justify-center w-14 h-14 rounded-full bg-brand-cyan text-white shadow-lg shadow-brand-cyan/25 hover:shadow-brand-cyan/45 transition-shadow duration-300 relative group animate-float"
          aria-label="Call Us Directly"
        >
          <Phone className="w-6 h-6" />
          <span className="absolute right-16 bg-brand-blue/95 border border-white/10 text-white text-xs font-semibold px-3 py-1.5 rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-md">
            Call Expert: +91 99854 79095
          </span>
        </motion.a>
      </div>
    </div>
  );
}
