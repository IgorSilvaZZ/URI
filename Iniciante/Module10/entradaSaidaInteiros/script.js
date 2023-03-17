const { readFileSync } = require("fs");

const [numberOne, numberTwo, numberThree] = readFileSync("stdin", "utf-8")
  .split("\n")
  .map(Number);

const numberOneIsValid = numberOne >= -10000 && numberOne <= 10000;

const numberTwoIsValid = numberTwo >= 0 && numberTwo <= 99;

const numberThreeIsValid = numberThree >= 0 && numberThree <= 999;

if (numberOneIsValid && numberTwoIsValid && numberThreeIsValid) {
  console.log(`A = ${numberOne}, B = ${numberTwo}, C = ${numberThree}`);

  console.log(
    `A = ${String(numberOne).padStart(10, " ")}, B = ${String(
      numberTwo
    ).padStart(10, " ")}, C = ${String(numberThree).padStart(10, " ")}`
  );

  let numberOneIsNegative = numberOne < 0;
  let numberTwoIsNegative = numberTwo < 0;
  let numberThreeIsNegative = numberThree < 0;

  let presentNumberOne = String(Math.abs(numberOne)).padStart(10, "0");
  let presentNumberTwo = String(Math.abs(numberTwo)).padStart(10, "0");
  let presentNumberThree = String(Math.abs(numberThree)).padStart(10, "0");

  let numberOneShow = numberOneIsNegative
    ? `-${presentNumberOne.slice(1)}`
    : presentNumberOne;

  let numberTwoShow = numberTwoIsNegative
    ? `-${presentNumberTwo.slice(1)}`
    : presentNumberTwo;

  let numberThreeShow = numberThreeIsNegative
    ? `-${presentNumberThree.slice(1)}`
    : presentNumberThree;

  console.log(
    `A = ${numberOneShow}, B = ${numberTwoShow}, C = ${numberThreeShow}`
  );

  console.log(
    `A = ${String(numberOne).padEnd(10, " ")}, B = ${String(numberTwo).padEnd(
      10,
      " "
    )}, C = ${String(numberThree).padEnd(10, " ")}`
  );
}
