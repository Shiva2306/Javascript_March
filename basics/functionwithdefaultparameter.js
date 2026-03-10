
//function with default parameter - here function will have a default parameter always

function test(browser='chrome')
{
console.log(browser);

}

test()  //call the function



function test(browser='chrome')
{
console.log(browser);

}

test('firefox')  //call the function by passing parameter



function test(browser='chrome')
{

    return browser;

}

let t=test('edge')  //call the function by passing parameter & return value
console.log(t);



