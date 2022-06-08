const { createFields } = require('./field.js')
const { Form } = require('./form.js');
const { processUserResponse } = require('./stdin.js');
const fs = require('fs');

const onResponsesReady = (responses) => {
  fs.writeFileSync('./form.json', JSON.stringify(responses), 'utf-8');
  process.exit(0);
};


const main = () => {
  const fields = createFields();
  const form = new Form(fields);

  process.stdin.setEncoding('utf8');
  console.log(form.currPrompt());

  process.stdin.on('data', (response) => {
    processUserResponse(response.trim(), form, console.log, onResponsesReady);
  })
};

main();
