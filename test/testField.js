const { Field } = require('../src/field.js');
const assert = require('assert');

describe('field', () => {
  it('should give description', () => {
    const nameField = new Field('name', 'enter name', (x) => x, () => true);

    const actual = nameField.getDescription();
    assert.deepStrictEqual(actual, 'enter name : ');
  });

  it('should fill the response', () => {
    const nameField = new Field('name', 'enter name', (x) => x, () => true);
    nameField.fill('abin');
    assert.deepStrictEqual(nameField.response, 'abin');
  });

  it('should validate the given response', () => {
    const validator = (name) => name.length > 4 && !/.*[\d].*/.test(name);
    const nameField = new Field('name', 'enter name', (x) => x, validator);

    const actual1 = nameField.validate('ankamma');
    assert.deepStrictEqual(actual1, true);

    const actual2 = nameField.validate('abin');
    assert.deepStrictEqual(actual2, false);
  });

  it('should parse the given response', () => {
    const commaSplit = (text) => text.split(',');

    const hobbiesField = new Field('hobbies', '', commaSplit, () => true);
    const actual = hobbiesField.parse('playing,dancing');
    assert.deepStrictEqual(actual, ['playing', 'dancing']);
  });
});
