const { readFileSync } = require("fs");

const [sides, lengths] = readFileSync("stdin", "utf-8").split(" ").map(Number);

const perimeter = sides * lengths;

console.log(perimeter);
