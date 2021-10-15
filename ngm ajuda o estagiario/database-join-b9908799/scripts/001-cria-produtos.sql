CREATE TABLE "products" (
  "id" SERIAL PRIMARY KEY,
  "name" TEXT NOT NULL,
  "price" INTEGER NOT NULL,
  "categoryId" INTEGER NOT NULL
);
