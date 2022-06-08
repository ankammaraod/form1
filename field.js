const trim = (content) => content.trim();

const parseHobbies = (hobbies) => trim(hobbies).split(',');

const identity = (x) => x;

const validateName = (name) => name.length > 4 && !/.*[\d].*/.test(name);

const validateDate = (dob) => dob.match(/\d{4}-\d{2}-\d{2}/);

const isLenNotZero = (content) => content.length > 0;

const isLenTen = (num) => ('' + num).length === 10;

class Field {
  constructor(property, desc, parser, validator) {
    this.property = property;
    this.desc = desc;
    this.parser = parser;
    this.validator = validator;
    this.response = null;
  }

  getDescription() {
    return this.desc + ' : ';
  }

  fill(response) {
    this.response = response;
  }

  validate(response) {
    return this.validator(response);
  }

  parse(content) {
    return this.parser(content);
  }

}

const createFields = () => {
  const nameField = new Field('name', 'Please enter your name', identity, validateName);
  const dobField = new Field('dob', 'Please enter your dob', identity, validateDate);
  const hobbiesField = new Field('hobbies', 'Please enter your hobbies', parseHobbies, isLenNotZero);
  const mobileNumber = new Field('mobileNumber', 'Please enter your mobile number', identity, isLenTen);
  return [nameField, dobField, hobbiesField, mobileNumber];
};

module.exports = { createFields, Field };
