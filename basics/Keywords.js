
//extensions to be installed

//code runner
//javascript es6



//clg tab - shortcut for console.log

//- to the code/info


//comment multiple lines - ctrl /  
//comment multiple lines - shift alt A  - /*   */

// const a=10; 
// a=20;
// console.log(a);




//keywords - var, let, const

//Variables - They are the containers which can store the data/value

// const a=10;
// console.log(a); 

/* 
var a; //declaration of a variable
a=10; //initialization/assigning the value
console.log(a); //allowed
 */

/* 
let a; //declaration of a variable
a=10; //initialization/assigning the value
console.log(a); //allowed
 */

/* 
const a; //declaration of a variable - it does not allow
a=10; //initialization/assigning the value
console.log(a); // not allowed - when we use const keyword value should provided initially
*/

//const b =30; //here in const we have to mandatorily assign the value

/* 
var a=10;  //declaration
var a=20;  //Re declaration
console.log(a); */  //allowed

//re declaration is not a good approach

/* 
let a=10;  //declaration
let a=20;  //Re declaration
console.log(a); //not allowed */
 

/* 
const a=10;  //declaration
const a=20;  //Re declaration
console.log(a);  //not allowed
 */
 


//Re initialization is very common/mostly used
/* 
 var a=10;   //Initialized the variable - assigned value to the variable
a=20;     //Re -Initialized the variable - re assigned value to the variable
console.log(a); //allowed */


/* 
let a=10;   //Initialized the variable - assigned value to the variable
a=20;     //Re -Initialized the variable - re assigned value to the variable
console.log(a);  */  //allowed



// const a=10;   //Initialized the variable - assigned value to the variable
// a=20;     //Re -Initialized the variable - re assigned value to the variable
// console.log(a); //not allowed

//hoisting - trying to access the variable before declaration/initialization

// console.log(a);

// const a=10;  

//scope - functional level & block level

function demo()
{
    if (true)
     {
        const a='kumar';
         
        
    }

    console.log(a);
    
}

demo()


