

let employee =
{
    name: 'vinay',
    age:40,
    status1:'active',
    isEmployed: true,
    address : {
        city: 'hyderabad',
        pincode:654000,
    }
}

//nested object - an object inside another object

console.log(employee.name); //vinay
console.log(employee.age); //40
console.log(employee.address); //hyderabad & pincode
console.log(employee.address.city); //hyderabad
console.log(employee.address.pincode); //pincode