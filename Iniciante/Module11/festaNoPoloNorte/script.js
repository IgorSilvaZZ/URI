const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8").split("\n");

/* Explicação resumida
Todos precisam ser coprimos em relação a ele, ou seja, todos precisam ter um divisor em comum para que ele seja o proximo coprimo a ser colocado.

Passos:
- Descobrir o todos os divisores possiveis dos numeros que foram enviados
- Pegar o maior número da lista
- Coletar também os divisores para o proximo item da lista (maior número + 1)
- Filtrar a lista de divisores possiveis e deixar só os divisores diferente de 1
- Filtrar a partir da lista dos divisores do proximo número com a filtragem feita acima e verificar quais não contem os divisores em comum
- Se não tiver divisor em comum ele é coprimo a todos e será apresentado
 */

const quantityNumber = Number(lines.shift());

const allNumbers = lines.shift().split(" ").map(Number);

/* Lista de divisores dos numeros enviados
   {
        7 : [1, 7],
        1: [1],
        9: [1, 3, 9],
        3: [1, 3]
   }
*/

/* 
    Filtragem de divisores diferentes de 1 dos numeros enviados
    {
        7: [7],
        1: [],
        9: [3, 9],
        3: [3]
    }
*/

const getDividersByNumber = (number) => {
  let dividersByNumber = [];

  /*  Raiz quadrada */
  const squareRootByNumber = Math.sqrt(number);

  for (let i = 1; i <= squareRootByNumber; i++) {
    /* Descobrindo se o i é divisivel pelo número enviado por parametro */
    if (number % i === 0) {
      /* Adicionando o menor divisor */
      dividersByNumber.push(i);

      if (i !== number / i) {
        /* Adicionando o maior divisor */
        dividersByNumber.push(number / i);
      }
    }
  }

  return dividersByNumber;
};

const dividersByNumbers = {};

let maxNumber = Number.MIN_VALUE;

for (let i = 0; i <= quantityNumber; i++) {
  const currentNumber = Number(allNumbers[i]);

  dividersByNumbers[currentNumber] = getDividersByNumber(currentNumber);

  if (maxNumber < currentNumber) {
    maxNumber = currentNumber;
  }
}

const nextNumber = maxNumber + 1;

const dividersByNextNumber = getDividersByNumber(nextNumber);

const filteredDividersByNumbers = Object.keys(dividersByNumbers).map((key) => {
  const dividersNotWithOneNumber = dividersByNumbers[key].filter(
    (item) => item !== 1
  );

  return dividersNotWithOneNumber;
});

console.log(filteredDividersByNumbers);
