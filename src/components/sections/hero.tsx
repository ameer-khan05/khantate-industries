import { ArrowDown, ArrowUpRight } from "lucide-react";

const ventures = ["MedVault", "Credexai", "Flip Labs", "Mithara Institute"];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-black/20 pt-[68px]">
      <div className="absolute right-[-5rem] top-24 hidden h-[31rem] w-[31rem] rounded-full border-[80px] border-[#2447e8]/10 lg:block" aria-hidden="true" />
      <div className="section-shell grid min-h-[calc(100vh-68px)] grid-cols-1 items-stretch lg:grid-cols-[1fr_0.38fr]">
        <div className="flex flex-col justify-between py-12 lg:border-r lg:border-black/20 lg:py-16 lg:pr-14">
          <div className="enter enter-1 flex items-center justify-between gap-6">
            <span className="eyebrow text-[#2447e8]">Operator · Advisor · Builder</span>
            <span className="hidden text-[0.68rem] font-bold uppercase tracking-[0.12em] text-black/45 sm:block">
              Chicago / Working globally
            </span>
          </div>

          <div className="py-16 lg:py-10">
            <h1 className="display enter enter-2 max-w-[11ch] text-[clamp(4rem,9vw,8.8rem)] leading-[0.82]">
              I help technical ideas become{" "}
              <span className="relative inline-block text-[#2447e8]">
                real businesses.
                <span className="absolute -bottom-2 left-1/4 h-[0.12em] w-3/4 bg-[#ee5d32]" aria-hidden="true" />
              </span>
            </h1>
          </div>

          <div className="enter enter-3 grid gap-8 border-t border-black/20 pt-7 md:grid-cols-[1fr_auto] md:items-end">
            <p className="max-w-[59ch] text-base leading-7 text-black/65 md:text-lg">
              I&apos;m Ameer Khan. I work across product, go-to-market, and business
              development with ambitious companies in AI, digital health, agent
              infrastructure, and decentralized finance.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#ventures" className="inline-flex items-center gap-3 bg-[#17191d] px-5 py-3.5 text-[0.72rem] font-bold uppercase tracking-[0.1em] text-white no-underline transition-transform hover:-translate-y-0.5">
                Explore the portfolio <ArrowDown size={15} />
              </a>
              <a href="#contact" className="inline-flex items-center gap-3 border border-black/40 px-5 py-3.5 text-[0.72rem] font-bold uppercase tracking-[0.1em] no-underline transition-colors hover:bg-white/50">
                Work with me <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
        </div>

        <aside className="enter enter-4 flex flex-col justify-end border-t border-black/20 py-10 lg:border-t-0 lg:py-16 lg:pl-10">
          <p className="mb-5 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-black/45">Currently building with</p>
          <ol className="border-t border-black/20">
            {ventures.map((venture, index) => (
              <li key={venture} className="flex items-center justify-between border-b border-black/20 py-4">
                <span className="display text-[1.55rem]">{venture}</span>
                <span className="text-[0.65rem] font-bold text-black/35">0{index + 1}</span>
              </li>
            ))}
          </ol>
          <p className="mt-8 max-w-[28ch] text-sm leading-6 text-black/55">
            Four active ventures. One operating discipline: make the product legible,
            useful, and commercially real.
          </p>
        </aside>
      </div>
    </section>
  );
}
