const { readFileSync } = require("fs");

const [text] = readFileSync("stdin", "utf-8").split("\n");

const [firstPart, secundPart] = text.split(",");

console.log(`${firstPart}`);
console.log(`${secundPart}`);
