const { readFileSync } = require("fs");

const [cpf] = readFileSync("stdin", "utf-8")
  .split("\n")
  .map((item) => item.trim());

let message = "";

for (let i = 0; i < cpf.length; i++) {
  if (cpf[i].match(/[.-]/gm)) {
    message += "\n";
  } else {
    message += cpf[i];
  }
}

console.log(message);
