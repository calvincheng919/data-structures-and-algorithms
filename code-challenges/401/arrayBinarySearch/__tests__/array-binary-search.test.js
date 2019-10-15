'use strict';

const binarySearch = require('../array-binary-search');

describe('Array Binary Search takes 2 parameters: a sorted array and a search key and returns array\'s element equal to the search key', () => {
  let arr = [3,5,7,9,11,15];
  let searchKey = 11;

  test('Function takes a sorted array to search and return index at search key', () => {
    expect(binarySearch(arr, searchKey)).toEqual(4);
  });
  test('Function takes an array to search and an index to search for', () => {
    expect(binarySearch(arr, searchKey)).toEqual(4);
  });


});
