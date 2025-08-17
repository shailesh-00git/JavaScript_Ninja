////////////////class inheritance////////////////

//class and constructor
class User {
  constructor(name, email) {
    this.userName = name;
    this.email = email;
  }
  login() {
    console.log(`${this.userName} logged in`);
  }
  logout() {}
}
class Admin extends User {
  deleteUser(user) {
    users = users.filter((u) => {
      return u.userName !== user.userName;
    });
  }
}
const userOne = new User("mario", "mario@gmail.com");
const userTwo = new User("ryu", "ryu@gmail.com");
const userThree = new Admin("shailesh", "shailesh@gmail.com");
console.log(userOne, userTwo, userThree);
let users = [userOne, userTwo, userThree];
userThree.deleteUser(userTwo);
console.log(users);
