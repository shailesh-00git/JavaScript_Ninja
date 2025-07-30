const form = document.querySelector(".sign-up");
const feedBack = document.querySelector(".feedback");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  //vallidation
  const username = form.username.value;
  const usernamePattern = /^[a-zA-z]{6,10}/;
  if (usernamePattern.test(username)) {
    feedBack.textContent = "This user name is valid!";
  } else {
    feedBack.textContent =
      "This us name is not valid .The user name must be between 6 to 10 and must be character";
  }
  form.username.value = "";
});
