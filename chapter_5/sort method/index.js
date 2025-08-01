//shorting namess
const names = ["ram", "shyam", "gita", "hari"];
//they are distru
names.sort();
console.log(names);
//sorting numbers
const numbers = [55, 4, 2, 3, 1];
numbers.sort();
console.log(numbers);
//numbers.sort((a,b)=>{return a-b} :

//a-b gives ascending order and b-a gives descending order

//sorting array of objects
const players = [
  { name: "ninja", score: 20 },
  { name: "snin", score: 70 },
  { name: "raj", score: 10 },
  { name: "ramesh", score: 50 },
];

players.sort((a, b) => {
  return b.score - a.score;
});
console.log(players);
