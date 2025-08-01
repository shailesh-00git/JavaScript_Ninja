/////////////////
//filter method
////////////////
const numbers = [12, 2, 8, 5, 12, 20, 5]; //filter is non distructive
const newnumbers = numbers.filter((score) => {
  return score > 10;
});
console.log(numbers);
console.log(newnumbers);

const user = [
  { name: "alex", premium: true },
  { name: "elon", premium: false },
  { name: "jhon", premium: true },
  { name: "mark", premium: false },
];
const preUser = user.filter((user) => {
  // return user.premium;
  if (user.premium == true) {
    return user;
  }
});
console.log(preUser);

////////////////
// Map method //
///////////////
const prices = [10, 20, 30, 22, 12, 4, 7, 9];
const sellingPrice = prices.map((price) => {
  return price / 2;
});
console.log(sellingPrice);

const products = [
  { name: "shoes", price: 100 },
  { name: "cap", price: 200 },
  { name: "jacket", price: 1500 },
  { name: "T-shirt", price: 1100 },
];
const saleproducts = products.map((product) => {
  if (product.price > 1000) {
    //return product but it edit the original value
    return { name: product.name, price: product.price / 2 };
  } else {
    return { name: product.name, price: product.price };
  }
});
console.log(products);
console.log(saleproducts);

////////////////
// Reduce method //
///////////////
//it is like for loop
const scores = [12, 11, 13, 14, 15];
let newScores = scores.reduce((acc, curr) => {
  if (curr % 2 != 0) {
    acc++;
  }
  return acc;
}, 0);
console.log(scores, newScores);

const students = [
  { name: "ram", marks: 20 },
  { name: "sita", marks: 30 },
  { name: "ram", marks: 20 },
  { name: "shyam", marks: 30 },
  { name: "ram", marks: 10 },
  { name: "shivam", marks: 30 },
];

const ramTotal = students.reduce((acc, curr) => {
  if (curr.name === "ram") {
    acc += curr.marks;
  }
  return acc;
}, 0);
console.log(`Total marks of ram = ${ramTotal}`);

////////////////
// find method //
///////////////

const salaries = [1200, 3000, 2500, 4000, 3500];
const firtHighestSalary = salaries.find((salary) => {
  return salary > 3000;
});
console.log(firtHighestSalary);
