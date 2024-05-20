const { readFileSync } = require("fs");

let [word] = readFileSync("stdin", "utf-8").split("\n");

word = "Nao se refuta ciencia com opiniao";

console.log(word);
