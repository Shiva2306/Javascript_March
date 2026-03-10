

function test()
{
    console.log('this is test');
    demo()
}

function demo()
{
    console.log('this is demo');
    sample()
}

function sample()
{
    console.log('this is sample');
    test();
    
}

test()

//circular chaining - range error

