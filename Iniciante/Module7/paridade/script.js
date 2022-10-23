const { readFileSync } = require("fs");

let [number] = readFileSync("stdin", "utf-8")
  .split("\n")
  .map((item) => item.trim());

let countNumberOne = 0;

for (let index in number) {
  const currentChar = number[index];

  if (currentChar === "1") {
    countNumberOne++;
  }
}

number = countNumberOne % 2 === 0 ? `${number}0` : `${number}1`;

console.log(number);
