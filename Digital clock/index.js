//digital clock 
const clock = document.querySelector(".clock");
setInterval(() => {
  const now = new Date();
  const h = now.getHours();
  const m = now.getMinutes();
  const s = now.getSeconds();

  const html = `
  <span>${h}</span>
  <span>${m}</span>
  <span>${s}</span>
  `;
  clock.innerHTML = html;
}, 1000);
