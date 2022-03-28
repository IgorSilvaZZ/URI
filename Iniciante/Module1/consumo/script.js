const { readFileSync } = require('fs');

const [ X, Y ] = readFileSync('stdin', 'utf-8').split('\n');

const distanciaTotal = parseInt(X);
const combustivelTotal = parseFloat(Y);

const consumoMedio = distanciaTotal / combustivelTotal;

console.log(`${consumoMedio.toFixed(3)} km/l`);