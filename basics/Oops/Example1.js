

import Example from './constructordemo.js'


//super keyword is used to call parent class properties inside a child class
class Person extends Example
{
 constructor(name, age)
    {
       super(name, age)
    } 

    demo()
    {
        console.log('this is demo');
    }
}
let e=new Person('vinay', 35)
e.sample()
e.demo()