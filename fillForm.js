const { createFields } = require('./src/field.js')
const { Form } = require('./src/form.js');
const { registerResponse } = require('./src/stdin.js');
const fs = require('fs');

const onResponsesReady = (responses) => {
  fs.writeFileSync('./form.json', JSON.stringify(responses), 'utf-8');
  process.exit(0);
};

const getLines = (responses) => responses.trim().split('\n');

const main = () => {
  const fields = createFields();
  const form = new Form(fields);

  process.stdin.setEncoding('utf8');
  console.log(form.currPrompt());

  process.stdin.on('data', (response) => {
    const lines = getLines(response);
    lines.forEach(line => registerResponse(line, form, console.log, onResponsesReady));
  })
};

main();
