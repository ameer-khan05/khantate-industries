import Image from "next/image";
import { ArrowUpRight, Check, ShieldCheck } from "lucide-react";

const ventures = [
  {
    id: "medvault",
    name: "MedVault",
    url: "https://medvault-woad.vercel.app/",
    category: "Digital health",
    statement: "Your health history, finally in one place.",
    description:
      "A private, local-first iPhone app that turns health documents, notes, and details into a clear, useful timeline.",
  },
  {
    id: "credexai",
    name: "Credexai",
    url: "https://credexai.xyz/",
    category: "Agent infrastructure",
    statement: "Govern your agents. Trust everyone else’s.",
    description:
      "Verifiable identity, scoped permissions, policy enforcement, and cryptographic audit infrastructure for AI agents.",
  },
  {
    id: "flip",
    name: "Flip Labs",
    url: "https://fliplabs.ai/",
    category: "AI × decentralized finance",
    statement: "Prompt. Review. Execute.",
    description:
      "A non-custodial AI command center that plans sign-ready, multi-wallet and multi-chain crypto actions.",
  },
  {
    id: "mithara",
    name: "Mithara Institute",
    url: "https://mithara.co/",
    category: "AI research",
    statement: "Expert judgment, made computationally accessible.",
    description:
      "Research and systems for encoding what the best experts were right about—not only what they could explain.",
  },
];

function VentureVisual({ id }: { id: string }) {
  if (id === "medvault") {
    return (
      <div className="relative h-60 overflow-hidden border border-black/15 bg-[#d8f3e9]">
        <div className="absolute left-6 top-6 z-10 flex items-center gap-3">
          <Image
            src="/portfolio/medvault-logo.png"
            alt=""
            width={52}
            height={52}
            className="rounded-[13px] shadow-sm"
          />
          <div>
            <div className="text-lg font-bold tracking-[-0.04em] text-[#163b34]">MedVault</div>
            <div className="text-[0.58rem] font-bold uppercase tracking-[0.12em] text-[#356a60]">Private · Local-first</div>
          </div>
        </div>
        <div className="absolute -bottom-16 right-5 h-[21rem] w-[10rem] overflow-hidden rounded-[1.6rem] border-[5px] border-[#17201e] bg-white shadow-2xl">
          <Image
            src="/portfolio/medvault-product.webp"
            alt="MedVault product interface"
            fill
            sizes="160px"
            className="object-cover object-top"
          />
        </div>
        <div className="absolute bottom-6 left-6 max-w-[11rem] text-xs font-semibold leading-5 text-[#356a60]">
          Health context that stays on your iPhone.
        </div>
      </div>
    );
  }

  if (id === "flip") {
    return (
      <div className="relative h-60 overflow-hidden border border-black/15 bg-[#090b10]">
        <Image
          src="/portfolio/flip-product.jpg"
          alt="Flip Labs product interface"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080a10]/95 via-[#080a10]/35 to-transparent" />
        <div className="absolute left-6 top-5 z-10">
          <div className="text-3xl font-bold lowercase tracking-[-0.08em] text-white">
            flip<span className="text-[#8298ff]">.</span>
          </div>
          <div className="mt-1 text-[0.58rem] font-bold uppercase tracking-[0.13em] text-[#9caeff]">
            AI crypto command center
          </div>
        </div>
        <div className="absolute bottom-6 left-6 z-10 rounded-full border border-white/20 bg-black/45 px-3 py-1.5 text-[0.6rem] font-bold uppercase tracking-[0.1em] text-white/75 backdrop-blur">
          Non-custodial · You sign
        </div>
      </div>
    );
  }

  if (id === "credexai") {
    return (
      <div className="relative h-60 overflow-hidden border border-black/15 bg-[#07152f] p-6 text-white">
        <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(105,149,255,.35)_1px,transparent_1px),linear-gradient(90deg,rgba(105,149,255,.35)_1px,transparent_1px)] [background-size:32px_32px]" />
        <div className="relative z-10 flex items-center justify-between">
          <div className="text-2xl font-semibold tracking-[-0.055em]">
            credex<span className="text-[#55d6be]">ai</span>
          </div>
          <ShieldCheck size={25} className="text-[#55d6be]" />
        </div>
        <div className="absolute inset-x-6 bottom-6 z-10 border border-[#6d8fff]/35 bg-[#0e2146]/90 p-4 shadow-2xl backdrop-blur">
          <div className="flex items-center justify-between border-b border-white/15 pb-3">
            <span className="text-[0.58rem] font-bold uppercase tracking-[0.12em] text-[#88a3e8]">Agent credential</span>
            <span className="flex items-center gap-1.5 text-[0.58rem] font-bold uppercase tracking-[0.1em] text-[#55d6be]">
              <Check size={11} /> Verified
            </span>
          </div>
          <div className="mt-3 grid grid-cols-[0.7fr_1.3fr] gap-y-2 text-[0.65rem]">
            <span className="text-white/40">Issuer</span><span>credexai:enterprise</span>
            <span className="text-white/40">Scope</span><span>analytics.read · staging.deploy</span>
            <span className="text-white/40">Policy</span><span className="text-[#55d6be]">Enforced at gateway</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-60 overflow-hidden border border-black/15 bg-[#2c4a35] p-6 text-[#f5f2ee]">
      <div className="absolute inset-0 opacity-45 [background-image:radial-gradient(ellipse_at_82%_15%,rgba(52,96,66,.95),transparent_35%),radial-gradient(ellipse_at_12%_110%,rgba(196,134,42,.3),transparent_36%)]" />
      <div className="absolute bottom-0 left-0 h-1 w-[38%] bg-[#8b1a2e]" />
      <div className="absolute bottom-0 left-[38%] h-1 w-[24%] bg-[#c4862a]" />
      <div className="absolute bottom-0 right-0 h-1 w-[38%] bg-[#346042]" />

      <div className="relative z-10 flex h-full flex-col justify-between">
        <div className="flex items-start justify-between gap-5">
          <Image
            src="/portfolio/mithara-logo.svg"
            alt="Mithara Institute"
            width={299}
            height={81}
            unoptimized
            className="h-auto w-[174px] sm:w-[190px]"
          />
          <span className="border border-[#f5f2ee]/25 px-2.5 py-1 text-[0.52rem] font-bold uppercase tracking-[0.14em] text-[#f5f2ee]/65">
            Research
          </span>
        </div>

        <div>
          <div className="mb-3 flex items-end justify-between border-b border-[#f5f2ee]/20 pb-3">
            <div>
              <p className="text-[0.52rem] font-bold uppercase tracking-[0.14em] text-[#c4862a]">
                Discovery
              </p>
              <p className="display mt-1 text-[1.6rem] leading-none">
                Category III
              </p>
            </div>
            <p className="max-w-[16ch] text-right text-[0.58rem] leading-4 text-[#f5f2ee]/55">
              Judgment beneath language, revealed through outcomes.
            </p>
          </div>
          <div className="flex items-center justify-between text-[0.55rem] font-bold uppercase tracking-[0.12em] text-[#f5f2ee]/55">
            <span>Expert signal</span>
            <span className="mx-3 h-px flex-1 bg-[#f5f2ee]/15" />
            <span className="text-[#e8e2d9]">Outcome-grounded encoding</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <section id="ventures" className="border-b border-black/20 py-20 lg:py-28" aria-labelledby="ventures-title">
      <div className="section-shell">
        <div className="mb-12 grid gap-7 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
          <div>
            <span className="eyebrow text-[#2447e8]">Active portfolio</span>
            <p className="mt-5 max-w-[33ch] text-sm leading-6 text-black/55">
              Four companies in active development, connected by a shared focus on
              trust, intelligence, and better decision-making.
            </p>
          </div>
          <h2 id="ventures-title" className="display max-w-[14ch] text-[clamp(3.2rem,6vw,6.4rem)] leading-[0.92]">
            Building across four frontier markets.
          </h2>
        </div>

        <div className="grid border-l border-t border-black/20 md:grid-cols-2">
          {ventures.map((venture, index) => (
            <article key={venture.name} className="group relative min-h-[35rem] overflow-hidden border-b border-r border-black/20 p-6 transition-colors hover:bg-white/40 sm:p-8">
              <div className="flex items-start justify-between gap-5">
                <div>
                  <p className="text-[0.66rem] font-bold uppercase tracking-[0.14em] text-black/45">
                    0{index + 1} · {venture.category}
                  </p>
                  <p className="mt-2 text-[0.68rem] font-bold uppercase tracking-[0.12em] text-[#2447e8]">
                    Product · GTM · BD
                  </p>
                </div>
                <a
                  href={venture.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex size-10 items-center justify-center border border-black/30 no-underline transition-colors hover:bg-[#17191d] hover:text-white"
                  aria-label={`Visit ${venture.name}`}
                >
                  <ArrowUpRight size={17} />
                </a>
              </div>

              <div className="my-8">
                <VentureVisual id={venture.id} />
              </div>

              <h3 className="display text-[2.35rem] leading-none">{venture.name}</h3>
              <p className="mt-3 max-w-[26ch] text-lg font-semibold leading-6">{venture.statement}</p>
              <p className="mt-5 max-w-[48ch] text-sm leading-6 text-black/58">{venture.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
