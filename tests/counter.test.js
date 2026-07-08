const { increment, decrement } = require('../src/counter');

test('increment adds 1', () => {
  expect(increment(5)).toBe(6);
});

test('decrement subtracts 1', () => {
  expect(decrement(5)).toBe(4);
});

test('increment from 0', () => {
  expect(increment(0)).toBe(1);
});
