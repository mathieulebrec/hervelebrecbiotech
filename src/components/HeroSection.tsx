import { Link } from "react-router-dom";
import { ArrowRight, BookOpen } from "lucide-react";
import hervePortrait from "@/assets/herve-portrait.png";

const HeroSection = () => {
  return (
    <section className="relative bg-hero-gradient min-h-[85vh] pt-28 sm:pt-32 pb-12 overflow-hidden">
      {/* Minimal hex texture — very low opacity */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 8 L68 24 L68 56 L40 72 L12 56 L12 24Z' fill='none' stroke='%23a0c4c8' stroke-width='0.4'/%3E%3C/svg%3E")`,
        backgroundSize: '80px 80px',
      }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left content — 7 cols */}
          <div className="lg:col-span-7 space-y-6">
            <p
              className="text-primary text-xs font-semibold tracking-[0.25em] uppercase opacity-0 animate-fade-up"
              style={{ animationDelay: "100ms" }}
            >
              Nonclinical Safety Consulting
            </p>

            <h1
              className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold leading-[1.1] text-foreground opacity-0 animate-fade-up"
              style={{ animationDelay: "200ms", textWrap: "balance" } as React.CSSProperties}
            >
              Navigating pharma &amp; biotech through nonclinical development; from discovery to first-in-human and to approval
            </h1>

            {/* Trust signals */}
            <div
              className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground opacity-0 animate-fade-up"
              style={{ animationDelay: "300ms" }}
            >
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                Former 3M, Amgen and Sonoma Bio Leader
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                PharmD · PhD · DABT
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                60+ peer-reviewed publications
              </span>
            </div>

            <p
              className="text-muted-foreground text-base leading-relaxed max-w-xl opacity-0 animate-fade-up"
              style={{ animationDelay: "380ms" }}
            >
              HL Toxicology provides expert consulting in nonclinical safety
              assessment—strategy, study design, regulatory documents, and health
              authority interactions for investigational therapies.
            </p>

            {/* CTAs */}
            <div
              className="flex flex-wrap gap-3 pt-1 opacity-0 animate-fade-up"
              style={{ animationDelay: "460ms" }}
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold text-sm rounded-full px-7 py-2.5 hover:brightness-110 transition-all duration-200 active:scale-[0.97] shadow-md shadow-primary/15"
              >
                Connect With Us
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                to="/bio"
                className="inline-flex items-center justify-center gap-2 border border-border text-muted-foreground font-medium text-sm rounded-full px-6 py-2.5 hover:text-foreground hover:border-foreground/30 transition-all duration-200 active:scale-[0.97]"
              >
                About Hervé
              </Link>
            </div>
          </div>

          {/* Right — portrait */}
          <div
            className="lg:col-span-5 flex flex-col items-center justify-center gap-4 opacity-0 animate-fade-up"
            style={{ animationDelay: "350ms" }}
          >
            {/* Hex portrait */}
            <div className="relative w-52 h-52 sm:w-60 sm:h-60 mx-auto">
              <div className="absolute inset-[-8px] hex-clip bg-gradient-to-br from-primary/50 to-accent/30 opacity-25 blur-sm" />
              <div className="absolute inset-[-4px] hex-clip bg-gradient-to-br from-primary/70 to-accent/40" />
              <div className="absolute inset-0 hex-clip bg-background" />
              <img
                src={hervePortrait}
                alt="Hervé Lebrec, PharmD, PhD, DABT"
                className="absolute inset-[3px] hex-clip object-cover object-center w-[calc(100%-6px)] h-[calc(100%-6px)]"
              />
            </div>

            {/* Name & title */}
            <div className="text-center">
              <h2 className="text-foreground font-bold text-lg sm:text-xl">
                Hervé Lebrec
              </h2>
              <p className="text-muted-foreground text-sm mt-0.5">
                PharmD, PhD, DABT
              </p>
              <p className="text-primary/80 text-xs mt-1.5 font-medium">
                15+ years industry leadership at 3M, Amgen &amp; Sonoma Bio
              </p>
            </div>

            {/* Publications link */}
            <Link
              to="/publications"
              className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              <BookOpen className="w-3.5 h-3.5" />
              View publications →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
