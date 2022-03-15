const { readFileSync } = require("fs");

const [value] = readFileSync("stdin", "utf-8")
  .split("\n")
  .map((item) => parseFloat(item));
