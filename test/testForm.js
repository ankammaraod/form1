const { Form } = require('../src/form.js');
const { Field } = require('../src/field.js');
const assert = require('assert');

describe('Form', () => {
  const identity = (x) => x;
  const alwaysTrue = () => true;
  const nameField = new Field('name', 'enter your name', identity, alwaysTrue);
  const dobField = new Field('dob', 'enter your dob', identity, alwaysTrue);


  it('should give current prompt', () => {
    const form = new Form([nameField]);
    assert.deepStrictEqual(form.currPrompt(), 'enter your name : ');
  });

  it('should give next prompt', () => {
    const form = new Form([nameField, dobField]);
    form.fillCurrentField('ankamma');
    assert.deepStrictEqual(form.currPrompt(), 'enter your dob : ');
  });

  it('should return true if quries are over', () => {
    const form = new Form([nameField]);
    form.fillCurrentField('ankamma');
    assert.deepStrictEqual(form.areQueriesOver(), true);
  });

  it('should give entries of the prompts', () => {
    const form = new Form([nameField]);
    form.fillCurrentField('ankammarao');
    assert.deepStrictEqual(form.getEntries(), { 'name': 'ankammarao' });
  });

});
