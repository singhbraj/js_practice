

let object={
    name:"Braj",
    city:'Aligarh',
    getIntro:function(){
        console.log(this.name + " from " + this.city)
    }
}


  
let object2 = {
    name:"Robin"
}


// Necer Do This

object2.__proto__ = object  