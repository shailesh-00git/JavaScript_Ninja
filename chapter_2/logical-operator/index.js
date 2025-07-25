// logical operator
let email = "example@gmail.com";
if (email.length > 8 && email.includes("@gmail.com")) {
  console.log("Your email is correct");
} else {
  console.log("Your email is not correct");
}

let nationalId = false;
let Nationality = "nepali";
if (nationalId || Nationality == "nepali") {
  console.log("Your are eligible for voting");
} else {
  console.log("You are not eligible for voating");
}


//logical not
let have_id = false;
console.log(!true);
console.log(!false);

if(!have_id){
  console.log("You are alllowed to enter");
}
