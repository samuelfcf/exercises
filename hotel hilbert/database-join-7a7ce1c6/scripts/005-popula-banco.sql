INSERT INTO "rooms" (name) VALUES
  ('01'),
  ('02'),
  ('03'),
  ('04'),
  ('05'),
  ('06');

INSERT INTO "guests" (name) VALUES
  ('Olivia Barreno Letras'),
  ('Xavier Paião Banha'),
  ('Alessia Caminha Gorjão'),
  ('Hilário Moreno Ponte'),
  ('Laércio Milheirão Eiró'),
  ('Emmanuel Gomide Canário'),
  ('Ticiana Outeiro Pequeno'),
  ('Sol Quinterno Boaventura'),
  ('Vladislav Neiva Viana');

INSERT INTO "allocations" ("roomId", "guestId", "startDate", "endDate") VALUES
  (1, 1, '2020-12-01', NULL),
  (2, 2, '2020-01-03', '2020-01-15'),
  (3, 3, '2019-12-01', '2020-12-15'),
  (4, 4, '2018-07-22', '2018-07-29'),
  (5, 5, '2020-06-01', '2020-06-10'),
  (6, 6, '2020-05-13', '2020-05-20'),
  (4, 7, '2019-02-19', '2019-02-26'),
  (3, 8, '2020-01-02', '2020-01-05'),
  (1, 9, '2019-08-01', '2019-08-20');