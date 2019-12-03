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
  CastError, 
  getCaster
} = require('./types.js');

class Validator {
  constructor(field, configuration) {
    this.field = field;
    this.configuration = configuration;
    this.getCaster = getCaster(configuration.type);
    this.required;
  }
  validate(object) {
    const value = object[this.field];
    console.log(value);
    if(!value === this.configuration) throw new CastError();
    else return value;
    
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
  age: 23,
  feathers: false

};
nameValidator.validate(Person);
ageValidator.validate(Person);
featherValidator.validate(Person);
module.exports = {
  nameValidator,
  ageValidator,
  featherValidator,
  Person
};

