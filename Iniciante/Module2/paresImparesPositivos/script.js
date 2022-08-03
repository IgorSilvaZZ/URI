const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8");

const line = lines.split("\n").map((item) => parseInt(item));

let result = {
  pairs: 0,
  unpaired: 0,
  positives: 0,
  negatives: 0,
};

line.forEach((number) => {
  if (number % 2 === 0) {
    result.pairs++;
  }

  if (number % 2 === 1) {
    result.unpaired++;
  }

  if (number > 0) {
    result.positives++;
  }

  if (number < 0) {
    result.negatives++;
  }
});

const { pairs, negatives, positives, unpaired } = result;

console.log(`${pairs} valor(es) par(es)`);
console.log(`${unpaired} valor(es) impar(es)`);
console.log(`${positives} valor(es) positivo(s)`);
console.log(`${negatives} valor(es) negativo(s)`);
