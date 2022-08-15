const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8")
  .split("\n")
  .map((item) => parseInt(item));

for (let i = 0; i < lines.length; i++) {
  if (lines[i] !== 2002) {
    console.log("Senha Invalida");
  } else {
    console.log("Acesso Permitido");
    break;
  }
}
