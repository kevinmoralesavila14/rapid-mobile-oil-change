import type { Metadata } from "next";
import { deleteBookingRequest, isAdminAuthorized, loginAdmin, logoutAdmin, updateBookingStatus } from "./actions";
import { prisma } from "@/lib/prisma";
import { bookingStatuses, oilTypeLabels, statusLabels, type BookingStatusValue, type OilTypeValue } from "@/lib/site";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Manage Rapid Mobile Oil Change booking requests.",
  robots: { index: false, follow: false }
};

export default async function AdminPage({ searchParams }: { searchParams?: Promise<{ error?: string }> }) {
  const params = await searchParams;
  const authorized = await isAdminAuthorized();

  if (!authorized) {
    return (
      <main className="section relative min-h-[70vh] overflow-hidden bg-charcoal">
        <div className="halftone absolute right-0 top-0 h-72 w-96 opacity-45" aria-hidden="true" />
        <div className="torn-red -left-48 bottom-[-4rem] h-52 w-[52rem] rotate-[5deg] opacity-90" aria-hidden="true" />
        <div className="container relative z-10 max-w-md">
          <div className="rounded-lg border border-stone-200 bg-white p-6 shadow-soft">
            <p className="eyebrow">Admin</p>
            <h1 className="mt-3 text-3xl font-black text-charcoal">Dashboard Login</h1>
            <p className="mt-3 text-sm leading-6 text-stone-700">
              Enter the admin password from your environment settings.
            </p>
            {params?.error ? (
              <p className="mt-4 rounded-lg border border-red-300 bg-red-50 p-3 text-sm font-bold text-red-800">
                Incorrect password. Please try again.
              </p>
            ) : null}
            <form action={loginAdmin} className="mt-5 space-y-4">
              <label>
                <span className="mb-2 block text-sm font-black">Admin password</span>
                <input className="field" type="password" name="password" autoComplete="current-password" required />
              </label>
              <button className="btn-primary w-full" type="submit">
                Open Dashboard
              </button>
            </form>
          </div>
        </div>
      </main>
    );
  }

  const requests = await prisma.bookingRequest.findMany({
    orderBy: { createdAt: "desc" }
  });

  return (
    <main className="section relative overflow-hidden bg-paper text-ink">
      <div className="torn-red -right-48 top-[-3rem] h-48 w-[52rem] rotate-[-4deg] opacity-90" aria-hidden="true" />
      <div className="container relative z-10">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">Admin dashboard</p>
            <h1 className="mt-3 text-4xl font-black text-charcoal">Booking Requests</h1>
            <p className="mt-3 text-stone-700">{requests.length} request{requests.length === 1 ? "" : "s"} found.</p>
          </div>
          <form action={logoutAdmin}>
            <button className="btn-secondary" type="submit">
              Log Out
            </button>
          </form>
        </div>

        {requests.length === 0 ? (
          <div className="rounded-lg border border-stone-200 bg-white p-8 text-center shadow-soft">
            <h2 className="text-2xl font-black text-charcoal">No booking requests yet</h2>
            <p className="mt-3 text-stone-700">New customer requests will appear here newest first.</p>
          </div>
        ) : (
          <div className="grid gap-5">
            {requests.map((request) => (
              <article key={request.id} className="rounded-lg border border-stone-200 bg-white p-5 shadow-soft">
                <div className="grid gap-5 lg:grid-cols-[1fr_1fr_0.7fr]">
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h2 className="text-2xl font-black text-charcoal">{request.fullName}</h2>
                      <span className="rounded-full bg-amber/20 px-3 py-1 text-xs font-black uppercase text-stone-800">
                        {statusLabels[request.status as BookingStatusValue] || request.status}
                      </span>
                    </div>
                    <dl className="mt-4 grid gap-2 text-sm leading-6 text-stone-700">
                      <Info label="Phone" value={request.phone} />
                      <Info label="Email" value={request.email} />
                      <Info label="Address" value={request.serviceAddress} />
                    </dl>
                  </div>

                  <div>
                    <h3 className="text-sm font-black uppercase tracking-[0.14em] text-stone-500">Vehicle</h3>
                    <dl className="mt-4 grid gap-2 text-sm leading-6 text-stone-700">
                      <Info
                        label="Vehicle"
                        value={`${request.vehicleYear} ${request.vehicleMake} ${request.vehicleModel}`}
                      />
                      <Info label="Mileage" value={request.mileage} />
                      <Info label="Oil type" value={oilTypeLabels[request.oilType as OilTypeValue] || request.oilType} />
                      <Info label="Requested" value={`${formatDate(request.preferredDate)} - ${request.preferredTimeWindow}`} />
                      <Info label="Submitted" value={formatDateTime(request.createdAt)} />
                    </dl>
                  </div>

                  <div className="space-y-4">
                    <form action={updateBookingStatus} className="space-y-3">
                      <input type="hidden" name="id" value={request.id} />
                      <label>
                        <span className="mb-2 block text-sm font-black">Status</span>
                        <select className="field" name="status" defaultValue={request.status}>
                          {bookingStatuses.map((status) => (
                            <option key={status} value={status}>
                              {statusLabels[status]}
                            </option>
                          ))}
                        </select>
                      </label>
                      <button className="btn-primary w-full" type="submit">
                        Update
                      </button>
                    </form>
                    <form action={deleteBookingRequest}>
                      <input type="hidden" name="id" value={request.id} />
                      <button
                        className="w-full rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm font-black text-red-800 transition hover:bg-red-100"
                        type="submit"
                      >
                        Delete Request
                      </button>
                    </form>
                  </div>
                </div>

                {request.notes ? (
                  <div className="mt-5 rounded-lg border border-stone-200 bg-paper p-4">
                    <h3 className="text-sm font-black uppercase tracking-[0.14em] text-stone-500">Notes</h3>
                    <p className="mt-2 whitespace-pre-wrap text-sm leading-6 text-stone-700">{request.notes}</p>
                  </div>
                ) : null}
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="font-black text-charcoal">{label}</dt>
      <dd>{value}</dd>
    </div>
  );
}

function formatDate(date: Date) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
  }).format(date);
}

function formatDateTime(date: Date) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit"
  }).format(date);
}
