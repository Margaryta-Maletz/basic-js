const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (value === undefined || value === null) {
      this.chain.push('( null )');
    } else {
      this.chain.push('( '+value.toString()+' )');
    }
    return this;
  },
  removeLink(position) {
    if (position === undefined || !Number.isInteger(position)) {
      this.chain = [];
      throw Error();
    }
    this.chain.splice(position-1,1);
    return this;
  },
  reverseChain() {
    this.chain = this.chain.reverse();
    return this;
  },
  finishChain() {
    const finish = this.chain.join('~~');
    this.chain = [];
    return finish;
  }
};

module.exports = chainMaker;
