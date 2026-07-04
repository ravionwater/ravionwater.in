"use client";

import { Droplets, Phone, Mail, MapPin, MessageSquare } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-deep border-t border-white/5 pt-16 pb-8 relative overflow-hidden">
      {/* Background soft glow */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-brand-cyan/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          {/* Company Brief */}
          <div className="space-y-4">
            <a href="#home" className="flex items-center space-x-2 group">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-brand-teal to-brand-cyan flex items-center justify-center shadow-md shadow-brand-cyan/15">
                <Droplets className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-base font-bold tracking-wider text-white uppercase group-hover:text-brand-cyan transition-colors">
                  Ravion Water
                </span>
                <span className="text-[9px] text-brand-sky uppercase tracking-widest font-semibold -mt-1">
                  Tech
                </span>
              </div>
            </a>
            <p className="text-sm text-brand-light leading-relaxed">
              Design, engineering, manufacturing, and validation of FDA-compliant high-purity water generation and distribution loops. Serving global biotechnology and pharmaceutical industries.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold tracking-wider text-white uppercase mb-4 border-l-2 border-brand-cyan pl-2">
              Solutions
            </h3>
            <ul className="space-y-2.5">
              <li>
                <a href="#systems" className="text-sm text-brand-light hover:text-white transition-colors">
                  Purified Water Systems (PW)
                </a>
              </li>
              <li>
                <a href="#systems" className="text-sm text-brand-light hover:text-white transition-colors">
                  Water for Injection (WFI)
                </a>
              </li>
              <li>
                <a href="#systems" className="text-sm text-brand-light hover:text-white transition-colors">
                  Pure Steam Generators (PSG)
                </a>
              </li>
              <li>
                <a href="#systems" className="text-sm text-brand-light hover:text-white transition-colors">
                  Sanitary Loop Piping
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-bold tracking-wider text-white uppercase mb-4 border-l-2 border-brand-cyan pl-2">
              Corporate
            </h3>
            <ul className="space-y-2.5">
              <li>
                <a href="#about" className="text-sm text-brand-light hover:text-white transition-colors">
                  About the Company
                </a>
              </li>
              <li>
                <a href="#standards" className="text-sm text-brand-light hover:text-white transition-colors">
                  Quality Standards
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-sm text-brand-light hover:text-white transition-colors">
                  Project Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-brand-light hover:text-white transition-colors">
                  Contact & Inquiries
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-bold tracking-wider text-white uppercase mb-4 border-l-2 border-brand-cyan pl-2">
              Get in Touch
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start text-sm text-brand-light">
                <MapPin className="w-5 h-5 text-brand-cyan mr-3 flex-shrink-0 mt-0.5" />
                <span>Plot No. 189, IDA Jeedimetla, Quthubullapur, Hyderabad, Telangana – 500055</span>
              </li>
              <li className="flex items-center text-sm text-brand-light">
                <Phone className="w-4 h-4 text-brand-cyan mr-3 flex-shrink-0" />
                <a href="tel:+919985479095" className="hover:text-white transition-colors">
                  +91 99854 79095
                </a>
              </li>
              <li className="flex items-center text-sm text-brand-light">
                <Mail className="w-4 h-4 text-brand-cyan mr-3 flex-shrink-0" />
                <a href="mailto:info@ravionwater.in" className="hover:text-white transition-colors">
                  info@ravionwater.in
                </a>
              </li>
              <li className="flex items-center text-sm text-brand-light">
                <MessageSquare className="w-4 h-4 text-brand-cyan mr-3 flex-shrink-0" />
                <a href="https://wa.me/919985479095" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  WhatsApp: Support Chat
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="pt-8 mt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-brand-light">
          <p>&copy; {currentYear} Ravion Water Tech. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#contact" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
