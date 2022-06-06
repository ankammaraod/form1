const display = (contents) => {
  console.log(contents);
}

const main = () => {
  const formData = {};
  const junk = [
    {
      property: 'name',
      description: 'Please enter your name : ',
      parse: (name) => name.trim(),
      validate: (name) => name.length > 4
    },
    {
      property: 'dob',
      description: 'please enter your dob : ',
      parse: (dob) => dob.trim(),
      validate: (dob) => /\d\d\d\d-\d\d-\d\d/.test(dob)
    },
    {
      property: 'hobbies',
      description: 'please enter your hobbies : ',
      parse: (hobbies) => hobbies.trim().split(','),
      validate: (hobbies) => hobbies.length >= 1
    },
    {
      property: 'mobileNumber',
      description: 'please enter your mobile number : ',
      parse: (number) => +number,
      validate: (number) => ('' + number).length === 10
    },
    {
      property: 'address1',
      description: 'please enter address 1 : ',
      parse: (add) => add.trim(),
      validate: () => true
    },
    {
      property: 'address1',
      description: 'please enter your address 2 : ',
      parse: (add) => add.trim(),
      validate: () => true
    }
  ];

  process.stdin.setEncoding('utf8');

  let index = 0;
  console.log(junk[index].description);
  process.stdin.on('data', (chunk) => {
    const parsedContent = junk[index].parse(chunk);

    if (junk[index].validate(parsedContent)) {
      const key = junk[index].property;
      if (formData[key]) {
        formData[key] += ', ' + parsedContent;
      } else {
        formData[key] = parsedContent;
      }
      index++;
    }

    if (index >= junk.length) {
      console.log('thank you')
      display(formData);
      process.exit(0);
    }
    console.log(junk[index].description);
  })
}

main()