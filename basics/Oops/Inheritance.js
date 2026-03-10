

//Oops - Class, Object, Inheritance, Encapsulation, Polymorphism, Abstraction

//Inheritance - Inheriting properties from parent to child
//Example - Father - Son

//Types of Inheritance
//1) Single level - Father to Son
//2) Multi level - Grandfather to Father to Son
//3) Heirarchical - Father to 2 sons(brothers)
//4) Multiple (not supported) - 1 child class getting properties from 2 parent class


class Father //parent class(super class)
{
   tall()
   {
    console.log("I am tall")
    
   }
}

class Son extends Father //Child class(sub class)
 {

    dance()
    {
        console.log('I dance well');
    }

}

let s= new Son()
s.dance()
s.tall()


let f= new Father()
f.tall()


