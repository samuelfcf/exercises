CREATE TABLE "clientes" (
  "id" SERIAL PRIMARY KEY,
  "nome" VARCHAR(50) NOT NULL,
  "cpf" VARCHAR(11) NOT NULL,
  "numero_compras" INTEGER NOT NULL DEFAULT 0
);
