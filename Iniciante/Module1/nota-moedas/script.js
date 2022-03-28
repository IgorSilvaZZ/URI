const { readFileSync } = require("fs");

let [valor] = readFileSync("stdin", "utf-8")
  .split("\n")
  .map((item) => parseFloat(item));

const notas100 = Math.floor(valor / 100);
valor -= notas100 * 100;

const notas50 = Math.floor((valor % 100) / 50);
valor -= notas50 * 50;

const notas20 = Math.floor((valor % 50) / 20);
valor -= notas20 * 20;

const notas10 = Math.floor((valor % 20) / 10);
valor -= notas10 * 10;

const notas5 = Math.floor((valor % 10) / 5);
valor -= notas5 * 5;

const notas2 = Math.floor((valor % 5) / 2);
valor -= notas2 * 2;

const moedas1 = Math.floor((valor % 2) / 1);
valor -= moedas1 * 1;

const moedas50 = Math.floor(valor / 0.5);
valor -= moedas50 * 0.5;

const moedas25 = Math.floor((valor % 0.5) / 0.25);
valor -= moedas25 * 0.25;

const moedas10 = Math.floor((valor % 0.25) / 0.1);
valor -= moedas10 * 0.1;

const moedas5 = Math.floor((valor % 0.1) / 0.05);
valor -= moedas5 * 0.05;

const moedas01 = Math.floor((valor % 0.05) / 0.01);
valor -= moedas01 * 0.01;

console.log(`NOTAS:`);
console.log(`${notas100} nota(s) de R$ 100,00`);
console.log(`${notas50} nota(s) de R$ 50,00`);
console.log(`${notas20} nota(s) de R$ 20,00`);
console.log(`${notas10} nota(s) de R$ 10,00`);
console.log(`${notas5} nota(s) de R$ 5,00`);
console.log(`${notas2} nota(s) de R$ 2,00`);
console.log(`MOEDAS:`);
console.log(`${moedas1} moeda(s) de R$ 1,00`);
console.log(`${moedas50} moeda(s) de R$ 0,50`);
console.log(`${moedas25} moeda(s) de R$ 0,25`);
console.log(`${moedas10} moeda(s) de R$ 0,10`);
console.log(`${moedas5} moeda(s) de R$ 0,05`);
console.log(`${moedas01} moeda(s) de R$ 0,01`);
