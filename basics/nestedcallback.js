

//synchronous function - execution will take place in order/sequence
//asynchronous function - execution will take place randomly/parallely

//here we are mimicking asynchronous function
function login(callback)
{
    setTimeout(() => {
        console.log('this is login');
        callback() //callback is to call the search function
        
    }, 3000);
 
}

function search(callback)
{
    setTimeout(() => {
             console.log('this is search');
             callback()
             

    }, 4000);

}

function addtocart(callback)
{
    setTimeout(() => {
             console.log('lets add to cart');
             callback()
             

    }, 5000);

}

function payment(callback)
{
    setTimeout(() => {
             console.log('lets do payment');
             callback()
             

    }, 1000);

}

function logout(callback)
{
    setTimeout(() => {
             console.log('lets logout');
             callback()
             

    }, 2000);

}

login(()=>{
    search(()=>{
        addtocart(()=>{
            payment(()=>{
                logout(()=>{
                     console.log('its completed');
                })
            })
        })
    })
})





/* 
login(()=>{
    search(()=>{
        addtocart(()=>{
            payment(()=>{
                  logout(()=>
                {
                    console.log('its completed');
                })
            })
        })
    })

}) 
 */
// login()
// search()
// addtocart()
// payment()
// logout()

//Our objective is to control the order of execution

//1) Nested callbacks or pyramid of doom or callback hell
//2) Promises
//3) Async await

