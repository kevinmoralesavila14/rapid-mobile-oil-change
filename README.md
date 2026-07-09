# Rapid Mobile Oil Change

A simple, mobile-first lead generation website for a mobile oil change business. This version is prepared for static export on Cloudflare Pages.

It includes a homepage, booking request page, privacy policy, terms/disclaimer, local SEO metadata, social links, Google review links, and a static booking form that opens a pre-filled email request.

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Zod validation
- Static export with `output: "export"`

## Local Setup

1. Install dependencies:

```bash
npm install
```

2. Create your environment file:

```bash
cp .env.example .env
```

3. Update `.env` if needed:

```env
NEXT_PUBLIC_SITE_URL="http://localhost:3000"
NEXT_PUBLIC_BUSINESS_PHONE="+1 (469) 600-3360"
NEXT_PUBLIC_BUSINESS_EMAIL="rapidmobileoilchange01@gmail.com"
NEXT_PUBLIC_SERVICE_AREA="Dallas/Fort Worth"
```

4. Start the site:

```bash
npm run dev
```

Open `http://localhost:3000`.

## Static Booking Form

The booking form validates required customer, vehicle, location, date, and consent fields in the browser. When the request is valid, it opens a pre-filled email to Rapid Mobile Oil Change.

This static Cloudflare Pages version does not save requests to a database and does not include a live admin dashboard. To store requests later, connect the form to a form service, Cloudflare Worker, CRM, email API, or a server-backed deployment.

## Build

Create the static export:

```bash
npm run build
```

The exported site is generated in:

```bash
out
```

## Cloudflare Pages Deployment

Use these Cloudflare Pages settings:

- Framework preset: `Next.js (Static HTML Export)`
- Build command: `npm run build`
- Build output directory: `out`
- Root directory: leave blank

If Cloudflare shows a build command like `bunx opennextjs-cloudflare build`, the project is using the full-stack Next.js adapter instead of the static export preset. Change the Pages build settings to the values above so Cloudflare runs the normal static build and uploads the `out` folder.

Add environment variables in Cloudflare Pages if you want production values:

```env
NEXT_PUBLIC_SITE_URL="https://your-domain.com"
NEXT_PUBLIC_BUSINESS_PHONE="+1 (469) 600-3360"
NEXT_PUBLIC_BUSINESS_EMAIL="rapidmobileoilchange01@gmail.com"
NEXT_PUBLIC_SERVICE_AREA="Dallas/Fort Worth"
```

Before launch, set `NEXT_PUBLIC_SITE_URL` to the real domain so Open Graph metadata, JSON-LD, `robots.txt`, and `sitemap.xml` use the correct URL.

## SEO

Included:

- Page metadata
- Open Graph metadata
- Semantic page structure
- LocalBusiness JSON-LD on the homepage
- `robots.txt` via `src/app/robots.ts`
- `sitemap.xml` via `src/app/sitemap.ts`
- Local mobile oil change keywords in natural page copy

## Launch Checklist

- Homepage loads correctly
- Mobile design is easy to use
- Booking form validates and opens a pre-filled email
- Privacy Policy and Terms pages exist
- SEO metadata is present
- Business phone, email, service area, and pricing are accurate
- No fake claims are included
