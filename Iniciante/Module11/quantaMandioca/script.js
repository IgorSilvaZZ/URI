const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8").split("\n").map(Number);

const portions = {
  1: 300, // Curupira
  2: 1500, // Boitatá
  3: 600, // Boto
  4: 1000, // Mapinguari
  5: 150, // Iara
};

let somePortions = 225;

for (let currentLine = 1; currentLine <= lines.length; currentLine++) {
  const valueLine = lines[currentLine - 1];

  if (portions[currentLine]) {
    const valuePortions = portions[currentLine] * valueLine;

    somePortions += valuePortions;
  }
}

console.log(somePortions);
