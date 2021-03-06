const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  let result = "";
  members.forEach(item => {
    if (typeof item === 'string') {
      result += item.trim().charAt(0);
    }
  });
  return result.toUpperCase().split("").sort().join('');
};
