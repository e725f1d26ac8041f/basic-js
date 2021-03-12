const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  const numberOfMoves = (2 ** disksNumber) - 1;
  const turnsPerSecond = turnsSpeed / 3600;
  const secondsToSolve = Math.floor(numberOfMoves / turnsPerSecond);

  const result = new Object();
  result.turns = numberOfMoves;
  result.seconds = secondsToSolve;

  return result;
};
