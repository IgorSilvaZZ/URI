const { readFileSync } = require("fs");

const [A, B] = readFileSync("stdin", "utf-8").split(" ").map(Number);

if (A > B) {
  console.log(A);
} else if (B > A) {
  console.log(B);
} else {
  console.log(A);
}
