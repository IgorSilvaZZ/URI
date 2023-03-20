const { readFileSync } = require("fs");

const getFormattedNotation = (number) => {
  const notation = number.toExponential(4).toUpperCase();

  let [notationTransform, numberForNotation] = notation.split("E");

  return `${notationTransform}E${numberForNotation.padStart(2, "0")}`;
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

console.log(
  `A = ${A.toExponential(3).toUpperCase()}, B = ${B.toExponential(
    3
  ).toUpperCase()}`
);

console.log(
  `C = ${C.toExponential(3).toUpperCase()}, D = ${D.toExponential(
    3
  ).toUpperCase()}`
);

console.log(`A = ${A.toFixed(0)}, B = ${B.toFixed(0)}`);
console.log(`C = ${C.toFixed(0)}, D = ${D.toFixed(0)}`);
