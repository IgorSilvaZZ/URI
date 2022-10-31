const { readFileSync } = require("fs");

const [quantity] = readFileSync("stdin", "utf-8").split("\n").map(Number);

let word = "Feliz nat";

for (let i = 1; i <= quantity; i++) {
  word += "a";

  if (i === quantity) {
    word += "l!";
  }
}

console.log(word);
