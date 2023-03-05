/* eslint-disable no-undef */
const analyzeArray = require('./analyzearray');

describe('Return an object with min, max, avg and array lenght', () => {
  test('Return an object', () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual({
      average: 4,
      min: 1,
      max: 8,
      lenght: 6,
    });
  });

  test('Works with negative values and decimals', () => {
    expect(analyzeArray([-5, 8, 3, 9, 2, 6])).toStrictEqual({
      average: 3.8,
      min: -5,
      max: 9,
      lenght: 6,
    });
  });

  test('Works with no paramater', () => {
    expect(analyzeArray()).toStrictEqual({
      average: 0,
      min: 0,
      max: 0,
      lenght: 0,
    });
  });
});
