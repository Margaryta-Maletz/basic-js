const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  //countCats([ [0, 1, '^^'], [0, '^^', 2], ['^^', 1, 2] ]) => 3
  let counter = 0; 
  for (let i = 0; i < matrix.length; i++) {
    counter += matrix[i].filter(item => item === '^^').length;
  }
  return counter;
};
