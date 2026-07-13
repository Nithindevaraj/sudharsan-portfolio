"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollReveal from "@/components/animations/ScrollReveal";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const skills = [
  { name: "Premiere Pro (Offline/Online Editing)", percentage: 95 },
  { name: "After Effects (VFX & Motion Graphics)", percentage: 90 },
  { name: "DaVinci Resolve (Color Grading)", percentage: 88 },
  { name: "Blender (3D Modeling & Compositing)", percentage: 50 },
  { name: "Photoshop (Matte Painting / Textures)", percentage: 85 },
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
        width: (i, target) => target.dataset.width + "%",
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
    <section className="w-full py-32 px-6 md:px-12 max-w-5xl mx-auto z-20">
      <ScrollReveal direction="up" distance={30}>
        <div className="mb-4">
          <span className="text-primary uppercase tracking-widest text-sm font-bold font-sans">
            Toolkit & Precision
          </span>
        </div>
        
        <h2 className="text-5xl md:text-7xl font-bold font-serif mb-8 uppercase tracking-tighter leading-none">
          The Creative<br />Workspace
        </h2>
        
        <p className="text-lg text-muted-foreground max-w-2xl mb-8">
          Harnessing industry-standard post-production systems to manipulate lighting, keyframes, sound design, and 3D scenes.
        </p>
        
        <div className="w-12 h-1 bg-primary mb-16 rounded-full" />
      </ScrollReveal>

      <div ref={containerRef} className="space-y-10">
        {skills.map((skill, index) => (
          <div key={index} className="w-full">
            <div className="flex justify-between items-end mb-3">
              <h3 className="text-lg font-bold font-sans tracking-wide">{skill.name}</h3>
              <span 
                className="text-lg font-bold font-sans progress-number"
                data-value={skill.percentage}
              >
                0%
              </span>
            </div>
            
            <div className="w-full h-1 bg-secondary rounded-full overflow-hidden relative">
              <div 
                className="progress-bar absolute top-0 left-0 h-full bg-primary rounded-full shadow-[0_0_10px_rgba(200,169,126,0.5)]"
                data-width={skill.percentage}
                style={{ width: "0%" }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
