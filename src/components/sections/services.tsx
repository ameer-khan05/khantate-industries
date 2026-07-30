import { ArrowUpRight } from "lucide-react";

const capabilities = [
  {
    number: "01",
    title: "Product",
    thesis: "Make the right thing before making more things.",
    body: "I help teams turn technical possibility into an opinionated product: sharper user problems, clearer priorities, stronger flows, and a roadmap connected to adoption.",
    outputs: ["Product narrative", "User and use-case definition", "Roadmap and prioritization", "Launch readiness"],
  },
  {
    number: "02",
    title: "Go-to-market",
    thesis: "Find the wedge that earns attention and action.",
    body: "I shape positioning, ideal customers, proof points, launch strategy, and the commercial story so a complicated product becomes easy to understand and buy.",
    outputs: ["ICP and wedge", "Positioning and messaging", "GTM motion", "Fundraising narrative"],
  },
  {
    number: "03",
    title: "Business development",
    thesis: "Build the relationships that change the trajectory.",
    body: "I identify and open strategic paths across customers, design partners, platforms, investors, and distribution partners—then turn interest into structured next steps.",
    outputs: ["Partnership strategy", "Design-partner pipeline", "Ecosystem mapping", "Commercial conversations"],
  },
];

export function Services() {
  return (
    <section id="capabilities" className="bg-[#17191d] py-20 text-[#f3f0e8] lg:py-28" aria-labelledby="capabilities-title">
      <div className="section-shell">
        <div className="grid gap-10 border-b border-white/20 pb-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
          <div>
            <span className="eyebrow text-[#d7f63c]">How I help</span>
            <p className="mt-5 max-w-[34ch] text-sm leading-6 text-white/55">
              Strategic enough to shape the direction. Hands-on enough to move the
              work.
            </p>
          </div>
          <h2 id="capabilities-title" className="display max-w-[15ch] text-[clamp(3.2rem,6vw,6.4rem)] leading-[0.92]">
            Three disciplines. One commercial system.
          </h2>
        </div>

        <div className="grid lg:grid-cols-3">
          {capabilities.map((capability) => (
            <article key={capability.number} className="border-b border-white/20 py-9 lg:border-r lg:px-8 lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0">
              <p className="text-[0.66rem] font-bold uppercase tracking-[0.14em] text-[#d7f63c]">{capability.number}</p>
              <h3 className="display mt-12 text-5xl">{capability.title}</h3>
              <p className="mt-4 min-h-14 max-w-[24ch] text-base font-semibold leading-6 text-white/85">{capability.thesis}</p>
              <p className="mt-6 text-sm leading-6 text-white/55">{capability.body}</p>
              <ul className="mt-8 border-t border-white/15">
                {capability.outputs.map((output) => (
                  <li key={output} className="flex items-center gap-3 border-b border-white/15 py-3 text-[0.72rem] font-bold uppercase tracking-[0.08em] text-white/70">
                    <span className="size-1.5 bg-[#ee5d32]" />
                    {output}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-end">
          <a href="#contact" className="link-arrow text-[#d7f63c]">
            Discuss an engagement <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
