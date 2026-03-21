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
        </div>
      </div>
    </footer>
  );
};

export default FooterBar;
