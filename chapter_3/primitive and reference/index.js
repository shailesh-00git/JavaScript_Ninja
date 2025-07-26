// primitive data
let scoreOne = 50;
let scoreTwo = scoreOne;
console.log(`scoreOne = ${scoreOne} scoreTwo = ${scoreTwo}`);
scoreOne = 23;
//only the scoreone value is changed because it is stored in sstack as new element
console.log(`scoreOne = ${scoreOne} scoreTwo = ${scoreTwo}`);

//reference data
let userOne = { name: "shailesh", age: 30 };
let userTwo = userOne;
console.log(userOne, userTwo);
userOne.age = 22;
//both the users age is changed because it is a reference type and the userOne and userTwo are pointing the same Value stored in heap memory

console.log(userOne, userTwo);
