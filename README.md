# METE Learning

A skill-tree learning app for metallurgical & materials engineering.
Learn topics as short lessons, earn XP, level up and rank up skills from **Learned** to **Mastered**.

## Development
```bash
npm install
npm run dev     # start the dev server
npm test        # check content data integrity
npm run build   # production build
```

## Content
All lesson content is plain data in `src/content/`. See `CLAUDE.md` for the formats.

## Deployment
Every push to `main` runs the tests, builds the app and publishes it to GitHub Pages
(`.github/workflows/deploy.yml`). One-time setup: repository Settings → Pages → Source: **GitHub Actions**.
