const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8").split("\n");

let [totalNumbers] = lines;

const values = lines[1].split(" ").map(Number);

totalNumbers = Number(totalNumbers);

let multiple2 = 0;
let multiple3 = 0;
let multiple4 = 0;
let multiple5 = 0;

for (let i = 0; i < totalNumbers; i++) {
  const currentNumber = values[i];

  if (currentNumber % 2 === 0) {
    multiple2++;
  }

  if (currentNumber % 3 === 0) {
    multiple3++;
  }

  if (currentNumber % 4 === 0) {
    multiple4++;
  }

  if (currentNumber % 5 === 0) {
    multiple5++;
  }
}

console.log(`${multiple2} Multiplo(s) de 2`);
console.log(`${multiple3} Multiplo(s) de 3`);
console.log(`${multiple4} Multiplo(s) de 4`);
console.log(`${multiple5} Multiplo(s) de 5`);
