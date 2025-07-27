const btn = document.querySelector("button");
//accessing ul
const ul = document.querySelector("ul");

const li = document.querySelectorAll("li");
li.forEach((item) => {
  item.addEventListener("click", (e) => {
    item.remove();
  });
});

let count = 1;
btn.addEventListener("click", () => {
  //
  const newel = document.createElement("li");
  newel.innerText = `New item added ${count}`;
  //ul.append(newel);   //adds at last
  ul.prepend(newel); //it adds to start of list
  count++;
});
