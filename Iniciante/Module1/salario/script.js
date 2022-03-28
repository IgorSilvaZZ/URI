const { readFileSync } = require("fs");

const [A, B, C] = readFileSync("stdin", "utf-8").split("\n");

const numeroFuncionario = parseInt(A);
const horasTrabalhadas = parseInt(B);
const valorRecebido = parseFloat(C);

const salario = horasTrabalhadas * valorRecebido;

console.log(`NUMBER = ${numeroFuncionario}`);
console.log(`SALARY = U$ ${salario.toFixed(2)}`);
