const { readFileSync } = require("fs");

const [firstLine] = readFileSync("stdin", "utf-8")
  .split("\n")
  .map((item) => item.trim());

const [initialPosition, destinyPosition] = firstLine.split(" ");

const board = [];
const columnsBoardMap = {
  a: 0,
  b: 1,
  c: 2,
  d: 3,
  e: 4,
  f: 5,
  g: 6,
  h: 7,
};

const linesBoardMap = {
  8: 0,
  7: 1,
  6: 2,
  5: 3,
  4: 4,
  3: 5,
  2: 6,
  1: 7,
};

// Criando o tabuleiro
for (let line = 0; line <= 7; line++) {
  const column = [];

  for (let col = 0; col <= 7; col++) {
    column.push(false);
  }

  board.push(column);
}

let [columnInitialPosition, lineInitialPosition] = initialPosition.split("");

lineInitialPosition = linesBoardMap[Number(lineInitialPosition)];

const translateColumnInitialPosition = columnsBoardMap[columnInitialPosition];

/* Setando a posição atual do cavalo */
board[lineInitialPosition][translateColumnInitialPosition] = true;

/* Movimentos Disponiveis */
let validateMovements = 8;

/* Dividindo para que seja duas partes das colunas (Para tras e Para frente) */
const availableTotalColumns = validateMovements / 2;

const currentLine = board[lineInitialPosition];

/* Indentificando as linhas disponiveis que vão em cada coluna */
for (let i = 1; i <= availableTotalColumns; i++) {
  let currentColumn = translateColumnInitialPosition;

  /* Deslocamento da coluna */
  let displacementColumn = 0;

  if (i === 1) {
    displacementColumn = 1;
    currentColumn -= displacementColumn;
  } else if (i === 2) {
    displacementColumn = 2;
    currentColumn -= displacementColumn;
  } else if (i === 3) {
    displacementColumn = 1;
    currentColumn += 1;
  } else {
    displacementColumn = 2;
    currentColumn += 2;
  }

  if (
    currentLine[currentColumn] !== undefined &&
    currentLine[currentColumn] === false
  ) {
    let displacementLine = 0;

    /* Descolando duas linhas para cada coluna */
    /* Ou seja serão 4 movimentos de deslocamento de linha para cada coluna */
    if (displacementColumn === 1) {
      displacementLine = 2;
    } else {
      displacementLine = 1;
    }

    if (board[lineInitialPosition - displacementLine]) {
      board[lineInitialPosition - displacementLine][currentColumn] = true;
    }

    if (board[lineInitialPosition + displacementLine]) {
      board[lineInitialPosition + displacementLine][currentColumn] = true;
    }
  }
}

let [columnDestiny, lineDestiny] = destinyPosition.split("");

lineDestiny = linesBoardMap[Number(lineDestiny)];

const translateColumnDestiny = columnsBoardMap[columnDestiny];

if (board[lineDestiny][translateColumnDestiny]) {
  console.log("VALIDO");
} else {
  console.log("INVALIDO");
}
