const { readFileSync } = require('fs');

const [ linha ] = readFileSync('stdin', 'utf-8').split('\n');

const [ A, B, C ] = linha.split(" ").map(item => parseFloat(item));

const pi = 3.14159

const triangulo = (A * C) / 2;
const areaCiculo = pi * (C*C);
const trapezio = ((A + B) / 2) * C;
const quadrado = (B * B);
const retangulo = A * B

console.log(`TRIANGULO: ${triangulo.toFixed(3)}`);
console.log(`CIRCULO: ${areaCiculo.toFixed(3)}`);
console.log(`TRAPEZIO: ${trapezio.toFixed(3)}`);
console.log(`QUADRADO: ${quadrado.toFixed(3)}`);
console.log(`RETANGULO: ${retangulo.toFixed(3)}`);