
//reduce() - it will take all elemnts and generate a single output

//let numbers=[10, 20, 30, 40, 50]

//console.log(numbers);

//let n=numbers.reduce((total,num)=>total+num, 0) 
//0 + 10 = 10
//10+20=30
//30+30=60
//60+40=100
//100+50=150

//console.log(n);
let numbers=[10, 20, 30, 40, 50]

let n=numbers.reduce((multiply,num)=>multiply*num, 1) 

//multiply*10 =1*10 =10
//10*20=200
//200*30=
//  *40

console.log(n); //12000000

