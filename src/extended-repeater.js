const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  const stringToRepeat = String(str);
  const repeatTimes = options.repeatTimes || 1;
  const separator = options.separator || '+';
  const addition = String('addition' in options ? options.addition : '');
  const additionRepeatTimes = options.additionRepeatTimes || 1;
  const additionSeparator = options.additionSeparator || '|';

  const additionRepeatedString = new Array(additionRepeatTimes).fill(addition).join(additionSeparator);
  const result = new Array(repeatTimes).fill(`${stringToRepeat}${additionRepeatedString}`).join(separator);

  return result;
};
  