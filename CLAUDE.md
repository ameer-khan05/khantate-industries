# Khanate Website

## Purpose

Khanate is Ameer Khan's personal operating portfolio and advisory platform.
It should build trust through real, attributable work rather than presenting
itself as a large anonymous consultancy.

## Positioning

Ameer works across product, go-to-market, and business development with
emerging-technology ventures. The current active portfolio is:

- MedVault — digital health
- Credexai — AI-agent governance infrastructure
- Flip Labs — AI and decentralized finance
- Mithara Institute — computational expert intelligence

## Content principles

- Use first person when describing Ameer's work.
- Label active ventures as current work, not completed client case studies.
- Never invent customers, testimonials, traction, metrics, or credentials.
- Clearly distinguish Ameer's role from company ownership or founder status.
- Do not disclose confidential fundraising or partnership information.
- Keep writing previews visibly labeled as forthcoming until real posts exist.

## Design direction

The visual system is editorial, direct, and operator-led:

- warm paper background and dark ink
- electric blue, orange, and acid accents
- strong typographic hierarchy
- real venture links and product-specific language
- minimal motion and no generic AI imagery

The About section currently uses an intentional `AK` graphic placeholder. Replace
it with an authentic editorial portrait when one becomes available.

## Technical notes

- Next.js App Router with TypeScript and Tailwind CSS 4
- Prefer server components unless interaction requires client state
- The contact form posts to the existing Formspree endpoint
- Validate changes with `npm run lint` and `npm run build`
