# Handoff: Compact 4-col Projects + Page Background

## Overview

Two small, related changes for the Jingqi Lu portfolio site
([`lluluciano0505/Jingqi_web`](https://github.com/lluluciano0505/Jingqi_web), Next.js 15 + Tailwind v3 + Framer Motion):

1. **Switch the Projects section from the current 3-col layout to a denser
   4-col "Compact" layout** — smaller image, smaller card padding, 2-line
   tagline clamp, 3 skill chips max. The card shell, hover behaviour and
   colour treatment stay identical so the rest of the site doesn't drift.
2. **Tint the page background pale blue** instead of the existing pure
   white.

Both changes were prototyped in this design system and confirmed to keep
the existing visual rhythm (rounded-xl cards, brand hover, slate-100
border, image scale-105 on hover).

## About the Design Files

The HTML files bundled here are **design references** — Babel-in-the-browser
prototypes built to demonstrate the intended look and behaviour. They are
**not production code to copy directly**.

The job is to recreate these designs **in the existing Next.js 15 +
Tailwind v3 codebase**, reusing the patterns already in `components/`
(Framer Motion variants, Tailwind utility classes, the `brand` colour
token, the `useLocale()` hook, etc.). Do not introduce a new framework
or styling system — the codebase is already opinionated and the design
deliberately matches it.

## Fidelity

**High-fidelity.** Exact pixel values, exact hex codes, and exact Tailwind
utility classes are given below — apply them verbatim.

## Files to change

### 1. `app/globals.css`

Replace the body background. The current rule is `@apply bg-white …`;
swap it for the new tint.

```css
@layer base {
  body {
    /* OLD: @apply bg-white text-slate-800 antialiased; */
    @apply text-slate-800 antialiased;
    background-color: rgba(230, 246, 255, 0.337);
  }
}
```

Notes:
- The tint is **pale, low-alpha cyan-blue** (`rgba(230,246,255,0.337)`).
  Keep it as `background-color` rather than a Tailwind utility — there's
  no good Tailwind class for this specific colour and inventing a token
  for it isn't worth it for one rule.
- Card surfaces (project cards, blog cards) stay `bg-white` so they pop
  off the tinted page. **Do not** change those.
- The `bg-slate-50` on the Experience section also stays — it's still a
  perceptual step up from the new page tint, so the section-rhythm
  reads correctly.

### 2. `components/ProjectsGrid.tsx`

The current grid is `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6`.
Switch to a denser 4-col responsive grid and add a project-count badge
next to each group label.

```tsx
// In ProjectsGrid.tsx — only the grid wrapper and the group <h3> change.

<h3 className="text-lg font-semibold text-brand mb-4 flex items-center gap-3">
  {label}
  <span className="text-xs font-normal text-slate-400">{items.length}</span>
  <span className="h-px flex-1 bg-brand/20" />
</h3>
<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
  {items.map((project, i) => (
    <ProjectCard key={project.slug} project={project} index={i} />
  ))}
</div>
```

Also tighten the outer `space-y-16` → `space-y-10` so the groups stack
closer in the new density.

### 3. `components/ProjectCard.tsx`

Replace the card body so the image is shorter, the padding is tighter,
the tagline clamps at 2 lines, and only 3 chips render. The motion
config and link semantics stay identical.

```tsx
// motion delay shrinks slightly to keep the longer column stagger feeling tight
transition={{ duration: 0.4, delay: index * 0.04, ease: "easeOut" as const }}

// inside the <Link>:
<div className="relative w-full h-28 bg-gradient-to-br from-brand/80 to-slate-700">
  <Image
    src={imgSrc}
    alt={project.title}
    fill
    className="object-cover group-hover:scale-105 transition-transform duration-500"
    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
  />
</div>

<div className="p-3.5">
  <h3 className="text-sm font-semibold text-slate-900 group-hover:text-brand transition-colors leading-snug line-clamp-2">
    {title}
  </h3>
  <p className="mt-1 text-xs text-slate-500 line-clamp-2">
    {tagline}
  </p>

  <div className="mt-2 flex flex-wrap gap-1">
    {project.skills.slice(0, 3).map((skill) => (
      <span
        key={skill}
        className="text-[10px] px-1.5 py-0.5 rounded-full bg-slate-100 text-slate-600 whitespace-nowrap"
      >
        {skill}
      </span>
    ))}
  </div>
</div>
```

**Critical details:**
- `h-28` (112 px) — not `h-32` or `h-24`. Maintains a roughly 4:3 image ratio at the new card width.
- `p-3.5` — between `p-3` and `p-4`; gives the card visual breathing room without bloating it.
- `line-clamp-2` on both title and tagline. **You will need the
  `@tailwindcss/line-clamp` plugin** if it's not already enabled — but
  Tailwind 3.3+ ships this utility by default, and this repo is on 3.4,
  so check first and add the plugin only if `line-clamp-2` doesn't
  resolve to a real class.
- `text-[10px]` on the chips — arbitrary-value syntax, not `text-xs`.
  The chip needs to be visibly smaller than the body copy.
- `whitespace-nowrap` on chips — without this, multi-word skills like
  "Multi-Agent" or "LLM Pipeline" wrap mid-word at narrow widths.
- The motion `delay: index * 0.04` (was `0.05`) keeps the stagger
  perceptible but quicker — with more cards visible, slower stagger
  feels laggy.

### 4. (Optional, recommended) Show the project count globally

The compact layout makes it easier to see "you have N projects in each
group". Consider also adding `items.length` rendering as a small caption
to the section header in `app/page.tsx` — but that's a tweak, not part
of this handoff.

## What does NOT change

- `Navbar`, `Hero`, `ExperienceSection`, `BlogSection`, `Footer` — all
  untouched. The compact layout is **localised to the Projects section
  only**.
- Card hover behaviour: still `hover:shadow-lg duration-300` on the
  card, still `group-hover:scale-105 duration-500` on the image, still
  `group-hover:text-brand transition-colors` on the title.
- Card semantics: still a `<Link>` to `/projects/[slug]`.
- The brand colour, fonts, motion easing — all unchanged.
- Bilingual EN/中文 — unchanged. `pick(locale, …)` still drives title
  and tagline.

## Verification

After the changes, a desktop viewport (≥ 1024 px) of the home page should show:

- A pale-blue page tint behind everything (faintly visible against the
  white nav and white cards).
- The Projects section laid out as **4 cards per row** at `lg`,
  3 per row at `sm`, 2 per row at mobile.
- Each card has a 112 px image area, then a tight content block with
  title (clamped at 2 lines), tagline (clamped at 2 lines), and 3 skill
  chips on one row.
- Each group heading now shows its project count as a small slate-400
  number next to the label (e.g. `AI 2`, `Data Analysis 5`).
- Hover on a card still gives the same shadow + image-scale effect.

## Design tokens (for reference, unchanged from the existing system)

| Token | Value |
|---|---|
| `brand` | `#1e3a5f` |
| Card border | `border-slate-100` |
| Card shadow on hover | `shadow-lg` (`0 10px 15px -3px rgb(0 0 0 / 0.1)`) |
| Body text | `text-slate-600` (`#475569`) |
| Title | `text-slate-900` (`#0f172a`) on idle, `text-brand` on group-hover |
| Skill chip | `bg-slate-100` (`#f1f5f9`) / `text-slate-600` |
| Page tint (NEW) | `rgba(230, 246, 255, 0.337)` |
| Card image fallback gradient | `from-brand/80 to-slate-700` |
| Easing | `easeOut`, duration `0.4 s`, stagger `index * 0.04` |

## Files in this bundle

- `README.md` — this file
- `prototype/index.html` — the click-thru prototype showing the compact 4-col layout in action (open in a browser; toolbar has a Tweaks toggle to flip between Canonical and Compact)
- `prototype/ProjectsGrid.jsx` — source component file for the prototype (for cross-reference; do not port directly)
- `prototype/ProjectCard-Canonical.txt` — current production card snippet (for diff reference)
- `prototype/ProjectCard-Compact.txt` — target compact card snippet (the goal)
