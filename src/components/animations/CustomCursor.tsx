"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { cn } from "@/lib/utils";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  
  useEffect(() => {
    // Only run on desktop
    if (window.matchMedia("(pointer: coarse)").matches) return;
    
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    
    if (!cursor || !follower) return;

    let mouseX = 0;
    let mouseY = 0;
    
    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      gsap.to(cursor, {
        x: mouseX,
        y: mouseY,
        duration: 0.1,
        ease: "power2.out"
      });
      
      gsap.to(follower, {
        x: mouseX,
        y: mouseY,
        duration: 0.5,
        ease: "power2.out"
      });
    };
    
    const onMouseEnter = () => setIsHovering(true);
    const onMouseLeave = () => setIsHovering(false);
    
    // Add listeners
    window.addEventListener("mousemove", onMouseMove);
    
    // Attach hover effects to interactive elements
    const attachHoverListeners = () => {
      const interactables = document.querySelectorAll('a, button, input, [role="button"]');
      interactables.forEach(el => {
        el.addEventListener("mouseenter", onMouseEnter);
        el.addEventListener("mouseleave", onMouseLeave);
      });
    };
    
    // Initial attach
    attachHoverListeners();
    
    // Re-attach when DOM changes (simple implementation)
    const observer = new MutationObserver(() => {
      attachHoverListeners();
    });
    
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      observer.disconnect();
      const interactables = document.querySelectorAll('a, button, input, [role="button"]');
      interactables.forEach(el => {
        el.removeEventListener("mouseenter", onMouseEnter);
        el.removeEventListener("mouseleave", onMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div 
        ref={cursorRef} 
        className={cn(
          "fixed top-0 left-0 w-2 h-2 rounded-full bg-primary pointer-events-none z-[100] mix-blend-difference -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300",
          isHovering ? "opacity-0" : "opacity-100"
        )}
      />
      <div 
        ref={followerRef} 
        className={cn(
          "fixed top-0 left-0 w-8 h-8 rounded-full border border-primary pointer-events-none z-[100] mix-blend-difference -translate-x-1/2 -translate-y-1/2 transition-all duration-300",
          isHovering ? "w-16 h-16 bg-primary/20 backdrop-blur-sm scale-150" : ""
        )}
      />
    </>
  );
}
