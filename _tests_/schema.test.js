const Schema = require('../lib/Schema');

describe('Schema test module', () => {
  it('validates a working schema', () => {
    const schema = new Schema({
      name: {
        type: String,
        required: true
      },
      age: {
        type: Number
      },
      favoriteWord: {
        type: String
      }
    });

    const person = {
      name: 'Joe',
      age: 23,
      favoriteWord: 'false'
    };
    expect(schema.validate(person)).toEqual({
      name: 'Joe',
      age: 23,
      favoriteWord: 'false'
    });
  });
  
});
