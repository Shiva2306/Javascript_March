
//8 falsy values in js

//false, 0, -0, 0n, '', null, undefined, NaN

//These values should be avoided in conditional statements
/* 
if (NaN)
{
 console.log('this is true');
} 
else
 {
    console.log('this is false');
} */
/* 
    function downloadFile(callback) {
    console.log("Downloading file...");

    setTimeout(() => {
        console.log("Download completed");
        callback();
    }, 2000);
}

downloadFile(() => {
    console.log("Processing file...");
});
 */


    function downloadFile(callback)
     {
    console.log("Downloading file...");
        callback();
        console.log("Download completed...");

    
}

downloadFile(() => {
    console.log("Processing file...");
});
