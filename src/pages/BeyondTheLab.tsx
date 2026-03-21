import Navbar from "@/components/Navbar";
import FooterBar from "@/components/FooterBar";
import hexLogo from "@/assets/hex-logo-original.png";

const BeyondTheLab = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="bg-hero-gradient pt-28 pb-20">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="max-w-3xl mx-auto mb-16 space-y-5 text-center">
            <p
              className="text-primary text-xs font-semibold tracking-[0.25em] uppercase opacity-0 animate-fade-up"
              style={{ animationDelay: "100ms" }}
            >
              The Story Behind HL Toxicology
            </p>
            <h1
              className="text-4xl sm:text-5xl font-bold text-foreground leading-[1.1] opacity-0 animate-fade-up"
              style={{ animationDelay: "180ms" }}
            >
              Beyond the Lab
            </h1>
            <p
              className="text-muted-foreground text-lg leading-relaxed opacity-0 animate-fade-up"
              style={{ animationDelay: "250ms" }}
            >
              The personal journey behind the science — and the meaning woven into every detail of our identity.
            </p>
          </div>

          {/* Logo section */}
          <div
            className="max-w-2xl mx-auto opacity-0 animate-fade-up"
            style={{ animationDelay: "350ms" }}
          >
            <div className="bg-card/60 border border-border/40 rounded-2xl p-10 sm:p-14 flex flex-col items-center gap-10">
              <img
                src={hexLogo}
                alt="HL Toxicology logo — sailboat with DNA helix mast inside a hexagon"
                className="w-64 h-64 sm:w-80 sm:h-80 object-contain"
              />

              <div className="text-center space-y-4 max-w-lg">
                <h2 className="text-foreground font-bold text-2xl">The Logo</h2>
                <p className="text-cyan leading-relaxed">
                  Hervé's work is rooted in scientific rigor, but his perspective is shaped just as much by his time on the water. Sailing demands precision, adaptability, and respect for complex systems—qualities that closely mirror his approach to science. This balance between disciplined research and the freedom of the open sea inspired the logo, which reflects both his commitment to advancing biotechnology and his passion for navigating beyond it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterBar />
    </div>
  );
};

export default BeyondTheLab;
