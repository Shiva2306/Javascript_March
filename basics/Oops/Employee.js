

class Employee
{
   static age=50;   //Class variable(Instance)
   city='bangalore' //Instance

    static test()
{
    let age1=40
    console.log('this is test ' + age1);
}

demo()
{
  
    console.log('this is demo');
   console.log('the city name is ' + this.city);
}

}

//non static methods & variables, we should access by creating an object
//static methods & variables, we should access through the class

   let emp =new Employee() 
   //new is a keyword to create an object
   //Employee is a class
   //Employee() is a constructor
   //new Employee() - object

   emp.demo()
   //console.log(emp.age)
  console.log(emp.city)


   Employee.test()
   console.log(Employee.age)