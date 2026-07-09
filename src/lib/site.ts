export const siteConfig = {
  name: "Rapid Mobile Oil Change",
  phone: process.env.NEXT_PUBLIC_BUSINESS_PHONE || "+1 (469) 600-3360",
  email: process.env.NEXT_PUBLIC_BUSINESS_EMAIL || "rapidmobileoilchange01@gmail.com",
  serviceArea: process.env.NEXT_PUBLIC_SERVICE_AREA || "Dallas/Fort Worth",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
};

export const socialLinks = [
  {
    label: "Instagram",
    shortLabel: "IG",
    href: "https://www.instagram.com/rapid_mobileoilchange"
  },
  {
    label: "Facebook",
    shortLabel: "FB",
    href: "https://www.facebook.com/profile.php?id=61590741418225"
  },
  {
    label: "TikTok",
    shortLabel: "TT",
    href: ""
  },
  {
    label: "YouTube",
    shortLabel: "YT",
    href: ""
  }
].filter((link) => link.href);

export const googleReviewUrl = "https://share.google/NyaYMI4Hdmdf00mEf";

export const timeWindows = [
  "Morning (8 AM - 11 AM)",
  "Midday (11 AM - 2 PM)",
  "Afternoon (2 PM - 5 PM)",
  "Evening (5 PM - 7 PM)",
  "Same-day if available"
];

export const oilTypeLabels = {
  CONVENTIONAL: "Conventional",
  SYNTHETIC_BLEND: "Synthetic blend",
  FULL_SYNTHETIC: "Full synthetic",
  NOT_SURE: "Not sure"
} as const;

export const statusLabels = {
  NEW: "New",
  CONTACTED: "Contacted",
  CONFIRMED: "Confirmed",
  COMPLETED: "Completed",
  CANCELLED: "Cancelled"
} as const;

export const bookingStatuses = ["NEW", "CONTACTED", "CONFIRMED", "COMPLETED", "CANCELLED"] as const;

export type BookingStatusValue = (typeof bookingStatuses)[number];
export type OilTypeValue = keyof typeof oilTypeLabels;
