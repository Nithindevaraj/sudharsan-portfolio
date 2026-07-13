import Image from "next/image";
import HeroBackground from "@/components/three/HeroBackground";
import ScrollReveal from "@/components/animations/ScrollReveal";
import CharReveal from "@/components/animations/CharReveal";
import CustomCursor from "@/components/animations/CustomCursor";
import ShowreelPlayer from "@/components/video/ShowreelPlayer";
import Skills from "@/components/sections/Skills";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main className="flex min-h-[100dvh] flex-col items-center justify-between overflow-x-hidden">
      <CustomCursor />
      
      {/* Hero Section */}
      <section className="relative w-full h-[100dvh] flex flex-col items-center justify-center overflow-hidden">
        <HeroBackground />
        <div className="absolute inset-0 bg-black/60 z-10 pointer-events-none" /> 
        
        <div className="z-20 text-center px-4 w-full max-w-6xl">
          <CharReveal 
            text="SUDHARSAN" 
            as="h1" 
            className="text-4xl sm:text-6xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter mb-4 md:mb-6 text-primary leading-none neon-text" 
          />
          <ScrollReveal delay={0.5} direction="up" distance={30}>
            <p className="text-xs sm:text-sm md:text-lg lg:text-xl text-white/70 max-w-xl mx-auto font-sans tracking-[0.2em] md:tracking-[0.3em] uppercase">
              Video Editor & Motion Graphic Designer
            </p>
          </ScrollReveal>

          {/* Scroll Indicator */}
          <ScrollReveal delay={1.2} direction="up" distance={20}>
            <div className="mt-12 md:mt-20 flex flex-col items-center gap-2 opacity-50">
              <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Scroll</span>
              <div className="w-px h-8 bg-gradient-to-b from-primary to-transparent animate-pulse" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Timeline Divider */}
      <div className="w-full max-w-7xl mx-auto px-4 md:px-12">
        <div className="timeline-divider" />
      </div>

      {/* Showreel Section */}
      <section className="w-full py-16 md:py-32 px-4 md:px-12 max-w-7xl mx-auto z-20">
        <ScrollReveal direction="up" distance={50}>
          <div className="mb-8 md:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-8">
            <div>
              <span className="text-primary uppercase tracking-[0.3em] text-xs font-bold font-sans mb-3 block">▶ Play</span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 text-foreground">The Showreel</h2>
              <p className="text-sm md:text-base text-muted-foreground max-w-xl">
                A compilation of high-end corporate infrastructure projects, showcasing engineering scale through dynamic editing.
              </p>
            </div>
          </div>
          
          <ShowreelPlayer />
        </ScrollReveal>
      </section>

      {/* Timeline Divider */}
      <div className="w-full max-w-7xl mx-auto px-4 md:px-12">
        <div className="timeline-divider" />
      </div>

      {/* Featured Work Preview */}
      <section className="w-full py-16 md:py-32 px-4 md:px-12 max-w-7xl mx-auto z-20" id="work">
        <ScrollReveal direction="up" distance={50}>
          <div className="mb-8 md:mb-16 text-center md:text-left">
            <span className="text-primary uppercase tracking-[0.3em] text-xs font-bold font-sans mb-3 block">◆ Portfolio</span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground">Selected Works</h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 mb-12 md:mb-20">
          {/* Project 1 */}
          <ScrollReveal direction="up" delay={0.1} distance={50}>
            <div className="group relative aspect-video md:aspect-[4/3] rounded-xl overflow-hidden cursor-pointer border border-border/50 hover:border-primary/30 transition-all duration-500">
              <video 
                src="/videos/selected work/Selected work 1.MOV"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                autoPlay
                muted
                loop
                playsInline
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-0 left-0 p-4 md:p-8 z-10">
                <h3 className="text-lg md:text-2xl font-bold mb-1 md:mb-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">Cinematic Edit</h3>
                <p className="text-sm text-primary/80 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-75">Commercial & Brand</p>
              </div>
            </div>
          </ScrollReveal>

          {/* Project 2 */}
          <ScrollReveal direction="up" delay={0.2} distance={50}>
            <div className="group relative aspect-video md:aspect-[4/3] rounded-xl overflow-hidden cursor-pointer border border-border/50 hover:border-primary/30 transition-all duration-500 md:mt-16">
              <video 
                src="/videos/selected work/Selected work 2.MOV"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                autoPlay
                muted
                loop
                playsInline
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-0 left-0 p-4 md:p-8 z-10">
                <h3 className="text-lg md:text-2xl font-bold mb-1 md:mb-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">Infrastructure Documentary</h3>
                <p className="text-sm text-primary/80 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-75">Documentary Edit</p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal direction="up" distance={30}>
          <div className="flex justify-center w-full">
            <a 
              href="https://drive.google.com/drive/folders/1jCDWWM143Y8bUuLKGd7OLRN-vmnYz0lH?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-8 md:px-10 py-4 md:py-5 rounded-full border-2 border-primary bg-primary/10 text-primary hover:bg-primary hover:text-black font-bold transition-all duration-300 uppercase tracking-widest font-sans text-xs md:text-sm neon-glow hover:shadow-none cursor-pointer"
            >
              View All Projects
            </a>
          </div>
        </ScrollReveal>
      </section>

      {/* Timeline Divider */}
      <div className="w-full max-w-7xl mx-auto px-4 md:px-12">
        <div className="timeline-divider" />
      </div>

      {/* Skills Section */}
      <Skills />

      {/* Timeline Divider */}
      <div className="w-full max-w-7xl mx-auto px-4 md:px-12">
        <div className="timeline-divider" />
      </div>

      {/* About Section */}
      <section className="w-full py-16 md:py-32 px-4 md:px-12 max-w-7xl mx-auto z-20" id="about">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Photo */}
          <ScrollReveal direction="up" distance={50}>
            <div className="relative aspect-[3/4] md:aspect-[4/5] w-full max-w-sm mx-auto lg:mx-0 rounded-2xl overflow-hidden border border-border/50 group">
              <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors duration-700 pointer-events-none" />
              <Image 
                src="/images/Sudharsan.jpeg"
                alt="Sudharsan - Video Editor"
                fill
                className="object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
              />
              <div className="absolute inset-0 shadow-[inset_0_0_50px_rgba(0,0,0,0.8)] z-20 pointer-events-none" />
              
              {/* NLE frame overlay */}
              <div className="absolute top-3 left-3 right-3 bottom-3 border border-primary/20 rounded-lg z-30 pointer-events-none" />
              <div className="absolute top-2 left-2 text-[8px] text-primary/40 font-mono z-30 pointer-events-none">REC ●</div>
            </div>
          </ScrollReveal>

          {/* Text Content */}
          <div>
            <ScrollReveal direction="up" distance={30} delay={0.2}>
              <div className="mb-3 md:mb-4">
                <span className="text-primary uppercase tracking-[0.3em] text-xs font-bold font-sans">
                  ◆ The Storyteller
                </span>
              </div>
              
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 uppercase tracking-tight leading-none">
                Behind The<br />Timeline
              </h2>
              
              <p className="text-base md:text-lg text-foreground font-medium mb-6 md:mb-8">
                I'm a post-production specialist who translates raw clips to Grand visual, brand campaigns, and cultural records into cinematic footage.
              </p>
              
              <div className="w-12 h-[2px] bg-gradient-to-r from-primary to-accent mb-6 md:mb-8 rounded-full" />
              
              <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6">
                With half a decade of hands-on experience, I have developed a passion for Feature film, documentaries, long & short form edits and high-retention commercial styling. My edit process is rooted in music selection and sound dynamics, ensuring that every project has a powerful sonic foundation.
              </p>
              
              <p className="text-sm md:text-base text-muted-foreground mb-8 md:mb-12">
                Whether navigating drone flights over massive L&T construction sites, motion graphics or crafting historical summaries for Cheers Network, I strive to achieve Apple's minimalism combined with Netflix's narrative intensity.
              </p>

              <a 
                href="#contact"
                className="inline-block bg-primary hover:bg-primary/90 text-black font-bold py-3 md:py-4 px-6 md:px-8 rounded-lg uppercase tracking-widest text-xs md:text-sm transition-colors cursor-pointer"
              >
                Collaborate With Me
              </a>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Timeline Divider */}
      <div className="w-full max-w-7xl mx-auto px-4 md:px-12">
        <div className="timeline-divider" />
      </div>

      {/* Contact Section */}
      <ContactSection />
    </main>
  );
}
