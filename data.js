class Data {
  constructor(keys) {
    this.keys = keys;
    this.input = {};
    this.index = 0;
  }

  addInput(content) {
    if (this.keys[this.index] === 'hobbies') {
      content = content.split(',');
    }
    this.input[this.keys[this.index]] = content;
    this.index++;
  }

  toString() {
    console.log(this.input);
  }
}
exports.Data = Data;