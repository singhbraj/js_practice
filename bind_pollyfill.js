let name={
    firstName:"Braj Kishor",
    lastName:"Singh"
}

let printName = function()
{
    console.log(this.firstName + " " + this.lastName)
}

let printMyName = printName.bind(name)
printMyName()


Function.prototype.mybind=function(...args){
let obj = this
obj.call(args[0])

}

let printMyName2 = printName.mybind(name)
printMyName2()

