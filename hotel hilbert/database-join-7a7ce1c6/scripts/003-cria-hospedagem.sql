CREATE TABLE "allocations" (
  "id" SERIAL PRIMARY KEY,
  "roomId" INTEGER NOT NULL,
  "guestId" INTEGER NOT NULL,
  "startDate" DATE NOT NULL,
  "endDate" DATE
);