class Iterator {
  constructor(list) {
    this.list = list;
    this.index = 0;
  }

  currElement() {
    return this.list[this.index];
  }

  nextElement() {
    this.index++;
    return this.currElement();
  }

  areQueriesOver() {
    return this.index >= this.list.length;
  }
}
exports.Iterator = Iterator;