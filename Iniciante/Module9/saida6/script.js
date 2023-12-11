const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8");

const text = "AMO FAZER EXERCICIO NO URI";

// padStart('<').padEnd('>')
console.log(`<${text}>`); // %s
console.log(`<${text.padStart(30, " ")}>`); // %30s
console.log(`<${text.substring(0, 20)}>`); // %.20s
console.log(`<${text.padEnd(20)}>`); // %-20s
console.log(`<${text.padEnd(30)}>`); // %-30s
console.log(`<${text.substring(0, 30)}>`); // %.30s
console.log(`<${text.substring(0, 20).padStart(30)}>`); // %30.20s
console.log(`<${text.substring(0, 20).padEnd(30)}>`); // %-30.20s
