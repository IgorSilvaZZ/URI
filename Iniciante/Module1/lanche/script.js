const { readFileSync } = require("fs");

const linha = readFileSync("stdin", "utf-8");

const [codigo, quantidade] = linha.split(" ").map((item) => parseInt(item));

const lanches = [
  { codigo: 1, preco: 4.0 },
  { codigo: 2, preco: 4.5 },
  { codigo: 3, preco: 5.0 },
  { codigo: 4, preco: 2.0 },
  { codigo: 5, preco: 1.5 },
];

const lanche = lanches.find((item) => item.codigo === codigo);

const total = lanche.preco * quantidade;

console.log(`Total: R$ ${total.toFixed(2)}`);
