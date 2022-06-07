const { Iterator } = require('./iterator.js');
const { formQuestions } = require('./questions.js');

function processUserInput(chunk, formData, iterator) {
  const parsedContent = iterator.currElement().parse(chunk);

  if (iterator.currElement().validate(parsedContent)) {
    const property = iterator.currElement().property;

    if (formData[property]) {
      formData[property] += '\n' + parsedContent;
    }
    else {
      formData[property] = parsedContent;
    }
    iterator.nextElement();
  }
  return formData;
};

const quitProcess = (formData) => {
  console.clear();
  console.log('Thank you');
  console.log(formData);
  process.exit(0);
};

const main = () => {
  const questions = formQuestions();
  let formData = {};
  process.stdin.setEncoding('utf8');
  const iterator = new Iterator(questions);

  console.log(iterator.currElement().description, ':');
  process.stdin.on('data', (chunk) => {
    formData = processUserInput(chunk, formData, iterator);

    if (iterator.areQueriesOver()) {
      quitProcess(formData);
    }
    console.log(iterator.currElement().description, ':');
  })
};

main()