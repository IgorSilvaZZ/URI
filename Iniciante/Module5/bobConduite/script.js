const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8").split("\n");

const [numberLines] = lines;

for (let i = 1; i <= Number(numberLines); i++) {
  const [r1, r2] = lines[i].split(" ").map((item) => Number(item));

  const result = r2 + r1;

  console.log(result);
}
