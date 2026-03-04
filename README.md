# Abdul Rehman Portfolio (Next.js)

Professional animated portfolio built with **Next.js App Router**, **Tailwind CSS**, and **Framer Motion**.

## Local preview before deploy

```bash
npm install
npm run dev
```

Open: `http://localhost:3000`

## Production build check

```bash
npm run build
npm run start
```

## Netlify deployment (stable setup)

This repo includes:
- `netlify.toml`
- Next.js Netlify plugin configuration
- Node version pin (`.nvmrc` = 20)

### Deploy steps
1. Push this repository to GitHub.
2. Create a Netlify site from the repo.
3. Ensure build settings are:
   - Build command: `npm run build`
   - Publish directory: leave default for Next.js (plugin handles output)
4. Deploy.

## CV download button

The hero button points to:

`/cv/Abdul-Rehman-CV.pdf`

Place your actual resume file at:

`public/cv/Abdul-Rehman-CV.pdf`

A placeholder note currently exists at `public/cv/README.txt`.
