# CLAUDE.md — Khanate Industries Website

## Project Overview

This is the website for **Khanate Industries**, an AI & Web3 consulting firm founded by Ameer Khan. The site serves two purposes: building personal credibility and generating consulting leads from enterprise clients and business leaders.

**Live URL:** https://khantate-industries.vercel.app
**Repo:** https://github.com/ameer-khan05/khantate-industries
**Deployment:** GitHub → Vercel (auto-deploys on push to `main`)
**Form backend:** Formspree at `https://formspree.io/f/mojngwdo`

---

## Phase 1: Project Setup

The repo currently contains a single `index.html` file and a `README.md`. The first task is to scaffold a proper Next.js project in this repo.

### Steps

1. **Remove the old files** — delete `index.html` (keep `README.md` for now, we'll update it later)
2. **Initialize Next.js** in the current directory with:
   - TypeScript
   - Tailwind CSS
   - ESLint
   - App Router (`src/app/`)
   - `@/*` import alias
3. **Initialize ShadCN UI** — run `npx shadcn@latest init` with the **New York** style, dark mode via class strategy
4. **Initialize MagicUI** — run `npx magicui@latest init`
5. **Install Google Fonts** — add `next/font/google` imports for:
   - **DM Sans** (body text: weights 300, 400, 500, 600)
   - **Cormorant Garamond** (display headings: weights 300, 400, 500)
6. **Set up the global CSS variables** (see Design System below) in `src/app/globals.css`
7. **Create the folder structure:**

```
src/
├── app/
│   ├── layout.tsx        # Root layout with fonts, metadata, global styles
│   ├── page.tsx          # Single page composing all sections
│   └── globals.css       # Tailwind + custom CSS variables + global styles
├── components/
│   ├── ui/               # ShadCN components (auto-generated)
│   ├── magicui/          # MagicUI components (auto-generated)
│   └── sections/         # Page sections
│       ├── navbar.tsx
│       ├── hero.tsx
│       ├── ticker.tsx
│       ├── about.tsx
│       ├── services.tsx
│       ├── why-us.tsx
│       ├── insights.tsx
│       ├── contact.tsx
│       └── footer.tsx
└── lib/
    └── utils.ts          # ShadCN utility (cn function)
```

8. **Commit and push** — this triggers Vercel to detect the framework change and rebuild.

### After Phase 1

Stop here. I will then add MCP server connections for ShadCN and MagicUI to the `.mcp.json` file so Claude Code can use those tools to install components directly. Once MCP is connected, we proceed to Phase 2.

---

## Phase 2: Build the Website

Rebuild the full single-page site section by section. This is a premium consulting site — it should feel like a $15K agency build, not a template.

### Architecture

- **Single page** — all sections on `src/app/page.tsx` with smooth scroll between anchor IDs
- **Client components only where needed** — use `"use client"` only for interactive parts (nav toggle, form, scroll observer). Keep section shells as server components where possible.
- **Component composition** — each section is its own component in `src/components/sections/`

### Sections (build in this order)

#### 1. Navigation (`navbar.tsx`)
- Fixed/sticky, transparent by default, adds backdrop blur + dark background on scroll
- Logo left: gradient square mark "KI" + "Khanate Industries" text
- Desktop: links for About, Services, Insights + gradient "Work With Us" CTA button
- Mobile: hamburger icon, opens full-screen or sheet overlay with nav links
- Use ShadCN `Sheet` for mobile menu, ShadCN `Button` for CTA
- Max 68px height, z-index 100

#### 2. Hero (`hero.tsx`)
- Full viewport height, vertically centered content
- **Badge:** pill with pulsing dot — "AI & Web3 Advisory · Est. 2024"
- **Headline:** "The Future / Belongs to the / Informed." — use Cormorant Garamond, `clamp(3.5rem, 8.5vw, 8rem)`, weight 300. "Informed." gets gradient text treatment
- **Subheadline:** "Khanate Industries helps business leaders and enterprises cut through the noise — translating AI and Web3 from buzzwords into measurable competitive advantage."
- **CTAs:** "Book a Strategy Call" (gradient primary button with arrow) + "Explore Services" (ghost/outline button with arrow)
- **Stat panel:** floating card on the right (desktop only, hidden below 1024px) — three stats stacked: "50+ Enterprises Advised", "10+ Years of Expertise", "4 Core Services"
- **Background:** animated ambient orbs (3 blurred radial gradients with CSS keyframe drift), dot grid pattern overlay fading out radially
- **Scroll indicator:** bottom-left, animated line + "Scroll to explore" text
- Use MagicUI `BlurFade` or `TextAnimate` for headline entrance animation
- Use MagicUI `DotPattern` or `GridPattern` for the background pattern

#### 3. Ticker Bar (`ticker.tsx`)
- Horizontal scrolling marquee with service keywords separated by blue dots
- Items: "Artificial Intelligence Strategy", "Web3 & Blockchain Advisory", "Executive Education", "Innovation Roadmapping", "Enterprise AI Readiness", "DeFi Strategy"
- Use MagicUI `Marquee` component
- Border top and bottom, slightly lighter background (`#0B0D22`)

#### 4. About (`about.tsx`)
- Two-column grid: image left, text right
- **Image:** portrait photo in 3:4 aspect ratio container with rounded corners, border, and gradient glow border effect. Use a placeholder from Unsplash (`https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80`). Overlay badge at bottom-left showing "10+ Years Expertise"
- **Text side:** section label "Founder", heading "Ameer Khan", blockquote: "Most organizations don't have an AI problem. They have a clarity problem.", two body paragraphs about Ameer's background, expertise pills (Machine Learning, Blockchain, DeFi, LLMs, AI Ethics, Smart Contracts, Product Strategy)
- Use MagicUI `BorderBeam` or `ShineBorder` on the image container
- Background: `#0B0D22`
- Stacks to single column on mobile

#### 5. Services (`services.tsx`)
- Section header: label "What We Do", title "Advisory Built for the Next Decade" (gradient text on "Next Decade"), ghost CTA "Discuss Your Needs →"
- 2×2 grid of service cards with 1.5px gap (grid lines as separators), rounded outer container
- Each card has: number tag (01–04), icon in bordered circle, title, description, deliverables list with blue dot markers
- **Card 1 — AI Strategy & Advisory:** AI readiness assessment, use-case prioritization, vendor evaluation, governance & ethics policy
- **Card 2 — Web3 & Blockchain Strategy:** opportunity assessment, tokenomics & incentive design, smart contract architecture review, DeFi & NFT integration strategy
- **Card 3 — Executive Education & Workshops:** C-suite AI briefings, board-level Web3 primers, team upskilling programs, custom curriculum development
- **Card 4 — Innovation Roadmapping:** technology landscape analysis, competitive intelligence reports, innovation sprint facilitation, quarterly strategic review
- Hover state: card background lightens, gradient line animates in from left at top edge, subtle radial glow in corner
- Use MagicUI `MagicCard` for the spotlight/hover effect
- Single column on mobile

#### 6. Why Us (`why-us.tsx`)
- Section label "Our Approach", title "Rigorous Thinking. Practical Outcomes." (gradient on "Practical Outcomes.")
- 3-column grid of cards
- **Card 1:** "No Fluff, No Filler" — every engagement produces something actionable
- **Card 2:** "Independent Perspective" — no vendor partnerships, no preferred tools
- **Card 3:** "Fluent in Both Worlds" — deep expertise in AI and Web3, not surface-level
- Subtle hover: border lightens, slight translateY(-3px)
- Background: `#0B0D22`
- Single column on mobile

#### 7. Insights (`insights.tsx`)
- Section label "Insights", title "Thinking Out Loud"
- 3-column grid of clickable article cards (link to `#insights` for now — no real blog yet)
- **Card 1:** Tag "Artificial Intelligence" — "What Executives Get Wrong About AI (And How to Fix It)" — 6 min read
- **Card 2:** Tag "Web3" — "The Web3 Moment That Actually Matters for Enterprise" — 8 min read
- **Card 3:** Tag "Strategy" — "Building an AI-Ready Organization Before You Need One" — 5 min read
- Each card: tag badge, title, excerpt paragraph, meta line (read time + author) below border
- Hover: border turns blue, slight lift, background lightens

#### 8. Contact (`contact.tsx`)
- Two-column grid: info left, form right
- **Left:** section label "Get In Touch", title "Let's Talk About What's Next." (gradient on "What's Next."), body text about 30-minute intro call, three detail rows with borders: Availability (Remote & On-Site · Worldwide), Response Time (Within 24 hours), Engagement Type (Project-Based & Retainer)
- **Right:** form in a bordered card container. Fields:
  - Row: First Name + Last Name (side by side)
  - Work Email
  - Company / Organization
  - Area of Interest (select: AI Strategy & Advisory, Web3 & Blockchain Strategy, Executive Education & Workshops, Innovation Roadmapping, General Inquiry)
  - How Can We Help? (textarea)
  - Submit button: "Send Message →" with gradient background
- **Form behavior:** client-side validation (required fields, email format). On submit, POST to `https://formspree.io/f/mojngwdo` via fetch with `Accept: application/json` header. Show success state (checkmark icon, "Message Received", "Ameer will be in touch within 24 hours.") on success. Show error recovery on failure.
- Use ShadCN `Input`, `Select`, `Textarea`, `Button` components, styled to match the dark theme
- Background: `#0B0D22`

#### 9. Footer (`footer.tsx`)
- Simple single row: logo left, nav links center, copyright right
- "© 2026 Khanate Industries · All rights reserved."
- Border top, void background

### Scroll Animations

- All sections use scroll-triggered fade-up reveals (opacity 0 → 1, translateY 24px → 0)
- Use Intersection Observer with threshold 0.1
- Stagger child elements with transition-delay classes (0.1s, 0.2s, 0.3s, 0.4s)
- Hero section uses CSS keyframe animations with animation-delay for staged entrance

---

## Design System

### Colors

```css
--void:    #07081A;   /* Page background */
--deep:    #0B0D22;   /* Alternate section background */
--surface: #0F1128;   /* Card/panel background */
--raised:  #141630;   /* Hover/elevated background */
--border:  #1E2148;   /* Default borders */
--border2: #2A2F5E;   /* Hover borders */
--blue:    #4B8BF4;   /* Primary accent */
--violet:  #8B5CF6;   /* Secondary accent */
--cyan:    #22D3EE;   /* Tertiary accent (use sparingly) */
--white:   #EEF0FF;   /* Primary text */
--muted:   #6B7094;   /* Dim text / labels */
--muted2:  #9BA0C4;   /* Secondary text */
```

### Gradients

```css
--grad:      linear-gradient(135deg, #4B8BF4 0%, #8B5CF6 100%);    /* Buttons, accents */
--grad-text: linear-gradient(135deg, #74AAFF 0%, #A78BFA 100%);    /* Gradient text */
```

### Typography

| Role | Font | Weights | Usage |
|------|------|---------|-------|
| Display | Cormorant Garamond | 300, 400, 500 | Hero headline, section titles, large headings |
| Body | DM Sans | 300, 400, 500, 600 | Everything else — body text, nav, buttons, labels |

- Base line-height: 1.7 for body, 1.0–1.1 for display headings
- Font sizes use `clamp()` for fluid responsive scaling
- Labels/tags: 0.62–0.72rem, uppercase, letter-spacing 0.1–0.2em, weight 600–700

### Spacing

- Section padding: `clamp(4rem, 8vw, 7rem)` vertical, `clamp(1.5rem, 5vw, 4rem)` horizontal
- Container max-width: 1200px, centered
- Card padding: 2–2.5rem
- Generous whitespace — let things breathe

### Effects

- Ambient orbs: large blurred circles (300–600px) with radial-gradient, CSS keyframe drift animations (10–15s infinite ease-in-out)
- Dot grid: radial-gradient dots, 40px spacing, 0.3 opacity, radial mask fade
- Noise texture: subtle SVG fractalNoise overlay at 0.35 opacity, fixed position, pointer-events none
- Card hovers: background color shift, optional border-color change, translateY(-2px to -3px), gradient line reveals
- Button hovers: opacity 0.9, translateY(-1px to -2px), box-shadow glow

### Responsive Breakpoints

- Mobile: < 768px (single column, hamburger nav, reduced font sizes)
- Tablet: 768px–1024px (adaptive grids, stat panel hidden)
- Desktop: > 1024px (full layout)

---

## SEO & Metadata

Set in `src/app/layout.tsx` via Next.js `metadata` export:

```typescript
export const metadata: Metadata = {
  title: "Khanate Industries — AI & Web3 Advisory",
  description: "Khanate Industries helps business leaders and enterprises navigate AI and Web3. Expert advisory, strategy, and education from Ameer Khan.",
  openGraph: {
    title: "Khanate Industries — AI & Web3 Advisory",
    description: "Helping enterprises understand and leverage AI and Web3 technologies.",
    type: "website",
    url: "https://khantate-industries.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
  },
};
```

---

## Code Standards

- Use TypeScript throughout
- Prefer server components; use `"use client"` only where interactivity requires it
- Use `cn()` utility from `@/lib/utils` for conditional class merging
- Tailwind utility classes for all styling — no separate CSS files per component
- Custom CSS only in `globals.css` for: CSS variables, keyframe animations, scrollbar styling, noise overlay, selection colors
- Semantic HTML: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- ARIA labels on all interactive elements and landmark regions
- All images: `loading="lazy"`, explicit `width`/`height`, descriptive `alt` text
- Keep components focused — each section file handles its own layout and content

---

## MCP Component Reference

After MCP servers are connected, use these tools to install components:

### ShadCN Components Needed
- `button` — primary and ghost CTAs
- `input` — form text fields
- `select` — area of interest dropdown
- `textarea` — message field
- `sheet` — mobile navigation overlay
- `navigation-menu` — desktop nav (optional, can be custom)

### MagicUI Components to Explore
- `blur-fade` — section entrance animations
- `text-animate` — hero headline reveal
- `marquee` — ticker bar
- `magic-card` — service card hover spotlight effect
- `border-beam` or `shine-border` — about image glow
- `dot-pattern` or `grid-pattern` — hero background
- `number-ticker` — animated stat numbers in hero panel
- `animated-shiny-text` — hero badge text effect
- `shimmer-button` — primary CTA enhancement

---

## Deployment Notes

- Vercel auto-deploys from `main` branch
- Framework will be auto-detected as Next.js after the scaffold
- No environment variables needed (Formspree endpoint is hardcoded)
- Domain: currently using `khantate-industries.vercel.app`
- Build should complete in under 60 seconds

---

## Important: Aesthetic Direction

This is NOT a generic dark-mode template site. The design references are **Solana**, **Datagram Network**, and **Easeflow** — tech-forward, confident, editorial. Key aesthetic principles:

1. **Sophisticated darkness** — not just "dark mode" but intentional use of deep indigo-navy tones with carefully controlled contrast
2. **Gradient as signature** — the blue→violet gradient is the brand accent; use it deliberately on key elements, not everywhere
3. **Typographic contrast** — elegant serif display (Cormorant Garamond) against clean sans body (DM Sans) creates visual hierarchy and personality
4. **Controlled animation** — smooth, purposeful motion that enhances content hierarchy; nothing gratuitous
5. **Premium density** — information-rich sections that still feel spacious due to careful padding and whitespace management
6. **Confident restraint** — every element earns its place; no decorative filler
