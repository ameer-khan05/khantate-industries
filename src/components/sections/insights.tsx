const themes = [
  {
    tag: "Field note 01",
    title: "Selling deeply technical products without diluting them",
    summary: "A practical framework for moving from architecture to an urgent customer story.",
  },
  {
    tag: "Field note 02",
    title: "What working across four early-stage companies teaches you",
    summary: "Patterns in product decisions, founder narratives, partnerships, and market timing.",
  },
  {
    tag: "Field note 03",
    title: "Trust is becoming a product surface",
    summary: "Lessons from digital health, agent infrastructure, and non-custodial finance.",
  },
];

export function Insights() {
  return (
    <section id="writing" className="bg-[#e9e4d9] py-20 lg:py-28" aria-labelledby="writing-title">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
          <div>
            <span className="eyebrow text-[#ee5d32]">Writing</span>
            <p className="mt-5 max-w-[33ch] text-sm leading-6 text-black/55">
              Notes on products, markets, partnerships, and the work of building
              frontier companies. Publishing begins soon.
            </p>
          </div>
          <h2 id="writing-title" className="display max-w-[13ch] text-[clamp(3.2rem,6vw,6.4rem)] leading-[0.92]">
            Ideas from inside the work.
          </h2>
        </div>

        <div className="mt-14 grid border-l border-t border-black/20 md:grid-cols-3">
          {themes.map((theme) => (
            <article key={theme.tag} className="flex min-h-80 flex-col justify-between border-b border-r border-black/20 p-7">
              <span className="text-[0.65rem] font-bold uppercase tracking-[0.13em] text-[#2447e8]">{theme.tag}</span>
              <div>
                <h3 className="display text-[2rem] leading-[1.02]">{theme.title}</h3>
                <p className="mt-5 text-sm leading-6 text-black/55">{theme.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
