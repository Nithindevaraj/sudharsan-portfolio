"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Download } from "lucide-react";
import { cn } from "@/lib/utils";
import MagneticButton from "@/components/animations/MagneticButton";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500",
        isScrolled ? "py-4" : "py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div 
          className={cn(
            "flex items-center justify-between transition-all duration-500 rounded-full",
            isScrolled ? "glass px-6 py-3" : "px-2 py-2"
          )}
        >
          {/* Logo */}
          <Link href="/" className="font-serif text-xl font-bold tracking-widest uppercase">
            Sudharsan<span className="text-primary">.</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {["Work", "About", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-sm font-sans uppercase tracking-widest text-muted-foreground hover:text-white transition-colors"
              >
                {item}
              </button>
            ))}
          </nav>

          {/* Resume Button */}
          <MagneticButton intensity={0.2}>
            <a
              href="/Sudharsan_Resume.pdf"
              download="Sudharsan_Resume.pdf"
              className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-black font-bold py-2 px-5 rounded-full text-sm font-sans uppercase tracking-widest transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>Resume</span>
            </a>
          </MagneticButton>
        </div>
      </div>
    </header>
  );
}
