const { readFileSync } = require('fs')

const [ peca1, peca2 ] = readFileSync('stdin', 'utf-8').split('\n');

const [ codigoPeca, numeroPeca, valorPeca ] = peca1.split(" ");
const [ codigoPeca2, numeroPeca2, valorPeca2 ] = peca2.split(" ");

const codigo = parseInt(codigoPeca);
const codigo2 = parseInt(codigoPeca2);

const valorTotalPeca = parseInt(numeroPeca) * parseFloat(valorPeca);
const valorTotalPeca2 =  parseInt(numeroPeca2) * parseFloat(valorPeca2);

const valorTotal = valorTotalPeca + valorTotalPeca2

console.log(`VALOR A PAGAR: R$ ${valorTotal.toFixed(2)}`);