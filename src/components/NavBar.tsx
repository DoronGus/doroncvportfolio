import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const links = [
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 md:px-12 py-4">
        <a href="#" className="font-mono text-sm font-semibold text-primary">
          DG
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-mono text-xs uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
        <a
          href="/Doron_Gusenberg_CV.pdf"
          target="_blank"
          className="font-mono text-xs uppercase tracking-wider px-4 py-2 border border-primary/50 text-primary rounded hover:bg-primary hover:text-primary-foreground transition-all duration-200"
        >
          Resume
        </a>
      </div>
    </motion.nav>
  );
};

export default NavBar;
