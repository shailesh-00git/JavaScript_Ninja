// normal functions
// function greet() {
//   console.log("Good morning !");
// }
// greet();
const greet = function () {
  console.log("Good morning !");
};
greet();

// arrow function
const fname = () => {
  console.log("My name is shailesh");
};
fname();

//passing argument to function
const fullName = function (fname, lname) {
  console.log(fname + " " + lname);
};
fullName("shailesh", "yadav");

//return from function
const calArea = function (l, b) {
  let  area = l * b;
  return area;
};
const area = calArea(10, 10);
console.log(`The area of rectangle is ${area} meter square`);
