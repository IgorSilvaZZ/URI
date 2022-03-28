const { readFileSync } = require('fs');

const [ A, B, C ] = readFileSync('stdin', 'utf-8').split('\n');

const nome = A;
const salarioFixo = parseFloat(B)
const totalVendas = parseFloat(C);

const comissao = (totalVendas * 15) / 100;

const novoSalario = salarioFixo + comissao;

console.log(`TOTAL = R$ ${novoSalario.toFixed(2)}`)