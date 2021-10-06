import { randomNumber } from "./randomNumber.js";
import chalk from "chalk";

const luckyNumber = randomNumber(2, 12);
const first = randomNumber(1, 6);
const last = randomNumber(1, 6);

console.log(chalk.blue(`Seu número da sorte é: ${luckyNumber}`));
console.log("Jogando dados...");

setTimeout(() => {
  console.log(`Você tirou ${first} no primeiro dado!`);
}, 2000);

setTimeout(() => {
  console.log(`Você tirou ${last} no segundo dado!`);
}, 4000);

setTimeout(() => {
  if (first + last > luckyNumber) {
    console.log(chalk.green("Você ganhou!!!"));
  } else console.log(chalk.red("Você perdeu"));
}, 5000);
