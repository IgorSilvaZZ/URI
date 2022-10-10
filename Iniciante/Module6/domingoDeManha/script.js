const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8").split("\n");

const hourTotal = 8 * 60;

lines.forEach((item) => {
  const [hour, minutes] = item.split(":").map(Number);

  const hourForMinutes = hour * 60;

  const totalMinutes = hourForMinutes + minutes;

  const diffHour = hourTotal - totalMinutes;

  let result = 60 - diffHour;

  if (result <= 0) {
    result = 0;
  }
  console.log(`Atraso maximo: ${result}`);
});
