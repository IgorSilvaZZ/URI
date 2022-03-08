const { readFileSync } = require("fs");

function calcularMedia(nota1, nota2, notaOptativa) {
  if (nota1 < nota2) {
    nota1 = nota1 < notaOptativa ? notaOptativa : nota1;
  } else if (nota2 < nota1) {
    nota2 = nota2 < notaOptativa ? notaOptativa : nota2;
  }

  //Calculo da media
  const resultadoMedia = (nota1 + nota2) / 2;

  return resultadoMedia;
}

// Lendo o arquivo de forma sincrona
const input = readFileSync("stdin-rocket", "utf-8");

// Retornando os valores que utilizaremos, do arquivo
let [avaliacao1, avaliacao2, avaliacaoOptativa] = input
  .split(" ")
  .map((valor) => parseInt(valor));

console.log("Inicio da Aplicação");

// Verificando se não contem a avaliacao Optativa
// Caso não tenha, atribua-se o valor -1
if (!avaliacaoOptativa) {
  avaliacaoOptativa = -1;
}

const media = calcularMedia(avaliacao1, avaliacao2, avaliacaoOptativa);

console.log(`Media foi ${media}`);

if (media > 6) {
  console.log("Você foi Aprovado!");
} else if (media >= 3 && media <= 6) {
  console.log("Você ficou Exame!");
} else {
  console.log("Você foi Reprovado!");
}
