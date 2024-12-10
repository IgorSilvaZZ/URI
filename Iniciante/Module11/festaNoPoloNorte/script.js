const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8").split("\n");

const quantityNumber = Number(lines.shift());

const allNumbers = lines.shift().split(" ").map(Number);

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

let maxNumber = Math.max(...allNumbers);

let dividersByNumbers = [];

/* Os divisores dos numeros enviados precisam ser coletados uma unica vez */
for (let i = 0; i < quantityNumber; i++) {
  const currentNumber = Number(allNumbers[i]);

  const dividers = getDividersByNumber(currentNumber);

  dividers.forEach((item) => {
    if (item !== 1 && !dividersByNumbers.includes(item)) {
      dividersByNumbers.push(item);
    }
  });
}

let nextNumber = maxNumber + 1;

while (true) {
  const dividersByNextNumber = getDividersByNumber(nextNumber).filter(
    (item) => item !== 1
  );

  const hasConflict = dividersByNumbers.some((item) =>
    dividersByNextNumber.includes(item)
  );

  if (!hasConflict) {
    break;
  }

  nextNumber++;
}

console.log(nextNumber);
