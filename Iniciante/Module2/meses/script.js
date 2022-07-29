const { readFileSync } = require("fs");

const line = readFileSync("stdin", "utf-8");

const [mouth] = line.split("\n").map((item) => parseInt(item));

const mounts = {
  1: "January",
  2: "February",
  3: "March",
  4: "April",
  5: "May",
  6: "June",
  7: "July",
  8: "August",
  9: "September",
  10: "October",
  11: "November",
  12: "December",
};

if (mounts[mouth]) {
  console.log(mounts[mouth]);
}
