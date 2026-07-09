import { z } from "zod";

const todayAtMidnight = () => {
  const date = new Date();
  date.setHours(0, 0, 0, 0);
  return date;
};

export const bookingSchema = z.object({
  fullName: z.string().trim().min(2, "Enter your full name.").max(80, "Name is too long."),
  phone: z
    .string()
    .trim()
    .regex(/^[0-9()+\-\s.]{7,20}$/, "Enter a valid phone number."),
  email: z.string().trim().email("Enter a valid email address.").max(120, "Email is too long."),
  vehicleYear: z.coerce
    .number({ invalid_type_error: "Enter your vehicle year." })
    .int("Vehicle year must be a whole number.")
    .min(1950, "Enter a valid vehicle year.")
    .max(new Date().getFullYear() + 1, "Enter a valid vehicle year."),
  vehicleMake: z.string().trim().min(2, "Enter your vehicle make.").max(60, "Vehicle make is too long."),
  vehicleModel: z.string().trim().min(1, "Enter your vehicle model.").max(60, "Vehicle model is too long."),
  mileage: z.string().trim().min(1, "Enter mileage or write 'not sure'.").max(30, "Mileage is too long."),
  oilType: z.enum(["CONVENTIONAL", "SYNTHETIC_BLEND", "FULL_SYNTHETIC", "NOT_SURE"], {
    required_error: "Choose an oil type, or select Not sure."
  }),
  serviceAddress: z
    .string()
    .trim()
    .min(10, "Enter the full service address, including apartment, suite, or parking details if needed.")
    .max(220, "Address is too long."),
  preferredDate: z.preprocess(
    (value) => (value === "" || value == null ? undefined : value),
    z.coerce
      .date({
        errorMap: () => ({ message: "Choose a preferred date." })
      })
      .refine((date) => date >= todayAtMidnight(), "Preferred date cannot be in the past.")
  ),
  preferredTimeWindow: z.string().trim().min(1, "Choose a preferred time window.").max(40),
  notes: z.string().trim().max(500, "Notes must be 500 characters or less.").optional().or(z.literal("")),
  consent: z.literal("on", {
    errorMap: () => ({ message: "Please confirm that you understand this is a request." })
  }),
  website: z.string().max(0, "Spam check failed.").optional()
});

export type BookingFormInput = z.infer<typeof bookingSchema>;
