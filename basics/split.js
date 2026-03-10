
//split() - this is used to convert string into an array

let s = 'selenium, playwright, cypress, webdriverio'
let updatedvalues =s.split('')
console.log(updatedvalues);
console.log(updatedvalues[0]);
console.log(updatedvalues[1]);
console.log(updatedvalues[2]);
console.log(updatedvalues[3]);
console.log(updatedvalues[4]);

let a= 'I like playwright with typescript'
let b=a.split(" ")
console.log(b);
console.log(b[0]);

let x = 'aaseleniumaacypressaaplaywrightaawebdriverio'
let y=x.split("aa")
console.log(y);
console.log(y[0]); //empty string
console.log(y[1]); selenium