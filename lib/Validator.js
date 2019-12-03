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
} = require('./types.js');

class Validator {
  constructor(field, configuration) {
    this.field = field;
    this.configuration = configuration;
    this.getCaster = getCaster(configuration.type);
  }
  validate(obj) {
    console.log(obj, 'hi');
    
    
  }
}

const nameValidator = new Validator('name', {
  type: String,
  required: true
});
const ageValidator = new Validator('age', {
  type: Number, 
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
nameValidator.validate(Person);
ageValidator.validate(Person);
featherValidator.validate(Person);
