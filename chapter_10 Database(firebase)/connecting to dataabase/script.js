import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import {
  getFirestore,
  collection, // to get the whole collection
  getDocs, //for retriving the docs
  addDoc, //for getting the docs
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBRYd-3WaAc4nr6qSbD6AweWse3CbUpeCo",
  authDomain: "ninja-test-754f5.firebaseapp.com",
  databaseURL: "https://ninja-test-754f5-default-rtdb.firebaseio.com",
  projectId: "ninja-test-754f5",
  storageBucket: "ninja-test-754f5.appspot.com",
  messagingSenderId: "567885343662",
  appId: "1:567885343662:web:18f4168cc413644ff9f63f",
  measurementId: "G-JKJ1JKZTXH",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Fetch recipes
async function getRecipies() {
  const recipiesCol = collection(db, "recipies");
  const recipSnapshot = await getDocs(recipiesCol);
  return recipSnapshot.docs.map((doc) => doc.data());
}

// Render items  fetched from
const addItems = (list) => {
  const listElement = document.querySelector(".list");
  listElement.innerHTML = ""; // clear before adding


  list.forEach((element) => {
    const li = document.createElement("li");
    li.className =
      "list-group-item d-flex justify-content-between align-items-center";
    li.innerHTML = `
      <span class="fw-semibold">${element.name}</span>
      <span class="fw-semibold">${element.author}</span> `;
    listElement.appendChild(li);
  });
};

// Add a new recipe
async function addRecipe(name, author) {
  const docRef = await addDoc(collection(db, "recipies"), {
    name: name,
    author: author, // field
    createdAt: new Date(), // optional extra field
  });

  console.log("Document written with ID: ", docRef.id);
  const recipes = await getRecipies();
  addItems(recipes);
}

// Usage
getRecipies()
  .then((list) => addItems(list))
  .catch((err) => console.error(err));

//getting the data from form
const form = document.querySelector(".recipie-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = form.name.value;
  const author = form.author.value;
  console.log(name, author);
  addRecipe(name, author);
});
