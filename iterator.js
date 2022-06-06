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
}
exports.Iterator = Iterator;