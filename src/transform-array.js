const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw new Error('The argument must be an array');

  const result = new Array();
  let discardItem = false;
  let prevItemExists = false;

  for (let i = 0; i < arr.length; i++) {
    if (discardItem) {
      discardItem = false;
      prevItemExists = false;
      continue;
    }
    
    switch(arr[i]) {
      case '--discard-next':
        if ((i + 1) < arr.length) {
          discardItem = true;
        }
        continue;
      case '--discard-prev':
        if (prevItemExists) {
          result.pop();
        }
        continue;
      case '--double-next':
        if ((i + 1) < arr.length) {
          result.push(arr[i + 1]);
        }
        continue;
      case '--double-prev':
        if (prevItemExists) {
          result.push(arr[i - 1]);
        }
        continue;
      default:
        result.push(arr[i]);
        prevItemExists = true;
    }
  }

  return result;
};
