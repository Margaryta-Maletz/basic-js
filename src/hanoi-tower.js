const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let minTurn, colSek;
  minTurn = 2**disksNumber - 1;
  colSek = Math.floor(minTurn / (turnsSpeed /60 /60));
  return { turns: minTurn, seconds: colSek };
};
