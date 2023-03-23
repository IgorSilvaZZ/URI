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

if (D.length <= 50) {
  console.log(`${A}${B.toFixed(6)}${C}${D}`);
  console.log(`${A}\t${B.toFixed(6)}\t${C}\t${D}`);
  console.log(
    `${String(A).padEnd(String(A).length + 10, " ")}${B.toFixed(6).padEnd(
      B.toFixed(6).length + 10,
      " "
    )}${C.padEnd(C.length + 10, " ")}${D.padEnd(D.length + 10, " ")}`
  );
}
