
//Unmarshelling - Converting string to an object

let employee = `{
 "name": "Emma Wilson",
 "position": "UI/UX Designer",
 "department": "Design"
}`
 
//console.log(employee);

//console.log(typeof(employee)); //string

let emp=JSON.parse(employee)

//console.log('-----------------');

console.log(emp);

console.log(typeof(emp)); //object