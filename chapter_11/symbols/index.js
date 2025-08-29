//symbol are prmitive datatypes
const symbolOne = Symbol();
const symbolTwo = Symbol();

console.log(symbolOne, symbolTwo, typeof symbolOne);
console.log(symbolOne == symbolTwo);

const people = {};
people.age = "20";
people["name"] = "ryu";
console.log(people);

//symbol are not equal eventhough they are same
