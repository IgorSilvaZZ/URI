const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8").split("\n");

const A = lines.shift().replace("\r", "");
const B = lines.shift().replace("\r", "");
const C = lines.shift().replace("\r", "");

console.log(`${A.trim()}${B.trim()}${C.trim()}`);
console.log(`${B.trim()}${C.trim()}${A.trim()}`);
console.log(`${C.trim()}${A.trim()}${B.trim()}`);
console.log(`${A.substring(0, 10)}${B.substring(0, 10)}${C.substring(0, 10)}`);
