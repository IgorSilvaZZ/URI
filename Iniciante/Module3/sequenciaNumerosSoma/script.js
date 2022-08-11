const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8")
  .split("\n")
  .map((item) => item.split(" "));

for (let index = 0; index < lines.length; index++) {
  const [numberOne, numberTwo] = lines[index];

  let some = 0;
  let message = "";

  if (numberOne <= 0 || numberTwo <= 0) {
    break;
  }

  const maxNumber =
    numberTwo > numberOne ? Number(numberTwo) : Number(numberOne);
  const minNumber =
    numberOne < numberTwo ? Number(numberOne) : Number(numberTwo);

  for (let i = minNumber; i <= maxNumber; i++) {
    some += i;
    message += `${i} `;
  }

  message += `Sum=${some}`;

  console.log(message);
}
