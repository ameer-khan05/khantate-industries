"use client";

import { useReveal } from "@/hooks/useReveal";

const insights = [
  {
    tag: "AI Strategy",
    title: "The Five Questions Every Board Should Ask About AI",
    excerpt:
      "Before approving another AI initiative, board members need to move beyond the hype. Here's a framework for substantive oversight.",
    date: "March 2026",
    readTime: "8 min read",
  },
  {
    tag: "Web3",
    title: "Why Most Enterprise Blockchain Projects Fail",
    excerpt:
      "After advising dozens of blockchain initiatives, patterns emerge. The failures rarely stem from technology — they stem from misaligned incentives.",
    date: "February 2026",
    readTime: "12 min read",
  },
  {
    tag: "Education",
    title: "Teaching AI to Non-Technical Leaders",
    excerpt:
      "The gap between technical possibility and business understanding is where value gets lost. Here's how we bridge it.",
    date: "January 2026",
    readTime: "6 min read",
  },
];

export function Insights() {
  const ref = useReveal();

  return (
    <section
      id="insights"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 lg:py-36 px-6 lg:px-8 bg-charcoal"
      aria-label="Insights"
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="reveal label-caps flex items-center gap-3 mb-5">
          <span className="w-6 h-[0.5px] bg-gold" />
          Insights
        </div>
        <h2
          className="reveal reveal-delay-1 text-[clamp(2.2rem,4.5vw,3.8rem)] font-light leading-[1.05] text-warm-white mb-14"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Thinking &amp; <span className="grad-text">Writing</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {insights.map((insight, index) => (
            <a
              key={insight.title}
              href="#insights"
              className={`reveal reveal-delay-${index + 1} block gold-frame rounded-sm p-8 bg-void transition-all duration-600 hover:border-gold/40 group no-underline`}
              aria-label={`Read: ${insight.title}`}
            >
              <div className="inline-block text-[0.6rem] font-medium tracking-[0.18em] uppercase text-gold bg-gold/8 border border-border-gold py-1 px-2.5 rounded-sm mb-6">
                {insight.tag}
              </div>

              <h3
                className="text-[1.2rem] font-normal text-warm-white leading-[1.35] mb-4 transition-colors duration-600 group-hover:text-gold-light"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {insight.title}
              </h3>

              <p className="text-[0.82rem] font-light text-txt-muted-light leading-[1.7] mb-6">
                {insight.excerpt}
              </p>

              <div className="text-[0.68rem] text-txt-muted border-t border-border-subtle pt-4 flex items-center gap-2">
                <span>{insight.date}</span>
                <span className="text-gold/40">&middot;</span>
                <span>{insight.readTime}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
