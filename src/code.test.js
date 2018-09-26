const add = require('./code.js');

test('adds to numbers',()=>{
    const expected = 5;
    const result = add(2,3);
    expect(result).toBe(expected);
})