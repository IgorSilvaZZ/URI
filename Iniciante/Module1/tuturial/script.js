// Lendo um conteudo de um arquivo
var input = require("fs").readFileSync("stdin", "utf-8");

// Seperando cada conteudo em um indice do vetor usando o espaço como separador
// Usando a destruturação de um array armazenando cada valor nessa 'variavel' que criamos
// Cada item ou valor do array vai ser transformada em número
var [x, y] = input.split(" ").map((item) => parseInt(item));

// Somando os dois valores que foram pegos do array
var soma = x + y;

// Logando o valor da soma
console.log(soma);
