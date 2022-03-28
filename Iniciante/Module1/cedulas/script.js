const { readFileSync } = require('fs');

let [ valor ] = readFileSync('stdin', 'utf-8').split('\n').map(item => parseInt(item));

const valorInicial = valor;

const notas100 = Math.floor(valor / 100);
valor -= (notas100 * 100);

const notas50 = Math.floor((valor % 100) / 50);
valor -= (notas50 * 50);

const notas20 = Math.floor((valor % 50) / 20);
valor -= (notas20 * 20);

const notas10 = Math.floor((valor % 20) / 10);
valor -= (notas10 * 10);

const notas5 = Math.floor((valor % 10) / 5);
valor -= (notas5 * 5); 

const notas2 = Math.floor((valor % 5) / 2);
valor -= (notas2 * 2); 

const notas1 = Math.floor((valor % 2) / 1);
valor -= (notas1 * 1);

console.log(valorInicial);
console.log(`${notas100} nota(s) de R$ 100,00`);
console.log(`${notas50} nota(s) de R$ 50,00`);
console.log(`${notas20} nota(s) de R$ 20,00`);
console.log(`${notas10} nota(s) de R$ 10,00`);
console.log(`${notas5} nota(s) de R$ 5,00`);
console.log(`${notas2} nota(s) de R$ 2,00`);
console.log(`${notas1} nota(s) de R$ 1,00`);