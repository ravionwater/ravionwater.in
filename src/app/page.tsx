"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ShieldCheck, Cpu, Droplets, Award, FileText, Send, PhoneCall, Mail, Clock, MapPin } from "lucide-react";
import ShowcaseCarousel from "@/components/ShowcaseCarousel";
import Link from "next/link";

export default function Home() {
  // Auto-scroll directly to the gallery showcase on site load
  useEffect(() => {
    const element = document.getElementById("gallery");
    if (element) {
      const timeout = setTimeout(() => {
        element.scrollIntoView({ behavior: "smooth" });
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, []);

  const standards = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-brand-cyan" />,
      title: "FDA & cGMP Compliance",
      desc: "Designed, engineered, and manufactured in full accordance with FDA guidelines and current Good Manufacturing Practices (cGMP)."
    },
    {
      icon: <Award className="w-8 h-8 text-brand-cyan" />,
      title: "Pharmacopoeia Standards",
      desc: "Produces water exceeding United States Pharmacopoeia (USP), European Pharmacopoeia (EP), and Indian Pharmacopoeia (IP) quality standards."
    },
    {
      icon: <Cpu className="w-8 h-8 text-brand-cyan" />,
      title: "GAMP 5 & 21 CFR Part 11",
      desc: "Automation software compliance for electronic records and signatures, featuring complete audit trails and multi-level security access."
    },
    {
      icon: <FileText className="w-8 h-8 text-brand-cyan" />,
      title: "Complete Validation Package",
      desc: "Provision of comprehensive DQ, IQ, OQ, and PQ documentation protocols supporting seamless system qualification."
    }
  ];

  return (
    <main className="min-h-screen">
      {/* 1. HERO SECTION */}
      {/* 1. UNIFIED HERO SECTION (GRID WITH HERO IMAGE AND CAPABILITY CARDS) */}
      <section id="home" className="pt-28 pb-12 bg-brand-deep relative overflow-hidden">
        {/* Background ambient lighting */}
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-brand-teal/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Left Hero Card (takes 9 columns on desktop) */}
            <div className="lg:col-span-9 relative rounded-3xl overflow-hidden shadow-xl min-h-[480px] lg:min-h-[600px] flex items-center bg-slate-950">
              {/* Background Image of Water System */}
              <Image
                src="/images/hero_water_system.png"
                alt="Ravion Water Tech High-Purity Engineering India"
                fill
                priority
                className="object-cover object-center"
              />
              {/* Soft overlay for text readability */}
              <div className="absolute inset-0 bg-slate-900/10 pointer-events-none"></div>

              {/* Overlaid Text Box */}
              <div className="absolute left-6 sm:left-12 max-w-lg p-6 sm:p-8 rounded-3xl bg-white/90 backdrop-blur-md border border-white/20 shadow-xl z-10">
                <span className="inline-flex items-center space-x-2 bg-brand-cyan/10 border border-brand-cyan/20 px-3 py-1 rounded-full mb-4">
                  <Droplets className="w-3.5 h-3.5 text-brand-cyan" />
                  <span className="text-[10px] font-bold tracking-wider text-brand-cyan uppercase">
                    Next-Gen High Purity Water Engineering
                  </span>
                </span>

                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-slate-900 mb-4 leading-tight uppercase">
                  Find Your <span className="text-yellow-500">High-Purity System</span> <span className="text-emerald-500">in India</span>
                </h1>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-semibold mb-6">
                  Engineering FDA USP compliant, fully validated Purified Water (PW) Systems, Water for Injection (WFI) Plants, and Pure Steam Generators (PSG) for pharmaceutical hubs in Hyderabad, Telangana, and across India.
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="#gallery"
                    className="px-5 py-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-brand-teal to-brand-cyan hover:from-brand-cyan hover:to-brand-teal shadow-md shadow-brand-cyan/10 transition-all duration-300 hover:scale-[1.02] active:scale-95 text-center cursor-pointer"
                  >
                    Explore Our Systems
                  </Link>
                  <Link
                    href="#contact"
                    className="px-5 py-3 rounded-xl text-xs font-bold text-slate-700 hover:text-slate-950 bg-slate-100/90 border border-slate-200 transition-all duration-300 hover:scale-[1.02] active:scale-95 text-center"
                  >
                    Request Engineering Quote
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Card Stack (takes 3 columns on desktop) */}
            <div className="lg:col-span-3 flex flex-col gap-4">
              {/* Systems Card */}
              <Link href="/products" className="group flex-1">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  className="h-full rounded-2xl overflow-hidden shadow-md flex items-center justify-between p-5 border border-blue-400/20 bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-500 hover:shadow-lg hover:shadow-cyan-500/10 cursor-pointer"
                >
                  <div className="flex-1 flex flex-col justify-between h-full space-y-2">
                    <div className="flex items-center space-x-2">
                      <div className="p-1.5 rounded-lg bg-white/15 border border-white/25">
                        <Droplets className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-xs font-black tracking-widest text-white uppercase">Systems</span>
                    </div>
                    <p className="text-[10px] text-white/90 font-medium leading-tight">
                      PW generation skids, WFI plants, PSG generators, storage tanks, and loops.
                    </p>
                    <span className="text-[9px] font-bold text-white group-hover:translate-x-1 transition-transform duration-300 w-fit underline decoration-white/30 decoration-2 underline-offset-4">
                      Browse Systems &rarr;
                    </span>
                  </div>

                  {/* Clean High-Definition Image Container */}
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-xl p-1.5 shadow-lg border border-white/10 flex items-center justify-center flex-shrink-0 ml-3">
                    <Image
                      src="/images/system1.jpg"
                      alt="Ravion High Purity Systems"
                      width={96}
                      height={96}
                      className="object-contain max-w-full max-h-full rounded-lg"
                    />
                  </div>
                </motion.div>
              </Link>

              {/* Spares Card */}
              <Link href="/spares" className="group flex-1">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  className="h-full rounded-2xl overflow-hidden shadow-md flex items-center justify-between p-5 border border-orange-400/20 bg-gradient-to-br from-orange-600 via-amber-500 to-yellow-400 hover:shadow-lg hover:shadow-yellow-500/10 cursor-pointer"
                >
                  <div className="flex-1 flex flex-col justify-between h-full space-y-2">
                    <div className="flex items-center space-x-2">
                      <div className="p-1.5 rounded-lg bg-white/15 border border-white/25">
                        <Cpu className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-xs font-black tracking-widest text-white uppercase">Spares</span>
                    </div>
                    <p className="text-[10px] text-white/90 font-medium leading-tight">
                      ASME BPE pipes, fittings, diaphragm valves, pumps, and instruments.
                    </p>
                    <span className="text-[9px] font-bold text-white group-hover:translate-x-1 transition-transform duration-300 w-fit underline decoration-white/30 decoration-2 underline-offset-4">
                      Explore Spares &rarr;
                    </span>
                  </div>

                  {/* Clean High-Definition Image Container */}
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-xl p-1.5 shadow-lg border border-white/10 flex items-center justify-center flex-shrink-0 ml-3">
                    <Image
                      src="/images/spares1.png"
                      alt="Ravion Sanitary Spares"
                      width={96}
                      height={96}
                      className="object-contain max-w-full max-h-full rounded-lg"
                    />
                  </div>
                </motion.div>
              </Link>

              {/* Services Card */}
              <Link href="/services" className="group flex-1">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  className="h-full rounded-2xl overflow-hidden shadow-md flex items-center justify-between p-5 border border-emerald-400/20 bg-gradient-to-br from-emerald-600 via-emerald-500 to-teal-400 hover:shadow-lg hover:shadow-teal-500/10 cursor-pointer"
                >
                  <div className="flex-1 flex flex-col justify-between h-full space-y-2">
                    <div className="flex items-center space-x-2">
                      <div className="p-1.5 rounded-lg bg-white/15 border border-white/25">
                        <ShieldCheck className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-xs font-black tracking-widest text-white uppercase">Services</span>
                    </div>
                    <p className="text-[10px] text-white/90 font-medium leading-tight">
                      ASME IX orbital welding, boroscopy, passivation, and IQ/OQ validation.
                    </p>
                    <span className="text-[9px] font-bold text-white group-hover:translate-x-1 transition-transform duration-300 w-fit underline decoration-white/30 decoration-2 underline-offset-4">
                      Explore Services &rarr;
                    </span>
                  </div>

                  {/* Clean High-Definition Image Container */}
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-xl p-1.5 shadow-lg border border-white/10 flex items-center justify-center flex-shrink-0 ml-3">
                    <Image
                      src="/images/service1.jpg"
                      alt="Ravion Sterile Services"
                      width={96}
                      height={96}
                      className="object-contain max-w-full max-h-full rounded-lg"
                    />
                  </div>
                </motion.div>
              </Link>
            </div>
          </div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 p-6 sm:p-8 rounded-2xl glass-panel border border-slate-200/80 shadow-lg bg-slate-50"
          >
            {[
              { val: "150+", label: "Systems Commissioned" },
              { val: "SS 316L", label: "ASME BPE Materials" },
              { val: "0%", label: "Contamination Events" },
              { val: "24/7", label: "Operational Support" }
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  <span className="text-gradient-cyan-blue">{stat.val}</span>
                </div>
                <div className="text-[9px] sm:text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1.5">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 2. ABOUT US SECTION */}
      <section id="about" className="py-16 relative overflow-hidden bg-brand-deep">
        {/* soft background glow */}
        <div className="absolute top-0 right-1/4 w-[350px] h-[350px] bg-brand-cyan/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side content */}
            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold tracking-widest text-brand-cyan uppercase bg-brand-cyan/10 border border-brand-cyan/20 px-3 py-1.5 rounded-full">
                  About Ravion Water Tech
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mt-4 uppercase">
                  Pioneering Sterile Engineering & <span className="text-gradient-cyan-blue">Process Validation</span>
                </h2>
                <div className="w-16 h-1 bg-brand-cyan mt-4 rounded-full"></div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed font-medium">
                Ravion Water Tech is a leading high-purity process engineering partner based in Hyderabad, India. We design, manufacture, and commission fully integrated Purified Water (PW), Water for Injection (WFI), and Pure Steam (PSG) skids that adhere to global regulatory norms including FDA, USP, and EP guidelines.
              </p>
              <p className="text-sm text-slate-300 leading-relaxed font-medium">
                By leveraging automated ASME IX orbital welding, continuous quality instrumentation, and comprehensive DQ, IQ, and OQ verification protocols, we serve critical sterile process pipelines for major pharmaceutical, biotechnology, and healthcare facilities worldwide.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-lg bg-brand-cyan/10 flex items-center justify-center border border-brand-cyan/20">
                    <ShieldCheck className="w-5 h-5 text-brand-cyan" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider">FDA / USP Ready</h4>
                    <p className="text-[10px] text-slate-400">cGMP Compliant Systems</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-lg bg-brand-cyan/10 flex items-center justify-center border border-brand-cyan/20">
                    <Cpu className="w-5 h-5 text-brand-cyan" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider">Automation</h4>
                    <p className="text-[10px] text-slate-400">21 CFR Part 11 Skids</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side graphic card */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-teal/20 to-brand-cyan/20 rounded-3xl filter blur-xl opacity-30"></div>
              <div className="relative glass-panel rounded-3xl p-8 border border-white/10 shadow-lg space-y-6">
                <h3 className="text-lg font-bold text-white uppercase tracking-wider border-b border-white/5 pb-4">
                  Engineering Benchmarks
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-300 font-semibold">Piping Finish (Electropolished)</span>
                    <span className="text-white font-bold bg-brand-deep border border-white/5 px-2 py-0.5 rounded">Ra &lt; 0.38 µm</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-300 font-semibold">Loop Velocity Control</span>
                    <span className="text-white font-bold bg-brand-deep border border-white/5 px-2 py-0.5 rounded">&gt; 1.2 m/s</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-300 font-semibold">Hot Loop Circulation</span>
                    <span className="text-white font-bold bg-brand-deep border border-white/5 px-2 py-0.5 rounded">&gt; 80°C</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-300 font-semibold">Welding Standards</span>
                    <span className="text-white font-bold bg-brand-deep border border-white/5 px-2 py-0.5 rounded">ASME Section IX</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SHOWCASE GALLERY CAROUSEL */}
      <ShowcaseCarousel />

      {/* 4. QUALITY & STANDARDS SECTION */}
      <section id="standards" className="py-16 relative overflow-hidden bg-brand-deep">
        <div className="absolute bottom-12 left-1/4 w-[400px] h-[400px] bg-brand-cyan/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-xs font-bold tracking-widest text-brand-cyan uppercase bg-brand-cyan/10 border border-brand-cyan/20 px-3 py-1.5 rounded-full">
              Zero Tolerance for Contamination
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mt-4 uppercase">
              Compliance & Sterile <span className="text-yellow-500">Quality Design</span>
            </h2>
            <div className="w-16 h-1 bg-brand-cyan mx-auto mt-4 rounded-full"></div>
            <p className="mt-4 text-sm text-slate-300 font-semibold">
              Our engineering protocols ensure absolute biological and chemical purity, protecting product integrity at every process stage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {standards.map((std, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex items-start space-x-4 p-6 rounded-2xl glass-panel border border-white/5 hover:border-brand-cyan/20 transition-all duration-300"
              >
                <div className="flex-shrink-0 p-3 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20">
                  {std.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">
                    {std.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                    {std.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CONTACT & INQUIRY SECTION */}
      <section id="contact" className="py-16 relative overflow-hidden bg-brand-deep">
        {/* Glow decoration */}
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-brand-cyan/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-widest text-brand-cyan uppercase bg-brand-cyan/10 border border-brand-cyan/20 px-3 py-1.5 rounded-full">
              Start Your Project
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mt-4 uppercase">
              Connect With Our Engineering Team
            </h2>
            <div className="w-16 h-1 bg-brand-cyan mx-auto mt-4 rounded-full"></div>
            <p className="mt-4 text-sm text-slate-300 font-medium">
              Have specific engineering requirements or need assistance with loop design? Speak directly to our high-purity water process engineers.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-6xl mx-auto">
            {/* Contact Details Panel */}
            <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
              <div className="space-y-6">
                <h3 className="text-lg font-bold text-white">
                  Corporate Office & Support
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  We look forward to helping you design a compliant, robust, and low-lifecycle-cost pure water setup. Feel free to visit or drop us a line.
                </p>

                <div className="space-y-4">
                  {/* Address */}
                  <div className="flex items-start space-x-4 p-4 rounded-xl glass-panel border border-white/5 hover:border-brand-cyan/20 transition-all duration-300">
                    <div className="p-3 rounded-lg bg-brand-cyan/15 mt-0.5 flex-shrink-0">
                      <MapPin className="w-5 h-5 text-brand-cyan" />
                    </div>
                    <div>
                      <span className="block text-[10px] uppercase font-bold text-slate-500">Corporate Office</span>
                      <span className="text-xs font-bold text-white leading-relaxed">
                        Plot No. 189, IDA Jeedimetla, Quthubullapur, Hyderabad, Telangana – 500055
                      </span>
                    </div>
                  </div>

                  {/* Telephone */}
                  <div className="flex items-start space-x-4 p-4 rounded-xl glass-panel border border-white/5 hover:border-brand-cyan/20 transition-all duration-300">
                    <div className="p-3 rounded-lg bg-brand-cyan/15 mt-0.5 flex-shrink-0">
                      <PhoneCall className="w-5 h-5 text-brand-cyan" />
                    </div>
                    <div>
                      <span className="block text-[10px] uppercase font-bold text-slate-500">Call Engineering Support</span>
                      <a href="tel:+919985479095" className="text-xs font-bold text-white hover:text-brand-cyan transition-colors leading-relaxed block">
                        +91 99854 79095
                      </a>
                    </div>
                  </div>

                  {/* Mail */}
                  <div className="flex items-start space-x-4 p-4 rounded-xl glass-panel border border-white/5 hover:border-brand-cyan/20 transition-all duration-300">
                    <div className="p-3 rounded-lg bg-brand-cyan/15 mt-0.5 flex-shrink-0">
                      <Mail className="w-5 h-5 text-brand-cyan" />
                    </div>
                    <div>
                      <span className="block text-[10px] uppercase font-bold text-slate-500">Email Inquiry</span>
                      <a href="mailto:info@ravionwater.in" className="text-xs font-bold text-white hover:text-brand-cyan transition-colors leading-relaxed block">
                        info@ravionwater.in
                      </a>
                    </div>
                  </div>

                  {/* Response Time */}
                  <div className="flex items-start space-x-4 p-4 rounded-xl glass-panel border border-white/5 hover:border-brand-cyan/20 transition-all duration-300">
                    <div className="p-3 rounded-lg bg-brand-cyan/15 mt-0.5 flex-shrink-0">
                      <Clock className="w-5 h-5 text-brand-cyan" />
                    </div>
                    <div>
                      <span className="block text-[10px] uppercase font-bold text-slate-500">Service Hours</span>
                      <span className="text-xs font-bold text-white leading-relaxed block">
                        24-Hour Emergency Dispatch | 10:00 - 18:00 Standard Support
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action notice */}
              <div className="p-5 rounded-2xl bg-brand-cyan/5 border border-brand-cyan/10">
                <span className="text-xs font-bold text-brand-cyan flex items-center space-x-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-ping"></span>
                  <span>WhatsApp Live Support Available</span>
                </span>
                <p className="text-xs text-slate-400 mt-1">
                  For immediate escalation or site breakdowns, click the floating green chat bubble on the bottom-right.
                </p>
              </div>
            </div>

            {/* Inquiry Form Panel */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="p-8 rounded-3xl glass-panel border border-white/10 shadow-2xl relative"
              >
                <h3 className="text-xl font-bold text-white mb-6">
                  Technical Inquiry Form
                </h3>
                <form onSubmit={(e) => { e.preventDefault(); alert("Thank you! Your inquiry has been submitted. Our engineering team will contact you shortly."); }} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        className="w-full bg-[#0F172A] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-cyan transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        required
                        className="w-full bg-[#0F172A] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-cyan transition-colors"
                        placeholder="Pharma Industries"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full bg-[#0F172A] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-cyan transition-colors"
                      placeholder="john.doe@company.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="system" className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                      System of Interest
                    </label>
                    <select
                      id="system"
                      className="w-full bg-[#0F172A] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-cyan transition-colors cursor-pointer"
                    >
                      <option className="bg-[#121D3A] text-white" value="pw">Purified Water System (PW)</option>
                      <option className="bg-[#121D3A] text-white" value="wfi">Water for Injection (WFI)</option>
                      <option className="bg-[#121D3A] text-white" value="psg">Pure Steam Generator (PSG)</option>
                      <option className="bg-[#121D3A] text-white" value="loop">Distribution Loops & Piping</option>
                      <option className="bg-[#121D3A] text-white" value="custom">Other / Custom Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                      Project Requirements
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      className="w-full bg-[#0F172A] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-cyan transition-colors resize-none"
                      placeholder="Detail flow rates, site location, design standards, or quality requirements..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-brand-teal to-brand-cyan hover:from-brand-cyan hover:to-brand-teal shadow-lg shadow-brand-cyan/15 hover:shadow-brand-cyan/25 flex items-center justify-center space-x-2 transition-all duration-300 hover:scale-[1.01] active:scale-95 cursor-pointer"
                  >
                    <span>Submit Tech Inquiry</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
