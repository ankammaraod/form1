const trim = (content) => content.trim();

const validateName = (name) => name.length > 4 && !/.*[\d].*/.test(name);

const validateDate = (dob) => /\d\d\d\d-\d\d-\d\d/.test(dob);

const parseHobbies = (hobbies) => trim(hobbies).split(',');

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
}

exports.formQuestions = formQuestions;



// const questions = [
//   {
//     property: 'name',
//     description: 'Please enter your name',
//     parse: (name) => name.trim(),
//     validate: (name) => name.length > 4 && !/.*[\d].*/.test(name)
//   },
//   {
//     property: 'dob',
//     description: 'Please enter your dob',
//     parse: (dob) => dob.trim(),
//     validate: (dob) => /\d\d\d\d-\d\d-\d\d/.test(dob)
//   },
//   {
//     property: 'hobbies',
//     description: 'Please enter your hobbies',
//     parse: (hobbies) => hobbies.trim().split(','),
//     validate: (hobbies) => hobbies.length > 0
//   },
//   {
//     property: 'mobileNumber',
//     description: 'Please enter your mobile number',
//     parse: (number) => +number,
//     validate: (number) => ('' + number).length === 10
//   },
//   {
//     property: 'address',
//     description: 'Please enter address 1',
//     parse: (address) => address.trim(),
//     validate: (address) => address.length > 0
//   },
//   {
//     property: 'address',
//     description: 'Please enter your address 2',
//     parse: (address) => address.trim(),
//     validate: (address) => address.length > 0
//   }
// ];