//typeconversion
let score = "100";
let scores = "100";

//converting to number
score = Number(score);
console.log(score + 1);

//type checking
console.log(typeof score);
console.log(typeof scores);

//number to string
//let result = String(50);
//console.log(result, typeof string);

//truthy and falsy values
let result = Boolean(-1);
console.log(result); //pos and neg are gives true but 0 gives false
//{ strings of any length gives true , empty string gives false}

let res = Boolean("chejchapter");
console.log(res);
