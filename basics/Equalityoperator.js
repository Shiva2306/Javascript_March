

//Equality operator  == & ===
//== Loose equality operator - it checks only values
//=== Strict equality operator - it checks both values & datatypes

let a = 10; //number
let b = '10'; //string

console.log(a==b); //10==10 ->true
console.log(a===b); //10===10 & number===string -> false

//true = 1
//false = 0

console.log(true==1); //1==1 -> true
console.log(true===1); //1===1 & boolean===number ->false

// console.log(false==0); //0==0->true
// console.log(false===0); //0===0 & boolean ===number-> false

//interview question
// console.log(typeof(null)); //object
// console.log(typeof(undefined)); //undefined

// console.log(null==undefined); //novalue==novalue =>true
// console.log(null===undefined); //novalue==novalue & object===undefined = false