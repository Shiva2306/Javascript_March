


class Mukesh //parent class(super class)
{
   wealth()
   {
    console.log("I have good wealth")
    
   }
}

class Ananth extends Mukesh //Child class(sub class)
 {

    cute()
    {
        console.log('I am cute');
    }

}


class Akash extends Mukesh //Child class(sub class)
 {

    smart()
    {
        console.log('I very smart');
    }

}

let a= new Ananth()
a.cute()
a.wealth()

console.log('------------------');

let k= new Akash()
k.smart()
k.wealth()

console.log('------------------');


let m= new Mukesh()
m.wealth()


