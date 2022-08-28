const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8").split("\n");

const [number] = lines;

let somes = [];

for (let i = 1; i <= Number(number); i++) {
  let some = 0;

  const [numberOne, numberTwo] = lines[i]
    .split(" ")
    .map((item) => parseInt(item));

  const minNumber = numberTwo < numberOne ? numberTwo : numberOne;
  const maxNumber = numberOne > numberTwo ? numberOne : numberTwo;

  for (let j = minNumber + 1; j < maxNumber; j++) {
    if (j % 2 !== 0) {
      some += j;
    }
  }

  somes.push(some);
}

somes.forEach((item) => {
  console.log(item);
});
