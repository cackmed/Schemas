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
  constructor(field, { type, required }) {
    this.field = field;
    this.type = type;
    this.getCaster = getCaster(type);
    this.required = required;
  }
  validate(object) {
    const value = object[this.field];
    console.log(value);
    if(this.required && !value) throw new CastError(`${this.field} is needed sadly`);
    if(!this.required && !value) return null;
    else return this.getCaster;
    
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
  required: false
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

