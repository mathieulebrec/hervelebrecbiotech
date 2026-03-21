import { Link } from "react-router-dom";
import hervePortrait from "@/assets/herve-portrait.png";
import hexLogo from "@/assets/hex-logo.png";

const HeroSection = () => {
  const tags = ["Nonclinical Safety", "Program Strategy", "Study Design", "Regulatory Support"];

  return (
    <section className="relative bg-hero-gradient min-h-screen pt-32 sm:pt-36 pb-16 overflow-hidden">
      {/* Subtle hex grid background */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5 L52 17.5 L52 42.5 L30 55 L8 42.5 L8 17.5Z' fill='none' stroke='%2322d3ee' stroke-width='0.5'/%3E%3C/svg%3E")`,
        backgroundSize: '60px 60px',
      }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-5 gap-12 items-center min-h-[calc(100vh-12rem)]">
          {/* Left content — 3 cols */}
          <div className="lg:col-span-3 space-y-8">
            <p
              className="text-cyan text-xs font-semibold tracking-[0.25em] uppercase opacity-0 animate-fade-up"
              style={{ animationDelay: "100ms" }}
            >
              Science-Led Consulting for Next-Gen Therapeutics
            </p>

            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] text-foreground opacity-0 animate-fade-up"
              style={{ animationDelay: "200ms" }}
            >
              Expert Consulting Solutions for Pharma and Biotech
            </h1>

            <p
              className="text-muted-foreground text-lg leading-relaxed max-w-2xl opacity-0 animate-fade-up"
              style={{ animationDelay: "350ms" }}
            >
              HL Toxicology & Preclinical Services provides tailored consulting in nonclinical
              safety assessment for investigational therapies—covering strategy, study
              design and oversight, regulatory documents, and health authority interactions.
            </p>

            {/* Tags */}
            <div
              className="flex flex-wrap gap-3 opacity-0 animate-fade-up"
              style={{ animationDelay: "450ms" }}
            >
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-sm border border-foreground/25 rounded-full px-4 py-1.5 text-foreground/80"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA buttons */}
            <div
              className="flex flex-wrap gap-4 pt-2 opacity-0 animate-fade-up"
              style={{ animationDelay: "550ms" }}
            >
              <a
                href="#services"
                className="inline-flex items-center gap-2 border-2 border-cyan text-cyan font-semibold text-sm rounded-full px-7 py-2.5 hover:bg-cyan/10 transition-all duration-200 active:scale-[0.97]"
              >
                Explore Services
              </a>
              <Link
                to="/bio"
                className="inline-flex items-center gap-2 bg-secondary text-foreground font-medium text-sm rounded-full px-7 py-2.5 hover:bg-secondary/80 transition-all duration-200 active:scale-[0.97]"
              >
                <span className="text-[1.3em]">🤝</span> Meet Hervé
              </Link>
            </div>
          </div>

          {/* Right — portrait with hex frame */}
          <div
            className="lg:col-span-2 flex flex-col items-center justify-center gap-6 opacity-0 animate-fade-up"
            style={{ animationDelay: "400ms" }}
          >
            {/* Credential badge */}
            <div className="flex justify-center mb-2">
              <Link
                to="/publications"
                className="bg-secondary text-foreground text-xs font-semibold px-4 py-1.5 rounded-full hover:bg-secondary/80 transition-colors duration-200"
              >
                60 publications
              </Link>
            </div>

            {/* Hex portrait */}
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 mx-auto">
              {/* Glow behind */}
              <div className="absolute inset-[-12px] hex-clip bg-gradient-to-br from-[hsl(var(--cyan))] to-[hsl(var(--purple-accent))] opacity-40 blur-md" />
              {/* Gradient border */}
              <div className="absolute inset-[-6px] hex-clip bg-gradient-to-br from-[hsl(var(--cyan))] to-[hsl(var(--purple-accent))]" />
              {/* Background fill */}
              <div className="absolute inset-0 hex-clip bg-background" />
              {/* Portrait */}
              <img
                src={hervePortrait}
                alt="Hervé Lebrec, PharmD, PhD, DABT"
                className="absolute inset-[3px] hex-clip object-cover object-center w-[calc(100%-6px)] h-[calc(100%-6px)]"
              />
            </div>

            {/* Name */}
            <div className="text-center">
              <h2 className="text-foreground font-bold text-xl sm:text-2xl">
                Hervé Lebrec, PharmD, PhD, DABT
              </h2>
              <p className="text-muted-foreground text-sm mt-1">
                Former Amgen and Sonoma Biotherapeutics leader
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
