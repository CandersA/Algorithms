/* eslint-disable no-undef */
const capitalizeFirstLetter = require('./capitalize');

describe('capitalize first letter of string', () => {
  test('Captialize first letter of single word', () => {
    expect(capitalizeFirstLetter('hello')).toBe('Hello');
  });

  test('Capitalize first letter of a sentance', () => {
    expect(capitalizeFirstLetter('my name is John')).toBe('My name is John');
  });

  test('Works if empty string passed', () => {
    expect(capitalizeFirstLetter('')).toBe('');
  });
});
