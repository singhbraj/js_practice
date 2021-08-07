function *gen()
{
    console.log("Hello");
    yield "yield 1 is running...";
    console.log("World");
    yield "yield 2 is running...";
    return "done"
}

let g = gen();

// console.log(g.next().value);
// console.log(g.next());
// console.log(g.next());

// Loop through generator function

for(let val of g)
{
    console.log(val)
}