const { readFileSync } = require('fs');

const input = readFileSync('stdin', 'utf-8');

let segundos = parseInt(input);

const horas = parseInt(segundos / 3600);

segundos = segundos % 3600;

const minutos = parseInt(segundos / 60);

segundos = segundos % 60;

console.log(`${horas}:${minutos}:${segundos}`);