const { readFileSync } = require("fs");

const input = readFileSync("stdin", "utf-8");

const idadeEmDias = parseInt(input);

const anos = parseInt(idadeEmDias / 365);

const meses = parseInt((idadeEmDias % 365) / 30);

const dias = parseInt((idadeEmDias % 365) % 30);

let resultado = `${anos} ano(s)
${meses} mes(es)
${dias} dia(s)`;

console.log(resultado);
