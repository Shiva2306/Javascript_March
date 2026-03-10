

let employee =
{
    name: 'vinay',
    age:40,
    status1:'active',
    isEmployed: true
}

//access only keys of an object
let emp=Object.keys(employee)
console.log(emp);

//access only values of an object
let emp1=Object.values(employee)
console.log(emp1);

//to access both key & values of an object
let emp2=Object.entries(employee)
console.log(emp2); 
 

