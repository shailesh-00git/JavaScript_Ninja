// storing the array in localstorage
const detail = [
  { name: "shailesh", age: 20 },
  { name: "saun", age: 32 },
  { name: "ninja", age: 21 },
];

//converting the array into json format
localStorage.setItem("detail", JSON.stringify(detail));
//retriving prom local storage
const stored = localStorage.getItem("detail");
console.log(stored);

//converting into array
JSON.parse(stored).forEach((element) => {
  if (element.age < 30) console.log(`Name:${element.name} Age:${element.age}`);
});
