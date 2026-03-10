

//recursive function - function calling itself


function test()
{
    console.log('this is test');
    test()
}

test()

//RangeError: Maximum call stack size exceeded

//here only memory allocation, no memory deallocation here
