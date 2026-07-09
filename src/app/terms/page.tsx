import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Disclaimer",
  description: "Terms and service disclaimers for Rapid Mobile Oil Change."
};

export default function TermsPage() {
  return (
    <main className="section relative overflow-hidden bg-charcoal">
      <div className="halftone absolute right-0 top-0 h-72 w-96 opacity-45" aria-hidden="true" />
      <div className="torn-red -left-48 bottom-[-4rem] h-52 w-[52rem] rotate-[5deg] opacity-90" aria-hidden="true" />
      <article className="container relative z-10 max-w-3xl rounded-lg border border-stone-200 bg-white p-6 text-ink shadow-soft sm:p-10">
        <p className="eyebrow">Terms / Disclaimer</p>
        <h1 className="mt-3 text-4xl font-black text-charcoal">Terms and Disclaimer</h1>
        <div className="mt-6 space-y-6 leading-8 text-stone-700">
          <section>
            <h2 className="text-2xl font-black text-charcoal">Appointment Requests</h2>
            <p className="mt-2">
              Submitting a request does not guarantee appointment confirmation. Appointments are confirmed only after the
              business reviews the request and contacts the customer.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-black text-charcoal">Pricing</h2>
            <p className="mt-2">
              Final price may vary based on vehicle, oil type, filter requirements, mileage, location, and other service
              requirements. Pricing should be confirmed before service begins.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-black text-charcoal">Vehicle Access</h2>
            <p className="mt-2">
              Customers must provide accurate vehicle information and legal, safe access to the vehicle at the requested
              service location.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-black text-charcoal">Service Conditions</h2>
            <p className="mt-2">
              Service may be declined, delayed, or rescheduled if the location is unsafe, the vehicle is inaccessible,
              weather is severe, or the requested job is outside the current business scope.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-black text-charcoal">Customer Responsibility</h2>
            <p className="mt-2">
              Customers are responsible for providing accurate contact, location, and vehicle details. Inaccurate
              information may affect availability, pricing, or whether service can be completed.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
