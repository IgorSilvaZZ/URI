const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8").split("\n");

const [numberLines] = lines.map(Number);

for (let i = 1; i <= numberLines; i++) {
  const word = lines[i].trim();

  let some = 0;

  for (let j = 0; j < word.length; j++) {
    some += 0.01;
  }

  console.log(some.toFixed(2));
}
