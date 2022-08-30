const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8").split("\n");

let some = 0;

Array.from({ length: 100 }, (item, index) => {
  some += 1 / (index + 1);
});

console.log(some.toFixed(2));
