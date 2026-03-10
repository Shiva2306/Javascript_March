

//== : it will check only values and return true/false
//=== : it will check both values & data types & return true/false

let a=10 //number
let b='10' //string

console.log(a==b); //10==10 //true
console.log(a===b); //10==10 & number===string - false

//internal value of true is 1
let c=1
let d=true

console.log(c==d); //1==1 -true
console.log(c===d); //1==1 & number===boolean - false

//internal value of false is 0
let e=0
let f=false

console.log(e==f); //0==0 - true
console.log(e===f); //0==0 & number === boolean - false

let g=null
let h;

console.log(g==h); //novalue==novalue - true
console.log(g===h); //novalue==novalue & object===undefined = false

