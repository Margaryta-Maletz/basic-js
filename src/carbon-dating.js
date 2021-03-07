const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (sampleActivity === undefined) {
    return false;
  }

  if (!(typeof(sampleActivity) === 'string')) {
    return false;
  }

  if (!Number(sampleActivity)) {
    return false;
  }

  if (sampleActivity <= 0) {
    return false;
  }

 if (sampleActivity > MODERN_ACTIVITY) {
    return false;
  }
  return Math.ceil(Math.log(MODERN_ACTIVITY/+sampleActivity)/(Math.LN2/HALF_LIFE_PERIOD));
};
