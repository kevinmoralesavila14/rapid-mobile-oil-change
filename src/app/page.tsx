import Image from "next/image";
import Link from "next/link";
import { BookingForm } from "@/components/BookingForm";
import { googleReviewUrl, siteConfig } from "@/lib/site";

const trustItems = ["Mobile Service", "Convenient Scheduling", "Professional Care", "No Waiting Rooms"];

const pricingItems = [
  {
    title: "Starting price",
    body: "$80 labor, plus the cost of oil and oil filter."
  },
  {
    title: "Travel fee",
    body: "$10 additional travel fee if the service location is more than 45 minutes from ZIP code 75216."
  },
  {
    title: "Multi-vehicle discount",
    body: "Every additional vehicle is $65 for labor when serviced at the same appointment."
  }
];

const faqs = [
  {
    question: "Do you come to apartments?",
    answer:
      "Yes. Include the apartment name, building number, gate instructions, and parking details so we can confirm access before the appointment."
  },
  {
    question: "What if I do not know my oil type?",
    answer:
      "Select Not sure on the request form. We will review your vehicle information and contact you before confirming the appointment."
  },
  {
    question: "How long does an oil change take?",
    answer:
      "Most appointments are designed to be quick, but timing can vary by vehicle, oil type, location, and filter requirements."
  },
  {
    question: "Is the appointment confirmed after I submit the form?",
    answer: "No. Your request is reviewed first, then we contact you to confirm availability, details, and pricing."
  },
  {
    question: "Do I need to provide anything?",
    answer:
      "You need to provide accurate vehicle information and legal, safe access to the vehicle. We will discuss any specific needs before confirming."
  },
  {
    question: "Do you service fleets?",
    answer:
      "Yes, fleet requests are welcome. Use the booking form notes field to tell us how many vehicles need service."
  },
  {
    question: "How does pricing work?",
    answer:
      "Pricing starts at $80 for labor plus the cost of oil and the oil filter. Locations more than 45 minutes from ZIP code 75216 may have a $10 travel fee."
  },
  {
    question: "Is there a discount for multiple vehicles?",
    answer:
      "Yes. Additional vehicles are $65 for labor when all vehicles are serviced at the same location during the same appointment. Oil and filter costs are separate for each vehicle."
  }
];

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    name: siteConfig.name,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    areaServed: siteConfig.serviceArea,
    url: siteConfig.url,
    description:
      "Mobile oil change service that comes to homes, workplaces, apartment complexes, driveways, and parking lots."
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative overflow-hidden bg-charcoal text-white">
        <div className="absolute inset-0">
          <Image
            src="/mobile-oil-change-hero.png"
            alt="Mobile oil change service at a customer's driveway"
            fill
            priority
            className="object-cover object-center opacity-28 grayscale"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/92 to-charcoal/45" />
        </div>
        <div className="halftone absolute right-0 top-0 h-64 w-[44vw] opacity-80" aria-hidden="true" />
        <div className="halftone-small absolute bottom-0 left-0 h-56 w-80 opacity-70" aria-hidden="true" />
        <div className="torn-red -right-16 bottom-[-7rem] h-72 w-[72rem] rotate-[-7deg] opacity-95" aria-hidden="true" />
        <div className="container relative z-10 grid min-h-[calc(100vh-4rem)] items-center gap-10 py-20 lg:grid-cols-[1fr_0.75fr]">
          <div className="max-w-3xl px-5 sm:px-6 lg:px-8">
            <p className="eyebrow text-white">Mobile oil change service</p>
            <h1 className="mt-5 text-5xl font-black leading-[1.02] text-white sm:text-6xl lg:text-7xl">
              Oil Changes That Come To You
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-100 sm:text-xl">
              Skip the shop. Rapid Mobile Oil Change brings professional oil change service directly to your home,
              workplace, or wherever your vehicle is parked.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/book" className="btn-primary">
                Book Your Oil Change
              </Link>
              <Link href="#how-it-works" className="btn-secondary border-white/35 bg-white/10 text-white hover:bg-white/20">
                How It Works
              </Link>
            </div>
          </div>
          <div className="hidden justify-center px-5 lg:flex lg:px-8">
            <div className="relative">
              <div className="absolute inset-[-1.5rem] rounded-full bg-ember/30 blur-3xl" aria-hidden="true" />
              <Image
                src="/rapid-mobile-oil-change-logo.png"
                alt="Rapid Mobile Oil Change logo"
                width={360}
                height={360}
                className="relative h-80 w-80 rounded-full object-cover shadow-[0_0_48px_rgba(227,23,18,0.48)]"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-charcoal px-5 py-5 sm:px-6 lg:px-8">
        <div className="container grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item) => (
            <div key={item} className="dark-panel px-5 py-4 text-center font-black">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section id="how-it-works" className="section relative overflow-hidden bg-charcoal text-white">
        <div className="torn-red -left-44 top-[-5rem] h-36 w-[48rem] rotate-[4deg] opacity-90" aria-hidden="true" />
        <div className="halftone absolute right-8 top-8 h-72 w-72 opacity-40" aria-hidden="true" />
        <div className="container relative z-10">
          <div className="max-w-2xl">
            <p className="eyebrow text-white">How it works</p>
            <h2 className="mt-3 text-4xl font-black text-white">Your time matters.</h2>
            <p className="mt-4 text-lg leading-8 text-stone-300">
              Instead of driving to a shop and waiting around, request service and keep your day moving.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              ["1", "Request an appointment", "Send your vehicle, location, and preferred time window."],
              ["2", "We come to your location", "Home, workplace, apartment complex, driveway, or parking lot."],
              ["3", "Continue your day", "Your oil change gets handled while you stay focused on life or work."]
            ].map(([number, title, body]) => (
              <article key={title} className="paper-panel p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-ember text-lg font-black text-white">
                  {number}
                </div>
                <h3 className="mt-5 text-xl font-black">{title}</h3>
                <p className="mt-3 leading-7 text-stone-700">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="section relative overflow-hidden bg-paper text-ink">
        <div className="torn-red -right-36 top-[-2rem] h-44 w-[44rem] rotate-[-4deg] opacity-95" aria-hidden="true" />
        <div className="container relative z-10 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="eyebrow">Services</p>
            <h2 className="mt-3 text-4xl font-black text-charcoal">Simple options, confirmed before service.</h2>
            <p className="mt-4 leading-8 text-stone-700">
              Final pricing may depend on vehicle, oil type, filter requirements, mileage, location, and service needs.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {[
              ["Standard oil change", "A convenient request option for routine maintenance."],
              ["Full synthetic oil change", "For vehicles that require or prefer full synthetic oil."],
              ["Fleet oil change request", "For small businesses, routes, crews, or multiple vehicles."]
            ].map(([title, body]) => (
              <article key={title} className="rounded-lg border border-stone-300 bg-white p-6 shadow-soft">
                <h3 className="text-xl font-black">{title}</h3>
                <p className="mt-3 leading-7 text-stone-700">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="section relative overflow-hidden bg-charcoal text-white">
        <div className="halftone absolute right-8 top-8 h-72 w-96 opacity-50" aria-hidden="true" />
        <div className="torn-red -left-48 top-24 h-56 w-[58rem] rotate-[5deg] opacity-95" aria-hidden="true" />
        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow text-white">Pricing</p>
            <h2 className="mt-3 text-4xl font-black text-white sm:text-5xl">Straightforward mobile oil change pricing.</h2>
            <p className="mt-4 text-lg leading-8 text-stone-300">
              Labor starts at $80. Oil, oil filter, vehicle requirements, and confirmed travel details are reviewed
              before the appointment is finalized.
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-5xl gap-5 md:grid-cols-3">
            {pricingItems.map((item) => (
              <article key={item.title} className="rounded-lg border border-white/15 bg-black p-6 shadow-soft">
                <h3 className="text-2xl font-black text-white">{item.title}</h3>
                <p className="mt-4 text-lg font-black leading-8 text-white">{item.body}</p>
              </article>
            ))}
          </div>
          <div className="mx-auto mt-6 max-w-4xl rounded-lg border border-white/15 bg-black p-6 text-center text-lg font-black leading-8 text-white shadow-soft">
            All vehicles must be serviced at the same location and during the same appointment for the multi-vehicle
            labor discount. Oil and filter costs are separate for each vehicle.
          </div>
        </div>
      </section>

      <section className="section relative overflow-hidden bg-charcoal text-white">
        <div className="halftone absolute bottom-0 right-0 h-80 w-[32rem] opacity-50" aria-hidden="true" />
        <div className="container relative z-10 grid gap-8 md:grid-cols-2">
          <div>
            <p className="eyebrow text-white">Why choose us</p>
            <h2 className="mt-3 text-4xl font-black">A cleaner way to handle oil changes.</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Saves time",
              "No shop waiting",
              "Works around your schedule",
              "Great for busy people, parents, professionals, and small businesses"
            ].map((item) => (
              <div key={item} className="rounded-lg border border-white/15 bg-white/[0.08] p-5 font-bold leading-7">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="section relative overflow-hidden bg-paper text-ink">
        <div className="torn-red -right-48 top-[-3rem] h-48 w-[52rem] rotate-[-4deg] opacity-90" aria-hidden="true" />
        <div className="container relative z-10 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="eyebrow">Reviews</p>
            <h2 className="mt-3 text-4xl font-black text-charcoal">Your feedback helps local drivers find us.</h2>
            <p className="mt-4 leading-8 text-stone-700">
              We keep the service simple: show up where the vehicle is parked, handle the oil change, and help you get
              time back in your day.
            </p>
          </div>
          <div className="rounded-lg border border-stone-300 bg-white p-6 text-center shadow-soft">
            <p className="text-xl font-black leading-8 text-charcoal">
              Had a great experience? Leave us a quick Google review.
            </p>
            <a
              href={googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-5 w-full sm:w-auto"
            >
              Leave a Google Review
            </a>
          </div>
        </div>
      </section>

      <section id="booking" className="section relative overflow-hidden bg-paper text-ink">
        <div className="torn-red -left-52 bottom-[-3rem] h-52 w-[54rem] rotate-[5deg] opacity-90" aria-hidden="true" />
        <div className="container relative z-10 grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="eyebrow">Request service</p>
            <h2 className="mt-3 text-4xl font-black text-charcoal">Book your mobile oil change request.</h2>
            <p className="mt-4 leading-8 text-stone-700">
              Tell us about your vehicle and where it is parked. We will review the request and contact you to confirm
              the appointment and final details.
            </p>
            <div className="mt-6 rounded-lg border border-ember/35 bg-white p-5 text-sm font-bold leading-6 text-stone-800 shadow-soft">
              Appointment requests are not confirmed until you are contacted. Service depends on safe, legal access to
              the vehicle and suitable weather or parking conditions.
            </div>
          </div>
          <BookingForm compact />
        </div>
      </section>

      <section id="faq" className="section relative overflow-hidden bg-charcoal text-white">
        <div className="halftone-small absolute bottom-0 left-0 h-72 w-80 opacity-55" aria-hidden="true" />
        <div className="container relative z-10">
          <p className="eyebrow text-white">FAQ</p>
          <h2 className="mt-3 text-4xl font-black text-white">Common questions</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {faqs.map((faq) => (
              <details key={faq.question} className="paper-panel p-5">
                <summary className="cursor-pointer text-lg font-black">{faq.question}</summary>
                <p className="mt-3 leading-7 text-stone-700">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
