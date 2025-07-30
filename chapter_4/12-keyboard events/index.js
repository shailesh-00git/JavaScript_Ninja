const form = document.querySelector(".sign-up");
const feedBack = document.querySelector(".feedback");
const usernamePattern = /^[a-zA-Z]{6,12}$/;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  //vallidation
  const username = form.username.value;
  if (usernamePattern.test(username)) {
    feedBack.textContent = "This user name is valid!";
  } else {
    feedBack.textContent =
      "This us name is not valid .The user name must be between 6 to 10 and must be character";
  }
});

//keyboard events
form.username.addEventListener("keyup", (e) => {
  //console.log(e.target.value, form.username.value);
  if (usernamePattern.test(e.target.value)) {
    //console.log("Passed");
    form.username.setAttribute("class", "success");
  } else {
    // console.log("failed");
    form.username.setAttribute("class", "error");
  }
});
