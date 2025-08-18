// prototype inheritance//
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

function Admin(username, email, title) {
  User.call(this, username, email);
  this.title = title;
}
Admin.prototype = Object.create(User.prototype);
Admin.prototype.deleteUser = function (users, userArr) {
  //delete user
  return userArr.filter((u) => u.userName !== users.userName);
};

const userOne = new User("mario", "mario@gmail.com");
const userTwo = new User("ryu", "ryu@gmail.com");
const userThree = new Admin("shailesh", "shailesh@gmail.com", "ninja");
let users = [userOne, userTwo, userThree];
console.log(users);
users = userThree.deleteUser(userOne, users);
console.log(users);
userOne.login().logout();
