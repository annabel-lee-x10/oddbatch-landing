# CLAUDE.md for oddbatch

## What this is

A one-page landing site for a shelf of small independent apps.
Neutral curation. oddbatch does not own or represent any listed app.
Brand scope document: docs/scope-2026-08-31.md

## Hard rules

- Dark terminal aesthetic only. Background #141210. No warm cream, no serif.
- Type: JetBrains Mono variable, self-hosted from public/fonts/. No other typeface.
- No CSS framework. No Tailwind. Styles live in src/app/globals.css and page.module.css.
- No UI or component library. No icon packages.
- No client components unless there is a proven need. The page ships zero JavaScript.
- Dependencies stay at next, react, react-dom. Adding one is a decision to raise with Root.
- Accent #d4a852 appears at most twice on the page: wordmark prompt char and italic emphasis.

## Voice

Plain, unhurried, dry. No growth or marketing language.
Never write copy that implies oddbatch built the apps.
No em dashes, no exclamation marks, no emojis.

## Testing

v0 has no logic and therefore no tests, on purpose. From v1
(submission handling) onward, TDD applies: tests first, no exceptions.

## Adding shelf entries

content/apps.ts only. Descriptions under 90 characters.
At most one Root app in any batch, never listed first.

## Growth path

v1: submission form route handler + Supabase ob_submissions table.
v2: ob_apps table, client-side filter, /a/[slug] pages, RSS.
See docs/scope-2026-08-31.md for full plan.
