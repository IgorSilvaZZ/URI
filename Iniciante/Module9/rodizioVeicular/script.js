const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8").split("\n");

const [numberLines] = lines;

const restrictions = {
  "1_2": "MONDAY",
  "3_4": "TUESDAY",
  "5_6": "WEDNESDAY",
  "7_8": "THURSDAY",
  "9_0": "FRIDAY",
};

for (let line = 1; line <= numberLines; line++) {
  const currentPlaque = lines[line].trim();

  const regexFormat = /^[A-Z]{3}\-[0-9]{4}?$/;

  const verifyFormat = regexFormat.test(currentPlaque);

  if (verifyFormat) {
    const finalDigit = String(currentPlaque[currentPlaque.length - 1]);

    let dayRestriction = "";

    for (key in restrictions) {
      if (key.includes(finalDigit)) {
        dayRestriction = restrictions[key];
        break;
      }
    }

    console.log(dayRestriction);
  } else {
    console.log("FAILURE");
  }
}
