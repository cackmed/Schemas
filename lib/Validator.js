const {
  // isNumber,
  // castToNumber,
  // isString,
  // castToString,
  // isBoolean,
  // castToBoolean,
  // isObject,
  // isArray,
  // isFunction,
  // castToArray, 
  getCaster
} = require('../lib/types.js');

class Validator {
  constructor(required, type) {
    this.type = type;
    this.required = required;
    this.caster = getCaster(type);
  }
}

const nameValidator = new Validator('name', {
  type: String,
  required: true
});
const ageValidator = new Validator('age', {
  type: String, 
  required: true
});
const featherValidator = new Validator('feathers', {
  type: Boolean,
  required: true
});

const Person = {
  name: 'Joe',
  age: '5',
  feathers: false

};
nameValidator.caster(Person);
ageValidator.caster(Person);
featherValidator.caster(Person);
