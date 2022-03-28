const { readFileSync } = require('fs');

const [ km ] = readFileSync('stdin', 'utf-8').split("\n").map(item => parseInt(item));

const distancia = km * 2;

console.log(`${distancia} minutos`);