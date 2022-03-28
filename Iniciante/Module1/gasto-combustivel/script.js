const { readFileSync } = require('fs');

const [ tempoGastoViagem, velocidadeMedia ] = readFileSync('stdin', 'utf-8').split("\n").map(item => parseInt(item));

const custoTotal = velocidadeMedia / 12;

const litroNecessarios = tempoGastoViagem * custoTotal;

console.log(`${litroNecessarios.toFixed(3)}`)
