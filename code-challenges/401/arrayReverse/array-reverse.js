'use strict';

function reverseArray(arr){
  let newArray = [];
  let counter = 0;
  for (let i=arr.length-1; i>=0; i--){
    newArray[counter] = arr[i];
    counter++;
  }
  return newArray;
} 

console.log(reverseArray([1,2,3,5,7,9]));