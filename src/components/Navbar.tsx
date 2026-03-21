import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import hexLogo from "@/assets/hex-logo.png";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { label: "Home", to: "/" },
    { label: "Bio", to: "/bio" },
    { label: "Publications", to: "/publications" },
    { label: "Beyond the Lab", to: "/beyond-the-lab" },
  ];

  const linkClass =
    "text-sm border border-foreground/40 rounded-full px-5 py-1.5 text-foreground hover:bg-foreground/10 transition-all duration-200 active:scale-[0.97]";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <Link to="/" className="flex items-center gap-3">
          <img src={hexLogo} alt="HL Toxicology logo" className="w-[93px] h-[93px]" />
          <div className="leading-tight">
            <div className="text-foreground font-bold tracking-wider text-sm uppercase">
              HL Toxicology
            </div>
            <div className="text-muted-foreground text-xs tracking-widest uppercase">
              & Preclinical Services
            </div>
          </div>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className={linkClass}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/#contact"
            onClick={(e) => {
              if (window.location.pathname === "/") {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className={linkClass}
          >
            Contact
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-md px-6 py-4 flex flex-col gap-3">
          {links.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              onClick={() => {
                setMobileOpen(false);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className={linkClass + " text-center"}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/#contact"
            onClick={(e) => {
              setMobileOpen(false);
              if (window.location.pathname === "/") {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className={linkClass + " text-center"}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
