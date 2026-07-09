import type { Metadata } from "next";
import { BookingForm } from "@/components/BookingForm";

export const metadata: Metadata = {
  title: "Book a Mobile Oil Change",
  description:
    "Request a mobile oil change at your home, workplace, apartment, driveway, parking lot, or fleet location."
};

export default function BookingPage() {
  return (
    <main className="section relative overflow-hidden bg-charcoal text-white">
      <div className="halftone absolute right-0 top-0 h-72 w-96 opacity-45" aria-hidden="true" />
      <div className="torn-red -left-48 bottom-[-4rem] h-52 w-[52rem] rotate-[5deg] opacity-90" aria-hidden="true" />
      <div className="container relative z-10 max-w-4xl">
        <div className="mb-8 max-w-2xl">
          <p className="eyebrow text-white">Booking request</p>
          <h1 className="mt-3 text-4xl font-black text-white sm:text-5xl">Book Your Oil Change</h1>
          <p className="mt-4 text-lg leading-8 text-stone-300">
            Share your contact, vehicle, location, and preferred time. We will review your request and contact you to
            confirm availability and final pricing.
          </p>
        </div>
        <div className="mb-8 grid gap-4 rounded-lg border border-white/15 bg-black p-5 shadow-soft md:grid-cols-3">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.14em] text-ember">Starts at</p>
            <p className="mt-2 text-xl font-black text-white">$80 labor</p>
            <p className="mt-1 text-sm leading-6 text-stone-300">Plus oil and oil filter.</p>
          </div>
          <div>
            <p className="text-sm font-black uppercase tracking-[0.14em] text-ember">Travel fee</p>
            <p className="mt-2 text-xl font-black text-white">$10 if applicable</p>
            <p className="mt-1 text-sm leading-6 text-stone-300">For locations over 45 minutes from ZIP 75216.</p>
          </div>
          <div>
            <p className="text-sm font-black uppercase tracking-[0.14em] text-ember">Multi-vehicle</p>
            <p className="mt-2 text-xl font-black text-white">$65 labor</p>
            <p className="mt-1 text-sm leading-6 text-stone-300">For each additional vehicle at the same appointment.</p>
          </div>
        </div>
        <BookingForm />
      </div>
    </main>
  );
}
