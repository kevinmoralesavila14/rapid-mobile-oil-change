"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { bookingStatuses, type BookingStatusValue } from "@/lib/site";

const ADMIN_COOKIE = "rapid_admin";

function getAdminPassword() {
  return process.env.ADMIN_PASSWORD || "";
}

export async function loginAdmin(formData: FormData) {
  const password = String(formData.get("password") || "");

  if (password !== getAdminPassword()) {
    redirect("/admin?error=1");
  }

  const cookieStore = await cookies();
  cookieStore.set(ADMIN_COOKIE, "authorized", {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 8
  });

  redirect("/admin");
}

export async function logoutAdmin() {
  const cookieStore = await cookies();
  cookieStore.delete(ADMIN_COOKIE);
  redirect("/admin");
}

export async function updateBookingStatus(formData: FormData) {
  const cookieStore = await cookies();
  if (cookieStore.get(ADMIN_COOKIE)?.value !== "authorized") {
    redirect("/admin");
  }

  const id = String(formData.get("id") || "");
  const status = String(formData.get("status") || "") as BookingStatusValue;

  if (!bookingStatuses.includes(status)) {
    return;
  }

  await prisma.bookingRequest.update({
    where: { id },
    data: { status }
  });

  revalidatePath("/admin");
}

export async function deleteBookingRequest(formData: FormData) {
  const cookieStore = await cookies();
  if (cookieStore.get(ADMIN_COOKIE)?.value !== "authorized") {
    redirect("/admin");
  }

  const id = String(formData.get("id") || "");

  await prisma.bookingRequest.delete({
    where: { id }
  });

  revalidatePath("/admin");
}

export async function isAdminAuthorized() {
  const cookieStore = await cookies();
  return cookieStore.get(ADMIN_COOKIE)?.value === "authorized";
}
