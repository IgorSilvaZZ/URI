const { readFileSync } = require("fs");

const [number] = readFileSync("stdin", "utf-8")
  .split("\n")
  .map((item) => Number(item));

let quantities = [];

for (let i = 0; i < number; i++) {
  quantities.push("Ho");
}

quantities[quantities.length - 1] = "Ho!";

console.log(quantities.join(" "));
