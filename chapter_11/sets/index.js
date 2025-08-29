//sets
const namesArray = ["ryu", "agile", "rames", "luigi", "ryu"];
console.log(namesArray);

const nameSets = new Set(["ryu", "agile", "rames", "luigi", "ryu"]);
console.log(nameSets);

//adding element to new set
const age = new Set();
age.add(20).add(25).add(30);
age.delete(25);
console.log(age);
console.log(age.size);
console.log(age.has(30));
age.clear();

console.log(age);

const person = new Set([
  { name: "ram", age: 20 },
  { name: "shaym", age: 22 },
  { name: "hari", age: 21 },
]);

person.forEach((element) => {
  console.log(element.name, element.age);
});
