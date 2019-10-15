'use strict';

function fib(n){
  let fibnum = [];
  for (let i=0; i<=n; i++){
    if (i===0){
      fibnum.push(0);
    }else if (i === 1){
      fibnum.push(1);
    }else{
      fibnum.push(fibnum[i-1] + fibnum[i-2]);
    }

  }
  return fibnum[fibnum.length-1];
}

console.log(fib(10));
