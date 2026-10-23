# Shanvexa Technologies — Next.js

The company website, migrated to **Next.js 16.4.2**, **React 19.3.1**, and **TypeScript** with the App Router.

The existing design and founder project showcases are preserved. Static content uses Server Components; interactive navigation, dialogs, enquiry selection, and form preparation use focused Client Components. Styles use ordinary CSS, with no Tailwind dependency.

## Run on your laptop

Use Node.js 24 (the version family used to verify this project) and npm. This package requires Node.js 22 or newer. If you already use nvm, run `nvm install` followed by `nvm use` in the project folder.

1. Extract `shanvexa-technologies-nextjs.zip`.
2. In WSL, open your projects directory:

```bash
mkdir -p ~/projects/next_projects
cd ~/projects/next_projects
explorer.exe .
```

3. Copy the extracted `shanvexa-technologies-nextjs` folder into that window.
4. Run:

```bash
cd ~/projects/next_projects/shanvexa-technologies-nextjs
node --version
npm ci
npm run dev
```

Visit **http://localhost:3000**. Stop the server with Ctrl+C.

If npm reports a network timeout, retry `npm ci` after the connection is working. Wait for installation to succeed before running the dev command. Keep `package-lock.json`; it pins the tested dependency tree.

## Production check

```bash
npm run typecheck
npm run build
npm start
```

`npm start` requires a successful build. It serves the production build locally and does not deploy it.

## If the earlier static project is already in Git

Use the existing repository so its history and GitHub connection are preserved:

1. Stop any running development server in that folder.
2. Back up any changes you made on your laptop. The ZIP is based on the company website created in this conversation and cannot include unseen laptop edits.
3. Copy the contents of this Next.js project into the existing repository folder. Preserve its `.git` directory; this ZIP contains no Git metadata.
4. Move the obsolete root `index.html`, `styles.css`, `app.js`, and `favicon.svg` into a backup folder outside the repository. The application now lives in `src/`, and its icon lives in `public/`. If you retained a static `dist/` folder, move that into the same backup.
5. From the existing repository folder, run `npm ci`, `npm run typecheck`, and `npm run build`.
6. Review and push:

```bash
git status
git add .
git commit -m "Migrate company website to Next.js and TypeScript"
git push
```

Do not reinitialise Git or add a second `origin` if the repository is already connected.

## If you have not created the GitHub repository yet

Create an empty repository named `shanvexa-technologies` under `shanon082`, without an initial README, license or .gitignore. Choose its visibility as you prefer. Then run in this project folder:

```bash
git init
git add .
git commit -m "Add Shanvexa Technologies Next.js website"
git branch -M main
git remote add origin https://github.com/shanon082/shanvexa-technologies.git
git push -u origin main
```

If your account or repository differs, use the HTTPS URL GitHub provides instead. Use your existing Git authentication; never place tokens in project files. If GitHub restricts the push, the local project remains usable while the account issue is resolved.

## Deployment is deferred

No deployment workflow or hosting integration is included. Copying the files, running Next.js locally, or pushing to a new unconnected repository does not deploy this project. If you already connected an existing repository to a hosting provider, its own automatic deployment settings still apply.

The earlier hosted preview is a separate static version and has not been updated by this export. Choose your hosting provider later. This project uses the normal `next build` / `next start` workflow.

## Where to edit

| File or folder | Purpose |
| --- | --- |
| `src/app/page.tsx` | Homepage composition |
| `src/app/layout.tsx` | Global layout, metadata and enquiry context |
| `src/app/globals.css` | Complete responsive visual design |
| `src/app/not-found.tsx` | Custom 404 page |
| `src/components/header.tsx` | Responsive navigation |
| `src/components/hero.tsx` | Hero and illustrative scheduling interface |
| `src/components/services.tsx` | Services |
| `src/components/selected-work.tsx` | Three founder project showcases |
| `src/components/project-dialogs.tsx` | Scheduling details and privacy text |
| `src/components/enquiry-form.tsx` | React contact form |
| `src/components/enquiry-context.tsx` | Shared service selection |
| `src/components/modal.tsx` | Accessible native-dialog interaction |
| `src/components/approach.tsx`, `about.tsx`, `faq.tsx`, `contact.tsx`, `footer.tsx` | Remaining page sections |
| `src/lib/site.ts` | Site metadata, form email, service names and service types |
| `public/favicon.svg` | Website icon |
| `package-lock.json` | Reproducible dependencies |

Visible contact links also appear in the contact and privacy components; update those if you change the email or phone number. Google Fonts supplies Manrope and DM Sans through CSS, with sans-serif fallbacks. A font download is not required to build the project.

## Contact behaviour

The form prepares a message in the visitor's email app. It does **not** send email from a server or save messages to a database. The visitor sends the email themselves. Clipboard copying includes a manual fallback. WhatsApp opens a chat with the existing contact number.

A server-side email integration can be added later, after choosing an email provider and configuring credentials. Do not place secret keys in browser components.

## Project content

The Academic Timetable Platform, Avenora Foundation website demo, and energy-sharing web/Android prototype are attributed to Shanon Simon Lubega. The illustrations are labelled as such and do not claim to be actual application screenshots. Prototype and demo limitations are retained.

## Verification performed

- Dependency installation completed and generated an npm lockfile.
- TypeScript strict checks passed.
- The Next.js production build passed and prerendered the homepage.
- Generated production HTML contains all three project showcases, unique IDs, valid section links and React script bundles.
- The current review adds Chromium browser coverage and responsive screenshots; see `SHANVEXA_WEBSITE_REVIEW.md` for the latest results and remaining limits.

Official Next.js setup documentation: https://nextjs.org/docs/app/getting-started/installation

## Website review and repeatable checks

See [SHANVEXA_WEBSITE_REVIEW.md](SHANVEXA_WEBSITE_REVIEW.md) for the current implementation review, verification results, limitations, and founder input needed before deployment.

```bash
npm ci
npm run lint
npm run typecheck
npm run build
npx playwright install chromium
npm test
```

Browser tests start the local production server on port 3100. They cover six viewport widths, service selection, contact validation/draft copying, dialogs, FAQ, section links, and metadata routes. They do not send email or WhatsApp messages. Screenshots are written to ignored `test-results/` output. No existing automated tests were present before this review.

`src/lib/site.ts` contains the canonical production URL. Update it if the business adopts a custom domain. The sharing card is generated locally by `src/app/opengraph-image.tsx`; sitemap and robots routes follow the same URL. Do not put private assets, credentials, or real customer records in `public/`.
