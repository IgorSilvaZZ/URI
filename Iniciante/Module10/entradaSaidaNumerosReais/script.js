const { readFileSync } = require("fs");

const getFormattedNotation = (number) => {
  const notation = number.toExponential(3).toUpperCase();

  let [notationTransform, numberForNotation] = notation.split("E");

  let numberFormatter = numberForNotation;

  const numberWithoutSymbol = numberForNotation.slice(1);

  numberFormatter =
    Number(numberForNotation) < 0
      ? "-" + numberWithoutSymbol.padStart(2, "0")
      : "+" + numberWithoutSymbol.padStart(2, "0");

  return `${notationTransform}E${numberFormatter}`;
};

const [firstLine, secundLine] = readFileSync("stdin", "utf-8").split("\n");

const [A, B] = firstLine.split(" ").map(parseFloat);

const [C, D] = secundLine.split(" ").map(parseFloat);

console.log(`A = ${A.toFixed(6)}, B = ${B.toFixed(6)}`);
console.log(`C = ${C.toFixed(6)}, D = ${D.toFixed(6)}`);

console.log(`A = ${A.toFixed(1)}, B = ${B.toFixed(1)}`);
console.log(`C = ${C.toFixed(1)}, D = ${D.toFixed(1)}`);

console.log(`A = ${A.toFixed(2)},  B = ${B.toFixed(2)}`);
console.log(`C = ${C.toFixed(2)},  D = ${D.toFixed(2)}`);

console.log(`A = ${A.toFixed(3)},  B = ${B.toFixed(3)}`);
console.log(`C = ${C.toFixed(3)},  D = ${D.toFixed(3)}`);

console.log(`A = ${getFormattedNotation(A)}, B = ${getFormattedNotation(B)}`);

console.log(`C = ${getFormattedNotation(C)}, D = ${getFormattedNotation(D)}`);

console.log(`A = ${A.toFixed(0)}, B = ${B.toFixed(0)}`);
console.log(`C = ${C.toFixed(0)}, D = ${D.toFixed(0)}`);
