const { readFileSync } = require("fs");

const [value] = readFileSync("stdin", "utf-8")
  .split("\n")
  .map((item) => parseFloat(item));

if (value >= 0 && value <= 25) {
  console.log(`Intervalo [0,25]`);
} else if (value > 25 && value <= 50) {
  console.log(`Intervalo (25,50]`);
} else if (value > 50 && value <= 75) {
  console.log(`Intervalo (50,75]`);
} else if (value > 75 && value <= 100) {
  console.log(`Intervalo (75,100]`);
} else {
  console.log(`Fora de intervalo`);
}
