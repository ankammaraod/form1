const trim = (content) => content.trim();

const parseHobbies = (hobbies) => trim(hobbies).split(',');

const validateName = (name) => name.length > 4 && !/.*[\d].*/.test(name);

const validateDate = (dob) => dob.match(/\d{4}-\d{2}-\d{2}/);

const isLenNotZero = (content) => content.length > 0;

const validateMobileNumber = (num) => ('' + num).length === 10;

class Questions {
  constructor() {
    this.questions = [];
  }

  addQuestion(property, desc, parser, validator) {
    this.questions.push(
      {
        property: property,
        description: desc,
        parse: parser,
        validate: validator
      }
    )
  }

  getQuestions() {
    return this.questions;
  }
}

const formQuestions = () => {
  const questions = new Questions();

  questions.addQuestion('name', 'Please enter your name', trim, validateName);
  questions.addQuestion('dob', 'Please enter your dob', trim, validateDate);
  questions.addQuestion('hobbies', 'Please enter your hobbies', parseHobbies, isLenNotZero);
  questions.addQuestion('mobileNumber', 'Please enter your mobileNumber', trim, validateMobileNumber)
  questions.addQuestion('address', 'Please enter your address 1', trim, isLenNotZero)
  questions.addQuestion('address', 'Please enter your address 2', trim, isLenNotZero)

  return questions.getQuestions();
};

exports.formQuestions = formQuestions;
