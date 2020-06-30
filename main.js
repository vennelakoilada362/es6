"use strict"

function *g1(){
  console.log('Hello');
  yield 'Yield 1 Ran..';
  console.log('World');
  yield 'Yeild 2 Ran...';
  return 'Returned..';
}

var g = g1();


for(let val of g){
  console.log(val);
}