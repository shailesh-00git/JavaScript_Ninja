//rest parameters
const double = (...nums) => {
  return nums.map((num) => num * 2);
};
const result = double(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(result);

//spread operator
const people = ["ram", "shyam", "hari"];
const peopleClone = ["geeta", "ramesh", "mohan", ...people];
console.log(...peopleClone);

//spread operator and objects
const person = {
  name: "shailesh",
  age: 20,
  location: "sanepa",
};
const personClone = { ...person, nationality: "neplai" };
console.log(personClone);
