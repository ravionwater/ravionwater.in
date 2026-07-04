import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactWidget from "@/components/ContactWidget";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Purified Water System & WFI Plant Manufacturer India | Ravion Water Tech",
  description: "Ravion Water Tech is a leading manufacturer of FDA USP compliant Purified Water (PW) Systems, Water for Injection (WFI) Plants, Pure Steam Generators (PSG), and sanitary loop piping in Hyderabad, India.",
  keywords: [
    "Purified Water System manufacturer Hyderabad",
    "WFI plant manufacturer India",
    "Pure Steam Generator PSG manufacturer India",
    "Pharma water system supplier Telangana",
    "Sanitary loop piping installation India",
    "RO EDI water systems pharmaceutical",
    "ASME BPE piping fabrication Hyderabad",
    "Hygienic process piping fabrication",
    "Next-gen pharmaceutical water engineering",
    "Ravion Water Tech Jeedimetla Hyderabad"
  ].join(", "),
  alternates: {
    canonical: "https://ravionwater.in",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased bg-brand-deep text-white font-sans`}>
        <Header />
        {children}
        <ContactWidget />
        <Footer />
      </body>
    </html>
  );
}
