'use strict';

let inputArr1 = [ [1, 2, 3], [3, 5, 7], [1, 7, 10]];
let inputArr2 = [ [0, 1, 5], [-4, 7, 2], [-3, 12, 11]];

function sumMatrixRow(arr){
  let summedArr = [];
  let rowSum = 0;
  for (let i=0 ; i < arr.length; i++){
    rowSum=0;
    for (let j=0; j< arr[i].length ; j++){
      rowSum += arr[i][j];
    }
    summedArr.push(rowSum);
  }
  return summedArr;
}

console.log(sumMatrixRow(inputArr1));
console.log(sumMatrixRow(inputArr2));
