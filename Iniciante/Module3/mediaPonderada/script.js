const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8").split("\n");

const [numberLines] = lines;

const weightOne = 2;
const weightTwo = 3;
const weightThree = 5;

const someWeight = weightOne + weightTwo + weightThree;

for (let i = 1; i <= Number(numberLines); i++) {
  let [numberOne, numberTwo, numberThree] = lines[i]
    .split(" ")
    .map((item) => parseFloat(item));

  numberOne = numberOne * weightOne;
  numberTwo = numberTwo * weightTwo;
  numberThree = numberThree * weightThree;

  const average = (numberOne + numberTwo + numberThree) / someWeight;

  console.log(Math.abs(average).toFixed(1));
}
