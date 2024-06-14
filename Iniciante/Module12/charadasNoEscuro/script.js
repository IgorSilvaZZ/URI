const { readFileSync } = require("fs");

const [raio] = readFileSync("stdin", "utf-8").split("\n").map(Number);

const PI = 3.14;

if (raio > 0 && raio <= 10) {
  const result = 2 * PI * raio;

  console.log(result.toFixed(2));
}
