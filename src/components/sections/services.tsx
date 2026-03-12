"use client";

import { Brain, Blocks, GraduationCap, Compass, ArrowRight } from "lucide-react";
import { MagicCard } from "@/components/ui/magic-card";
import { BlurFade } from "@/components/ui/blur-fade";

const services = [
  {
    number: "01",
    icon: Brain,
    title: "AI Strategy & Advisory",
    description:
      "Navigate the AI landscape with clarity. We help organizations identify high-impact use cases and build responsible AI strategies aligned with business objectives.",
    deliverables: [
      "AI readiness assessment",
      "Use-case prioritization",
      "Vendor evaluation",
      "Governance & ethics policy",
    ],
  },
  {
    number: "02",
    icon: Blocks,
    title: "Web3 & Blockchain Strategy",
    description:
      "Separate signal from noise in the decentralized ecosystem. We provide strategic guidance on blockchain adoption, tokenomics, and DeFi opportunities.",
    deliverables: [
      "Opportunity assessment",
      "Tokenomics & incentive design",
      "Smart contract architecture review",
      "DeFi & NFT integration strategy",
    ],
  },
  {
    number: "03",
    icon: GraduationCap,
    title: "Executive Education & Workshops",
    description:
      "Equip your leadership with the knowledge to make confident technology decisions. Tailored programs from boardroom briefings to team-wide upskilling.",
    deliverables: [
      "C-suite AI briefings",
      "Board-level Web3 primers",
      "Team upskilling programs",
      "Custom curriculum development",
    ],
  },
  {
    number: "04",
    icon: Compass,
    title: "Innovation Roadmapping",
    description:
      "Transform emerging technology awareness into structured innovation strategy. We facilitate discovery, prioritization, and execution planning.",
    deliverables: [
      "Technology landscape analysis",
      "Competitive intelligence reports",
      "Innovation sprint facilitation",
      "Quarterly strategic review",
    ],
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="py-[clamp(4rem,8vw,7rem)]"
      aria-label="Services"
    >
      <div className="max-w-[1200px] mx-auto px-[clamp(1.5rem,5vw,4rem)]">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
          <div>
            <BlurFade delay={0.1} inView>
              <span className="text-blue text-[0.68rem] font-bold tracking-[0.2em] uppercase mb-4 block">
                What We Do
              </span>
            </BlurFade>
            <BlurFade delay={0.2} inView>
              <h2
                className="font-display text-white"
                style={{
                  fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
                  fontWeight: 300,
                  lineHeight: 1.1,
                }}
              >
                Advisory Built for the{" "}
                <span className="gradient-text">Next Decade</span>
              </h2>
            </BlurFade>
          </div>
          <BlurFade delay={0.3} inView>
            <a
              href="#contact"
              className="text-ki-muted2 text-sm font-medium hover:text-white transition-colors duration-200 flex items-center gap-1.5 shrink-0"
            >
              Discuss Your Needs
              <ArrowRight className="size-3.5" />
            </a>
          </BlurFade>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 rounded-2xl border border-ki-border overflow-hidden">
          {services.map((service, i) => (
            <BlurFade key={service.number} delay={0.15 + i * 0.1} inView>
              <MagicCard
                gradientColor="#141630"
                gradientOpacity={0.6}
                gradientFrom="#4B8BF4"
                gradientTo="#8B5CF6"
                className={`p-8 sm:p-10 bg-surface/30 rounded-none border-0 ${
                  i < 2 ? "border-b border-ki-border" : ""
                } ${i % 2 === 0 ? "md:border-r md:border-ki-border" : ""}`}
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="text-ki-muted text-[0.65rem] font-bold tracking-[0.2em] uppercase">
                    {service.number}
                  </span>
                  <div className="w-10 h-10 rounded-full border border-ki-border flex items-center justify-center">
                    <service.icon className="size-4 text-blue" />
                  </div>
                </div>

                <h3 className="text-white text-xl font-medium mb-3">
                  {service.title}
                </h3>
                <p className="text-ki-muted2 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                <ul className="space-y-2.5">
                  {service.deliverables.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2.5 text-ki-muted2 text-sm"
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full bg-blue shrink-0"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </MagicCard>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
