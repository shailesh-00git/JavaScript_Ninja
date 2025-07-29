const mainbox = document.querySelector(".mainbox");
const opnBtn = document.querySelector(".opnBtn");
const clsBtn = document.querySelector(".clsBtn");
const body = document.querySelector("body");
opnBtn.addEventListener("click", () => {
  mainbox.style.display = "block";
  body.style.backgroundColor = "#d2d2d2";
});
clsBtn.addEventListener("click", () => {
  mainbox.style.display = "none";
  body.style.backgroundColor = "white";
});
