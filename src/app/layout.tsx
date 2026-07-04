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
  title: "Ravion Water Tech | High Purity PW, WFI & PSG Engineering",
  description: "Design, engineering, manufacturing, and validation of FDA-compliant high-purity water generation (PW, WFI), steam generators (PSG), and distribution loop systems.",
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
