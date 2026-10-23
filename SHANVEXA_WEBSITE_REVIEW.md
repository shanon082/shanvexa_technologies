# Shanvexa Technologies website review

Review date: 23 October 2026. Local repository implementation only; no commit, push, messages, or deployment authorised or performed.

## Audit and scope

The starting working tree was clean. Read the README and inspected all page sections, shared enquiry state, modal implementation, styles, dependencies, and public assets. No applicable repository AGENTS.md was present. The project uses the Next.js App Router, React, TypeScript, plain CSS, and focused interactive client components. The existing brand, cream backgrounds, dark typography, lime accents, editorial layout, four service categories, illustrations, founder attribution, and personal portfolio link are retained.

Reusable components include ServiceLink (service preselection), EnquiryProvider, Modal (native dialog), section shells, buttons, project cards, and native FAQ disclosure elements. No application screenshots were present in public assets; the existing illustrations remain explicitly labelled.

## Implemented improvements

- Hero supporting copy names actual services and intended audiences without implying existing customers. Calls to action now say “Discuss your project” and “View our work”.
- All four service cards explain a practical need, deliverable examples, and customer value. Each has an explicit discussion action and retains service preselection in the contact form.
- The scheduling showcase names the Automated Timetable Generator and exposes Laravel, React, and scheduling optimisation. Demonstrations remain by arrangement; no public deployment is invented.
- Avenora is explicitly a fictional presentation concept, not a paid engagement. Its visible public demo link returned HTTP 200 during this review. Removed obsolete local-only/prelaunch descriptions and added TypeScript.
- The energy platform remains a web/Android development prototype. Its financial and hardware features are clearly identified as nonproduction; simulation limitations remain in the project details.
- The four process stages now explain what the customer shares, reviews, tests, and agrees. Costs, scope, delivery planning, and support terms require agreement; no fixed deadline or free support is promised.
- Contact retains native required/email validation and adds a trimmed project-outline check, length guidance, useful field prompts, and an optional timeline. Budget is omitted to keep the first conversation accessible. Editing details clears an outdated generated brief.
- Email drafts include the service and timeline. Clipboard and manual-copy fallbacks remain. No backend, database, or third-party delivery provider was introduced. WhatsApp remains independently accessible without completing the form.
- Mobile form fields stack, select text stays at 16px to avoid mobile zoom, and menu/dialog/founder-link controls have larger touch targets. Existing keyboard focus, skip link, native disclosures/dialogs, and reduced-motion styles remain.
- SEO adds a service/location page title, canonical URL, Open Graph URL/image, Twitter large-image metadata, Organization JSON-LD, robots.txt, and sitemap.xml. The branded 1200×630 sharing image reuses the existing logo geometry, colours, and slogan through Next ImageResponse, without an image-generation service or external image request.
- Added nosniff, same-origin framing, and referrer headers. Runtime dependencies remain unchanged. ESLint and Playwright are development tooling only.

## Files changed

- `src/components/hero.tsx`, `services.tsx`, `selected-work.tsx`, `approach.tsx`: messaging, project truthfulness, calls to action.
- `src/components/enquiry-form.tsx`: validation, timeline, draft handling.
- `src/app/globals.css`: small responsive/accessibility refinements.
- `src/lib/site.ts`, `src/app/layout.tsx`: production URL and metadata/structured data.
- `src/app/opengraph-image.tsx`, `robots.ts`, `sitemap.ts`: sharing and indexing assets.
- `next.config.ts`: response headers and TypeScript compiler configuration.
- `package.json`, `package-lock.json`, `eslint.config.mjs`: development validation tools/scripts.
- `playwright.config.ts`, `tests/website.spec.ts`, `.gitignore`: repeatable browser checks and generated-output exclusions.
- `next-env.d.ts`: Next.js regenerated production route-type imports during validation.
- `README.md`, this report: handoff and verification instructions.

## Verification

- `npm run lint`: passed with no warnings or errors.
- `npm run typecheck`: passed.
- `npm run build`: passed, with all five displayed routes prerendered (homepage, not-found, sharing image, robots, sitemap).
- The default Next.js TypeScript CLI helper returned empty `--showConfig` output in this environment, although direct `tsc --showConfig` worked. The config uses Next.js’s compiler API (`experimental.useTypeScriptCli: false`) instead; type checking remains enabled. The final production build passed with that setting.
- Chromium browser suite: **9/9 passed** (final run: 1.5 minutes). Covers 360, 375, 390, 768, 1024, and 1440px with no horizontal overflow; menu open/Escape; all four service selections; required/email/whitespace validation; draft content and manual clipboard fallback; stale-draft clearing; WhatsApp URL; project dialog/demonstration selection; FAQ; valid section targets; canonical/OG/JSON-LD; robots/sitemap/image HTTP responses; keyboard skip link/dialog focus restoration; and reduced-motion scrolling. Runs use the production server, not a mocked page. Browser launch and local-server access required running outside the execution sandbox.
- Visual review: inspected mobile (360px) hero/contact and desktop (1440px) hero screenshots, plus the generated branded social card. Full-page screenshots are captured at every requested width in ignored `test-results/` output.
- Avenora and the existing founder portfolio URL returned HTTP 200 on 23 October 2026. The web fetch service could not access those sites; direct HTTP header checks succeeded. No external email or WhatsApp message was sent.
- `git diff --check`: passed.
- `npm audit --omit=dev`: zero reported vulnerabilities. Full audit reports five high-severity entries in a single development-only dependency chain: `eslint-config-next → @next/eslint-plugin-next → fast-glob → micromatch → braces` (GHSA-vfj7-8cjw-p6xm, nested-pattern denial of service). No compatible fix was offered by the audit; its suggested downgrade to the Next 14 lint configuration is inappropriate for this Next 16 project. No force upgrade/downgrade was applied. Revisit when the lint tooling has a compatible patched dependency. ESLint 9 also emits an upstream end-of-support notice; it was installed alongside the matching Next.js lint configuration and passes the configured checks. Reassess a supported lint-tool upgrade separately.

## Limitations and founder input

- Confirm the preferred permanent production domain before switching from the supplied Vercel URL; update `site.url` when it changes. Search indexing and social preview refresh depend on deployment and external crawlers.
- Supply real, sanitised application screenshots for the timetable and energy projects, plus approval to publish them. Avenora currently retains the established illustration; a real desktop/mobile capture could replace it later.
- Confirm public demonstration arrangements and availability for the timetable project. No URL was invented for it or the energy prototype.
- Confirm whether the existing Kampala label, public email, WhatsApp number, and portfolio URL remain the preferred business details.
- Establish pricing/quote practices, support terms, and delivery expectations before publishing specific commercial promises.
- Google Fonts still loads via the existing CSS import with swap and local sans-serif fallbacks. External font availability/privacy remains a tradeoff; no font download is needed for production build.
- Browser automation does not establish screen-reader usability, every physical mobile/browser combination, Core Web Vitals, or real email/WhatsApp delivery. Email app behaviour and long mailto URL limits vary by device; copying the brief provides a fallback.
- No fake social proof, staff, clients, credentials, registration, address, revenue, or performance outcomes were added.

## Deployment readiness

Deployment remains deferred pending founder approval. The production build is technically ready for review; review the documented development-tool audit finding and confirm the founder details above before approving release. This work does not push or trigger Vercel deployment.
