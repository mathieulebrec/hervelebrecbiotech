import { Target, FlaskConical, FileCheck } from "lucide-react";

const services = [
  {
    icon: Target,
    label: "Strategy",
    title: "Nonclinical Program Strategy",
    value: "A clear development roadmap before your first study begins.",
    deliverables: [
      "Nonclinical development plan and timeline",
      "Risk assessment and mitigation framework",
      "Fit-for-purpose study rationale",
      "Regulatory pathway alignment",
    ],
    scenario:
      "A biotech preparing its first IND needs a nonclinical strategy that satisfies FDA expectations without over-investing in unnecessary studies.",
  },
  {
    icon: FlaskConical,
    label: "Execution",
    title: "Study Design & Oversight",
    value: "Rigorous studies designed to answer the right questions.",
    deliverables: [
      "Protocol design and scientific review",
      "CRO selection and study placement",
      "In-life monitoring and data interpretation",
      "Integrated study reports",
    ],
    scenario:
      "A sponsor advancing a bispecific antibody needs species-specific tox study design and real-time oversight to stay on timeline for a Phase I start.",
  },
  {
    icon: FileCheck,
    label: "Regulatory",
    title: "Regulatory Documents & HA Interactions",
    value: "Submission-ready nonclinical packages that build agency confidence.",
    deliverables: [
      "Nonclinical overview and summaries (IND/CTA)",
      "Investigator's Brochure nonclinical sections",
      "Briefing documents for health authority meetings",
      "Response to agency questions",
    ],
    scenario:
      "A company facing an FDA clinical hold needs rapid, expert support to draft a comprehensive nonclinical response and clear the path forward.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="relative bg-hero-gradient py-24 scroll-mt-28">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="max-w-2xl mb-14">
          <p
            className="text-primary text-xs font-semibold tracking-[0.25em] uppercase mb-4 opacity-0 animate-fade-up"
            style={{ animationDelay: "100ms" }}
          >
            How We Work
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-foreground leading-[1.1] mb-5 opacity-0 animate-fade-up"
            style={{ animationDelay: "180ms", textWrap: "balance" } as React.CSSProperties}
          >
            Three pillars of nonclinical consulting
          </h2>
          <p
            className="text-muted-foreground text-base leading-relaxed opacity-0 animate-fade-up"
            style={{ animationDelay: "260ms" }}
          >
            Every engagement is tailored to your program's stage and therapeutic modality.
            Whether you need a full nonclinical strategy or targeted regulatory support,
            HL Toxicology integrates seamlessly with your team.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <article
                key={s.label}
                className="card-service p-8 group hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 opacity-0 animate-fade-up flex flex-col"
                style={{ animationDelay: `${400 + i * 100}ms` }}
              >
                {/* Icon + label */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">
                    {s.label}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-card-surface-foreground font-bold text-xl mb-2 leading-snug">
                  {s.title}
                </h3>

                {/* Value statement */}
                <p className="text-card-surface-foreground/80 text-sm font-medium mb-5">
                  {s.value}
                </p>

                {/* Deliverables */}
                <ul className="space-y-2 mb-6 flex-1">
                  {s.deliverables.map((d) => (
                    <li key={d} className="flex items-start gap-2 text-sm text-card-surface-foreground/60 leading-relaxed">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/50 shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>

                {/* Scenario */}
                <div className="border-t border-border/60 pt-4">
                  <p className="text-xs text-card-surface-foreground/45 leading-relaxed">
                    <span className="font-semibold text-card-surface-foreground/60">Example:</span>{" "}
                    {s.scenario}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
