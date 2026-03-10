

//Loops -  iterations can be done in a short way

//print a number from 1 to 5
/* console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5); */


//We use for loop when the iteration is known(we know when to stop)

//For loop, while loop, do while loop

//print a number from 1 to 5 using for loop
/* 
for(let i=1; i<=5; i++) // i= 6, 6<=5, 6
{
    console.log(i);  //  console.log(5) // 1 2 3 4 5
} */

//For loop - use this when we know how many times to repeat
//it consists of initialization, condition, incrementation/decrementation

//print numbers from 5 to 1

/* for(let i=5; i>=1; i--) // i=0, 0>=1,  2--
{
    console.log(i);  //5 4 3 2 1
}
 */
//print even numbers from 1 to 20 using for loop
/* 
for(let i=1; i<=20; i=i++)  // i=6; 6<=20, 5++
{
    if(i%2==0)  //6%2==0  
    { 
        console.log(i); //2 4 6.........20

    }

}
  */

//
//while printing numbers from 1 to 20 abruptly stop at 10
/* 
for(let i=1; i<=20; i++)  
{
    if(i==11)
    {
       break; 
    }

    console.log(i); //1 2 3 4......9

} */

//while printing numbers from 1 to 20 skip number 10 & 15

/* 
for(let i=1; i<=20; i++)  
{
    if(i==10 || i==15)
    {
       continue; //skip
    }

    console.log(i); 

} */

    let i=1;

  for(;i<=5 ; ) 
{
      
    console.log(i); 
    i++; 
} 

  