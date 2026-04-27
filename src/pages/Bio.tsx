import { useEffect } from "react";
import { GraduationCap, FlaskConical, ShieldCheck, TrendingUp, Users, Atom } from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterBar from "@/components/FooterBar";
import logoParisSud from "@/assets/logo-paris-sud.png";
import logo3m from "@/assets/logo-3m.png";
import logoAmgen from "@/assets/logo-amgen.png";
import logoSonoma from "@/assets/logo-sonoma.png";

const timelineData = [
  {
    step: 1,
    title: "University Paris XI",
    description: "Doctorate in Pharmacy & PhD in Toxicology; later served as Assistant Professor.",
    icon: GraduationCap,
    color: "cyan" as const,
  },
  {
    step: 2,
    title: "3M Pharmaceuticals",
    description: "Advanced from Research Specialist to Pathology & Toxicology Department Manager; TLR agonists.",
    icon: FlaskConical,
    color: "cyan" as const,
  },
  {
    step: 3,
    title: "Amgen | Scientific Growth",
    description: "Served as Project Team Toxicologist, Principal Scientist, and Scientific Director in safety.",
    icon: TrendingUp,
    color: "purple" as const,
  },
  {
    step: 4,
    title: "Amgen | Executive Leadership",
    description: "Executive Director of Translational Safety; led FIH oncology integration and fit-for-purpose BD reviews.",
    icon: ShieldCheck,
    color: "purple" as const,
  },
  {
    step: 5,
    title: "Sonoma Biotherapeutics",
    description: "Vice President, Development Sciences for engineered Treg programs; oversaw safety, PK, and immunogenicity.",
    icon: Atom,
    color: "green" as const,
  },
  {
    step: 6,
    title: "Consulting & Leadership",
    description: "Advises biotech programs; co-chairs HESI Immunosafety, serves as SOT Biotechnology VP Elect; 60 publications.",
    icon: Users,
    color: "green" as const,
  },
];

const colorMap = {
  cyan: {
    border: "border-cyan",
    text: "text-cyan",
    bg: "bg-cyan/10",
    iconBg: "bg-cyan/20",
    dot: "bg-cyan",
    line: "from-cyan to-cyan",
  },
  purple: {
    border: "border-purple-accent",
    text: "text-purple-accent",
    bg: "bg-purple-accent/10",
    iconBg: "bg-purple-accent/20",
    dot: "bg-purple-accent",
    line: "from-purple-accent to-purple-accent",
  },
  green: {
    border: "border-emerald-400",
    text: "text-emerald-400",
    bg: "bg-emerald-400/10",
    iconBg: "bg-emerald-400/20",
    dot: "bg-emerald-400",
    line: "from-emerald-400 to-emerald-400",
  },
};

const expertiseTags = [
  "Nonclinical Safety",
  "Immunotoxicology",
  "PK & Clinical Pharmacology",
  "Immunogenicity",
  "Translational Strategy",
];

const BioPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="bg-hero-gradient pt-24 pb-20">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="max-w-3xl mb-16 space-y-5">
            <p
              className="text-cyan text-xs font-semibold tracking-[0.25em] uppercase animate-fade-up"
              style={{ animationDelay: "100ms", opacity: 0 }}
            >
              Professional Timeline
            </p>
            <h1
             className="text-2xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-[1.1] animate-fade-up sm:whitespace-nowrap"
              style={{ animationDelay: "180ms", opacity: 0 }}
            >
              Hervé Lebrec, PharmD, PhD,&nbsp;DABT
            </h1>
            <p
              className="text-muted-foreground text-lg leading-relaxed animate-fade-up"
              style={{ animationDelay: "250ms", opacity: 0 }}
            >
              Scientific leadership across academia, pharma, biotech, and consulting—guiding
              therapeutic candidates with science-based development strategy.
            </p>

            {/* Expertise tags */}
            <div
              className="flex flex-wrap sm:flex-nowrap gap-2 sm:gap-2.5 pt-2 animate-fade-up"
              style={{ animationDelay: "320ms", opacity: 0 }}
            >
              {expertiseTags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs sm:text-sm border border-foreground/25 rounded-full px-3 sm:px-3.5 py-1.5 text-foreground/80 whitespace-nowrap"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Company logos */}
          <div className="mb-8 pb-4 animate-fade-up max-w-3xl mx-auto" style={{ animationDelay: "380ms", opacity: 0 }}>
            <p className="text-center text-muted-foreground text-sm font-bold uppercase tracking-widest mb-8">Previous Experience</p>
            <div className="flex items-center justify-center gap-4 sm:gap-12 flex-wrap">
              <div className="flex flex-col items-center gap-2">
                <a href="https://www.universite-paris-saclay.fr/" target="_blank" rel="noopener noreferrer" className="bg-white rounded-xl p-4 flex items-center justify-center w-24 h-16 sm:w-36 sm:h-24 overflow-hidden hover:shadow-lg transition-shadow duration-200">
                  <img src={logoParisSud} alt="Université Paris-Sud" className="max-h-full max-w-full object-contain" />
                </a>
                <p className="text-muted-foreground text-xs text-center">Sep 1996 – Sep 2005</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <a href="https://www.3m.com/" target="_blank" rel="noopener noreferrer" className="bg-white rounded-xl p-4 flex items-center justify-center w-24 h-16 sm:w-36 sm:h-24 overflow-hidden hover:shadow-lg transition-shadow duration-200">
                  <img src={logo3m} alt="3M" className="scale-[1.3] object-contain" />
                </a>
                <p className="text-muted-foreground text-xs text-center">Oct 2005 – Aug 2006</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <a href="https://www.amgen.com/science?_gl=1*g2ja7s*_up*MQ..*_ga*MTU2NjExNzYuMTc3NDEyMTQ5Mg..*_ga_CBMSV0J9VL*czE3NzQxMjE0OTIkbzEkZzEkdDE3NzQxMjE1MzIkajIwJGwwJGgw" target="_blank" rel="noopener noreferrer" className="bg-white rounded-xl p-4 flex items-center justify-center w-24 h-16 sm:w-36 sm:h-24 hover:shadow-lg transition-shadow duration-200">
                  <img src={logoAmgen} alt="Amgen" className="max-h-full max-w-full object-contain" />
                </a>
                <p className="text-muted-foreground text-xs text-center">Sep 2006 – Oct 2021</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <a href="https://sonomabio.com/" target="_blank" rel="noopener noreferrer" className="bg-white rounded-xl p-4 flex items-center justify-center w-24 h-16 sm:w-36 sm:h-24 overflow-hidden hover:shadow-lg transition-shadow duration-200">
                  <img src={logoSonoma} alt="Sonoma Biotherapeutics" className="scale-[1.3] object-contain" />
                </a>
                <p className="text-muted-foreground text-xs text-center">Oct 2021 – Feb 2026</p>
              </div>
            </div>
          </div>

          {/* Sequential timeline */}
          <div className="relative max-w-3xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-cyan via-purple-accent to-emerald-400 opacity-30" />

            <div className="space-y-0">
              {timelineData.map((item, i) => {
                const colors = colorMap[item.color];
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="relative flex gap-5 sm:gap-7 items-start animate-fade-up"
                    style={{ animationDelay: `${500 + i * 120}ms`, opacity: 0 }}
                  >
                    {/* Step number + icon column */}
                    <div className="flex flex-col items-center shrink-0 z-10">
                      <div
                        className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full ${colors.iconBg} border-2 ${colors.border} flex items-center justify-center relative`}
                      >
                        <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${colors.text}`} />
                        <span
                          className={`absolute -top-1.5 -right-1.5 w-6 h-6 rounded-full ${colors.dot} text-background text-xs font-bold flex items-center justify-center`}
                        >
                          {item.step}
                        </span>
                      </div>
                      {i < timelineData.length - 1 && (
                        <div className={`w-px h-8 bg-gradient-to-b ${colors.line} opacity-30 mt-0`} />
                      )}
                    </div>

                    {/* Card */}
                    <div className="flex-1 pb-4">
                      <div
                        className={`card-service border-l-2 ${colors.border} p-5 sm:p-6 hover:shadow-lg transition-shadow duration-300`}
                      >
                        <h3 className={`${colors.text} font-bold text-lg mb-1.5`}>
                          {item.title}
                        </h3>
                        <p className="text-card-surface-foreground/70 text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <FooterBar />
    </div>
  );
};

export default BioPage;
