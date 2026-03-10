

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
        let success=false;
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
        let success=true;
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

async function execution()
{
    try 
    {
     await login();
     await search();
     await addtocart();
     await payment();
     await logout();
    }
    catch(error)
    {
     console.log('its stopped');
    }
}

execution()

//is async await achieving our objective - ? - Yes

//Objective is to control the order of execution

//we have achieved our objective
//1) Nested callback - Debugging was diffucult, not readable, very complex
//2) Promises - comparatively it is better than nested callback, but there was promises chaining
//3) Async await - this is better compared to promises, as it is more readable
