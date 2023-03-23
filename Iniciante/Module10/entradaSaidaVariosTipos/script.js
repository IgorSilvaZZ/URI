const { readFileSync } = require("fs");

const [line] = readFileSync("stdin", "utf-8").split("\n");

const currentLine = line.split(" ");

const textOne = currentLine.shift();
const textTwo = currentLine.shift();
const textThree = currentLine.shift();
const textFour = currentLine.join(" ");

const A = parseInt(textOne);
const B = parseFloat(textTwo);
const C = textThree;
const D = textFour;

console.log(`${A}${B.toFixed(6)}${C}${D}`);
console.log(`${A}\t${B.toFixed(6)}\t${C}\t${D}`);
console.log(
  `${A.toString().padEnd(10)}${B.toString().padEnd(10)}${C.padEnd(
    10
  )}${D.padEnd(10)}`
);
