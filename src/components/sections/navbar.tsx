"use client";

import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  { href: "#ventures", label: "Ventures" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#about", label: "About" },
  { href: "#writing", label: "Writing" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/15 bg-[#f3f0e8]/90 backdrop-blur-xl">
      <nav className="section-shell flex h-[68px] items-center justify-between" aria-label="Main navigation">
        <a href="#top" className="flex items-center gap-3 no-underline" aria-label="Ameer Khan home">
          <span className="flex size-8 items-center justify-center bg-[#17191d] text-[0.58rem] font-bold tracking-[0.14em] text-white">
            AK
          </span>
          <span className="text-[0.78rem] font-bold uppercase tracking-[0.12em]">
            Ameer Khan <span className="font-normal text-black/45">/ Khanate</span>
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[0.75rem] font-semibold no-underline transition-opacity hover:opacity-50"
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className="link-arrow border-l border-black/20 pl-8">
            Work with me <ArrowUpRight size={15} />
          </a>
        </div>

        <button
          type="button"
          className="border-0 bg-transparent p-2 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-black/15 bg-[#f3f0e8] px-4 py-8 md:hidden">
          <div className="section-shell flex flex-col gap-5">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="display text-3xl no-underline"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a href="#contact" className="mt-3 bg-[#17191d] px-5 py-4 text-sm font-bold text-white no-underline" onClick={() => setOpen(false)}>
              Start a conversation
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
