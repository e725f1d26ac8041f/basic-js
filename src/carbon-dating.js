const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15; 
const HALF_LIFE_PERIOD = 5730;
const RADIOACTIVE_DECAY_CONSTANT = Math.log(2) / HALF_LIFE_PERIOD;

module.exports = function dateSample(sampleActivity) {
  if (
    typeof sampleActivity === 'string' &&
    isFinite(sampleActivity) &&
    sampleActivity > 0 &&
    sampleActivity <= MODERN_ACTIVITY
  ) {
    const sampleAge = Math.log(MODERN_ACTIVITY / sampleActivity) / RADIOACTIVE_DECAY_CONSTANT;
    return Math.ceil(sampleAge);
  }
  
  return false;
};
