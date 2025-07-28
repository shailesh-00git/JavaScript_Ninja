//for copy event
const copy = document.querySelector(".copy-me");
const px = document.querySelector(".x");
const py = document.querySelector(".y");

copy.addEventListener("copy", () => {
  console.log("OH you copied this text");
});
const box = document.querySelector(".box");
box.addEventListener("mousemove", (e) => {
  box.textContent = `x-axis = ${e.offsetX} y-axis=${e.offsetY}`;
  box.textContent += `p-x = ${e.pageX} p-y=${e.pageY}`;
  //console.log(e.offsetX, e.offsetY);
});
