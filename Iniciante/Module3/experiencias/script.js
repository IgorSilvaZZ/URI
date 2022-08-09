const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8").split("\n");

const [numberLines] = lines;

const animals = {
  R: 0,
  S: 0,
  C: 0,
};

for (let i = 1; i <= Number(numberLines); i++) {
  const [quantity, type] = lines[i].split(" ").map((item) => item.trim());

  animals[type] += Number(quantity);
}

const total = Object.values(animals).reduce(
  (some, element) => (some += parseFloat(element)),
  0
);

const percentCoelhos = (animals.C * 100) / total;
const percentRatos = (animals.R * 100) / total;
const percentSapos = (animals.S * 100) / total;

console.log(`Total: ${total} cobaias`);
console.log(`Total de coelhos: ${animals.C}`);
console.log(`Total de ratos: ${animals.R}`);
console.log(`Total de sapos: ${animals.S}`);
console.log(`Percentual de coelhos: ${percentCoelhos.toFixed(2)} %`);
console.log(`Percentual de ratos: ${percentRatos.toFixed(2)} %`);
console.log(`Percentual de sapos: ${percentSapos.toFixed(2)} %`);
