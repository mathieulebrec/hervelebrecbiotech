import { GraduationCap, FlaskConical, ShieldCheck, TrendingUp, Users, Atom } from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterBar from "@/components/FooterBar";

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
  "PK & Clinical Pharmacology",
  "Immunogenicity",
  "Translational Strategy",
];

const BioPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="bg-hero-gradient pt-24 pb-20">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="max-w-3xl mb-16 space-y-5">
            <p
              className="text-cyan text-xs font-semibold tracking-[0.25em] uppercase opacity-0 animate-fade-up"
              style={{ animationDelay: "100ms" }}
            >
              Professional Timeline
            </p>
            <h1
              className="text-4xl sm:text-5xl font-bold text-foreground leading-[1.1] opacity-0 animate-fade-up"
              style={{ animationDelay: "180ms" }}
            >
              Hervé Lebrec, PharmD, PhD, DABT
            </h1>
            <p
              className="text-muted-foreground text-lg leading-relaxed opacity-0 animate-fade-up"
              style={{ animationDelay: "250ms" }}
            >
              Scientific leadership across academia, pharma, biotech, and consulting—guiding
              therapeutic candidates with science-based development strategy.
            </p>

            {/* Expertise tags */}
            <div
              className="flex flex-wrap gap-3 pt-2 opacity-0 animate-fade-up"
              style={{ animationDelay: "320ms" }}
            >
              {expertiseTags.map((tag) => (
                <span
                  key={tag}
                  className="text-sm border border-foreground/25 rounded-full px-4 py-1.5 text-foreground/80"
                >
                  {tag}
                </span>
              ))}
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
                    className="relative flex gap-5 sm:gap-7 items-start opacity-0 animate-fade-up"
                    style={{ animationDelay: `${400 + i * 120}ms` }}
                  >
                    {/* Step number + icon column */}
                    <div className="flex flex-col items-center shrink-0 z-10">
                      <div
                        className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full ${colors.iconBg} border-2 ${colors.border} flex items-center justify-center relative`}
                      >
                        <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${colors.text}`} />
                        {/* Step number badge */}
                        <span
                          className={`absolute -top-1.5 -right-1.5 w-6 h-6 rounded-full ${colors.dot} text-background text-xs font-bold flex items-center justify-center`}
                        >
                          {item.step}
                        </span>
                      </div>
                      {/* Connector line segment */}
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
