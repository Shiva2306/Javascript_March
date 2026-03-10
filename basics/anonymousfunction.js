
//anonymous function - it will not have a name, we need to create a external variable
//and call function through external variable 

let test=function ()
{
 console.log('this is test');
}

test() //call the function

let demo=function (num)
{
   console.log(num);
}

demo(10) //call the function by passing parameter

let sample =function (num1)
{
   return num1;
}

let s=sample(20) //call the function by passing parameter and return the value
console.log(s);

