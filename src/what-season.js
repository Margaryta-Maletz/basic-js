const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  //spring, summer, autumn (fall), winter.
  //'Unable to determine the time of year!'
  //const springDate = new Date(2020, 02, 31)
  //getSeason(springDate) => 'spring'
  if (date === undefined) {
    return 'Unable to determine the time of year!';
  }

  if (!(date instanceof Date)){
    throw Error();
  }

  Date.prototype.toString.call(date);

  switch (date.getMonth()){
    case 2 :
    case 3 :
    case 4 : return 'spring'; break;
    case 5 :
    case 6 :
    case 7 : return 'summer'; break;
    case 8 :
    case 9 :
    case 10 : return 'autumn'; break;
    case 11 :
    case 0 :
    case 1 : return 'winter'; break;
    default : throw Error('');
  }

};
