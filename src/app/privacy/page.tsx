import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Rapid Mobile Oil Change booking requests."
};

export default function PrivacyPage() {
  return (
    <main className="section relative overflow-hidden bg-charcoal">
      <div className="halftone absolute right-0 top-0 h-72 w-96 opacity-45" aria-hidden="true" />
      <div className="torn-red -left-48 bottom-[-4rem] h-52 w-[52rem] rotate-[5deg] opacity-90" aria-hidden="true" />
      <article className="container relative z-10 max-w-3xl rounded-lg border border-stone-200 bg-white p-6 text-ink shadow-soft sm:p-10">
        <p className="eyebrow">Privacy Policy</p>
        <h1 className="mt-3 text-4xl font-black text-charcoal">Privacy Policy</h1>
        <div className="mt-6 space-y-6 leading-8 text-stone-700">
          <p>
            {siteConfig.name} collects information submitted through the booking request form so we can review service
            requests, contact customers, and confirm appointment details.
          </p>
          <section>
            <h2 className="text-2xl font-black text-charcoal">Information We Collect</h2>
            <p className="mt-2">
              We may collect your name, phone number, email address, vehicle details, service address, requested date and
              time window, and notes you choose to provide.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-black text-charcoal">How We Use Information</h2>
            <p className="mt-2">
              Contact information may be used to respond to your request, confirm appointment availability, discuss
              pricing, and coordinate service.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-black text-charcoal">Sharing</h2>
            <p className="mt-2">
              Customer information is not sold. Information may be used only as needed to operate the service, comply
              with legal obligations, or protect the business and customers.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-black text-charcoal">Deletion Requests</h2>
            <p className="mt-2">
              Customers can request deletion of their information by contacting {siteConfig.email}. Some records may need
              to be retained when required for business, legal, or safety reasons.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
