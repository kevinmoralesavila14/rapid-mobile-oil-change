"use client";

import { useMemo, useState } from "react";
import { timeWindows } from "@/lib/site";

type FieldErrors = Record<string, string[]>;

type BookingFormProps = {
  compact?: boolean;
};

const initialValues = {
  fullName: "",
  phone: "",
  email: "",
  vehicleYear: "",
  vehicleMake: "",
  vehicleModel: "",
  mileage: "",
  oilType: "NOT_SURE",
  serviceAddress: "",
  preferredDate: "",
  preferredTimeWindow: "",
  notes: "",
  consent: false,
  website: ""
};

export function BookingForm({ compact = false }: BookingFormProps) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const today = useMemo(() => new Date().toISOString().split("T")[0], []);

  function updateField(name: string, value: string | boolean) {
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => {
      if (!current[name]) return current;
      const next = { ...current };
      delete next[name];
      return next;
    });
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setMessage("");
    setIsSuccess(false);

    const response = await fetch("/api/bookings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...values,
        consent: values.consent ? "on" : undefined
      })
    });

    const result = await response.json();

    setIsSubmitting(false);

    if (!response.ok) {
      setErrors(result.fieldErrors || {});
      setMessage(result.message || "Please review the highlighted fields.");
      return;
    }

    setValues(initialValues);
    setErrors({});
    setIsSuccess(true);
    setMessage("Request received. We will review your details and contact you to confirm availability.");
  }

  const formClass = compact
    ? "rounded-lg border border-stone-200 bg-white p-5 shadow-soft sm:p-7"
    : "rounded-lg border border-stone-200 bg-white p-5 shadow-soft sm:p-8";

  return (
    <form className={formClass} onSubmit={handleSubmit} noValidate>
      <div aria-hidden="true" className="hidden">
        <label>
          Website
          <input
            name="website"
            value={values.website}
            onChange={(event) => updateField("website", event.target.value)}
            tabIndex={-1}
            autoComplete="off"
          />
        </label>
      </div>

      {message ? (
        <div
          role="status"
          className={`mb-5 rounded-lg border p-4 text-sm font-bold leading-6 ${
            isSuccess ? "border-green-300 bg-green-50 text-green-800" : "border-red-300 bg-red-50 text-red-800"
          }`}
        >
          {message}
        </div>
      ) : null}

      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Full name" name="fullName" errors={errors}>
          <input
            className="field"
            name="fullName"
            autoComplete="name"
            value={values.fullName}
            onChange={(event) => updateField("fullName", event.target.value)}
          />
        </Field>

        <Field label="Phone number" name="phone" errors={errors}>
          <input
            className="field"
            name="phone"
            autoComplete="tel"
            inputMode="tel"
            value={values.phone}
            onChange={(event) => updateField("phone", event.target.value)}
          />
        </Field>

        <Field label="Email address" name="email" errors={errors}>
          <input
            className="field"
            type="email"
            name="email"
            autoComplete="email"
            value={values.email}
            onChange={(event) => updateField("email", event.target.value)}
          />
        </Field>

        <Field label="Vehicle year" name="vehicleYear" errors={errors}>
          <input
            className="field"
            name="vehicleYear"
            inputMode="numeric"
            placeholder="2021"
            value={values.vehicleYear}
            onChange={(event) => updateField("vehicleYear", event.target.value)}
          />
        </Field>

        <Field label="Vehicle make" name="vehicleMake" errors={errors}>
          <input
            className="field"
            name="vehicleMake"
            placeholder="Toyota"
            value={values.vehicleMake}
            onChange={(event) => updateField("vehicleMake", event.target.value)}
          />
        </Field>

        <Field label="Vehicle model" name="vehicleModel" errors={errors}>
          <input
            className="field"
            name="vehicleModel"
            placeholder="Camry"
            value={values.vehicleModel}
            onChange={(event) => updateField("vehicleModel", event.target.value)}
          />
        </Field>

        <Field label="Vehicle mileage" name="mileage" errors={errors}>
          <input
            className="field"
            name="mileage"
            placeholder="74,000 or not sure"
            value={values.mileage}
            onChange={(event) => updateField("mileage", event.target.value)}
          />
        </Field>

        <Field label="Oil type preference" name="oilType" errors={errors}>
          <select className="field" name="oilType" value={values.oilType} onChange={(event) => updateField("oilType", event.target.value)}>
            <option value="CONVENTIONAL">Conventional</option>
            <option value="SYNTHETIC_BLEND">Synthetic blend</option>
            <option value="FULL_SYNTHETIC">Full synthetic</option>
            <option value="NOT_SURE">Not sure</option>
          </select>
        </Field>

        <Field label="Preferred date" name="preferredDate" errors={errors}>
          <input
            className="field"
            type="date"
            name="preferredDate"
            min={today}
            value={values.preferredDate}
            onChange={(event) => updateField("preferredDate", event.target.value)}
          />
        </Field>

        <Field label="Preferred time window" name="preferredTimeWindow" errors={errors}>
          <select
            className="field"
            name="preferredTimeWindow"
            value={values.preferredTimeWindow}
            onChange={(event) => updateField("preferredTimeWindow", event.target.value)}
          >
            <option value="">Choose a time window</option>
            {timeWindows.map((window) => (
              <option key={window} value={window}>
                {window}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Service location/address" name="serviceAddress" errors={errors} wide>
          <input
            className="field"
            name="serviceAddress"
            placeholder="Street address, apartment/suite, parking notes"
            value={values.serviceAddress}
            onChange={(event) => updateField("serviceAddress", event.target.value)}
          />
        </Field>

        <Field label="Additional notes" name="notes" errors={errors} wide>
          <textarea
            className="field min-h-32 resize-y"
            name="notes"
            maxLength={500}
            placeholder="Fleet details, gate code, workplace instructions, same-day request, or anything we should know."
            value={values.notes}
            onChange={(event) => updateField("notes", event.target.value)}
          />
          <p className="mt-1 text-xs text-stone-500">{values.notes.length}/500 characters</p>
        </Field>
      </div>

      <div className="mt-5">
        <label className="flex gap-3 rounded-lg border border-stone-200 bg-paper p-4 text-sm font-medium leading-6">
          <input
            type="checkbox"
            className="mt-1 h-5 w-5 shrink-0 accent-ember"
            checked={values.consent}
            onChange={(event) => updateField("consent", event.target.checked)}
          />
          <span>
            I understand this is a request and my appointment is not confirmed until Rapid Mobile Oil Change contacts
            me.
          </span>
        </label>
        {errors.consent ? <p className="field-error">{errors.consent[0]}</p> : null}
      </div>

      <button className="btn-primary mt-6 w-full" type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Sending request..." : "Submit Booking Request"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  errors,
  children,
  wide = false
}: {
  label: string;
  name: string;
  errors: FieldErrors;
  children: React.ReactNode;
  wide?: boolean;
}) {
  return (
    <label className={wide ? "md:col-span-2" : ""}>
      <span className="mb-2 block text-sm font-black text-charcoal">{label}</span>
      {children}
      {errors[name] ? <p className="field-error">{errors[name][0]}</p> : null}
    </label>
  );
}
