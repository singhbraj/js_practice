// const sum =(a,b) =>
// {
//     console.log(this)
//    return a+b;
// }

// let res = sum(1,2);
// console.log(res)

// function sum(a,b)
// {
//   console.log(this)
//   return a+b;
// }

// let Sum =sum(2,3);
// console.log(Sum)

var obj1 = {
    valueOfThis: function(){
      return this;
    }
  }
  var obj2 = {
    valueOfThis: ()=>{
      return this;
    }
  }
  
  obj1.valueOfThis(); // Will return the object obj1
  obj2.valueOfThis(); // Will return window/global object