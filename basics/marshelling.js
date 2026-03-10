

//marshelling - converting object into a string


let employee =
{
    name: 'vinay',
    age:40,
    status1:'active',
    isEmployed: true,
}

console.log(typeof(employee)); //object

let emp= JSON.stringify(employee)
console.log(emp);

console.log(typeof(emp)); //string
