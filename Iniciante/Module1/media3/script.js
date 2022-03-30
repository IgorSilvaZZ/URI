const { readFileSync } = require("fs");

const linha = readFileSync("stdin", "utf-8");

const [A, B, C, D] = linha
  .split(" ")
  .map((item) => parseFloat(item).toFixed(1));

const nota1 = A * 2;

const nota2 = B * 3;

const nota3 = C * 4;

const nota4 = D * 1;

const media = ((nota1 + nota2 + nota3 + nota4) / 10).toFixed(1);

console.log(`Media: ${media}`);

if (media >= 7.0) {
  console.log(`Aluno aprovado.`);
} else if (media >= 5.0 && media <= 6.9) {
  console.log(`Aluno em exame.`);

  const [, notaExame] = linha.split("\n");

  console.log(`Nota do exame: ${parseFloat(notaExame).toFixed(1)}`);

  const mediaFinal = ((media + parseFloat(notaExame).toFixed(1)) / 2).toFixed(
    1
  );

  if (mediaFinal >= 5.0) {
    console.log(`Aluno aprovado.`);
  } else {
    console.log(`Aluno reprovado.`);
  }

  console.log(`Media final: ${mediaFinal}`);
} else {
  console.log(`Aluno reprovado.`);
}
