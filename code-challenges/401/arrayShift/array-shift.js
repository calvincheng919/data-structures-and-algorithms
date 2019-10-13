'use strict';

//create a function that takes 2 paramters; an array and the number that will be inserted in the middle of the array. 

let myArrEven = [2,6,9,13];
let myArrOdd = [1,2,8,5,11];

function insertShiftArray(arr, num){
  //take length, divide by 2, take ceiling - this is the insertion index
  //create an index using length as the index
  //loop back from length, assign length-1 value to length, stop at insertion

  let insertion = Math.ceil(arr.length/2);
  let newArr = new Array(arr.length+1);

  for(let i=0; i< newArr.length; i++){
    if (i > insertion){
      newArr[i] = arr[i-1];
    }else if (i < insertion) {
      newArr[i] = arr[i];
    }else if (i === insertion){
      newArr[i] = num;
    }
  }
  return newArr;
}

console.log(insertShiftArray(myArrEven, 99));
console.log(insertShiftArray(myArrOdd, 99));


