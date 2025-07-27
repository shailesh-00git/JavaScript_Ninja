// elements selectors

//select by tagname
const h1 = document.querySelector("h1");
h1.style.color = "blue";

//select by class
const para = document.querySelector(".para");
para.innerText = "This is a paragraph";

//selection same class name but of different child
const error = document.querySelector(".error");
error.style.backgroundColor = "yellow";

//there are other types of selector also
const byID = document.getElementById("#ID_NAME");
const byClass = document.getElementsByClassName(".CLASS_NAME");
const byName = document.getElementsByName("#NAME");
const byTagName = document.getElementsByTagName("TAG_NAME");

//exaples of adding html element
const fruits = ["mango", "apple", "banana", "gauva", "orange"];
let list = document.querySelector(".fruit-list");
//console.log(list);

fruits.forEach((fruit) => {
  list.innerHTML += `<li class="list-items">${fruit}</li>`;
});

//get and set attribute
let heading = document.querySelector("h1");
console.log(heading.getAttribute("class"));

heading.setAttribute("id", "h-p");
console.log(heading.getAttribute("id"));

//adding or removing class
const btn = document.querySelector(".btn");
btn.classList.add("success");
btn.classList.remove("fault");


