// Removing one element and not adding any new item

var cars=['Benz', 'Innova', 'ambassedor', 'BMW', 'Audi', 'Breeza','Etios','Dzire'];

cars.splice(2,1);

console.log(cars);


// Removing more than one element and not adding any new item

let name = ["braj","kishor","singh","ravi","mohan","robin"];
name.splice(1,2);
console.log(name);


// Now add one item and not remove any item

let a =[1,4,5,6,7,34,2,12,32];
a.splice(1,2,2,3);
console.log(a)