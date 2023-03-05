/* eslint-disable no-undef */
const calculator = require('./calculator');

describe('add', () => {
  test('adds pozitive numbers', () => {
    expect(calculator.sum(4, 2)).toBe(6);
  });

  test('adds negative numbers', () => {
    expect(calculator.sum(-4, 2)).toBe(-2);
  });

  test('add 0 and 0', () => {
    expect(calculator.sum(0, 0)).toBe(0);
  });
});

describe('subtract', () => {
  test('subtracts two single digit nums', () => {
    expect(calculator.subtract(9, 5)).toBe(4);
  });

  test('subtract larger nums', () => {
    expect(calculator.subtract(588, 245)).toBe(343);
  });

  test('subtract 0 from 0', () => {
    expect(calculator.subtract(0, 0)).toBe(0);
  });
});

describe('multiply', () => {
  test('muliply two nums', () => {
    expect(calculator.multiply(4, 10)).toBe(40);
  });

  test('multiply with a negative num', () => {
    expect(calculator.multiply(5, -11)).toBe(-55);
  });
});

describe('divide', () => {
  test('divide two nums', () => {
    expect(calculator.divide(20, 5)).toBe(4);
  });

  test('divide with a negative num', () => {
    expect(calculator.divide(-14, 2)).toBe(-7);
  });
});
