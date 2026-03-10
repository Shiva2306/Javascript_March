

//IIFE - Immediate invoked function expression
//we can store private values

(function test()
{
console.log('this is test');
}) ();  //calling the function

(function demo(a)
{
    console.log(a);
}) ('this is demo') //calling function by passing parameter

