const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let arr = [];
  if (options.additionRepeatTimes === undefined && !(options.addition === undefined)) {
    arr.push(options.addition);
  }

  for (let i = 0; i < options.additionRepeatTimes; i++) {
    arr.push(String(options.addition));
  }
  (options.additionSeparator === undefined) ? str += arr.join('|') : str += arr.join(options.additionSeparator);

  arr = [];
  if (options.repeatTimes === undefined) {
    arr.push(str);
  }
  for (let j = 0; j < options.repeatTimes; j++) {
    arr.push(String(str));
  }
  (options.separator === undefined) ? str = arr.join('+') : str = arr.join(options.separator);

  return str;
};
  


/*repeatTimes: 4, separator: '1L467Kdqx2', addition: 'IMqCarClDg', additionRepeatTimes: 8, additionSeparator: 'U7L9D0f8pb'*/