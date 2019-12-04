const getCaster = require('./types.js');

class Validator {
  constructor(field, { type, required }) {
    this.field = field;
    this.type = type;
    this.getCaster = getCaster(type);
    this.required = required;
  }
  validate(object) {
    const value = object[this.field];
    if(this.required && !value) throw new Error(`${this.field} is needed sadly`);
    if(!this.required && !value) return null;
    else return this.getCaster(value);
    
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

module.exports = {
  nameValidator,
  ageValidator,
  featherValidator,
};

