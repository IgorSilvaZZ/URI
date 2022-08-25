const { readFileSync } = require("fs");

const [numberLines] = readFileSync("stdin", "utf-8")
  .split("\n")
  .map((item) => parseInt(item));

let number = 1;
let lines = [];

/*  Array.from({ length: 4 }, (value, index) => {
    if (number % 4 !== 0) {
      console.log(number);
    } else {
      console.log("PUM");
    }

    number++;
  }); */

for (let i = 1; i <= numberLines; i++) {
  let line = [];

  for (let j = 1; j <= 4; j++, number++) {
    if (number % 4 !== 0) {
      line.push(number);
    } else {
      line.push("PUM");
    }
  }

  lines.push(line);
}

lines.forEach((item) => {
  console.log(...item);
});
