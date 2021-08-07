// call and apply is the another way to calling the functions in javascript

let name = { 

  firstName:"Braj Kishor",
  lastName:"Singh",
  // fullName(){
  //   // console.log(this)
  //   console.log(this.firstName + ' ' + this.lastName)
  // }  

}

let printFullName = function(city){
  console.log(this.firstName+ " " + this.lastName + " from " + city)
}

let name2 = {
  firstName:"Robin",
  lastName:"Singh",
}

// call can borrow the methods from the other objects
//

// name.fullName.call(name2)
printFullName.call(name,"Aligarh")

// console.log(name.fullName());