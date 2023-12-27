const { readFileSync } = require("fs");

const line = readFileSync("stdin", "utf-8");

const [A, B, C, D] = line.split(" ").map((item) => parseFloat(item));

const nota1 = A * 2;

const nota2 = B * 3;

const nota3 = C * 4;

const nota4 = D * 1;

const media = (nota1 + nota2 + nota3 + nota4) / 10;

console.log(`Media: ${media.toFixed(1)}`);

if (media >= 7.0) {
  console.log(`Aluno aprovado.`);
} else if (media >= 5.0 && media <= 6.9) {
  console.log(`Aluno em exame.`);

  const [, notaExame] = line.split("\n").map((item) => parseFloat(item));

  console.log(`Nota do exame: ${notaExame.toFixed(1)}`);

  const mediaFinal = (media + notaExame) / 2;

  if (mediaFinal >= 5.0) {
    console.log(`Aluno aprovado.`);
  } else {
    console.log(`Aluno reprovado.`);
  }

  console.log(`Media final: ${mediaFinal.toFixed(1)}`);
} else {
  console.log(`Aluno reprovado.`);
}
