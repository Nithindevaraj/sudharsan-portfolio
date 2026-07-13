"use client";

import { useEffect, useRef, ReactNode } from "react";
import gsap from "gsap";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  intensity?: number;
}

export default function MagneticButton({
  children,
  className,
  intensity = 0.5,
}: MagneticButtonProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const element = elementRef.current;
    
    if (!container || !element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { height, width, left, top } = container.getBoundingClientRect();
      
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);

      gsap.to(element, {
        x: x * intensity,
        y: y * intensity,
        duration: 1,
        ease: "power3.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(element, {
        x: 0,
        y: 0,
        duration: 1,
        ease: "elastic.out(1, 0.3)",
      });
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [intensity]);

  return (
    <div ref={containerRef} className={cn("inline-block", className)}>
      <div ref={elementRef} className="will-change-transform">
        {children}
      </div>
    </div>
  );
}
