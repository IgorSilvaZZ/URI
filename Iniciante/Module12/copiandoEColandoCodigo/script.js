const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8").split("\n");

const startBodyIndex = lines.findIndex((item) => item.trim() === "<body>");
const endBodyIndex = lines.findIndex((item) => item.trim() === "</body>");

for (let i = startBodyIndex + 1; i < endBodyIndex; i++) {
  console.log(lines[i]);
}
