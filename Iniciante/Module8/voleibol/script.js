const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8").split("\n");

const numberPlayers = Number(lines.shift());

let countPlayers = 0;

let someWithdraw = 0;
let someAssertWithdrawal = 0;

let someBlocks = 0;
let someAssertsBlocks = 0;

let someAttacks = 0;
let someAssertsAttacks = 0;

while (countPlayers < numberPlayers) {
  const namePlayer = lines.shift();

  // Tentivas de Saques, Bloqueios, Ataques
  const [withdrawal, blocks, attacks] = lines.shift().split(" ").map(Number);

  // Saques, Bloqueios, Ataques Com sucesso
  const [assertWithdrawal, assertBlocks, assertsAttacks] = lines
    .shift()
    .split(" ")
    .map(Number);

  someWithdraw += withdrawal;
  someAssertWithdrawal += assertWithdrawal;

  someBlocks += blocks;
  someAssertsBlocks += assertBlocks;

  someAttacks += attacks;
  someAssertsAttacks += assertsAttacks;

  countPlayers++;
}

const percentWithdrawal = (someAssertWithdrawal * 100) / someWithdraw;
const percentBlocks = (someAssertsBlocks * 100) / someBlocks;
const percentAttacks = (someAssertsAttacks * 100) / someAttacks;

console.log(`Pontos de Saque: ${percentWithdrawal.toFixed(2)} %.`);
console.log(`Pontos de Bloqueio: ${percentBlocks.toFixed(2)} %.`);
console.log(`Pontos de Ataque: ${percentAttacks.toFixed(2)} %.`);
