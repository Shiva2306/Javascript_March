

//immutable means value which we cannot change

let user =
{
    name:'kumar',
    age:35,  
    
}

//freeze() - this make object immutable - we cannot add, update or delete any value
Object.freeze(user)

user.city='hyderabad'
console.log(user);

user.age=20
console.log(user);

delete user.age
console.log(user);

//seal() - allow modification, but addition & deletion is not possible
/* 
Object.seal(user)

//add a value
user.city='hyderabad'
 console.log(user);

 //delete a value
 delete user.age
console.log(user);

 user.age=20
console.log(user); */





