const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8");

const firstNumber = 234.345;
const secundNumber = 45.698;

const getFormattedNotation = (number, numberPlaces, upperCase = true) => {
  let notation = "";
  let charSplit = "";

  if (upperCase) {
    charSplit = "E";
    notation = number.toExponential(numberPlaces).toUpperCase();
  } else {
    charSplit = "e";
    notation = number.toExponential(numberPlaces).toLowerCase();
  }

  let [notationTransform, numberForNotation] = notation.split(charSplit);

  let numberFormatter = numberForNotation;

  const numberWithoutSymbol = numberForNotation.slice(1);

  numberFormatter =
    Number(numberForNotation) < 0
      ? "-" + numberWithoutSymbol.padStart(2, "0")
      : "+" + numberWithoutSymbol.padStart(2, "0");

  return `${notationTransform}${charSplit}${numberFormatter}`;
};

console.log(`${firstNumber.toFixed(6)} - ${secundNumber.toFixed(6)}`);
console.log(`${firstNumber.toFixed(0)} - ${secundNumber.toFixed(0)}`);
console.log(`${firstNumber.toFixed(1)} - ${secundNumber.toFixed(1)}`);
console.log(`${firstNumber.toFixed(2)} - ${secundNumber.toFixed(2)}`);
console.log(`${firstNumber.toFixed(3)} - ${secundNumber.toFixed(3)}`);
console.log(
  `${getFormattedNotation(firstNumber, 6, false)} - ${getFormattedNotation(
    secundNumber,
    6,
    false
  )}`
);
console.log(
  `${getFormattedNotation(firstNumber, 6)} - ${getFormattedNotation(
    secundNumber,
    6
  )}`
);
console.log(`${firstNumber} - ${secundNumber}`);
console.log(`${firstNumber} - ${secundNumber}`);
