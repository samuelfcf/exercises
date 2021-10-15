CREATE TYPE "tipo_condicao" AS ENUM('novo', 'seminovo', 'usado');

CREATE TABLE "produtos" (
  "id" SERIAL PRIMARY KEY,
  "nome" TEXT NOT NULL,
  "preco" INTEGER NOT NULL,
  "condicao" tipo_condicao NOT NULL
);
