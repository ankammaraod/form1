const assert = require('assert');

const properties = {
  name: (name) => name.length > 4,
  dob: (dob) => /\d\d\d\d-\d\d-\d\d/.test(dob),
  hobbies: (hobbies) => hobbies.length > 1
}

const validate = (key, value) => {
  return properties[key](value);
};

exports.validate = validate;