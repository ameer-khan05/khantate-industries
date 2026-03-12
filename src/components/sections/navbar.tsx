"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Insights", href: "#insights" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-[100] h-[68px] flex items-center transition-all duration-300",
        scrolled
          ? "bg-void/80 backdrop-blur-xl border-b border-ki-border"
          : "bg-transparent"
      )}
      role="banner"
    >
      <nav
        className="w-full max-w-[1200px] mx-auto flex items-center justify-between px-[clamp(1.5rem,5vw,4rem)]"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-3 group"
          aria-label="Khanate Industries home"
        >
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue to-violet flex items-center justify-center text-white font-semibold text-sm tracking-tight">
            KI
          </div>
          <span className="text-white font-medium text-sm tracking-wide hidden sm:inline">
            Khanate Industries
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-ki-muted2 text-sm font-medium hover:text-white transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a href="#contact">
            <Button className="bg-gradient-to-r from-blue to-violet text-white text-sm font-medium px-5 h-9 rounded-lg hover:opacity-90 hover:-translate-y-px transition-all duration-200 shadow-[0_0_20px_rgba(75,139,244,0.15)]">
              Work With Us
              <ArrowRight className="ml-1.5 size-3.5" />
            </Button>
          </a>
        </div>

        {/* Mobile Nav */}
        <div className="lg:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="size-5 text-white" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-void border-ki-border w-full sm:w-[360px] p-0"
              showCloseButton={false}
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-6 border-b border-ki-border">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue to-violet flex items-center justify-center text-white font-semibold text-sm">
                      KI
                    </div>
                    <span className="text-white font-medium text-sm">
                      Khanate Industries
                    </span>
                  </div>
                  <SheetClose>
                    <Button
                      variant="ghost"
                      size="icon"
                      aria-label="Close menu"
                    >
                      <X className="size-5 text-white" />
                    </Button>
                  </SheetClose>
                </div>

                <nav
                  className="flex flex-col gap-2 p-6"
                  aria-label="Mobile navigation"
                >
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="text-ki-muted2 text-lg font-medium py-3 px-4 rounded-lg hover:bg-surface hover:text-white transition-all duration-200"
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>

                <div className="mt-auto p-6 border-t border-ki-border">
                  <a href="#contact" onClick={() => setOpen(false)}>
                    <Button className="w-full bg-gradient-to-r from-blue to-violet text-white text-sm font-medium h-11 rounded-lg hover:opacity-90 transition-all duration-200">
                      Work With Us
                      <ArrowRight className="ml-1.5 size-3.5" />
                    </Button>
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
