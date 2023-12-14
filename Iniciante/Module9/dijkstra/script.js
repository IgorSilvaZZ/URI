const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8")
  .split("\n")
  .map((item) => item.trim());

let diffJewels = [];

for (let line of lines) {
  if (!diffJewels.includes(line) && line !== "") {
    diffJewels.push(line);
  }
}

console.log(diffJewels.length);
