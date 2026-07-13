"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { cn } from "@/lib/utils";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    // Haptic feedback on submit
    if (navigator.vibrate) {
      navigator.vibrate([10, 50, 10]);
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "ef337e91-5eb7-445d-9dbe-f1047487e807",
          from_name: data.name,
          email: data.email,
          subject: "New Inquiry from Portfolio Website",
          message: data.message,
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        reset();
        if (navigator.vibrate) navigator.vibrate([10, 30, 10, 30, 10]);
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full py-16 md:py-32 px-4 md:px-12 max-w-7xl mx-auto z-20" id="contact">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 lg:gap-8">
        
        {/* Left Column - Content */}
        <div>
          <ScrollReveal direction="up" distance={30}>
            <div className="mb-3 md:mb-4">
              <span className="text-primary uppercase tracking-[0.3em] text-xs font-bold font-sans">
                ◆ Get In Touch
              </span>
            </div>
            
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 uppercase tracking-tight leading-none">
              Let&apos;s Create<br />Something<br />Extraordinary.
            </h2>
            
            <p className="text-sm md:text-base text-muted-foreground mb-10 md:mb-16 max-w-md">
              Have a megaproject to document, a brand commercial to edit, or a documentary show to frame? Let&apos;s talk.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2} distance={30}>
            <div className="space-y-6 md:space-y-8">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-widest font-bold mb-1">Email</p>
                  <a href="mailto:Sudharsanb74@gmail.com" className="text-sm md:text-base font-bold hover:text-primary transition-colors break-all">
                    Sudharsanb74@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-widest font-bold mb-1">Phone</p>
                  <a href="tel:+919176819074" className="text-sm md:text-base font-bold hover:text-primary transition-colors">
                    +91 9176819074
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-widest font-bold mb-1">Location</p>
                  <p className="text-sm md:text-base font-bold">
                    Chennai, Tamil Nadu, India
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Right Column - Form */}
        <ScrollReveal direction="up" delay={0.3} distance={50} className="w-full">
          <div className="glass-panel p-6 md:p-10 rounded-2xl relative overflow-hidden">
            {/* Subtle glow inside the form panel */}
            <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-primary/15 blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute -top-20 -left-20 w-40 h-40 bg-accent/10 blur-[100px] rounded-full pointer-events-none" />
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 md:space-y-6 relative z-10">
              
              {/* Single column on mobile, two columns on desktop */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-widest font-bold">Your Name</label>
                  <input
                    {...register("name")}
                    className={cn(
                      "w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 md:py-3 text-sm focus:outline-none focus:border-primary/50 transition-colors placeholder:text-white/20",
                      errors.name && "border-red-500"
                    )}
                    placeholder="e.g. John"
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-widest font-bold">Email Address</label>
                  <input
                    {...register("email")}
                    type="email"
                    className={cn(
                      "w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 md:py-3 text-sm focus:outline-none focus:border-primary/50 transition-colors placeholder:text-white/20",
                      errors.email && "border-red-500"
                    )}
                    placeholder="e.g. john@example.com"
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-widest font-bold">Message Detail</label>
                <textarea
                  {...register("message")}
                  rows={4}
                  className={cn(
                    "w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary/50 transition-colors placeholder:text-white/20 resize-none",
                    errors.message && "border-red-500"
                  )}
                  placeholder="Describe your cinematic goals, scope of work, and timelines..."
                />
                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-black font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-sm uppercase tracking-widest"
              >
                {isSubmitting ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    SEND INQUIRY
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>

              {submitStatus === "success" && (
                <p className="text-green-400 text-sm text-center font-bold">
                  ✓ Message sent successfully! We&apos;ll be in touch soon.
                </p>
              )}
              
              {submitStatus === "error" && (
                <p className="text-red-500 text-sm text-center font-bold">
                  Failed to send message. Please try again.
                </p>
              )}
            </form>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
