//arrays
let fruits = ["mango", "apple", "banana", "orange"];
let ages = [19, 16, 23];
console.log(fruits);
//override the elements of an array
fruits[0] = "gauva";

//accessing the elements of the array
// console.log(`The first element of array is ${fruits[0]}`);
// console.log(`The second element of array is ${fruits[1]}`);
// console.log(`The third element of array is ${fruits[2]}`);
// console.log(`The length of fruit array is ${fruits.length}`);

// //common array methods
// const join = fruits.join(",");
// console.log(join);

// const index = fruits.indexOf("apple");
// console.log(index);

// const concat = fruits.concat(["pinapple", "Lecche"]);
// console.log(concat);

//push is a desctructive method it changes the original array
const push = fruits.push("Dragon fruit");
console.log(push);
console.log(fruits);

//pop return the last el of the array and also remove the last element
result = fruits.pop();
console.log(result);
console.log(fruits);
