# Ravi Chandera Personal Site

Personal portfolio and blog built with Next.js.

Live site: [ravi-chandera-personal.vercel.app](https://ravi-chandera-personal.vercel.app)

## Stack

- Next.js 16
- React 19
- App Router
- Vercel

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production Build

```bash
npm run build
npm start
```

## Project Notes

- Main portfolio page lives in `app/page.js`
- Blog index lives in `app/blog/page.js`
- Blog post pages live in `app/blog/[slug]/page.js`
- Interactive background lives in `components/constellation-background.js`

## Deployment

This repo is configured for Vercel with `vercel.json` using the Next.js framework preset.
