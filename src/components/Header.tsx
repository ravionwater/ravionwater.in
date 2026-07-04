"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
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
    { name: "Products", href: "/products" },
    { name: "Spares", href: "/spares" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/#contact" },
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
          <Link href="/" className="flex items-center group hover:scale-[1.02] transition-transform duration-300">
            <div className="relative w-36 h-10 bg-white/95 rounded-xl px-2 shadow-lg shadow-black/10 flex items-center justify-center overflow-hidden border border-white/20">
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

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xs font-medium text-brand-light hover:text-brand-cyan transition-colors duration-300 relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-brand-cyan after:scale-x-0 hover:after:scale-x-100 after:origin-right hover:after:origin-left after:transition-transform after:duration-300"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/#contact"
              className="px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-brand-teal to-brand-cyan hover:from-brand-cyan hover:to-brand-teal transition-all duration-300 shadow-md shadow-brand-cyan/15 hover:shadow-brand-cyan/25 hover:scale-[1.02] active:scale-95"
            >
              Get a Quote
            </Link>
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
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-base font-medium text-brand-light hover:text-brand-cyan hover:bg-white/5 px-3 py-2 rounded-lg transition-all"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 border-t border-white/5">
            <Link
              href="/#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-center px-4 py-3 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-brand-teal to-brand-cyan hover:from-brand-cyan hover:to-brand-teal transition-all duration-300 shadow-md shadow-brand-cyan/15"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
