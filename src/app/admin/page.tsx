import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Admin Dashboard Disabled",
  description: "Admin dashboard is disabled for the static Cloudflare Pages version.",
  robots: { index: false, follow: false }
};

export default function AdminPage() {
  return (
    <main className="section relative min-h-[70vh] overflow-hidden bg-charcoal text-white">
      <div className="halftone absolute right-0 top-0 h-72 w-96 opacity-45" aria-hidden="true" />
      <div className="torn-red -left-48 bottom-[-4rem] h-52 w-[52rem] rotate-[5deg] opacity-90" aria-hidden="true" />
      <div className="container relative z-10 max-w-2xl">
        <div className="rounded-lg border border-stone-200 bg-white p-6 text-charcoal shadow-soft sm:p-8">
          <p className="eyebrow">Static deployment</p>
          <h1 className="mt-3 text-4xl font-black text-charcoal">Admin Dashboard Disabled</h1>
          <p className="mt-4 leading-8 text-stone-700">
            This Cloudflare Pages version is exported as a static website, so database-backed booking storage and admin
            management are turned off for now.
          </p>
          <p className="mt-4 leading-8 text-stone-700">
            Booking requests now open a pre-filled email to Rapid Mobile Oil Change. A database and protected admin
            dashboard can be added later with a server-backed deployment or Cloudflare Workers.
          </p>
          <Link href="/book" className="btn-primary mt-6">
            Go To Booking Form
          </Link>
        </div>
      </div>
    </main>
  );
}
