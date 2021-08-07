

// function costructor

function Person(name,job,DOB)
{
    this.name = name;
    this.job = job;
    this.DOB = DOB
}

Person.prototype.calculateAge = function()
{
    console.log('The current age is:'+(2021-this.DOB))
}

console.log(Person.prototype);

// create object Person1

let Person1 = new Person('Braj',"Fronend Developer",1998)
console.log(Person1)

let Person2 = new Person('Robin',"Backend Developer",1997)
console.log(Person2)


Person1.calculateAge()
Person2.calculateAge()


// Example of prototype inheritance

let myName = {
    name:'Braj'
}

let anotherName={
  name:'Robin'
}

myName.__proto__ = anotherName
console.log(myName)