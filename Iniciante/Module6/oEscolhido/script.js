const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8").split("\n");

let [numberLines] = lines;

numberLines = Number(numberLines);

const [registration, note] = lines[1].split(" ").map(Number);

let bestStudent = {
  registration,
  note,
};

for (let i = 1; i <= numberLines; i++) {
  const [registrationStudent, noteStudent] = lines[i].split(" ").map(Number);

  if (noteStudent > bestStudent.note) {
    bestStudent.note = noteStudent;
    bestStudent.registration = registrationStudent;
  }
}

if (bestStudent.note >= 8) {
  console.log(bestStudent.registration);
} else {
  console.log("Minimum note not reached");
}
