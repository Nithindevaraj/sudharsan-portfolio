"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface CharRevealProps {
  text: string;
  className?: string;
  delay?: number;
  as?: any;
}

export default function CharReveal({
  text,
  className,
  delay = 0,
  as: Component = "div",
}: CharRevealProps) {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Get all char elements
    const chars = container.querySelectorAll(".char");
    
    gsap.fromTo(
      chars,
      {
        y: "120%",
        opacity: 0,
        rotateZ: 10,
        scale: 0.8,
      },
      {
        y: "0%",
        opacity: 1,
        rotateZ: 0,
        scale: 1,
        duration: 1.2,
        stagger: 0.05,
        ease: "power4.out",
        delay: delay,
        scrollTrigger: {
          trigger: container,
          start: "top 90%",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [delay]);

  // Split text into characters for animation
  const chars = text.split("");

  return (
    <Component ref={containerRef} className={cn("overflow-hidden inline-block", className)}>
      {chars.map((char, i) => (
        <span key={i} className="inline-block overflow-hidden">
          <span className="inline-block char will-change-transform">{char === " " ? "\u00A0" : char}</span>
        </span>
      ))}
    </Component>
  );
}
