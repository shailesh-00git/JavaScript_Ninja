// callback
function print(callback) {
  let age = 29;
  callback(age);
}

print(function callback(value) {
  console.log(value);
});

//foreach
const fruits = ["apple", "mango", "banana", "orange"];

//writing for each into seperate function is goood practise

const fruit = (item, index) => {
  console.log(item, index);
};
fruits.forEach(fruit);
