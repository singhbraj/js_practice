// function Braj(Braj, function(){
//     console.log("Hello Braj Kishor singh")
// } )

const Braj = (data,next) =>{
    console.log(data);
    next()
}

Braj("braj",()=>{
    console.log("Kishor Singh")
})


console.log(typeof window)