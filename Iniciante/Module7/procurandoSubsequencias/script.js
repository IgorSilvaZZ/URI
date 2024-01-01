const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8")
  .split("\n")
  .map((item) => item.trim());

let caseQuantity = 1;

while (lines.length !== 0) {
  const firstNumber = lines.shift();
  const secundNumber = lines.shift();

  if (firstNumber && secundNumber) {
    let quantitySequencies = 0;
    let findIndex = -1;
    let lastIndex = 0;

    for (
      let indexSecundNumber = 0;
      indexSecundNumber < secundNumber.length;
      indexSecundNumber++
    ) {
      if (secundNumber[indexSecundNumber] === firstNumber[0]) {
        findIndex = indexSecundNumber;
        lastIndex = indexSecundNumber + 1;
      }

      if (lastIndex !== -1) {
        let match = true;

        for (
          let indexFirstNumber = 0;
          indexFirstNumber < firstNumber.length;
          indexFirstNumber++
        ) {
          if (
            secundNumber[findIndex + indexFirstNumber] !==
            firstNumber[indexFirstNumber]
          ) {
            match = false;
            break;
          }
        }

        if (match) {
          quantitySequencies++;
          findIndex += firstNumber.length - 1;
        }
      }
    }

    console.log(`Caso #${caseQuantity}:`);

    if (quantitySequencies > 0) {
      console.log(`Qtd.Subsequencias: ${quantitySequencies}`);
      console.log(`Pos: ${lastIndex}`);
    } else {
      console.log("Nao existe subsequencia");
    }

    console.log("");

    caseQuantity++;
  }
}
