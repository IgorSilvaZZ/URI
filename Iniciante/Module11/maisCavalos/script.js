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

/* Link para saber movimentos do cavalo */
/* https://www.chess.com/pt-BR/terms/cavalo-xadrez */

/* Movimentos do cavalo */
/* 
    Ele se move uma casa para cima ou para baixo na vertical e mais duas casas na horizontal
    OU
    Duas casas para cima ou para baixo na vertical e mais uma casa na horizontal.
*/

// Criando o tabuleiro
for (let line = 0; line <= 7; line++) {
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

console.log(board);
