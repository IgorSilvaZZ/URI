const { readFileSync } = require("fs");

const [creditOne, creditTwo, creditThree] = readFileSync("stdin", "utf-8")
  .split(" ")
  .map(Number);

if (
  creditOne === creditTwo ||
  creditOne === creditThree ||
  creditTwo === creditOne ||
  creditTwo === creditThree
) {
  console.log("S");
} else if (
  creditOne + creditTwo === creditThree ||
  creditOne + creditThree === creditTwo ||
  creditTwo + creditThree === creditOne
) {
  console.log("S");
} else {
  console.log("N");
}
