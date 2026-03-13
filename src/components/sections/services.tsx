"use client";

import { useReveal } from "@/hooks/useReveal";
import { Clock, Zap, Users, Activity, ArrowRight } from "lucide-react";

const services = [
  {
    num: "01",
    category: "AI Strategy",
    icon: Clock,
    title: "AI Strategy & Advisory",
    body: "We help leadership teams build coherent, implementable AI strategy — not a wish list. From identifying high-value use cases to vendor selection, governance, and measuring ROI.",
    deliverables: [
      "AI Readiness Assessment",
      "Use-Case Prioritization Framework",
      "Technology Vendor Evaluation",
      "AI Governance & Ethics Policy",
    ],
  },
  {
    num: "02",
    category: "Web3",
    icon: Zap,
    title: "Web3 & Blockchain Strategy",
    body: "Beyond the hype. Grounded, commercially rigorous advisory on where blockchain and decentralized technologies create genuine value for your business — and where they don't.",
    deliverables: [
      "Web3 Opportunity Assessment",
      "Tokenomics & Incentive Design",
      "Smart Contract Architecture Review",
      "DeFi & NFT Integration Strategy",
    ],
  },
  {
    num: "03",
    category: "Education",
    icon: Users,
    title: "Executive Education & Workshops",
    body: "Bespoke learning experiences for leadership teams, boards, and enterprise cohorts. From half-day intensives to multi-week programs — tailored to your industry and expertise level.",
    deliverables: [
      "C-Suite AI Briefings",
      "Board-Level Web3 Primers",
      "Team Upskilling Programs",
      "Custom Curriculum Development",
    ],
  },
  {
    num: "04",
    category: "Roadmapping",
    icon: Activity,
    title: "Innovation Roadmapping",
    body: "We work with product and strategy teams to build 12–36 month innovation roadmaps anchored in emerging technology — ensuring you're positioned ahead of industry shifts.",
    deliverables: [
      "Technology Landscape Analysis",
      "Competitive Intelligence Reports",
      "Innovation Sprint Facilitation",
      "Quarterly Strategic Review",
    ],
  },
];

export function Services() {
  const ref = useReveal();

  const handleClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="services"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 lg:py-36 px-6 lg:px-8 bg-void"
      aria-label="Services"
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="flex flex-wrap justify-between items-end gap-8 mb-16">
          <div>
            <div className="reveal label-caps flex items-center gap-3 mb-5">
              <span className="w-6 h-[0.5px] bg-gold" />
              What We Do
            </div>
            <h2
              className="reveal reveal-delay-1 text-[clamp(2.2rem,4.5vw,3.8rem)] font-light leading-[1.05] text-warm-white max-w-[20ch]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Advisory Built for the{" "}
              <span className="grad-text">Next Decade</span>
            </h2>
          </div>
          <button
            onClick={() => handleClick("#contact")}
            className="reveal self-end inline-flex items-center gap-2 text-txt-muted-light text-[0.82rem] font-normal py-3 px-6 rounded-sm border border-border-subtle transition-all duration-600 hover:border-border-gold hover:text-warm-white group"
          >
            Discuss Your Needs
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-600 group-hover:translate-x-1" />
          </button>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-border-subtle gold-frame rounded-sm overflow-hidden">
          {services.map((service, index) => (
            <article
              key={service.title}
              className={`reveal reveal-delay-${(index % 4) + 1} bg-charcoal p-8 lg:p-10 group transition-all duration-600 hover:bg-surface`}
            >
              {/* Number & Category */}
              <div className="flex items-center justify-between mb-7">
                <span className="text-[0.6rem] font-medium tracking-[0.22em] uppercase text-txt-muted transition-colors duration-600 group-hover:text-gold">
                  {service.num} / {service.category}
                </span>
              </div>

              {/* Icon */}
              <div className="w-11 h-11 border border-border-subtle rounded-sm flex items-center justify-center mb-7 transition-all duration-600 group-hover:border-border-gold">
                <service.icon className="w-[18px] h-[18px] text-gold/60 transition-colors duration-600 group-hover:text-gold" />
              </div>

              {/* Title */}
              <h3
                className="text-[1.4rem] lg:text-[1.6rem] font-normal text-warm-white mb-4 leading-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {service.title}
              </h3>

              {/* Body */}
              <p className="text-[0.85rem] font-light leading-[1.8] text-txt-muted-light mb-7">
                {service.body}
              </p>

              {/* Deliverables */}
              <ul className="flex flex-col gap-2.5">
                {service.deliverables.map((item) => (
                  <li
                    key={item}
                    className="text-[0.76rem] font-light flex items-center gap-2.5 text-txt-muted transition-colors duration-600 group-hover:text-txt-muted-light"
                  >
                    <span className="w-1 h-1 rounded-full bg-gold/40 shrink-0 transition-colors duration-600 group-hover:bg-gold" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
