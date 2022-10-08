const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8").split("\n");

let [numberLines] = lines;

numberLines = Number(numberLines);

const prices = {
  1001: 1.5,
  1002: 2.5,
  1003: 3.5,
  1004: 4.5,
  1005: 5.5,
};

let some = 0;

for (let i = 1; i <= numberLines; i++) {
  const [code, quantity] = lines[i].split(" ").map(Number);

  if (prices[code]) {
    const total = prices[code] * quantity;

    some += total;
  }
}

console.log(some.toFixed(2));
