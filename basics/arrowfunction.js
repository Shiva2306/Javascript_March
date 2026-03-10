

//arrow function - this will also not have a name like anonymous function
//we need to create an external variable and then call with it
//here function keyword will not be there, it will be replaced with =>
//mention => after ()
//if there is one statement to be executed, here {} is not required & it can be written
// in a single line
//if we are passing single parameter, () is also not required
//if we are returning a single value and it is written without {}, return keyword
//should not be mentioned

let test = () =>  console.log('this is test');


test() //call the function


//call the function by passing parameter

let demo = a => console.log(a);

demo(10)

//call the function by passing parameter and return the value

let sample= b => b


let s=sample(20)
console.log(s);