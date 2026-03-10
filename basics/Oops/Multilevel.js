

class Grandfather
{
    talk()
    {
        console.log('I talk well');
    }
}
class Father extends Grandfather//parent class(super class)
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
s.talk()


let f= new Father()
f.tall()
f.talk()


let gf= new Grandfather()
gf.talk()


