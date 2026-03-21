import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import hexLogo from "@/assets/hex-logo.png";

const CONTACT_EMAIL = "mathieulebrec@gmail.com";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  const links = [
    { label: "Home", to: "/" },
    { label: "Founder Bio", to: "/bio" },
    { label: "Publications", to: "/publications" },
    { label: "Beyond the Lab", to: "/beyond-the-lab" },
  ];

  const linkClass =
    "text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 active:scale-[0.97]";

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (window.location.pathname === "/") {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/#contact");
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/85 backdrop-blur-md border-b border-border/40">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center gap-3">
          <img src={hexLogo} alt="HL Toxicology logo" className="w-[93px] h-[93px] brightness-0 invert" />
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
        <div className="hidden lg:flex items-center gap-8">
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
          <button
            onClick={handleContactClick}
            className="inline-flex items-center justify-center text-sm font-medium bg-primary/10 text-primary border border-primary/20 rounded-full px-5 py-1.5 hover:bg-primary/15 transition-all duration-200 active:scale-[0.97]"
          >
            Contact
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-foreground p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border/40 bg-background/95 backdrop-blur-md px-6 py-4 flex flex-col gap-3">
          {links.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              onClick={() => {
                setMobileOpen(false);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className={linkClass + " text-center py-2"}
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={(e) => {
              setMobileOpen(false);
              handleContactClick(e);
            }}
            className="text-center text-sm font-medium bg-primary/10 text-primary border border-primary/20 rounded-full px-5 py-2 hover:bg-primary/15 transition-all duration-200"
          >
            Contact
          </button>
        </div>
      )}
    </nav>
  );
};

export { CONTACT_EMAIL };
export default Navbar;
