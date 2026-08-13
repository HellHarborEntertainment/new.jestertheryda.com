# new.jestertheryda.com

The soft-launch home of the redesigned JesterTheRyda Funhouse.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm ci
npm run lint
npm run build
```

The site exports to `out/` and deploys to GitHub Pages from `main` through GitHub Actions. The custom domain is declared in `public/CNAME`.

Vampiress is intentionally not distributed with this repository. The current CSS preserves a dedicated `Vampiress` font-family slot and uses a system fallback until a compliant flattened wordmark or separately licensed webfont delivery method is available.
