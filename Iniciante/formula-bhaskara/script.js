const { readFileSync } = require("fs");

const linha = readFileSync("stdin", "utf-8");

const [A, B, C] = linha.split(" ").map((item) => parseFloat(item));
