

//splice() - we can add, remove the values, modify

let a= [10, 20, 30, 40, 50, 60]

//formula= arr.splice[starting index, deletecount, adding values]

a.splice(-3, 2, 100)  // [ 10, 20, 30, 100, 60 ]


console.log(a); //- original array is affected



//lets delete 30

// let b= a.splice(2, 1)
// console.log(b); //30

// console.log(a); //[ 10, 20, 40, 50, 60 ]

//now lets delete 30, 40 & replace it with 100
//  a.splice(2, 0, 100)
//  console.log(c);

 //console.log(a); //[ 10, 20, 100, 50, 60 ]
