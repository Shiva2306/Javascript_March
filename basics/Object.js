

//In java, object is always created when class is there

//ES6 version, class was introduced and we were able able create object 

//Here, we can create an object without the class as well

//Object is a collection of properties in key and value pair format


let employee =
{
    name: 'vinay',
    age:40,
    status1:'active',
    isEmployed: true,
}

for (let emp of employee)
{
    console.log(emp.name);
    console.log(emp.age);
    console.log(emp.status1);
    console.log(emp.isEmployed);
}


//name, age, status, isEmployed - keys
//vinay, 40, active, true - values

//keys are strings only(but not enclosed with "")
//values can be anything
//employee - object reference variable

// console.log(employee);
// console.log(employee.name); //vinay & 40
// console.log(employee.age); //40
// console.log(employee['status1']); //active
// console.log(employee['isEmployed']); //true

// delete employee['isEmployed']
// console.log(employee);

//add a property
// employee.city='hyderabad'
// console.log(employee);

//update a property
// employee['age']=30
// console.log(employee);
