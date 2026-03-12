"use client";

import { Clock, User } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";

const articles = [
  {
    tag: "Artificial Intelligence",
    tagColor: "text-blue",
    title: "What Executives Get Wrong About AI (And How to Fix It)",
    excerpt:
      "The biggest mistake isn't moving too slowly on AI — it's moving fast without a framework for evaluating what actually matters for your business.",
    readTime: "6 min read",
    author: "Ameer Khan",
  },
  {
    tag: "Web3",
    tagColor: "text-violet",
    title: "The Web3 Moment That Actually Matters for Enterprise",
    excerpt:
      "Forget the hype cycles. There's one structural shift in Web3 that enterprise leaders can't afford to ignore — and it has nothing to do with tokens.",
    readTime: "8 min read",
    author: "Ameer Khan",
  },
  {
    tag: "Strategy",
    tagColor: "text-cyan",
    title: "Building an AI-Ready Organization Before You Need One",
    excerpt:
      "The organizations that will win the AI era aren't the ones with the biggest budgets. They're the ones building the right foundations today.",
    readTime: "5 min read",
    author: "Ameer Khan",
  },
];

export function Insights() {
  return (
    <section
      id="insights"
      className="py-[clamp(4rem,8vw,7rem)]"
      aria-label="Insights"
    >
      <div className="max-w-[1200px] mx-auto px-[clamp(1.5rem,5vw,4rem)]">
        {/* Section Header */}
        <div className="mb-14">
          <BlurFade delay={0.1} inView>
            <span className="text-blue text-[0.68rem] font-bold tracking-[0.2em] uppercase mb-4 block">
              Insights
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
              Thinking Out Loud
            </h2>
          </BlurFade>
        </div>

        {/* Article Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article, i) => (
            <BlurFade key={article.title} delay={0.15 + i * 0.1} inView>
              <a
                href="#insights"
                className="group block h-full"
                aria-label={`Read: ${article.title}`}
              >
                <article className="flex flex-col h-full p-7 rounded-xl border border-ki-border bg-surface/30 hover:border-blue/40 hover:bg-raised/30 hover:-translate-y-[2px] transition-all duration-300">
                  {/* Tag */}
                  <span
                    className={`${article.tagColor} text-[0.62rem] font-bold tracking-[0.18em] uppercase mb-4`}
                  >
                    {article.tag}
                  </span>

                  {/* Title */}
                  <h3 className="text-white text-lg font-medium leading-snug mb-3 group-hover:text-white/90 transition-colors duration-200">
                    {article.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-ki-muted2 text-sm leading-relaxed mb-6 flex-1">
                    {article.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center gap-4 pt-4 border-t border-ki-border text-ki-muted text-xs">
                    <span className="flex items-center gap-1.5">
                      <Clock className="size-3" />
                      {article.readTime}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <User className="size-3" />
                      {article.author}
                    </span>
                  </div>
                </article>
              </a>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
