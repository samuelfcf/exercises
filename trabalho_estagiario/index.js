import fs from 'fs';

for (let i = 0; i < 100; i++) {
  fs.writeFileSync(`${i + 1}.txt`, `Lista 1 - Cálculo 1 - Exercício ${i + 1}`);
}