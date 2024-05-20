const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8").split("\n");

const numberShips = Number(lines.shift());

for (let i = 0; i < numberShips; i++) {
  let minIntensity = Number.MAX_VALUE;

  const currentCoordinates = lines[i].split(" ").map(Number);

  const pointsCurrentCoordinates = {
    x: currentCoordinates[0],
    y: currentCoordinates[1],
    z: currentCoordinates[2],
  };

  for (let j = 0; j < numberShips; j++) {
    if (i != j) {
      const compareCoordinates = lines[j].split(" ").map(Number);

      const pointsCompareCoordinates = {
        x: compareCoordinates[0],
        y: compareCoordinates[1],
        z: compareCoordinates[2],
      };

      const distanceOne = Math.pow(
        pointsCompareCoordinates.x - pointsCurrentCoordinates.x,
        2
      );
      const distanceTwo = Math.pow(
        pointsCompareCoordinates.y - pointsCurrentCoordinates.y,
        2
      );
      const distanceTree = Math.pow(
        pointsCompareCoordinates.z - pointsCurrentCoordinates.z,
        2
      );

      const resultDistance = Math.sqrt(
        distanceOne + distanceTwo + distanceTree
      );

      if (resultDistance < minIntensity) {
        minIntensity = resultDistance;
      }
    }
  }

  if (minIntensity <= 20) {
    console.log("A");
  } else if (minIntensity > 20 && minIntensity <= 50) {
    console.log("M");
  } else {
    console.log("B");
  }
}
