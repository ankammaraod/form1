class Iterator {
  constructor(list) {
    this.list = list;
    this.index = 0;
  }

  currElement() {
    return this.list[this.index];
  }
  incrementIndex() {
    this.index++;
  }
  getIndex() {
    return this.index;
  }
  areQueriesOver() {
    return this.index >= this.list.length;
  }
}
exports.Iterator = Iterator;