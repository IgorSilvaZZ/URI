const { readFileSync } = require('fs');

const [ linha, linha2 ] = readFileSync('stdin', 'utf-8').split('\n');

const [ x1, y1 ] = linha.split(" ").map(item => parseFloat(item))
const [ x2, y2 ] = linha2.split(" ").map(item => parseFloat(item))

const calculoX = Math.pow(x2-x1, 2);
const calculoY = Math.pow(y2-y1, 2);

const distancia = Math.sqrt(calculoX + calculoY)

console.log(`${distancia.toFixed(4)}`)