
//Constructor - 
//in java - Constructor is a special method which is having same name as of class name and does not have return type
//it is used to initialize the object properties(instance variables)

//in javascript - constructor is a special method, here its name is 'constructor'
//it is used to initialize the object properties(instance variables)

//Local varables - declared within the methods
//Instance varaibles - declared outside methods within the class

//this will point towards the object (it makes variables instance)
//whenever we use this keyword before a variable, it is a instance variables

//Local variables - chief minister
//instance variables - prime minister
//methods - states

//Local varibles access only within methods
//Instance variables - throughout the class

//this keyword differentiates between local & instance variable

class Example
{
      name;
      age;

    constructor(name, age)
    {
        this.name=name;
         this.age=age; 
    } 


    sample()
    {
      console.log('his name is  ' + this.name);
      console.log('his age is ' + this.age);
    }

    
}

//export default Example

let e=new Example('vinay', 35)
e.sample()

//whenever we create an object, constructor gets invoked


