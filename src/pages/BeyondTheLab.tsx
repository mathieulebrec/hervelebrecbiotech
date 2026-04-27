import Navbar from "@/components/Navbar";
import FooterBar from "@/components/FooterBar";
import hexLogo from "@/assets/hex-logo-original.png";
import herveSailing from "@/assets/herve-sailing.jpg";

const BeyondTheLab = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="bg-hero-gradient pt-28 pb-20">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="max-w-3xl mx-auto mb-8 space-y-4 text-center">
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
              Beyond the Lab — Meet the Founder
            </h1>
            <p
              className="text-muted-foreground text-lg leading-relaxed opacity-0 animate-fade-up"
              style={{ animationDelay: "250ms" }}
            >
              Inspired by the ocean, wind, and navigation, we guide complexity in biotechnology—charting clear, confident paths that bring innovative therapies to life.
            </p>
          </div>

          {/* Photo + Logo side by side */}
          <div
            className="max-w-5xl mx-auto opacity-0 animate-fade-up"
            style={{ animationDelay: "300ms" }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center mb-10">
              <img
                src={herveSailing}
                alt="Hervé sailing on the open water"
                className="w-full rounded-2xl object-contain max-h-[500px] bg-card"
              />
              <div className="bg-card border border-border/50 rounded-2xl p-8 flex items-center justify-center h-full">
                <img
                  src={hexLogo}
                  alt="HL Toxicology logo — sailboat with DNA helix mast inside a hexagon"
                  className="w-64 h-64 sm:w-80 sm:h-80 object-contain"
                />
              </div>
            </div>
          </div>

          {/* Story text */}
          <div
            className="max-w-2xl mx-auto opacity-0 animate-fade-up"
            style={{ animationDelay: "400ms" }}
          >
            <div className="bg-card border border-border/50 rounded-2xl p-10 sm:p-14">
              <div className="text-center space-y-4">
                <h2 className="text-foreground font-bold text-2xl">Story Behind the Logo</h2>
                <p className="text-primary/90 leading-relaxed">
                  Hervé's work is rooted in a deep interest for drug development, and he loves spending his free time on the water. Sailing demands precision, adaptability, and respect for complex systems; qualities that closely mirror his approach to science. This balance between disciplined research and the freedom of the open sea inspired the logo, which reflects both his commitment to advancing biotechnology and his passion for navigation.
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
