"use client";

import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#insights", label: "Insights" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out",
        scrolled
          ? "bg-void/85 backdrop-blur-2xl border-b border-border-subtle"
          : "bg-transparent border-b border-transparent"
      )}
      role="banner"
    >
      <nav
        className="max-w-[1200px] mx-auto px-6 lg:px-8 h-[72px] flex items-center justify-between"
        aria-label="Main navigation"
      >
        {/* Wordmark */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#hero");
          }}
          className="flex items-center gap-3 no-underline group"
          aria-label="Khanate Industries home"
        >
          <div className="w-8 h-8 border border-border-gold rounded-sm flex items-center justify-center transition-all duration-600 group-hover:border-gold group-hover:bg-gold/5">
            <span className="text-[0.6rem] font-semibold tracking-[0.15em] text-gold">
              KI
            </span>
          </div>
          <span className="text-[0.85rem] font-medium tracking-[0.08em] text-warm-white hidden sm:inline">
            Khanate Industries
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className="relative text-[0.8rem] font-normal text-txt-muted-light no-underline transition-colors duration-600 hover:text-warm-white group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[0.5px] bg-gold transition-all duration-600 ease-out group-hover:w-full" />
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#contact");
            }}
            className="inline-flex items-center gap-2 text-[0.8rem] font-medium text-gold border border-border-gold py-2 px-5 rounded-sm no-underline transition-all duration-600 hover:bg-gold/8 hover:border-gold"
          >
            Work With Us
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile hamburger */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger>
              <button
                className="flex flex-col gap-[5px] p-2 bg-transparent border-none"
                aria-label="Open menu"
              >
                <span className="block w-5 h-[1px] bg-warm-white" />
                <span className="block w-5 h-[1px] bg-warm-white" />
                <span className="block w-5 h-[1px] bg-warm-white" />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-void/98 backdrop-blur-3xl border-none w-full p-0"
              showCloseButton={false}
            >
              <div className="flex flex-col items-center justify-center h-full gap-8">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="text-[2.5rem] font-light text-warm-white no-underline transition-colors duration-600 hover:text-gold"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick("#contact");
                  }}
                  className="font-light text-[2.5rem] text-gold no-underline"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Contact
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
