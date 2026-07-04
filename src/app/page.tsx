"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ShieldCheck, Cpu, Droplets, Award, FileText, Send, PhoneCall, Mail, Clock, MapPin } from "lucide-react";
import ShowcaseCarousel from "@/components/ShowcaseCarousel";
import Link from "next/link";

export default function Home() {

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
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden"
      >
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero_water_system.png"
            alt="Pharmaceutical Water System"
            fill
            priority
            className="object-cover opacity-35 scale-105 animate-pulse-slow"
          />
          {/* Deep dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-brand-deep/90 via-brand-deep/75 to-brand-deep/100"></div>
          {/* Cyan/Blue ambient light spots */}
          <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] bg-brand-cyan/15 rounded-full blur-[100px] pointer-events-none"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-brand-teal/15 rounded-full blur-[120px] pointer-events-none"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-brand-cyan/10 border border-brand-cyan/20 px-4 py-1.5 rounded-full mb-6"
          >
            <Droplets className="w-4 h-4 text-brand-cyan" />
            <span className="text-xs sm:text-sm font-semibold tracking-wider text-brand-sky uppercase">
              Next-Gen High Purity Water Engineering
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 mb-6 leading-tight max-w-5xl mx-auto uppercase"
          >
            Find Your <span className="text-yellow-500">High-Purity System</span> <span className="text-emerald-500">in India</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm sm:text-base text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed font-semibold"
          >
            Engineering FDA USP compliant, fully validated Purified Water (PW) Systems, Water for Injection (WFI) Plants, and Pure Steam Generators (PSG) for pharmaceutical hubs in Hyderabad, Telangana, and across India.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/products"
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-brand-teal to-brand-cyan hover:from-brand-cyan hover:to-brand-teal shadow-xl shadow-brand-cyan/15 hover:shadow-brand-cyan/25 transition-all duration-300 hover:scale-[1.03] active:scale-95 text-center"
            >
              Explore Our Systems
            </Link>
            <Link
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-bold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 transition-all duration-300 hover:scale-[1.03] active:scale-95 text-center border border-slate-200"
            >
              Request Engineering Quote
            </Link>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-20 max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 p-6 sm:p-8 rounded-2xl glass-panel border border-white/5 shadow-2xl"
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
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-4 uppercase">
                  Pioneering Sterile Engineering & <span className="text-gradient-cyan-blue">Process Validation</span>
                </h2>
                <div className="w-16 h-1 bg-brand-cyan mt-4 rounded-full"></div>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed font-medium">
                Ravion Water Tech is a leading high-purity process engineering partner based in Hyderabad, India. We design, manufacture, and commission fully integrated Purified Water (PW), Water for Injection (WFI), and Pure Steam (PSG) skids that adhere to global regulatory norms including FDA, USP, and EP guidelines.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed font-medium">
                By leveraging automated ASME IX orbital welding, continuous quality instrumentation, and comprehensive DQ, IQ, and OQ verification protocols, we serve critical sterile process pipelines for major pharmaceutical, biotechnology, and healthcare facilities worldwide.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-lg bg-brand-cyan/10 flex items-center justify-center border border-brand-cyan/20">
                    <ShieldCheck className="w-5 h-5 text-brand-cyan" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">FDA / USP Ready</h4>
                    <p className="text-[10px] text-slate-500">cGMP Compliant Systems</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-lg bg-brand-cyan/10 flex items-center justify-center border border-brand-cyan/20">
                    <Cpu className="w-5 h-5 text-brand-cyan" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Automation</h4>
                    <p className="text-[10px] text-slate-500">21 CFR Part 11 Skids</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side graphic card */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-teal/20 to-brand-cyan/20 rounded-3xl filter blur-xl opacity-30"></div>
              <div className="relative glass-panel rounded-3xl p-8 border border-slate-200/80 shadow-lg space-y-6">
                <h3 className="text-lg font-bold text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-4">
                  Engineering Benchmarks
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-600 font-semibold">Piping Finish (Electropolished)</span>
                    <span className="text-slate-900 font-bold bg-slate-100 px-2 py-0.5 rounded">Ra &lt; 0.38 µm</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-600 font-semibold">Loop Velocity Control</span>
                    <span className="text-slate-900 font-bold bg-slate-100 px-2 py-0.5 rounded">&gt; 1.2 m/s</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-600 font-semibold">Hot Loop Circulation</span>
                    <span className="text-slate-900 font-bold bg-slate-100 px-2 py-0.5 rounded">&gt; 80°C</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-600 font-semibold">Welding Standards</span>
                    <span className="text-slate-900 font-bold bg-slate-100 px-2 py-0.5 rounded">ASME Section IX</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE CATEGORIES SECTION */}
      <section className="py-16 relative overflow-hidden bg-brand-deep/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-widest text-brand-cyan uppercase bg-brand-cyan/10 border border-brand-cyan/20 px-3 py-1.5 rounded-full">
              Explore Our Scope
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-4 uppercase">
              Our Core Business <span className="text-yellow-500">Capabilities</span>
            </h2>
            <div className="w-16 h-1 bg-brand-cyan mx-auto mt-4 rounded-full"></div>
            <p className="mt-4 text-sm text-slate-600 font-semibold">
              We deliver end-to-end expertise in high-purity water generation, sterile storage, distribution systems, spares, and site engineering.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Products Card */}
            <Link href="/products" className="group">
              <motion.div
                whileHover={{ y: -10, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative h-[340px] rounded-3xl overflow-hidden shadow-2xl flex flex-col justify-between p-8 border border-blue-400/20 bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-500 hover:border-cyan-300 hover:shadow-cyan-500/20 transition-all duration-300 cursor-pointer"
              >
                <div className="absolute top-0 right-0 w-36 h-36 bg-white/10 rounded-full blur-2xl pointer-events-none group-hover:bg-white/20 transition-all"></div>
                <div className="p-3.5 rounded-2xl bg-white/10 border border-white/20 w-fit">
                  <Droplets className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-none">
                    PRODUCTS
                  </h3>
                  <p className="text-xs text-white/90 mt-3 font-semibold leading-relaxed">
                    PW generation skids, multi-column WFI plants, pure steam generators, storage tanks, and circulation loops.
                  </p>
                  <span className="inline-flex items-center text-xs font-bold text-white mt-4 group-hover:translate-x-1.5 transition-transform duration-300 bg-white/10 border border-white/20 px-3 py-1 rounded-full">
                    Browse Products &rarr;
                  </span>
                </div>
              </motion.div>
            </Link>

            {/* Spares Card */}
            <Link href="/spares" className="group">
              <motion.div
                whileHover={{ y: -10, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative h-[340px] rounded-3xl overflow-hidden shadow-2xl flex flex-col justify-between p-8 border border-orange-400/20 bg-gradient-to-br from-orange-600 via-amber-500 to-yellow-400 hover:border-yellow-300 hover:shadow-yellow-500/20 transition-all duration-300 cursor-pointer"
              >
                <div className="absolute top-0 right-0 w-36 h-36 bg-white/10 rounded-full blur-2xl pointer-events-none group-hover:bg-white/20 transition-all"></div>
                <div className="p-3.5 rounded-2xl bg-white/10 border border-white/20 w-fit">
                  <Cpu className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-none">
                    SPARES
                  </h3>
                  <p className="text-xs text-white/90 mt-3 font-semibold leading-relaxed">
                    ASME BPE sanitary pipes & fittings, diaphragm valves, pumps, filtration membranes, and online instrumentation.
                  </p>
                  <span className="inline-flex items-center text-xs font-bold text-white mt-4 group-hover:translate-x-1.5 transition-transform duration-300 bg-white/10 border border-white/20 px-3 py-1 rounded-full">
                    Explore Spares &rarr;
                  </span>
                </div>
              </motion.div>
            </Link>

            {/* Services Card */}
            <Link href="/services" className="group">
              <motion.div
                whileHover={{ y: -10, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative h-[340px] rounded-3xl overflow-hidden shadow-2xl flex flex-col justify-between p-8 border border-emerald-400/20 bg-gradient-to-br from-emerald-600 via-emerald-500 to-teal-400 hover:border-teal-300 hover:shadow-teal-500/20 transition-all duration-300 cursor-pointer"
              >
                <div className="absolute top-0 right-0 w-36 h-36 bg-white/10 rounded-full blur-2xl pointer-events-none group-hover:bg-white/20 transition-all"></div>
                <div className="p-3.5 rounded-2xl bg-white/10 border border-white/20 w-fit">
                  <ShieldCheck className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-none">
                    SERVICES
                  </h3>
                  <p className="text-xs text-white/90 mt-3 font-semibold leading-relaxed">
                    ASME IX orbital welding, video boroscopy, dynamic passivation, NDT testing, and IQ/OQ validation.
                  </p>
                  <span className="inline-flex items-center text-xs font-bold text-white mt-4 group-hover:translate-x-1.5 transition-transform duration-300 bg-white/10 border border-white/20 px-3 py-1 rounded-full">
                    Explore Services &rarr;
                  </span>
                </div>
              </motion.div>
            </Link>
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
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-4 uppercase">
              Regulatory & Engineering Standards
            </h2>
            <div className="w-16 h-1 bg-brand-cyan mx-auto mt-4 rounded-full"></div>
            <p className="mt-4 text-base text-slate-600 font-medium">
              Compliance is not optional. Every system is validated to exceed global pharmacopoeia benchmarks and undergo thorough inspection before dispatch.
            </p>
          </div>

          {/* Standards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {standards.map((std, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="p-6 rounded-2xl glass-panel border border-white/5 flex items-start space-x-5 hover:border-brand-cyan/20 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex-shrink-0 p-3 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20">
                  {std.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {std.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    {std.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* 6. CONTACT & INQUIRY SECTION */}
      <section id="contact" className="py-16 relative overflow-hidden bg-brand-deep/30">
        {/* Glow decoration */}
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-brand-cyan/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-widest text-brand-cyan uppercase bg-brand-cyan/10 border border-brand-cyan/20 px-3 py-1.5 rounded-full">
              Start Your Project
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-4 uppercase">
              Connect With Our Engineering Team
            </h2>
            <div className="w-16 h-1 bg-brand-cyan mx-auto mt-4 rounded-full"></div>
            <p className="mt-4 text-sm text-slate-600 font-medium">
              Have specific engineering requirements or need assistance with loop design? Speak directly to our high-purity water process engineers.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-6xl mx-auto">
            {/* Contact Details Panel */}
            <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
              <div className="space-y-6">
                <h3 className="text-lg font-bold text-slate-900">
                  Corporate Office & Support
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
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
                      <span className="text-xs font-bold text-slate-900 leading-relaxed">
                        Plot No. 189, IDA Jeedimetla, Quthubullapur, Hyderabad, Telangana – 500055
                      </span>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center space-x-4 p-4 rounded-xl glass-panel border border-white/5 hover:border-brand-cyan/20 transition-all duration-300">
                    <div className="p-3 rounded-lg bg-brand-cyan/15 flex-shrink-0">
                      <PhoneCall className="w-5 h-5 text-brand-cyan" />
                    </div>
                    <div>
                      <span className="block text-[10px] uppercase font-bold text-slate-500">Direct Call</span>
                      <a href="tel:+919985479095" className="text-xs font-bold text-slate-900 hover:text-brand-cyan transition-colors">
                        +91 99854 79095
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-center space-x-4 p-4 rounded-xl glass-panel border border-white/5 hover:border-brand-cyan/20 transition-all duration-300">
                    <div className="p-3 rounded-lg bg-brand-cyan/15 flex-shrink-0">
                      <Mail className="w-5 h-5 text-brand-cyan" />
                    </div>
                    <div>
                      <span className="block text-[10px] uppercase font-bold text-slate-500">Email Address</span>
                      <a href="mailto:info@ravionwater.in" className="text-xs font-bold text-slate-900 hover:text-brand-cyan transition-colors">
                        info@ravionwater.in
                      </a>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-center space-x-4 p-4 rounded-xl glass-panel border border-white/5">
                    <div className="p-3 rounded-lg bg-brand-cyan/15 flex-shrink-0">
                      <Clock className="w-5 h-5 text-brand-cyan" />
                    </div>
                    <div>
                      <span className="block text-[10px] uppercase font-bold text-slate-500">Business Hours</span>
                      <span className="text-xs font-bold text-slate-900">
                        Mon - Sat: 9:00 AM - 6:00 PM (IST)
                      </span>
                    </div>
                  </div>

                  {/* Google Map Location */}
                  <div className="w-full h-48 rounded-xl overflow-hidden border border-white/10 shadow-md">
                    <iframe
                      src="https://maps.google.com/maps?q=RAVION%20WATER%20TECH%20Plot%20No.%20189%20Phase%20V%20IDA%20Jeedimetla%20Hyderabad&t=&z=14&ie=UTF8&iwloc=&output=embed"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Google Map location of Ravion Water Tech"
                    ></iframe>
                  </div>
                </div>
              </div>

              {/* Call-out Badge */}
              <div className="p-4 rounded-xl border border-brand-cyan/20 bg-brand-cyan/5">
                <span className="text-xs font-bold text-brand-cyan flex items-center space-x-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-ping"></span>
                  <span>WhatsApp Live Support Available</span>
                </span>
                <p className="text-xs text-slate-600 mt-1">
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
                className="p-8 rounded-3xl glass-panel border border-white/5 shadow-2xl relative"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-6">
                  Technical Inquiry Form
                </h3>
                <form onSubmit={(e) => { e.preventDefault(); alert("Thank you! Your inquiry has been submitted. Our engineering team will contact you shortly."); }} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-cyan transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        required
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-cyan transition-colors"
                        placeholder="Pharma Industries"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-cyan transition-colors"
                      placeholder="john.doe@company.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="system" className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                      System of Interest
                    </label>
                    <select
                      id="system"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:border-brand-cyan transition-colors cursor-pointer"
                    >
                      <option className="bg-white text-slate-900" value="pw">Purified Water System (PW)</option>
                      <option className="bg-white text-slate-900" value="wfi">Water for Injection (WFI)</option>
                      <option className="bg-white text-slate-900" value="psg">Pure Steam Generator (PSG)</option>
                      <option className="bg-white text-slate-900" value="loop">Distribution Loops & Piping</option>
                      <option className="bg-white text-slate-900" value="custom">Other / Custom Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                      Project Requirements
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-cyan transition-colors resize-none"
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
