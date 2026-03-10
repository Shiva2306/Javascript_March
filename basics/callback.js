

//Callback function - A function being passed as a parameter to another function

//Named function(main function) & Arrow function(sub function)

//Named function
/*function test()
{
   console.log('I like javascript'); 
}

test()


//Arrow function
let demo= ()=>   console.log('I like typescript');


demo() */

//Callback function
/* function test(callback)
{
   console.log('I like javascript' ); 
   callback();
}

test(()=>   console.log('I like typescript')) */

//When we design a function, it should always a be named function
//arrow function/anonymous function can be passed as parameter inside the named function

/* 
function test(a, cb)
{
    console.log('Launch the browser ' + a);
    cb()
}

test('launching application', ()=>   console.log('https://the-internet.herokuapp.com/login'))
 */

  //let sample =  ()=>  console.log('this is sample');

//named function
function demo(a)
{
   console.log('this is demo');
   a()
}

demo(()=>  console.log('this is sample'))

//arrow function
let sample =  ()=>  console.log('this is sample');


//demo - friend1 - his task -  'this is demo'
//sample - friend2 - his task - 'this is sample'
