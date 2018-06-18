"use strict";

function* generateSequence() {
  yield 1;
  return 2;
}

let generator = generateSequence();

let first = generator.next();
// console.log(first);
let two = generator.next();
// console.log(first);
// console.log(two);



function* generateTest() {
  let fn1 = 1;
  while (true) {
    console.log('-' + fn1, reset);
    let reset =  yield fn1++;
  }
}

let test = generateTest();

console.log('-----',test.next())
console.log('-----',test.next())
console.log('-----',test.next())
console.log('-----',test.next(true))
console.log('-----',test.next())


// function* fibonacci(){
//   let fn1 = 1;
//   let fn2 = 1;
//   while (true){
//     let current = fn2;
//     fn2 = fn1;
//     fn1 = fn1 + current;
//     let reset = yield current;
//     console.log('----', reset, current );
//     if (reset){
//       fn1 = 1;
//       fn2 = 1;
//     }
//   }
// }
//
// var sequence = fibonacci();
//
// console.log(sequence.next().value);
// console.log(sequence.next().value);
// console.log(sequence.next().value);
// console.log(sequence.next().value);
// console.log(sequence.next().value);
// console.log(sequence.next().value);
