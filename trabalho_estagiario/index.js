import fs from 'fs';

for (let i = 0; i < 100; i++) {
  fs.writeFileSync(`${i + 1}.txt`, `Lista ${i + 1} - Cálculo ${i + 1} - Exercício ${i + 1}`);
}