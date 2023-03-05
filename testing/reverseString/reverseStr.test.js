/* eslint-disable no-undef */
const reverseStr = require('./reverseStr');

describe('reverse a string', () => {
  test('reverse simple string', () => {
    expect(reverseStr('eminem')).toBe('menime');
  });

  test('reverse string with spaces', () => {
    expect(reverseStr('Chiki Chiki Slim Shady')).toBe('ydahS milS ikihC ikihC');
  });

  test('works with empty strings', () => {
    expect(reverseStr('')).toBe('');
  });
});
