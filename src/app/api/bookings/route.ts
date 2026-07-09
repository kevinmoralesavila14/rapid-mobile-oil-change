import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { bookingSchema } from "@/lib/validation";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = bookingSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          message: "Please fix the highlighted fields.",
          fieldErrors: parsed.error.flatten().fieldErrors
        },
        { status: 400 }
      );
    }

    const data = parsed.data;

    const duplicate = await prisma.bookingRequest.findFirst({
      where: {
        email: data.email,
        phone: data.phone,
        preferredDate: data.preferredDate,
        vehicleYear: data.vehicleYear,
        vehicleMake: { equals: data.vehicleMake },
        vehicleModel: { equals: data.vehicleModel }
      }
    });

    if (duplicate) {
      return NextResponse.json(
        {
          message:
            "It looks like this request was already submitted. We will contact you after reviewing it.",
          fieldErrors: {}
        },
        { status: 409 }
      );
    }

    const outsideServiceArea =
      /\b(outside service area|too far|out of area)\b/i.test(data.serviceAddress) ||
      /\b(outside service area|too far|out of area)\b/i.test(data.notes || "");

    if (outsideServiceArea) {
      return NextResponse.json(
        {
          message:
            "This address may be outside the current service area. Please contact us directly or add a nearby city/service-area note.",
          fieldErrors: { serviceAddress: ["Please confirm this location is inside the service area."] }
        },
        { status: 400 }
      );
    }

    await prisma.bookingRequest.create({
      data: {
        fullName: data.fullName,
        phone: data.phone,
        email: data.email,
        vehicleYear: data.vehicleYear,
        vehicleMake: data.vehicleMake,
        vehicleModel: data.vehicleModel,
        mileage: data.mileage,
        oilType: data.oilType,
        serviceAddress: data.serviceAddress,
        preferredDate: data.preferredDate,
        preferredTimeWindow: data.preferredTimeWindow,
        notes: data.notes || null
      }
    });

    return NextResponse.json({ message: "Booking request submitted." });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        message:
          "Something went wrong while saving your request. Please try again or contact us directly.",
        fieldErrors: {}
      },
      { status: 500 }
    );
  }
}
