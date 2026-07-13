"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { Download, Menu, X, Volume2, VolumeX } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  const playClickSound = useCallback(() => {
    if (!soundEnabled) return;
    try {
      const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.frequency.setValueAtTime(800, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(200, audioCtx.currentTime + 0.08);
      gain.gain.setValueAtTime(0.15, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.1);
      osc.start(audioCtx.currentTime);
      osc.stop(audioCtx.currentTime + 0.1);
    } catch {}
  }, [soundEnabled]);

  const triggerHaptic = useCallback(() => {
    if (navigator.vibrate) {
      navigator.vibrate(10);
    }
  }, []);

  const scrollToSection = (id: string) => {
    playClickSound();
    triggerHaptic();
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = ["Work", "About", "Contact"];

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 w-full z-50 transition-all duration-500",
          isScrolled ? "py-2 md:py-4" : "py-3 md:py-6"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <div 
            className={cn(
              "flex items-center justify-between transition-all duration-500 rounded-full",
              isScrolled ? "glass px-4 md:px-6 py-2 md:py-3" : "px-2 py-2"
            )}
          >
            {/* Logo */}
            <Link href="/" className="font-sans text-lg md:text-xl font-bold tracking-widest uppercase">
              Sudharsan<span className="text-primary">.</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-sm font-sans uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {item}
                </button>
              ))}
            </nav>

            {/* Right Controls */}
            <div className="flex items-center gap-2 md:gap-4">
              {/* Sound Toggle */}
              <button
                onClick={() => {
                  setSoundEnabled(!soundEnabled);
                  triggerHaptic();
                }}
                className="p-2 text-muted-foreground hover:text-primary transition-colors"
                aria-label="Toggle sound"
              >
                {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
              </button>

              {/* Resume Button */}
              <a
                href="/Sudharsan_Resume.pdf"
                download="Sudharsan_Resume.pdf"
                onClick={() => { playClickSound(); triggerHaptic(); }}
                className="hidden sm:flex items-center gap-2 bg-primary hover:bg-primary/90 text-black font-bold py-2 px-4 md:px-5 rounded-full text-xs md:text-sm font-sans uppercase tracking-widest transition-colors"
              >
                <Download className="w-3 h-3 md:w-4 md:h-4" />
                <span>Resume</span>
              </a>

              {/* Mobile Hamburger */}
              <button
                onClick={() => {
                  setIsMobileMenuOpen(!isMobileMenuOpen);
                  playClickSound();
                  triggerHaptic();
                }}
                className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center transition-all duration-500 md:hidden",
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        <nav className="flex flex-col items-center gap-10">
          {navItems.map((item, i) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className={cn(
                "text-3xl font-bold uppercase tracking-widest text-foreground hover:text-primary transition-all duration-300",
                isMobileMenuOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              )}
              style={{
                transitionDelay: isMobileMenuOpen ? `${i * 100 + 200}ms` : "0ms",
              }}
            >
              {item}
            </button>
          ))}
          
          {/* Mobile Resume Button */}
          <a
            href="/Sudharsan_Resume.pdf"
            download="Sudharsan_Resume.pdf"
            onClick={() => { playClickSound(); triggerHaptic(); setIsMobileMenuOpen(false); }}
            className={cn(
              "flex items-center gap-3 bg-primary text-black font-bold py-3 px-8 rounded-full text-sm uppercase tracking-widest transition-all duration-300 mt-4",
              isMobileMenuOpen
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            )}
            style={{
              transitionDelay: isMobileMenuOpen ? `${navItems.length * 100 + 200}ms` : "0ms",
            }}
          >
            <Download className="w-4 h-4" />
            Download Resume
          </a>
        </nav>
      </div>
    </>
  );
}
