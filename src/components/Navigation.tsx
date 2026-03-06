"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 border-b transition-colors duration-200",
        isScrolled
          ? "border-slate-800 bg-slate-950"
          : "border-transparent bg-transparent"
      )}
    >
      <div className="section-shell">
        <div className="flex items-center justify-between h-16">
          <a
            href="#hero"
            className="text-xs md:text-sm font-semibold tracking-[0.28em] uppercase text-white flex items-center gap-2"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick("#hero");
            }}
          >
            <span className="inline-block w-2 h-2 rounded-full bg-cyan-300 shadow-emerald" />
            dev-minsoo
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleLinkClick(link.href)}
                className="cursor-pointer text-xs uppercase tracking-wide text-slate-200 hover:text-white transition-colors"
              >
                {link.name}
              </button>
            ))}
          </div>

          <button
            className="md:hidden text-slate-200 hover:text-white"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-label="메뉴"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-slate-700 bg-slate-950">
            <div className="py-3 flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleLinkClick(link.href)}
                  className="cursor-pointer text-left px-4 py-2 text-xs uppercase tracking-wide text-slate-200 rounded-lg hover:bg-white/5 transition-colors"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
