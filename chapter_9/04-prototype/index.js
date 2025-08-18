////////////////prototype////////////////

//class and constructor
// class User {
//   constructor(name, email) {
//     this.userName = name;
//     this.email = email;
//   }
//   login() {
//     console.log(`${this.userName} logged in`);
//   }
//   logout() {}
// }
function User(userName, email) {
  this.userName = userName;
  this.email = email;
}
User.prototype.login = function () {
  console.log(`${this.userName} just logged in`);
  return this;
};
User.prototype.logout = function () {
  console.log(`${this.userName} just logged out`);
  return this;
};
const userOne = new User("mario", "mario@gmail.com");
const userTwo = new User("ryu", "ryu@gmail.com");
console.log(userOne, userTwo);
userOne.login().logout();
