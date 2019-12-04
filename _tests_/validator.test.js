const Validator = require('../lib/Validator');

describe('Validator module tests', () => {
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
  describe('optional fields response', () => {
    beforeAll(() => {
      validator = new Validator('age', {
        type: Number
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

    it('returns the field', () => {
      const person = {
        name: 'Joe',
        feathers: false
      };

      expect(validator.validate(person)).toBeNull();

    });
  });
});
