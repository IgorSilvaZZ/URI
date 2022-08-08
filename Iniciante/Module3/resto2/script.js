const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8");

const [number] = lines.split("\n").map((item) => parseInt(item));

for (let i = 1; i <= 10000; i++) {
  if (i % number === 2) {
    console.log(i);
  }
}
