const { readFileSync } = require("fs");

const [number] = readFileSync("stdin", "utf-8").split("\n").map(Number);

const convertToHex = number.toString(16).toUpperCase();

console.log(convertToHex);
