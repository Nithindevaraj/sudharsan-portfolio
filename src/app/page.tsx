import Image from "next/image";
import HeroBackground from "@/components/three/HeroBackground";
import ScrollReveal from "@/components/animations/ScrollReveal";
import CharReveal from "@/components/animations/CharReveal";
import MagneticButton from "@/components/animations/MagneticButton";
import CustomCursor from "@/components/animations/CustomCursor";
import ShowreelPlayer from "@/components/video/ShowreelPlayer";
import Skills from "@/components/sections/Skills";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main className="flex min-h-[100dvh] flex-col items-center justify-between">
      <CustomCursor />
      
      {/* Hero Section */}
      <section className="relative w-full h-[100dvh] flex flex-col items-center justify-center overflow-hidden">
        <HeroBackground />
        <div className="absolute inset-0 bg-background/50 z-10 pointer-events-none" /> 
        
        <div className="z-20 text-center px-4 w-full max-w-6xl mix-blend-difference pointer-events-none">
          <CharReveal 
            text="SUDHARSAN" 
            as="h1" 
            className="text-4xl sm:text-6xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter mb-4 md:mb-6 text-primary leading-none" 
          />
          <ScrollReveal delay={0.5} direction="up" distance={30}>
            <p className="text-xs sm:text-sm md:text-xl lg:text-2xl text-white/80 max-w-2xl mx-auto font-sans tracking-widest uppercase">
              Video editor & Motion graphic designer
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Showreel Section */}
      <section className="w-full py-32 px-6 md:px-12 max-w-7xl mx-auto z-20">
        <ScrollReveal direction="up" distance={50}>
          <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold mb-4 font-serif text-primary">The Showreel</h2>
              <p className="text-xl text-muted-foreground max-w-xl">
                A compilation of high-end corporate infrastructure projects, showcasing engineering scale through dynamic editing.
              </p>
            </div>
          </div>
          
          <ShowreelPlayer />
        </ScrollReveal>
      </section>

      {/* Featured Work Preview */}
      <section className="w-full py-32 px-6 md:px-12 max-w-7xl mx-auto z-20" id="work">
        <ScrollReveal direction="up" distance={50}>
          <div className="mb-16 text-center md:text-left">
            <h2 className="text-4xl md:text-6xl font-bold font-serif">Selected Works</h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          {/* Project 1 */}
          <ScrollReveal direction="up" delay={0.1} distance={50}>
            <div className="group relative aspect-[4/3] glass-panel rounded-xl overflow-hidden cursor-pointer">
              <video 
                src="/videos/selected work/Selected work 1.MOV"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                autoPlay
                muted
                loop
                playsInline
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              <div className="absolute bottom-0 left-0 p-8 z-10">
                <h3 className="text-2xl font-bold mb-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">Cinematic Edit</h3>
                <p className="text-muted-foreground translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-75">Commercial & Brand</p>
              </div>
            </div>
          </ScrollReveal>

          {/* Project 2 */}
          <ScrollReveal direction="up" delay={0.2} distance={50}>
            <div className="group relative aspect-[4/3] glass-panel rounded-xl overflow-hidden cursor-pointer md:mt-24">
              <video 
                src="/videos/selected work/Selected work 2.MOV"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                autoPlay
                muted
                loop
                playsInline
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              <div className="absolute bottom-0 left-0 p-8 z-10">
                <h3 className="text-2xl font-bold mb-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">Infrastructure Documentary</h3>
                <p className="text-muted-foreground translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-75">Documentary Edit</p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal direction="up" distance={30}>
          <div className="flex justify-center w-full">
            <MagneticButton intensity={0.3}>
              <a 
                href="https://drive.google.com/drive/folders/1jCDWWM143Y8bUuLKGd7OLRN-vmnYz0lH?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block px-10 py-5 rounded-full border-2 border-primary bg-primary/10 text-primary hover:bg-primary hover:text-black font-bold transition-all duration-300 uppercase tracking-widest font-mono text-base shadow-[0_0_20px_rgba(200,169,126,0.3)] hover:shadow-[0_0_30px_rgba(200,169,126,0.6)] cursor-pointer"
              >
                View All Projects
              </a>
            </MagneticButton>
          </div>
        </ScrollReveal>
      </section>

      {/* Skills Section */}
      <Skills />

      {/* About Section */}
      <section className="w-full py-32 px-6 md:px-12 max-w-7xl mx-auto z-20 border-t border-border/50" id="about">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Photo */}
          <ScrollReveal direction="up" distance={50}>
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:mx-0 rounded-2xl overflow-hidden glass-panel group">
              <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors duration-700 pointer-events-none" />
              <Image 
                src="/images/Sudharsan.jpeg"
                alt="Sudharsan - Video Editor"
                fill
                className="object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
              />
              <div className="absolute inset-0 shadow-[inset_0_0_50px_rgba(0,0,0,0.8)] z-20 pointer-events-none" />
            </div>
          </ScrollReveal>

          {/* Text Content */}
          <div>
            <ScrollReveal direction="up" distance={30} delay={0.2}>
              <div className="mb-4">
                <span className="text-primary uppercase tracking-widest text-sm font-bold font-sans">
                  The Storyteller
                </span>
              </div>
              
              <h2 className="text-5xl md:text-7xl font-bold font-serif mb-8 uppercase tracking-tighter leading-none">
                Behind The<br />Timeline
              </h2>
              
              <p className="text-xl text-foreground font-bold mb-8">
                I'm a post-production specialist who translates raw clips to Grand visual, brand campaigns, and cultural records into cinematic footage.
              </p>
              
              <div className="w-12 h-1 bg-primary mb-8 rounded-full" />
              
              <p className="text-lg text-muted-foreground mb-6">
                With half a decade of hands-on experience, I have developed a passion for Feature film, documentaries, long & short form edits and high-retention commercial styling. My edit process is rooted in music selection and sound dynamics, ensuring that every project has a powerful sonic foundation.
              </p>
              
              <p className="text-lg text-muted-foreground mb-12">
                Whether navigating drone flights over massive L&T construction sites, motion graphics or crafting historical summaries for Cheers Network, I strive to achieve Apple's minimalism combined with Netflix's narrative intensity.
              </p>

              <MagneticButton intensity={0.2}>
                <a 
                  href="#contact"
                  className="inline-block bg-primary hover:bg-primary/90 text-black font-bold py-4 px-8 rounded-lg uppercase tracking-widest text-sm transition-colors cursor-pointer"
                >
                  Collaborate With Me
                </a>
              </MagneticButton>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />
    </main>
  );
}
