/* eslint-disable no-undef */
const caesarCipher = require('./caesarcipher');

describe('Cipher string with caesar cipher', () => {
  test('Simple caesar cipher, from one alphabet letter to next one', () => {
    expect(caesarCipher('Abcd', 1)).toBe('Bcde');
  });

  test('Cipher string which includes z', () => {
    expect(caesarCipher('Zorro', 1)).toBe('Apssp');
  });

  test('Cipher string with multiple words', () => {
    expect(caesarCipher('Slim shady', 1)).toBe('Tmjn tibez');
  });

  test('Works with empty strings', () => {
    expect(caesarCipher('', 1)).toBe('');
  });

  test('Works with no index specified', () => {
    expect(caesarCipher('Gremlin')).toBe('Hsfnmjo');
  });

  test('Works with index bigger than 1', () => {
    expect(caesarCipher('Zorro', 5)).toBe('Etwwt');
  });

  test('This should return the same string', () => {
    expect(caesarCipher('Gremlin', 10)).toBe('Qbowvsx');
  });

  test('Works with very large numbers (test 1)', () => {
    expect(caesarCipher('Zorro', 1500)).toBe('Rgjjg');
  });

  test('Works with very large numbers (Should be one letter further than previous test)', () => {
    expect(caesarCipher('Zorro', 1501)).toBe('Shkkh');
  });
});
