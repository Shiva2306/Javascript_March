

let employee =
{
    name: 'vinay',
    age:40,
    status1:'active',
    isEmployed: true,
}

//to copy this object into another object reference  - {...} - spread operator
 let user={...employee}
 console.log(user);

 user.city='bangalore'
 console.log(user);

 user.age=50
 console.log(user);

 delete user[status1]
 console.log(user);

 console.log(employee);