const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8")
  .split("\n")
  .map((item) => item.trim());

for (let i = 0; i < lines.length; i++) {
  if (lines[i] === "") {
    continue;
  }

  if (Number(lines[i]) > 0) {
    console.log("vai ter duas!");
  } else {
    console.log("vai ter copa!");
  }
}
