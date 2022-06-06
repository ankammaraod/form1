const { Data } = require('./data.js');
const { validate } = require('./validation.js');
const questions = [
  'enter you name : ',
  'enter you dob : ',
  'enter you hobbies : '
]

const main = () => {
  process.stdin.setEncoding('utf8');
  const keys = ['name', 'dob', 'hobbies'];
  const data = new Data(keys);

  let index = 0;

  console.log(questions[index]);

  process.stdin.on('data', (chunk) => {

    if (validate(keys[index], chunk)) {
      data.addInput(chunk.trim());
      index++;
    }

    if (index >= questions.length) {
      console.log('thank you')
      data.toString();
      process.exit(0);
    }
    console.log(questions[index]);
  })
}

main()