let items = document.querySelector(".person");
const fruits = ["apple", "mango", "banana", "orange"];
let html = ``;
fruits.forEach((item) => {
  html += `<li>${item}</li>`;
});
console.log(html);
items.innerHTML = html;
