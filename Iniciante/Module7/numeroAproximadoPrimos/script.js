const { readFileSync } = require("fs");

const [number] = readFileSync("stdin", "utf-8").split("\n");

const p = number / Math.log(number);
const m = 1.25506 * (number / Math.log(number));

console.log(`${p.toFixed(1)} ${m.toFixed(1)}`);
