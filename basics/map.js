

//map() - This will create a new array by transforming each element

let numbers=[10, 20, 30, 40, 50]

console.log(numbers);

let num=numbers.map(ele=>ele+5) //10+5, 20+5, 30+5, 40+5, 50+5
console.log(num);
console.log(numbers); //original array is same

// let num1=numbers.map(a=>a*5)
// console.log(num1);