const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8").split("\n");

let some = 1;
let exponent = 1;

for (let i = 1; i <= 39; i++) {
  if (i === 1) {
    continue;
  }

  if (i % 2 === 1) {
    let potency = Math.pow(2, exponent);

    some += i / potency;

    exponent++;
  }
}

console.log(some.toFixed(2));
