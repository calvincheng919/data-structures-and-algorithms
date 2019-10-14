const arrayShift = require('../array-shift.js');

describe('Array-Shift Code Challenge', () => {
  let arrEven = [1,2,4,5];
  let arrOdd = [6,7,9,1,2];
  let newVal = 99;

  test('For arrays with even length, insert new value in the middle', () => {
    expect(arrayShift(arrEven, newVal)).toEqual([1,2,99,4,5]);
  });
  test('For arrays with odd length, insert new value in the middle index rounded up', () => {
    expect(arrayShift(arrOdd, newVal)).toEqual([6,7,9,99,1,2]);
  });

});
