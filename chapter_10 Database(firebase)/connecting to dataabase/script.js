import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import {
  getFirestore,
  collection, // to get the whole collection
  getDocs, //for retriving the docs
  addDoc,
  deleteDoc,
  doc, //for getting the docs
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
  return recipSnapshot.docs.map((d) => ({ id: d.id, ...d.data() })); //include id
}
//accsssing list
const listElement = document.querySelector(".list");
// Render items  fetched from
const addItems = (list) => {
  listElement.innerHTML = ""; // clear before adding

  list.forEach((element) => {
    const li = document.createElement("li");
    li.className =
      "list-group-item d-flex justify-content-between align-items-center delete";
    li.setAttribute("data-id", element.id);
    li.innerHTML = `
      <span class="fw-semibold">${element.name}</span>
       <button class="btn btn-outline-danger delete-btn btn-sm ">
        Delete
      </button>`;
    listElement.prepend(li);
  });
};

// Add a new recipe
async function addRecipe(name, author) {
  const docRef = await addDoc(collection(db, "recipies"), {
    name: name,
    author: author, // field
    createdAt: new Date(), // optional extra field
  });
  addItems(await getRecipies());
}

// Usage
getRecipies()
  .then((list) => addItems(list))
  .catch((err) => console.error(err));

//getting the data from form
const form = document.querySelector(".recipie-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = form.name.value.trim();
  const author = form.author.value.trim();
  addRecipe(name, author);
  form.reset();
});

//deleting from the list
listElement.addEventListener("click", (e) => {
  const btn = e.target.closest(".delete-btn");

  const parentLi = btn.closest("li");

  const id = parentLi.dataset.id; // Firestore ID stored on li
  console.log("Attempting to delete ID:", id);
  //deleting the element

  deleteDoc(doc(db, "recipies", id));
  parentLi.remove();
});
