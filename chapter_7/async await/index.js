//async await

const user = async () => {
  const response = await fetch("data.json");
  if (response.status != 200) {
    throw new error("cannot fectch the data!");
  }
  const data = await response.json();
  return data;
};
//console 1,2,3,4 execute firt this shows that async await is non-blocking
console.log(1);
console.log(2);
user()
  .then((data) => {
    console.log("resolved", data);
  })
  .catch((error) => {
    console.log("rejected", error.msg);
    //error message shows the message of throw new message
  });
console.log(3);
console.log(4);
