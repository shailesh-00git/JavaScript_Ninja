//for box
const box = document.querySelector(".box");
const page = document.querySelector(".pagex");
const section = document.querySelector(".boxx");
box.addEventListener("mousemove", (e) => {
  page.textContent = `Page-X : ${e.pageX} and page-Y : ${e.pageY}`;
  section.textContent = `box-X : ${e.offsetX} and box -Y : ${e.offsetY}`;
});
