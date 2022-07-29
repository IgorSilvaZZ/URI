const { readFileSync } = require("fs");

const line = readFileSync("stdin", "utf-8");

const [wage] = line.split("\n").map((item) => parseFloat(item));

let total = 0;

if (wage >= 0 && wage <= 2000) {
  console.log("Isento");
  return;
} else if (wage > 2000 && wage <= 3000) {
  total = (wage - 2000) * 0.08;
} else if (wage > 3000 && wage <= 4500) {
  total = (wage - 3000) * 0.18 + 80;
} else {
  total = (wage - 4500) * 0.28 + 350;
}

console.log(`R$ ${total.toFixed(2)}`);
