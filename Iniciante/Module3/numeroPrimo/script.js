const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8")
  .split("\n")
  .map((item) => parseInt(item));

const [numberLines] = lines;

for (let i = 1; i <= numberLines; i++) {
  const number = lines[i];

  let count = 0;

  for (let j = 1; j <= number; j++) {
    if (number % j === 0) {
      count++;
    }
  }

  if (count > 2) {
    console.log(`${number} nao eh primo`);
  } else {
    console.log(`${number} eh primo`);
  }
}
