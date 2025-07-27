//to find the parent child relation ship
const article = document.querySelector("article");
console.log(article.children);
const listItem = Array.from(article.children);
console.log(listItem);
listItem.forEach((item) => {
  //console.log(item);
  item.classList.add("article-element");
  //git
});

let h2 = document.querySelector("h2");
//this givess the parent element of h2
console.log(h2.parentElement);

//this gives the parent of parent of h2
console.log(h2.parentElement.parentElement);

//this gives the next element sibling
console.log(h2.nextElementSibling);
