"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  as?: any;
}

export default function TextReveal({
  text,
  className,
  delay = 0,
  as: Component = "p",
}: TextRevealProps) {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Get all word elements
    const words = container.querySelectorAll(".word");
    
    gsap.fromTo(
      words,
      {
        y: "120%",
        opacity: 0,
        rotateZ: 5,
      },
      {
        y: "0%",
        opacity: 1,
        rotateZ: 0,
        duration: 0.8,
        stagger: 0.03,
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

  // Split text into words for animation
  const words = text.split(" ");

  return (
    <Component ref={containerRef} className={cn("overflow-hidden inline-block", className)}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.25em]">
          <span className="inline-block word will-change-transform">{word}</span>
        </span>
      ))}
    </Component>
  );
}
