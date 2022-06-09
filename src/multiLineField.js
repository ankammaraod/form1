class MultiLineField {
  constructor(property, descriptions, parser, validator) {
    this.property = property;
    this.desc = descriptions;
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
