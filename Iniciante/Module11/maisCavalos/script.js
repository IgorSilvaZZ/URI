const { readFileSync } = require("fs");

const [initialPosition, destinyPosition] = readFileSync("stdin", "utf-8")
  .split("\n")
  .map((item) => item.trim());

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

// Criando o tabuleiro
for (let line = 7; line >= 0; line--) {
  const column = [];

  for (let col = 0; col <= 7; col++) {
    column.push(false);
  }

  board.push(column);
}

const [columnInitialPosition, lineInitialPosition] = initialPosition.split("");

const translateColumnInitialPosition = columnsBoardMap[columnInitialPosition];

/* Setando a posição atual do cavalo */
board[Number(lineInitialPosition)][translateColumnInitialPosition] = true;

/* Movimentos Disponiveis */
let validateMovements = 8;

/* Dividindo para que seja duas partes das colunas (Para tras e Para frente) */
const availableTotalColumns = validateMovements / 2;

/* Indentificando as linhas disponiveis que vão em cada coluna */
for (let i = 1; i <= availableTotalColumns; i++) {
  let currentColumn = translateColumnInitialPosition + 1;
}
