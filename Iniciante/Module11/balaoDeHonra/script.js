const { readFileSync } = require("fs");

const [letter] = readFileSync("stdin", "utf-8")
  .split("\n")
  .map((item) => item.trim());

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const letterIndex = letters.findIndex((item) => item === letter);

console.log(letterIndex + 1);
