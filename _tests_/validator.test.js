const Validator  = require('../lib/validator.js');

describe('Validator', () => {
  let validator;

  describe('required fields', () => {
    beforeAll(() => {
      validator = new Validator('age', {
        type: Number,
        required: true
      });
    });

    it('returns the field', () => {
      const person = {
        name: 'Joe',
        age: 23,
        feathers: false
      };

      expect(validator.validate(person)).toEqual(23);
    });

    it('returns the field cast to type', () => {
      const person = {
        name: 'Joe',
        age: 23,
        feathers: false
      };

      expect(validator.validate(person)).toEqual(23);
    });

  });
});
