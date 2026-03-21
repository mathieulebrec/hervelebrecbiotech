const services = [
  {
    num: "01",
    label: "STRATEGY",
    title: "Nonclinical program strategy",
    desc: "Development roadmaps, risk framing, and fit-for-purpose nonclinical planning.",
  },
  {
    num: "02",
    label: "EXECUTION",
    title: "Study design & oversight",
    desc: "Study placement, monitoring, interpretation, and fit-for-purpose scientific oversight.",
  },
  {
    num: "03",
    label: "REGULATORY",
    title: "Regulatory support",
    desc: "Nonclinical sections for IND or CTA materials and health authority interaction support.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="relative bg-hero-gradient py-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={s.num}
              className="card-service p-8 group hover:shadow-lg transition-shadow duration-300 opacity-0 animate-fade-up"
              style={{ animationDelay: `${600 + i * 100}ms` }}
            >
              <p className="text-cyan text-xs font-bold tracking-[0.2em] uppercase mb-4">
                {s.num} · {s.label}
              </p>
              <h3 className="text-card-surface-foreground font-bold text-xl mb-3 leading-snug">
                {s.title}
              </h3>
              <p className="text-card-surface-foreground/60 text-sm leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
