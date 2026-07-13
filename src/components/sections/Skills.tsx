"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollReveal from "@/components/animations/ScrollReveal";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const skills = [
  { name: "Premiere Pro", detail: "Offline/Online Editing", percentage: 95, icon: "Pr" },
  { name: "After Effects", detail: "VFX & Motion Graphics", percentage: 90, icon: "Ae" },
  { name: "DaVinci Resolve", detail: "Color Grading", percentage: 88, icon: "Da" },
  { name: "Blender", detail: "3D Modeling & Compositing", percentage: 50, icon: "Bl" },
  { name: "Photoshop", detail: "Matte Painting / Textures", percentage: 85, icon: "Ps" },
];

export default function Skills() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const bars = container.querySelectorAll(".progress-bar");
    const numbers = container.querySelectorAll(".progress-number");

    // Animate bars width
    gsap.fromTo(
      bars,
      { width: "0%" },
      {
        width: (i: number, target: HTMLElement) => target.dataset.width + "%",
        duration: 1.5,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: container,
          start: "top 80%",
        },
      }
    );

    // Animate numbers counting up
    numbers.forEach((number, i) => {
      const targetValue = parseInt((number as HTMLElement).dataset.value || "0");
      gsap.fromTo(
        number,
        { innerHTML: 0 },
        {
          innerHTML: targetValue,
          duration: 1.5,
          ease: "power3.out",
          delay: i * 0.1,
          snap: { innerHTML: 1 },
          scrollTrigger: {
            trigger: container,
            start: "top 80%",
          },
          onUpdate: function () {
            number.innerHTML = Math.round(Number(this.targets()[0].innerHTML)) + "%";
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="w-full py-16 md:py-32 px-4 md:px-12 max-w-5xl mx-auto z-20">
      <ScrollReveal direction="up" distance={30}>
        <div className="mb-3 md:mb-4">
          <span className="text-primary uppercase tracking-[0.3em] text-xs font-bold font-sans">
            ◆ Toolkit & Precision
          </span>
        </div>
        
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 uppercase tracking-tight leading-none">
          The Creative<br />Workspace
        </h2>
        
        <p className="text-sm md:text-base text-muted-foreground max-w-2xl mb-6 md:mb-8">
          Harnessing industry-standard post-production systems to manipulate lighting, keyframes, sound design, and 3D scenes.
        </p>
        
        <div className="w-12 h-[2px] bg-gradient-to-r from-primary to-accent mb-10 md:mb-16 rounded-full" />
      </ScrollReveal>

      <div ref={containerRef} className="space-y-6 md:space-y-8">
        {skills.map((skill, index) => (
          <div key={index} className="w-full group">
            <div className="flex items-center gap-3 md:gap-4 mb-2 md:mb-3">
              {/* Software Icon Badge */}
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary text-xs md:text-sm font-bold font-mono shrink-0">
                {skill.icon}
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-baseline gap-2">
                  <div className="min-w-0">
                    <h3 className="text-sm md:text-base font-bold tracking-wide truncate">{skill.name}</h3>
                    <p className="text-[10px] md:text-xs text-muted-foreground tracking-wide truncate">{skill.detail}</p>
                  </div>
                  <span 
                    className="text-sm md:text-base font-bold font-mono text-primary progress-number shrink-0"
                    data-value={skill.percentage}
                  >
                    0%
                  </span>
                </div>
              </div>
            </div>
            
            <div className="w-full h-1 md:h-[6px] bg-secondary rounded-full overflow-hidden relative ml-11 md:ml-14" style={{ width: "calc(100% - 2.75rem)" }}>
              <div 
                className="progress-bar absolute top-0 left-0 h-full rounded-full"
                data-width={skill.percentage}
                style={{ 
                  width: "0%",
                  background: "linear-gradient(90deg, var(--accent-primary), var(--accent-secondary))",
                  boxShadow: "0 0 10px rgba(0, 212, 255, 0.4), 0 0 20px rgba(0, 212, 255, 0.2)"
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
