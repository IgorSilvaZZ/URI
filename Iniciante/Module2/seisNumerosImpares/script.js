const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8");

let [number] = lines.split("\n").map((item) => parseInt(item));

let count = 0;

while (count < 6) {
  if (number % 2 === 1) {
    console.log(number);
    count++;
  }

  number++;
}
