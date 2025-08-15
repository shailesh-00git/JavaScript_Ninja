//store data
localStorage.setItem("name", "shailesh");
localStorage.setItem("age", "20");
localStorage.setItem("address", "sanepa");

//get data
const name = localStorage.getItem("name");

//update data
localStorage.setItem("name", "samrat");
console.log(localStorage.getItem("name"));
console.log(localStorage.getItem("age"));
console.log(localStorage.getItem("address"));

//////delete item
// localStorage.removeItem("address");
