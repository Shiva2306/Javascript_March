


let employee1 =
{
    name: 'vinay',
    age:40,   
}


let employee2 =
{
    name: 'praveen',
    age:40,   
}


let employee3 =
{
    name: 'raj',
    age:40  
}

employee1=employee2;  //pass by reference

console.log(employee1);  //praveen
console.log(employee2);  //praveen
console.log(employee3);  //raj

console.log('------------------------------');

employee2=employee3

console.log(employee1); //praveen
console.log(employee2);  //raj
console.log(employee3); //raj

console.log('------------------------------');

employee3=employee1


console.log(employee1); //praveen
console.log(employee2);  //raj
console.log(employee3); //praveen

console.log('------------------------------');

employee2=employee1


console.log(employee1); //praveen
console.log(employee2);  //praveen
console.log(employee3); //praveen

console.log(employee1.name);

//Will Javascript follow pass by value or pass by reference 


let a=10;
let b=20;
a=b;
console.log(a); //20 - pass by value

