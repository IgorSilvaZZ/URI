const { readFileSync } = require('fs');

const [ raio ] = readFileSync('stdin', 'utf-8').split('\n').map(item => parseFloat(item));

const pi = 3.14159

const volume = (4/3) * pi * (raio*raio*raio);

console.log(`VOLUME = ${volume.toFixed(3)}`);