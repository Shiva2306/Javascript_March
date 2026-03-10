

//Promises - fulfill & not fullfill
//resolve() - function will return if the promise is fulfilled
//reject() - function will return if the promise is not fulfilled

//if the function is fulfilling the promise, resolve() is returned, .then() will call another function
//if the function is not fulfilling the promise, reject() is returned,  catch() is called and execution will stop there

function login()
{
   return new Promise((resolve, reject)=>{
      
     setTimeout(() => {
        let success=true;
        if (success) {
             console.log('this is login');
             resolve()
        } else {
            reject()
        }
       
       
        
    }, 4000);

   })
   
 
}

function search()
{
    return new Promise((resolve, reject)=>{
      
     setTimeout(() => {
        let success=true;
        if (success) {
             console.log('this is search');
             resolve()
        } else {
            reject()
        }
       
       
        
    }, 4000);

   })
}

function addtocart()
{
    return new Promise((resolve, reject)=>{
      
      
     setTimeout(() => {
        let success=false;
        if (success) {
             console.log('this is addto cart');
             resolve()
        } else {
            reject()
        }
       
       
        
    }, 4000);

   })
}

function payment()
{
    return new Promise((resolve, reject)=>{
      
     setTimeout(() => {
        let success=true;
        if (success) {
             console.log('this is payment');
             resolve()
        } else {
            reject()
        }
       
       
        
    }, 4000);

   })
}

function logout()
{
     return new Promise((resolve, reject)=>{
      
   setTimeout(() => {
        let success=true;
        if (success) {
             console.log('this is logout');
             resolve()
        } else {
            reject()
        }
       
       
        
    }, 4000);

   })

}

login()
 .then(()=>search())
 .then(()=>addtocart())
 .then(()=>payment())
  .then(()=>logout())
  .catch(()=>{
console.log('this is failed');
  })


  //promise chaining will be formed if the functions are returning resolve()

  //Have we achieved our objective ? - Yes

  //Objective - To control the order of execution
  //1) Nested callback
  //2) Promises
  //3) Async await


