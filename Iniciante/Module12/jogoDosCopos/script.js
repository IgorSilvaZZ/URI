const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8").split("\n");

const positions = {
  A: 0,
  B: 1,
  C: 2,
};

const parsedPosition = {
  0: "A",
  1: "B",
  2: "C",
};

const getPositionMovement = (numberPosition) => {
  if (numberPosition === 1) {
    return [0, 1];
  } else if (numberPosition === 2) {
    return [1, 2];
  } else {
    return [2, 0];
  }
};

const numberMovements = Number(lines.shift());

const positionSelected = lines.shift();

const positionCoin = positions[positionSelected] || 0;

const glasses = [false, false, false];

glasses[positionCoin] = true;

for (let i = 0; i < numberMovements; i++) {
  const typeMovement = Number(lines.shift());

  let [valuePositionOne, valuePositionTwo] = getPositionMovement(typeMovement);

  let valueOne = glasses[valuePositionOne];
  let valueTwo = glasses[valuePositionTwo];

  if (valueOne) {
    valueOne = false;
    valueTwo = true;
  } else if (valueTwo) {
    valueOne = true;
    valueTwo = false;
  }

  glasses[valuePositionOne] = valueOne;
  glasses[valuePositionTwo] = valueTwo;
}

const indexPositionCoin = glasses.findIndex((item) => item);

console.log(parsedPosition[indexPositionCoin]);
