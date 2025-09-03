console.log("dom file");
const body = document.querySelector("body");
const body_style = () => {
  body.style.backgroundColor = "green";
};

const add_text = () => {
  const title = document.createElement("h1");
  title.textContent = "This is an example of webpack modules";
  body.appendChild(title);
};

add_text();
export { body_style };
