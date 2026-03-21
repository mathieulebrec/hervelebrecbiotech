import { GraduationCap, FlaskConical, ShieldCheck, TrendingUp, Users, Atom } from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterBar from "@/components/FooterBar";

const timelineData = [
  {
    position: "top" as const,
    title: "3M Pharmaceuticals",
    description: "Advanced from Research Specialist to Pathology & Toxicology Department Manager; TLR agonists.",
    icon: FlaskConical,
    color: "cyan" as const,
  },
  {
    position: "bottom" as const,
    title: "University Paris XI",
    description: "Doctorate in Pharmacy & PhD in Toxicology; later served as Assistant Professor.",
    icon: GraduationCap,
    color: "cyan" as const,
  },
  {
    position: "top" as const,
    title: "Amgen | Executive Leadership",
    description: "Executive Director of Translational Safety; led FIH oncology integration and fit-for-purpose BD reviews.",
    icon: ShieldCheck,
    color: "purple" as const,
  },
  {
    position: "bottom" as const,
    title: "Amgen | Scientific Growth",
    description: "Served as Project Team Toxicologist, Principal Scientist, and Scientific Director in safety.",
    icon: TrendingUp,
    color: "purple" as const,
  },
  {
    position: "top" as const,
    title: "Consulting & Leadership",
    description: "Advises biotech programs; co-chairs HESI Immunosafety, serves as SOT Biotechnology VP Elect; 60 publications.",
    icon: Users,
    color: "green" as const,
  },
  {
    position: "bottom" as const,
    title: "Sonoma Biotherapeutics",
    description: "Vice President, Development Sciences for engineered Treg programs; oversaw safety, PK, and immunogenicity.",
    icon: Atom,
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
  },
  purple: {
    border: "border-purple-accent",
    text: "text-purple-accent",
    bg: "bg-purple-accent/10",
    iconBg: "bg-purple-accent/20",
    dot: "bg-purple-accent",
  },
  green: {
    border: "border-emerald-400",
    text: "text-emerald-400",
    bg: "bg-emerald-400/10",
    iconBg: "bg-emerald-400/20",
    dot: "bg-emerald-400",
  },
};

const expertiseTags = [
  "Nonclinical Safety",
  "PK & Clinical Pharmacology",
  "Immunogenicity",
  "Translational Strategy",
];

const TimelineCard = ({
  item,
  index,
}: {
  item: (typeof timelineData)[0];
  index: number;
}) => {
  const colors = colorMap[item.color];
  const Icon = item.icon;

  return (
    <div
      className="opacity-0 animate-fade-up"
      style={{ animationDelay: `${300 + index * 120}ms` }}
    >
      <div
        className={`card-service border-t-2 ${colors.border} p-6 hover:shadow-lg transition-shadow duration-300`}
      >
        <h3 className={`${colors.text} font-bold text-lg mb-2`}>{item.title}</h3>
        <p className="text-card-surface-foreground/70 text-sm leading-relaxed">
          {item.description}
        </p>
      </div>
    </div>
  );
};

const BioPage = () => {
  const topItems = timelineData.filter((d) => d.position === "top");
  const bottomItems = timelineData.filter((d) => d.position === "bottom");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="bg-hero-gradient pt-24 pb-20">
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

        {/* Desktop timeline — zigzag */}
        <div className="hidden lg:block relative">
          {/* Central line */}
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-1 bg-gradient-to-r from-cyan via-purple-accent to-emerald-400 rounded-full opacity-30" />

          {/* Curved wave SVG overlay */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 1200 400"
            preserveAspectRatio="none"
            fill="none"
          >
            <path
              d="M0,200 C100,100 200,100 300,200 C400,300 500,300 600,200 C700,100 800,100 900,200 C1000,300 1100,300 1200,200"
              stroke="url(#timelineGrad)"
              strokeWidth="3"
              strokeDasharray="8 6"
              opacity="0.4"
            />
            <defs>
              <linearGradient id="timelineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(174, 72%, 49%)" />
                <stop offset="50%" stopColor="hsl(270, 60%, 55%)" />
                <stop offset="100%" stopColor="#34d399" />
              </linearGradient>
            </defs>
          </svg>

          <div className="grid grid-cols-3 gap-8">
            {/* Top row — top-position items */}
            {topItems.map((item, i) => (
              <TimelineCard key={item.title} item={item} index={i * 2} />
            ))}
          </div>

          {/* Icon row */}
          <div className="grid grid-cols-6 gap-4 my-8">
            {timelineData.map((item, i) => {
              const colors = colorMap[item.color];
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="flex justify-center opacity-0 animate-fade-up"
                  style={{ animationDelay: `${400 + i * 100}ms` }}
                >
                  <div
                    className={`w-14 h-14 rounded-full ${colors.iconBg} flex items-center justify-center`}
                  >
                    <Icon className={`w-6 h-6 ${colors.text}`} />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-3 gap-8">
            {/* Bottom row — bottom-position items */}
            {bottomItems.map((item, i) => (
              <TimelineCard key={item.title} item={item} index={i * 2 + 1} />
            ))}
          </div>
        </div>

        {/* Mobile timeline — vertical */}
        <div className="lg:hidden space-y-6">
          {timelineData.map((item, i) => {
            const colors = colorMap[item.color];
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="flex gap-4 items-start opacity-0 animate-fade-up"
                style={{ animationDelay: `${300 + i * 100}ms` }}
              >
                <div className="flex flex-col items-center shrink-0">
                  <div
                    className={`w-12 h-12 rounded-full ${colors.iconBg} flex items-center justify-center`}
                  >
                    <Icon className={`w-5 h-5 ${colors.text}`} />
                  </div>
                  {i < timelineData.length - 1 && (
                    <div className="w-px h-12 bg-border/50 mt-2" />
                  )}
                </div>
                <div className="flex-1">
                  <TimelineCard item={item} index={i} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BioPage;
