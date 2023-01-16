const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8").split("\n").map(Number);

const numberLines = lines.shift();

for (let i = 0; i < numberLines; i++) {
  const currentLine = lines[i];

  if (currentLine <= 8000) {
    console.log("Inseto!");
  } else {
    console.log("Mais de 8000!");
  }
}
