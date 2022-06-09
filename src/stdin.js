const { Form } = require('./form.js')

const registerResponse = (response, form, logger, callBack) => {

  if (!form.fillCurrentField(response)) {
    logger('Invalid response');
  }

  if (form.areQueriesOver()) {
    logger('Thank you');
    callBack(form.getEntries());
    process.stdin.destroy();
    return;
  }
  logger(form.currPrompt());
};

module.exports = { registerResponse };
