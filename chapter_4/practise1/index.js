let paras = document.querySelectorAll("p");
console.log(paras);
paras.forEach((element) => {
  if (element.textContent.includes("error")) {
    element.classList.add("error");
  }
   if (element.textContent.includes("success")) {
    element.classList.add("success");
  }
});
