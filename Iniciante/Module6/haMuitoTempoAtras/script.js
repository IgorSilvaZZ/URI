const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8").split("\n").map(Number);

const [numberLines] = lines;

for (let i = 1; i <= numberLines; i++) {
  const currentValue = lines[i];

  let diff = 2015 - currentValue;
  let absDiff = Math.abs(2015 - currentValue);

  if (diff <= 0) {
    console.log(`${absDiff + 1} A.C.`);
  } else {
    console.log(`${absDiff} D.C.`);
  }
}
