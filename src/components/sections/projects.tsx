"use client";

import { useState } from "react";
import Image from "next/image";
import { useReveal } from "@/hooks/useReveal";
import { ArrowUpRight, ArrowRight } from "lucide-react";

const PROJECT_AI =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663431327938/RBSmLsH9Si5jtbTzPWwg6U/project-ai-ectnjeKVDmFjGUSyDnat7X.webp";
const PROJECT_WEB3 =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663431327938/RBSmLsH9Si5jtbTzPWwg6U/project-web3-8vW5K4QPHE98iP5gbUxfwi.webp";
const PROJECT_EDU =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663431327938/RBSmLsH9Si5jtbTzPWwg6U/project-education-J2vkQtUpXqumogywt8hJyU.webp";

interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  tags: string[];
  featured?: boolean;
  metric?: string;
  metricLabel?: string;
}

const projects: Project[] = [
  {
    id: "ai-governance",
    title: "Enterprise AI Governance Framework",
    description:
      "Developed a comprehensive AI governance framework for a Fortune 500 financial services company, establishing policies for responsible AI deployment across 200+ use cases.",
    category: "AI Strategy",
    image: PROJECT_AI,
    tags: ["AI Ethics", "Governance", "Enterprise"],
    featured: true,
    metric: "200+",
    metricLabel: "Use cases deployed",
  },
  {
    id: "defi-protocol",
    title: "DeFi Protocol Architecture",
    description:
      "Architected tokenomics and smart contract systems for a decentralized lending protocol, achieving significant TVL within months of launch.",
    category: "Web3",
    image: PROJECT_WEB3,
    tags: ["DeFi", "Smart Contracts", "Tokenomics"],
    featured: true,
    metric: "$50M+",
    metricLabel: "TVL achieved",
  },
  {
    id: "executive-training",
    title: "C-Suite AI Education Program",
    description:
      "Designed and delivered a 12-week executive education program on AI strategy for a global manufacturing conglomerate's leadership team.",
    category: "Education",
    image: PROJECT_EDU,
    tags: ["Executive Training", "AI Literacy", "Leadership"],
    metric: "150+",
    metricLabel: "Executives trained",
  },
  {
    id: "innovation-roadmap",
    title: "3-Year Innovation Roadmap",
    description:
      "Created a strategic technology roadmap for a healthcare startup, identifying AI and blockchain integration opportunities across the patient journey.",
    category: "Roadmapping",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    tags: ["Healthcare", "Strategy", "Innovation"],
    metric: "3",
    metricLabel: "New product lines",
  },
];

function ProjectCard({
  project,
  index,
  size,
  isHovered,
  onHover,
  onLeave,
}: {
  project: Project;
  index: number;
  size: "large" | "normal";
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}) {
  return (
    <div
      className={`reveal reveal-delay-${(index % 4) + 1} group block bg-void border border-border-subtle rounded-sm overflow-hidden transition-all duration-600 ${
        isHovered ? "border-border-gold" : ""
      }`}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      {/* Image */}
      <div
        className={`relative overflow-hidden ${
          size === "large" ? "aspect-[16/9]" : "aspect-[16/10]"
        }`}
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          className={`object-cover transition-all duration-700 ${
            isHovered ? "scale-[1.03]" : "scale-100"
          }`}
          sizes="(max-width: 768px) 100vw, 50vw"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-void via-void/30 to-transparent" />

        {/* Category */}
        <div className="absolute top-4 left-4 text-[0.6rem] font-medium tracking-[0.18em] uppercase text-gold bg-void/70 backdrop-blur-sm border border-border-gold py-1.5 px-3 rounded-sm">
          {project.category}
        </div>

        {/* Metric */}
        {project.metric && (
          <div className="absolute bottom-4 right-4 bg-void/80 backdrop-blur-sm border border-border-subtle rounded-sm px-4 py-2.5">
            <div
              className="text-xl font-light grad-text leading-none"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {project.metric}
            </div>
            <div className="text-[0.58rem] font-medium tracking-[0.12em] uppercase text-txt-muted mt-0.5">
              {project.metricLabel}
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 lg:p-8">
        <h3
          className="text-xl lg:text-[1.4rem] font-normal text-warm-white mb-3 leading-tight flex items-center gap-2"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {project.title}
          <ArrowUpRight
            className={`w-4 h-4 text-gold transition-all duration-600 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          />
        </h3>
        <p className="text-[0.85rem] font-light leading-[1.8] text-txt-muted-light mb-5">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className={`text-[0.65rem] font-normal py-1 px-2.5 border rounded-sm transition-all duration-600 ${
                isHovered
                  ? "text-gold/80 border-border-gold bg-gold/5"
                  : "text-txt-muted border-border-subtle"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  const ref = useReveal();
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const featured = projects.filter((p) => p.featured);
  const other = projects.filter((p) => !p.featured);

  const handleClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="work"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 lg:py-36 px-6 lg:px-8 bg-charcoal"
      aria-label="Projects"
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="flex flex-wrap justify-between items-end gap-8 mb-16">
          <div>
            <div className="reveal label-caps flex items-center gap-3 mb-5">
              <span className="w-6 h-[0.5px] bg-gold" />
              Selected Work
            </div>
            <h2
              className="reveal reveal-delay-1 text-[clamp(2.2rem,4.5vw,3.8rem)] font-light leading-[1.05] text-warm-white"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Projects &amp; <span className="grad-text">Case Studies</span>
            </h2>
          </div>
          <button
            onClick={() => handleClick("#contact")}
            className="reveal self-end inline-flex items-center gap-2 text-txt-muted-light text-[0.82rem] font-normal py-3 px-6 rounded-sm border border-border-subtle transition-all duration-600 hover:border-border-gold hover:text-warm-white group"
          >
            Start a Project
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-600 group-hover:translate-x-1" />
          </button>
        </div>

        {/* Featured */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {featured.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              size="large"
              isHovered={hoveredId === project.id}
              onHover={() => setHoveredId(project.id)}
              onLeave={() => setHoveredId(null)}
            />
          ))}
        </div>

        {/* Other */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {other.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i + 2}
              size="normal"
              isHovered={hoveredId === project.id}
              onHover={() => setHoveredId(project.id)}
              onLeave={() => setHoveredId(null)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
