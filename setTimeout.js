// function x(){
//     var i = 1;
//     setTimeout(function(){
//         console.log(i)
//     }, 1000)
// }

// x();


// function x(){
//     for(var i =1; i<=5; i++)
//     {
//         setTimeout(function(){
//             console.log(i)
//         }, i*1000)
//     }

//     console.log("Namaste JavaScript")

// }

// x();

// use let keyword because let has block lable scope so now i will refrence to different memory locations

// function x(){
//     for(let i =1; i<=5; i++)
//     {
//         setTimeout(function(){
//             console.log(i)
//         }, i*1000)
//     }

//     console.log("Namaste JavaScript")

// }

// x();


function x(){

    for(var i =1; i<=5; i++)
    {
        function close(x) {
            setTimeout(function(){
                console.log(x)
            }, x*1000)
        }
    
        close(i)
       
    }

    console.log("Namaste JavaScript")

}

x();