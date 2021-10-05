const luckyNumber = randomNumber(2, 12);
const first = randomNumber(1, 6);
const last = randomNumber(1, 6);

console.log(`Seu número da sorte é: ${luckyNumber}`);
console.log("Jogando dados...");

setTimeout(() => {
  console.log(`Você tirou ${first} no primeiro dado!`);
}, 2000);

setTimeout(() => {
  console.log(`Você tirou ${last} no segundo dado!`);
}, 4000);

setTimeout(() => {
  if (first + last > luckyNumber) {
    console.log("Você ganhou!!!");
  } else console.log("Você perdeu");
}, 5000);

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}