const { readFileSync } = require('fs');

const [ linha ] = readFileSync('stdin', 'utf-8').split('\n');

const [ A, B, C ] = linha.split(" ").map(item => parseInt(item));

const maiorAB = (A+B+Math.abs(A-B)) / 2;

const maior = (maiorAB+C+Math.abs(maiorAB-C)) / 2;

console.log(`${maior} eh o maior`)