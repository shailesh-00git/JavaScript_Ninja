const form = document.querySelector(".sign-up");
const username = document.querySelector("#username");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(username.value);
  username.value = "";
});

//regit expression
const uname = "shailesh";
const pattern = /^[a-z]{6,10}$/;
// //pattern returnes boolean VALUE TRUE OF FALSE
// const res = pattern.test(uname);
// if (res) {
//   console.log("Test Passed");
// } else console.log("Test Failed");

//OR//
//this method returns the interger value  0 if match else -1 if not match~
const res = uname.search(pattern);
if (res) {
  console.log(res);
} else console.log(res);
