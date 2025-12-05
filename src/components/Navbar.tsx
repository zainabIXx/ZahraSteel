import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Clients", href: "#clients" },
    { name: "Contact", href: "#contact" },
  ];

  const [activeLink, setActiveLink] = useState<string>("Home");

  useEffect(() => {
    const handleScroll = () => {
      const offset = 120; // adjust when a section should be considered active
      let current = "Home";

      for (const link of navLinks) {
        try {
          const el = document.querySelector(link.href) as HTMLElement | null;
          if (!el) continue;
          const top = el.getBoundingClientRect().top + window.scrollY;
          if (window.scrollY >= top - offset) {
            current = link.name;
          }
        } catch (e) {
          // ignore invalid selectors
        }
      }

      setActiveLink(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border border-b-[0.5px]">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <img src={logo} alt="Najmat Al Zahra Steel Logo" className="h-10 w-10 transition-transform group-hover:scale-105" />
            <div className="flex flex-col">
              <span className="font-heading text-lg leading-none">NAJMAT AL ZAHRA</span>
              <span className="font-body text-xs text-muted-foreground leading-none">STEEL</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setActiveLink(link.name)}
                className={`font-body text-sm transition-colors ${activeLink === link.name ? 'text-[#ed1b24]' : 'text-foreground/70'} hover:text-[#ed1b24]`}
                style={link.name === 'Get a Quote' ? { border: 'none', background: 'none', padding: 0 } : {}}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-muted transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden py-6 border-t border-border">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => { setIsOpen(false); setActiveLink(link.name); }}
                    className={`font-body py-2 transition-colors ${activeLink === link.name ? 'text-[#ed1b24]' : 'text-foreground/70'} hover:text-[#ed1b24]`}
                    style={link.name === 'Get a Quote' ? { border: 'none', background: 'none', padding: 0 } : {}}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          )}
      </div>
    </nav>
  );
};

export default Navbar;
