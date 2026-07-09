# Rapid Mobile Oil Change

A simple, mobile-first lead generation website for a mobile oil change business. It includes a marketing homepage, booking request form, local SQLite database, Prisma model, password-protected admin dashboard, privacy policy, terms/disclaimer, and basic local SEO.

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Prisma ORM
- SQLite for local development
- Zod validation

## Local Setup

1. Install dependencies:

```bash
npm install
```

2. Create your environment file:

```bash
cp .env.example .env
```

3. Update `.env`:

```env
DATABASE_URL="file:./dev.db"
ADMIN_PASSWORD="set_a_secure_admin_password"
NEXT_PUBLIC_SITE_URL="http://localhost:3000"
NEXT_PUBLIC_BUSINESS_PHONE="+1 (469) 600-3360"
NEXT_PUBLIC_BUSINESS_EMAIL="rapidmobileoilchange01@gmail.com"
NEXT_PUBLIC_SERVICE_AREA="Dallas/Fort Worth"
```

4. Create the database:

```bash
npm run db:migrate
```

5. Start the site:

```bash
npm run dev
```

Open `http://localhost:3000`.

## Admin Dashboard

Go to `http://localhost:3000/admin` and enter the `ADMIN_PASSWORD` from `.env`.

The admin dashboard lets the business owner:

- View booking requests newest first
- See customer, vehicle, location, date, and notes
- Mark requests as New, Contacted, Confirmed, Completed, or Cancelled
- Delete test or spam requests

## Booking Form

The booking form validates:

- Required contact and vehicle information
- Email and phone format
- Preferred date cannot be in the past
- Notes length
- Required consent checkbox
- Basic duplicate request detection
- Basic spam honeypot field

## SEO

Included:

- Page metadata
- Open Graph metadata
- Semantic page structure
- LocalBusiness JSON-LD on the homepage
- `robots.txt` via `src/app/robots.ts`
- `sitemap.xml` via `src/app/sitemap.ts`
- Local mobile oil change keywords in natural page copy

Before launch, replace the website URL with the real domain.

## Deployment Notes

This project is ready for Vercel as a Next.js app. Before a real production launch:

- Set `ADMIN_PASSWORD` in Vercel environment variables
- Set `NEXT_PUBLIC_SITE_URL` to the real domain
- Confirm phone, email, service area, and pricing are still accurate
- Keep certification, insurance, or review claims off the site unless proof is available

## PostgreSQL Later

SQLite is used locally for simplicity. To move to PostgreSQL later:

1. Create a database with a provider such as Supabase, Neon, or Railway.
2. Change `provider = "sqlite"` to `provider = "postgresql"` in `prisma/schema.prisma`.
3. Set `DATABASE_URL` to the hosted PostgreSQL connection string.
4. Run a Prisma migration against the production database.

## Launch Checklist

- Homepage loads correctly
- Mobile design is easy to use
- Booking form submits and validates
- Requests save to the database
- Admin dashboard displays requests
- Admin status updates work
- Admin delete works
- Privacy Policy and Terms pages exist
- SEO metadata is present
- Business details are accurate
- No fake claims are included
