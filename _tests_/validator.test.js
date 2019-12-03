const {
  nameValidator,
  ageValidator,
  featherValidator,
} = require('../lib/validator.js');
const Person = {
  name: 'Joe',
  age: 23,
  feathers: false
};
const who = {
  what: 'hi'
};

describe('validation method module', () => {
  describe('validator methods tests', () => {
    it('nameValidator works', () => {
      expect(nameValidator.validate(Person)).toEqual(Person.name);
      expect(nameValidator.validate(who)).toEqual(Error);
      expect(ageValidator.validate(Person)).toEqual(Person.age);
      expect(featherValidator.validate(Person)).toEqual(Person.feathers);
    });
  });
});

