const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8").split("\n");

while (true) {
  const alphabet = lines.shift();

  if (lines.length === 0) {
    break;
  }

  const numberLamps = Number(lines.shift());

  const numbers = lines.shift().split(" ").map(Number);

  let word = "";

  for (let i = 0; i < numberLamps; i++) {
    word += alphabet[numbers[i] - 1];
  }

  console.log(word);
}
