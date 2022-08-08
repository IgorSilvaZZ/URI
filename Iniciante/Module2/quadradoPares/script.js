const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8");

const [number] = lines.split("\n").map((item) => parseInt(item));

const pair = 2;

for (let i = 2; i <= number; i++) {
  if (i % 2 === 0) {
    const result = Math.pow(i, pair);
    console.log(`${i}^${pair} = ${result}`);
  }
}
