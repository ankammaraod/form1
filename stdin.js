const { Form } = require('./form.js')

function processUserResponse(response, form, logger, callBack) {

  if (form.fillCurrentField(response)) {
    form.nextPrompt();
  }

  if (form.areQueriesOver()) {
    logger('Thank you');
    callBack(form.getEntries());
    process.exit(0);
  }
  logger(form.currPrompt());
};

module.exports = { processUserResponse };
