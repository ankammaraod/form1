class MultiLineField {
  constructor(property, descs, parser, validator) {
    this.property = property;
    this.desc = descs;
    this.parser = parser;
    this.validator = validator;
    this.response = [];
    this.index = 0;
  }

  getDescription() {
    return this.desc[this.index] + ' : ';
  }

  fill(response) {
    this.response.push(response);
    this.index++
  }

  validate(response) {
    return this.validator(response);
  }

  isFilled() {
    return this.response.length === this.desc.length;
  }

  parse(content) {
    return this.parser(content);
  }
}

module.exports = { MultiLineField };
