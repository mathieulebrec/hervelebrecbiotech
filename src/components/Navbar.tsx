import hexLogo from "@/assets/hex-logo.png";

const Navbar = () => {
  const links = ["Home", "Bio", "Publications", "Contact"];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="flex items-center gap-3">
          <img src={hexLogo} alt="HL Toxicology logo" className="w-10 h-10" />
          <div className="leading-tight">
            <div className="text-foreground font-bold tracking-wider text-sm uppercase">
              HL Toxicology
            </div>
            <div className="text-muted-foreground text-xs tracking-widest uppercase">
              & Preclinical Services
            </div>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-8">
          {links.slice(0, 3).map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              {link}
            </a>
          ))}
          <a
            href="#contact"
            className="text-sm border border-foreground/40 rounded-full px-5 py-1.5 text-foreground hover:bg-foreground/10 transition-all duration-200 active:scale-[0.97]"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
