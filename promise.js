
let newPromise = new Promise( function(resolve, reject) {

  let num = 1;

  setTimeout(() => {

      resolve('resolve');
      // reject('reject');

  }, 1000);


});

newPromise
  .then(
    result => {
      console.log("Fulfilled: " + result); // result - аргумент resolve
    },
    error => {
      console.log("Rejected: " + error); // error - аргумент reject
    }
  )

newPromise
  .catch(
    error => {
      console.log('Rejected')
    }
  )
