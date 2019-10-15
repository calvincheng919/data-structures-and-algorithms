'use strict';

let sortedArray = [1,3,5,6,8,9,56,67,99, 112,134];

function binarySearch(arr, searchKey) {
  //take a sorted array and divide it by 2
  //if mid value is less than searchKey
  let start = 0;
  let end = arr.length -1;
  let mid = 0;

  while (start <= end){
    mid = Math.floor((start+end)/2);
    if (arr[mid] < searchKey){
      start = mid+1;
    }else if (arr[mid] > searchKey){
      end = mid-1;
    }else {
      return mid;
    }
  }

}

console.log(binarySearch(sortedArray, 56));

module.exports = binarySearch;
