const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: new Array(),

  getLength() {
    return this.chain.length;
  },
  addLink(value = ' ') {
    this.chain.push(String(value));
    return this;
  },
  removeLink(position) {
    if (Number.isInteger(position) && (position in this.chain)) {
      this.chain.splice(position - 1, 1);
    } else {
      this.chain.length = 0;
      throw new TypeError();
    }

    return this;
  },
  reverseChain() {
    this.chain = this.chain.reverse();
    return this;
  },
  finishChain() {
    const chain = `( ${this.chain.join(' )~~( ')} )`;
    this.chain.length = 0;
    return chain;
  }
};

module.exports = chainMaker;
