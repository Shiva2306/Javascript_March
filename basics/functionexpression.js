

//function expression - here it will have 2 names, one internal name &
//one is external name, and we should call it by external name

let test1 =function test()
{
    console.log('this is test');
}

test1()  //calling the function

console.log('------------------------------');

let demo1=function demo(a)
{
    console.log(a);
}

demo1('this is demo') //calling function by passing parameter

console.log('------------------------------');

let sample1=function sample(b)
{
   return b;
}

let c=sample1('this is sample')  //call function by passing parameter & also return the value
console.log(c);
