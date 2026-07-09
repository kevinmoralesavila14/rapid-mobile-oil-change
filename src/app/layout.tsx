import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";
import { googleReviewUrl, siteConfig, socialLinks } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Rapid Mobile Oil Change | Oil Changes That Come To You",
    template: "%s | Rapid Mobile Oil Change"
  },
  description:
    "Skip the shop. Rapid Mobile Oil Change brings professional oil change service directly to your home, workplace, apartment, or wherever your vehicle is parked.",
  openGraph: {
    title: "Rapid Mobile Oil Change | Oil Changes That Come To You",
    description:
      "Mobile oil change service for your home, workplace, apartment, driveway, parking lot, or fleet location.",
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [{ url: "/rapid-mobile-oil-change-logo.png", width: 1024, height: 1024, alt: "Rapid Mobile Oil Change logo" }],
    locale: "en_US",
    type: "website"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <header className="sticky top-0 z-40 border-b border-white/10 bg-charcoal/95 text-white backdrop-blur">
          <nav className="container flex min-h-16 items-center justify-between gap-4">
            <Link href="/" className="flex min-w-0 items-center gap-3 text-white">
              <Image
                src="/rapid-mobile-oil-change-logo.png"
                alt=""
                width={44}
                height={44}
                className="h-11 w-11 shrink-0 rounded-full object-cover shadow-[0_0_24px_rgba(227,23,18,0.38)]"
              />
              <span className="hidden text-lg font-black leading-tight sm:block">Rapid Mobile Oil Change</span>
              <span className="sr-only">Rapid Mobile Oil Change</span>
            </Link>
            <div className="hidden items-center gap-6 text-sm font-bold text-stone-300 md:flex">
              <Link href="/#how-it-works" className="hover:text-white">
                How It Works
              </Link>
              <Link href="/#services" className="hover:text-white">
                Services
              </Link>
              <Link href="/#pricing" className="hover:text-white">
                Pricing
              </Link>
              <Link href="/#faq" className="hover:text-white">
                FAQ
              </Link>
            </div>
            <Link href="/book" className="btn-primary min-h-10 px-4 py-2 text-sm">
              Book Your Oil Change
            </Link>
          </nav>
        </header>
        {children}
        <footer className="relative overflow-hidden bg-charcoal px-5 py-10 text-white sm:px-6 lg:px-8">
          <div className="halftone-small absolute -bottom-20 left-0 h-48 w-80 opacity-45" aria-hidden="true" />
          <div className="absolute right-0 top-0 h-2 w-full bg-ember" aria-hidden="true" />
          <div className="container relative z-10 grid gap-8 md:grid-cols-[1.25fr_0.9fr_1fr_0.8fr]">
            <div>
              <div className="flex items-center gap-4">
                <Image
                  src="/rapid-mobile-oil-change-logo.png"
                  alt="Rapid Mobile Oil Change logo"
                  width={76}
                  height={76}
                  className="h-20 w-20 rounded-full object-cover shadow-[0_0_32px_rgba(227,23,18,0.45)]"
                />
                <p className="text-xl font-black">{siteConfig.name}</p>
              </div>
              <p className="mt-3 max-w-md text-sm leading-6 text-stone-300">
                Mobile oil change requests for homes, workplaces, apartment complexes, parking lots, and fleet
                locations. Appointments are confirmed after review.
              </p>
            </div>
            <div className="text-sm leading-7 text-stone-300">
              <p className="font-bold text-white">Contact</p>
              <p>{siteConfig.phone}</p>
              <p>{siteConfig.email}</p>
              <p>{siteConfig.serviceArea}</p>
            </div>
            <div>
              <p className="font-bold text-white">Follow Us</p>
              <div className="mt-3 grid gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-12 items-center gap-3 rounded-lg border border-white/15 bg-white/[0.06] px-4 py-3 text-sm font-black text-white transition hover:border-ember hover:bg-ember/20 focus:outline-none focus:ring-4 focus:ring-ember/30"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-ember text-xs font-black text-white">
                      {link.shortLabel}
                    </span>
                    <span>{link.label}</span>
                  </a>
                ))}
              </div>
              <div className="mt-5 rounded-lg border border-white/15 bg-black p-4">
                <p className="text-sm font-bold leading-6 text-stone-200">
                  Had a great experience? Leave us a quick Google review.
                </p>
                <a
                  href={googleReviewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-ember px-4 py-3 text-center text-sm font-black text-white transition hover:bg-[#b90f0b] focus:outline-none focus:ring-4 focus:ring-ember/30"
                >
                  Leave a Google Review
                </a>
              </div>
            </div>
            <div className="text-sm leading-7 text-stone-300">
              <p className="font-bold text-white">Links</p>
              <Link href="/privacy" className="block hover:text-amber">
                Privacy Policy
              </Link>
              <Link href="/terms" className="block hover:text-amber">
                Terms / Disclaimer
              </Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
