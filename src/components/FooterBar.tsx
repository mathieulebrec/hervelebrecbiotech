const modalities = [
  "small molecules",
  "antibodies",
  "bispecific T-cell engagers",
  "oncolytic viruses",
  "siRNAs",
  "engineered T cells",
];

const FooterBar = () => {
  return (
    <footer className="bg-hero-gradient border-t border-border/30">
      <div className="container mx-auto px-6 py-5">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            <span className="text-foreground/70 font-medium">Modalities: </span>
            {modalities.join(" • ")}
          </p>
          <div className="flex items-center gap-2 shrink-0">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan inline-block" />
            <span className="text-foreground text-sm font-semibold">
              60 peer-reviewed publications
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterBar;
