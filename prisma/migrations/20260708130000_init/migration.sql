-- CreateTable
CREATE TABLE "BookingRequest" (
  "id" TEXT NOT NULL PRIMARY KEY,
  "fullName" TEXT NOT NULL,
  "phone" TEXT NOT NULL,
  "email" TEXT NOT NULL,
  "vehicleYear" INTEGER NOT NULL,
  "vehicleMake" TEXT NOT NULL,
  "vehicleModel" TEXT NOT NULL,
  "mileage" TEXT NOT NULL,
  "oilType" TEXT NOT NULL,
  "serviceAddress" TEXT NOT NULL,
  "preferredDate" DATETIME NOT NULL,
  "preferredTimeWindow" TEXT NOT NULL,
  "notes" TEXT,
  "status" TEXT NOT NULL DEFAULT 'NEW',
  "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" DATETIME NOT NULL
);

-- CreateIndex
CREATE INDEX "BookingRequest_email_preferredDate_idx" ON "BookingRequest"("email", "preferredDate");

-- CreateIndex
CREATE INDEX "BookingRequest_status_idx" ON "BookingRequest"("status");

-- CreateIndex
CREATE INDEX "BookingRequest_createdAt_idx" ON "BookingRequest"("createdAt");
