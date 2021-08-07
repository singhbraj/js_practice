// async function f(){
//     return 1;
// }
// f().then((data)=>{
//     console.log("data is",data)
// })


async function f(){
    let promise = new Promise((resolve,reject)=>{
        setTimeout(()=>resolve("done!",1000))
    });
    let result = await promise

    console.log("Result is ",result)

}

f();
console.log("Hello Braj Kishor Singh")
