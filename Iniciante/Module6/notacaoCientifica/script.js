const { readFileSync } = require("fs");

const [number] = readFileSync("stdin", "utf-8").split("\n").map(parseFloat);

const notation = number.toExponential(4).toUpperCase();

let notationFormatter = "";

if (number > 0) {
  notationFormatter = notation.padStart(10, "+");
} else {
  notationFormatter = notation.padStart(10, "-");
}

let [notationTransform, numberForNotation] = notationFormatter.split("E");

let numberForNotationFormatter = numberForNotation;

if (numberForNotation.length < 3) {
  const withoutMin = numberForNotation.slice(1);

  numberForNotationFormatter =
    Number(numberForNotation) < 0
      ? "-" + withoutMin.padStart(2, "0")
      : "+" + withoutMin.padStart(2, "0");
}

console.log(`${notationTransform}E${numberForNotationFormatter}`);
