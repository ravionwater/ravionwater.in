"use client";

import { Phone, Mail, MapPin, MessageSquare } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8 relative overflow-hidden">
      {/* Background soft glow */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-brand-cyan/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          {/* Company Brief */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center group hover:scale-[1.01] transition-transform duration-300">
              <div className="relative w-36 h-10 bg-white rounded-xl px-2 shadow-md shadow-black/5 flex items-center justify-center overflow-hidden border border-slate-200">
                <Image
                  src="/images/logo.png"
                  alt="Ravion Water Tech Logo"
                  width={130}
                  height={32}
                  priority
                  className="object-contain"
                />
              </div>
            </Link>
            <p className="text-sm text-slate-600 leading-relaxed">
              Design, engineering, manufacturing, and validation of FDA-compliant high-purity water generation and distribution loops. Serving global biotechnology and pharmaceutical industries.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold tracking-wider text-slate-900 uppercase mb-4 border-l-2 border-brand-cyan pl-2">
              Systems
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/products" className="text-sm text-slate-600 hover:text-brand-cyan transition-colors">
                  Purified Water Systems (PW)
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-sm text-slate-600 hover:text-brand-cyan transition-colors">
                  Water for Injection (WFI)
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-sm text-slate-600 hover:text-brand-cyan transition-colors">
                  Pure Steam Generators (PSG)
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-sm text-slate-600 hover:text-brand-cyan transition-colors">
                  Sanitary Loop Piping
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-bold tracking-wider text-slate-900 uppercase mb-4 border-l-2 border-brand-cyan pl-2">
              Corporate
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/#about" className="text-sm text-slate-600 hover:text-brand-cyan transition-colors">
                  About the Company
                </Link>
              </li>
              <li>
                <Link href="/#standards" className="text-sm text-slate-600 hover:text-brand-cyan transition-colors">
                  Quality Standards
                </Link>
              </li>
              <li>
                <Link href="/#gallery" className="text-sm text-slate-600 hover:text-brand-cyan transition-colors">
                  Project Gallery
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-sm text-slate-600 hover:text-brand-cyan transition-colors">
                  Contact & Inquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-bold tracking-wider text-slate-900 uppercase mb-4 border-l-2 border-brand-cyan pl-2">
              Get in Touch
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start text-sm text-slate-600">
                <MapPin className="w-5 h-5 text-brand-teal mr-3 flex-shrink-0 mt-0.5" />
                <span>Plot No. 189, IDA Jeedimetla, Quthubullapur, Hyderabad, Telangana – 500055</span>
              </li>
              <li className="flex items-center text-sm text-slate-600">
                <Phone className="w-4 h-4 text-brand-teal mr-3 flex-shrink-0" />
                <a href="tel:+919985479095" className="hover:text-brand-cyan transition-colors">
                  +91 99854 79095
                </a>
              </li>
              <li className="flex items-center text-sm text-slate-600">
                <Mail className="w-4 h-4 text-brand-teal mr-3 flex-shrink-0" />
                <a href="mailto:info@ravionwater.in" className="hover:text-brand-cyan transition-colors">
                  info@ravionwater.in
                </a>
              </li>
              <li className="flex items-center text-sm text-slate-600">
                <MessageSquare className="w-4 h-4 text-brand-teal mr-3 flex-shrink-0" />
                <a href="https://wa.me/919985479095" target="_blank" rel="noopener noreferrer" className="hover:text-brand-cyan transition-colors">
                  WhatsApp: Support Chat
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="pt-8 mt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500">
          <p>&copy; {currentYear} Ravion Water Tech. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#contact" className="hover:text-brand-cyan transition-colors">
              Privacy Policy
            </a>
            <a href="#contact" className="hover:text-brand-cyan transition-colors">
              Terms of Service
            </a>
            <a href="#contact" className="hover:text-brand-cyan transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
