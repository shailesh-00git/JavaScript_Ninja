//object lierals
let user = {
  name: "shailesh",
  age: 20,
  email: "shailesh@gmail.com",
  location: "kathmandu",
  blog: [
    { title: "learning Javascript", likes: 20 },
    { title: "Watching movies", likes: 45 },
    { title: "learning Native react", likes: 233 },
  ],
  login: () => {
    console.log("User logged in");
  },
  logout: function () {
    console.log("User logged out");
  },

  //inportant note the arrow function cant use this context
  logBlogs: function () {
    console.log("The user have the following blogs: ");
    this.blog.forEach((blog) => {
      console.log(blog.title, blog.likes);
    });
  },
};

console.log(user);

//accessing the elements of object
console.log(user.name);
console.log(user["email"]);

//updating values of object
user.age = 34;
user["location"] = "laltipur";
console.log(user.age);
console.log(user.location);

///methods in objects
user.login();
user.logBlogs();
