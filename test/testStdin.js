const { registerResponse } = require('../src/stdin.js');
const { Form } = require('../src/form.js');
const { Field } = require('../src/field.js');
const assert = require('assert');

const identity = x => x;
const alwaysTrue = () => true
describe('registerResponse', () => {
  const nameField = new Field('name', 'Please enter your name', identity, alwaysTrue);
  const dobField = new Field('dob', 'Please enter your dob', identity, alwaysTrue);

  it('should register a single response', () => {
    const form = new Form([nameField]);
    const logger = (x) => display.push(x);
    const cb = (x) => jsonContent.push(x);
    const display = [];
    const jsonContent = [];

    registerResponse('ankamma', form, logger, cb);

    assert.deepStrictEqual(display, ["Thank you"]);
    assert.deepStrictEqual(jsonContent, [{ name: 'ankamma' }]);
  });

  it('should register two responses', () => {
    const form = new Form([nameField, dobField]);
    const logger = (x) => display.push(x);
    const cb = (x) => jsonContent.push(x);
    const display = [];
    const jsonContent = [];
    registerResponse('ankamma', form, logger, cb);
    registerResponse('2001-12-14', form, logger, cb);

    assert.deepStrictEqual(display, ['Please enter your dob : ', 'Thank you']);
    assert.deepStrictEqual(jsonContent, [{ name: 'ankamma', dob: '2001-12-14' }]);
  });
});