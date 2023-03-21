const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8").split("\n");

let symbol = '"_"';

console.log("\"Ro'b'er\tto\\/\"");
console.log("(._.) ( l: ) ( .-. ) ( :l ) (._.)");
console.log("(^_-) (-_-) (-_^)");
console.log("(" + symbol + ") ('.')");
