const { readFileSync } = require("fs");

let [divisor, dividend] = readFileSync("stdin", "utf-8")
  .split(" ")
  .map((item) => Number(item));

let quotient = parseInt(divisor / dividend);

let rest = divisor - dividend * quotient;

if (rest < 0) {
  rest += Math.abs(dividend);
  quotient = (divisor - rest) / dividend;
}

console.log(`${quotient} ${rest}`);
