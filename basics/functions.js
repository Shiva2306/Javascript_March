

//function - Re usable block of code that gets executed when it is called

//function - without any class
//method - with class

//function - named function, function expression, IIFE, function with default parameter
//anonymous function, arrow function

//how to call the function
//1) call by function name
//2) call by passing parameter
//3) call by passing parameter & return the value

//named function 
function test()
{
    console.log('this is test');
}

test()  //call by function name

function demo(a)  //parameter
{
    console.log(a);
}

demo('kumar')  //arguments - call the function by passing parameter


function sample(num)
{
    return num
}

let s=sample(10) // call by passing parameter & return the value
console.log(s);

