const { readFileSync } = require("fs");

const [firstDay, secundDay, treeDay] = readFileSync("stdin", "utf-8")
  .split(" ")
  .map((item) => Number(item));

// Se a temperatura desceu do 1º para o 2º dia, mas subiu ou permaneceu constante do 2º para o 3º, as pessoas ficam felizes (primeira figura).

// Se a temperatura subiu do 1º para o 2º dia, mas desceu ou permaneceu constante do 2º para o 3º, as pessoas ficam tristes (segunda figura).

// Se a temperatura subiu do 1º para o 2º dia e do 2º para o 3º, mas subiu do 2º para o 3º menos do que subira do 1º para o 2º, as pessoas ficam tristes (terceira figura).

// Se a temperatura subiu do 1º para o 2º dia e do 2º para o 3º, mas subiu do 2º para o 3º no mínimo o tanto que subira do 1º para o 2º, as pessoas ficam felizes (quarta figura).

// Se a temperatura desceu do 1º para o 2º dia e do 2º para o 3º, mas desceu do 2º para o 3º menos do que descera do 1º para o 2º, as pessoas ficam felizes (quinta figura).

// Se a temperatura desceu do 1º para o 2º dia e do 2º para o 3º, mas desceu do 2º para o 3º no mínimo o tanto que descera do 1º para o 2º, as pessoas ficam tristes (sexta figura).

// Se a temperatura permaneceu constante do 1º para o 2º dia, as pessoas ficam felizes se subiu do 2º para o 3º dia ou tristes caso contrário (respectivamente, sétima e oitava figuras).

const differenceOneSecund = Math.abs(secundDay - firstDay);
const differenceTwoTree = Math.abs(treeDay - secundDay);

if (secundDay < firstDay && treeDay >= secundDay) {
  console.log(":)");
} else if (secundDay > firstDay && treeDay <= secundDay) {
  console.log(":(");
} else if (
  secundDay > firstDay &&
  treeDay > secundDay &&
  differenceTwoTree < differenceOneSecund
) {
  console.log(":(");
} else if (
  secundDay > firstDay &&
  treeDay > secundDay &&
  differenceTwoTree >= differenceOneSecund
) {
  console.log(":)");
} else if (
  secundDay < firstDay &&
  treeDay < secundDay &&
  differenceTwoTree < differenceOneSecund
) {
  console.log(":)");
} else if (
  secundDay < firstDay &&
  treeDay < secundDay &&
  differenceTwoTree <= differenceOneSecund
) {
  console.log(":(");
} else if (secundDay === firstDay && treeDay > secundDay) {
  console.log(":)");
} else {
  console.log(":(");
}
