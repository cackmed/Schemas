const isString = value => typeof value === 'string';
const isNumber = value => typeof value === 'number';
const isBoolean = value => typeof value === 'boolean';
const isArray = value => Array.isArray(value);
const isObject = value => typeof value === 'object' && !isArray(value);
const isFunction = value => value instanceof Function;

const castToString = value => {
  if(isString(value)) return value;
  if(isNumber(value)) return value.toString();
  if(isBoolean(value)) return value.toString();
  if(isArray(value)) return value.toString();
  throw new CastError(String, value);
};

const castToNumber = value => {
  if(isNumber(value)) return value;
  const number = Number(value);
  if(isNaN(number)) throw new CastError(Number, value);
  return number;
};

const castToBoolean = value => {
  if(isBoolean(value)) return value;
  if(value === 1) return true;
  if(value === 0) return false;
  throw new CastError(Boolean, value);
};

const castToArray = caster => value => {
  try {
    return value.map(caster);
  } catch(e) {
    throw new CastError(Array, value);
  }
};

class CastError extends Error {
  constructor(Type, value) {
    const type = Type.name;
    super(`Cannot cast >>${value}<< to ${type}`);
    this.type = type;
    this.value = value;
  }
}

const casters = {
  String: castToString,
  Number: castToNumber,
  Boolean: castToBoolean
};

const getCaster = Type => {
  if(isArray(Type)) return castToArray(casters[Type[0].name]);
  
  return casters[Type.name] || null;
};

module.exports = {
  isString,
  isNumber,
  isBoolean,
  isObject,
  isArray,
  isFunction,
  CastError,
  getCaster,
  castToString,
  castToNumber,
  castToBoolean,
  castToArray
};
