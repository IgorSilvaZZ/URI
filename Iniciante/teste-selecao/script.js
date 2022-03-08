const { readFileSync } = require("fs");

const linha = readFileSync("stdin", "utf-8");

const [A, B, C, D] = linha.split(" ").map((item) => parseInt(item));

const validacaoBC = B > C;
const validacaoDA = D > A;
const somaCD = C + D;
const somaAB = A + B;
const validacaoSomas = somaCD > somaAB;
const validacaoCD = C >= 0 && D >= 0;
const ehPar = A % 2 === 0;

if (validacaoBC && validacaoDA && validacaoSomas && validacaoCD && ehPar) {
  console.log("Valores aceitos");
} else {
  console.log("Valores nao aceitos");
}
