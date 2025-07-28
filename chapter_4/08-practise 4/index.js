//for box
const box = document.querySelector(".box");
const h2 = document.querySelector(".num");
const btn = document.querySelector("button");
let count = 0;
// Array of colors for random selection
const colors = [
  "#FF6B6B",
  "#4ECDC4",
  "#45B7D1",
  "#96CEB4",
  "#FFEEAD",
  "#D4A5A5",
];

box.addEventListener("click", (e) => {
  count++;
  //console.log(count);
  h2.textContent = `${count}`;
  const newel = document.createElement("div");
  newel.classList.add("newel");

  // Random dimensions between 10 and 100 pixels
  const radius = Math.floor(Math.random() * 90 + 10);

  // Get random color from array
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  newel.style.cssText = `
    height: ${radius}px;
    width: ${radius}px;
    position: absolute;
    left: ${e.offsetX}px;
    top: ${e.offsetY}px;
    background-color: ${randomColor};
    pointer-events: none;
    border-radius: 50%;
  `;

  box.appendChild(newel);
});

btn.addEventListener("click", () => {
  const circle = document.querySelectorAll(".newel");
  //console.log(circle);
  circle.forEach((el) => {
    el.remove();
  });
});
