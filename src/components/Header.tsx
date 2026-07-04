"use client";

import { useState, useEffect } from "react";
import { Menu, X, Droplets } from "lucide-react";

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
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Showcase Gallery", href: "#gallery" },
    { name: "Standards", href: "#standards" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-brand-deep/80 backdrop-blur-md border-b border-white/5 py-4 shadow-lg shadow-brand-deep/20"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-2 group">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-teal to-brand-cyan shadow-lg shadow-brand-cyan/20 group-hover:scale-105 transition-transform duration-300">
              <Droplets className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-wider text-white uppercase group-hover:text-brand-cyan transition-colors duration-300">
                Ravion Water
              </span>
              <span className="text-[10px] text-brand-sky uppercase tracking-widest font-semibold -mt-1">
                Tech
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-brand-light hover:text-brand-cyan transition-colors duration-300 relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-brand-cyan after:scale-x-0 hover:after:scale-x-100 after:origin-right hover:after:origin-left after:transition-transform after:duration-300"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-brand-teal to-brand-cyan hover:from-brand-cyan hover:to-brand-teal transition-all duration-300 shadow-md shadow-brand-cyan/15 hover:shadow-brand-cyan/25 hover:scale-[1.02] active:scale-95"
            >
              Get a Quote
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-brand-light hover:text-white hover:bg-white/5 transition-colors focus:outline-none"
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

      {/* Mobile Menu Drawer */}
      <div
        className={`md:hidden fixed inset-x-0 top-[72px] bg-brand-deep/95 backdrop-blur-lg border-b border-white/5 transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? "max-h-[400px] opacity-100 py-6" : "max-h-0 opacity-0 py-0"
        }`}
      >
        <div className="px-4 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-base font-medium text-brand-light hover:text-brand-cyan hover:bg-white/5 px-3 py-2 rounded-lg transition-all"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 border-t border-white/5">
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-center px-4 py-3 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-brand-teal to-brand-cyan hover:from-brand-cyan hover:to-brand-teal transition-all duration-300 shadow-md shadow-brand-cyan/15"
            >
              Get a Quote
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
