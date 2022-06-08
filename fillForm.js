const { createFields } = require('./src/field.js')
const { Form } = require('./src/form.js');
const { processUserResponse } = require('./src/stdin.js');
const fs = require('fs');

const onResponsesReady = (responses) => {
  fs.writeFileSync('./form.json', JSON.stringify(responses), 'utf-8');
  process.exit(0);
};

const getLines = (respones) => respones.trim().split('\n');

const main = () => {
  const fields = createFields();
  const form = new Form(fields);

  process.stdin.setEncoding('utf8');
  console.log(form.currPrompt());

  process.stdin.on('data', (response) => {
    const lines = getLines(response);
    lines.forEach(line => processUserResponse(line, form, console.log, onResponsesReady));
  })
};

main();
