// const count = true;

// let countValue = new Promise(function (resolve, reject) {
//     if (count) {
//         resolve("There is a count value.");
//     } else {
//         reject("There is no count value");
//     }
// });

// console.log(countValue);



// // returns a promise

// let countValue = new Promise(function (resolve, reject) {
//     resolve("Promise resolved");
//   });
  
//   // executes when promise is resolved successfully
  
//   countValue
//     .then(function successValue(result) {
//       console.log(result);
//     })
  
//     .then(function successValue1() {
//       console.log("You can call multiple functions this way.");
//     });

    

const promise = new Promise(function(resolve,reject){
  resolve("Promise is resolved");
})

promise.then((resolve)=>{
  console.log(resolve)
})

