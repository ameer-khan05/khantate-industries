"use client";

import { useReveal } from "@/hooks/useReveal";

const clients = [
  { name: "Fortune 500 Finance", initials: "F5" },
  { name: "Global Healthcare", initials: "GH" },
  { name: "Tech Unicorn", initials: "TU" },
  { name: "Enterprise Retail", initials: "ER" },
  { name: "Venture Capital", initials: "VC" },
  { name: "Government Agency", initials: "GA" },
];

export function LogoCloud() {
  const ref = useReveal();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="py-14 lg:py-16 px-6 lg:px-8 bg-void border-b border-border-subtle"
      aria-label="Trusted clients"
    >
      <div className="max-w-[1200px] mx-auto">
        <p className="reveal text-center text-[0.65rem] font-medium tracking-[0.22em] uppercase text-txt-muted mb-10">
          Trusted by Forward-Thinking Organizations
        </p>
        <div className="reveal reveal-delay-1 flex flex-wrap items-center justify-center gap-x-14 gap-y-6 lg:gap-x-20">
          {clients.map((client) => (
            <div
              key={client.name}
              className="group flex items-center gap-3 opacity-40 hover:opacity-80 transition-opacity duration-600"
            >
              <div className="w-10 h-10 border border-border-subtle rounded-sm flex items-center justify-center transition-all duration-600 group-hover:border-border-gold">
                <span className="text-[0.68rem] font-medium text-txt-muted-light transition-colors duration-600 group-hover:text-gold">
                  {client.initials}
                </span>
              </div>
              <span className="text-[0.82rem] font-light text-txt-muted-light hidden sm:block">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
