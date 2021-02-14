const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    const depth = new Array();
    for (let item of arr) {
      if (Array.isArray(item)) {
        depth.push(this.calculateDepth(item) + 1);
      }
    }

    return depth.length ? Math.max(...depth) : 1;
  }
};