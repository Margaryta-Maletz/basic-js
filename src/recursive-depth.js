const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if (Array.isArray(arr)) {
      return 1 + arr.reduce((acc, el) => Math.max(acc,this.calculateDepth(el)), 0);
  }
  return 0;
}
};