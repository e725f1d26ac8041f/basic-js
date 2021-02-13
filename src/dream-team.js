const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  
  const firstLetters = new Array();
  for (let member of members) {
    if (typeof member != 'string') continue;
    firstLetters.push(member.trim()[0].toUpperCase());
  }

  return firstLetters.sort().join('');
};
