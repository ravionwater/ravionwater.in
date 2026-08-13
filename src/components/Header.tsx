"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Systems", href: "/products" },
    { name: "Spares", href: "/spares" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/#about" },
    { name: "Blogs", href: "/#contact" },
    { name: "Contact Us", href: "/#contact" },
  ];

  return (
    <header className="absolute top-4 left-4 right-4 xl:left-1/2 xl:-translate-x-1/2 xl:w-[95%] xl:max-w-[1400px] z-50 transition-all duration-300">
      <div
        className={`w-full rounded-full transition-all duration-300 ${
          isScrolled
            ? "bg-[#F4F8FC]/95 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
            : "bg-[#F4F8FC] shadow-lg"
        }`}
      >
        <div className="flex items-center justify-between h-20 md:h-24 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center group hover:scale-[1.02] transition-transform duration-300 flex-shrink-0">
            <div className="relative w-40 h-12 md:w-52 md:h-16 flex items-center justify-start overflow-hidden">
              <Image
                src="/images/Logo.png"
                alt="Ravion Water Tech Logo"
                fill
                priority
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center justify-center space-x-5 xl:space-x-7 flex-1 px-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xs xl:text-sm font-bold text-[#0A1B3F] uppercase tracking-wide hover:text-brand-cyan transition-colors duration-300 flex items-center gap-1 relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-brand-cyan after:scale-x-0 hover:after:scale-x-100 after:origin-right hover:after:origin-left after:transition-transform after:duration-300"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Phone Button & Mobile Menu Toggle */}
          <div className="flex items-center gap-4 flex-shrink-0">
            <a
              href="tel:+919985479095"
              className="hidden md:flex items-center justify-center gap-2 bg-[#1156A5] hover:bg-[#0c407d] text-white px-6 py-2.5 rounded-full font-bold text-sm transition-all shadow-md hover:shadow-lg hover:scale-105"
            >
              <Phone className="w-4 h-4 fill-white" />
              +91-9985479095
            </a>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-full text-slate-800 hover:bg-slate-200 transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`lg:hidden mt-2 bg-[#F4F8FC]/98 backdrop-blur-xl rounded-3xl shadow-xl transition-all duration-300 ease-in-out overflow-hidden border border-slate-200/50 ${
          isMobileMenuOpen ? "max-h-[500px] opacity-100 py-4" : "max-h-0 opacity-0 py-0"
        }`}
      >
        <div className="px-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-sm font-bold text-[#0A1B3F] uppercase tracking-wide hover:text-brand-cyan hover:bg-slate-200/50 px-4 py-3 rounded-xl transition-all flex items-center justify-between"
            >
              {link.name}
            </Link>
          ))}
          <a
            href="tel:+919985479095"
            className="md:hidden flex items-center justify-center gap-2 bg-[#1156A5] text-white px-4 py-3 mt-4 rounded-xl font-bold text-sm"
          >
            <Phone className="w-4 h-4 fill-white" />
            +91-9985479095
          </a>
        </div>
      </div>
    </header>
  );
}
