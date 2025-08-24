import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
  deleteDoc,
  doc,
  onSnapshot,
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

const list = document.querySelector("ul");
const form = document.querySelector("form");

// Add recipe to HTML
const addRecipe = (recipe, id) => {
  const createdAt = recipe.createdAt?.toDate() || new Date();

  const html = `
        <li data-id="${id}">
          <div>${recipe.name}</div>
          <div>${createdAt}</div>
          <button class="btn btn-outline-danger my-2">delete</button>
        </li>
      `;
  list.innerHTML += html;
};

// Delete recipe from DOM
const deleteRecipeFromDOM = (id) => {
  const item = document.querySelector(`li[data-id='${id}']`);
  if (item) item.remove();
};

// Real-time listener (handles initial load + future changes)
onSnapshot(collection(db, "recipies"), (snapshot) => {
  snapshot.docChanges().forEach((change) => {
    if (change.type === "added") {
      addRecipe(change.doc.data(), change.doc.id);
    }
    if (change.type === "removed") {
      deleteRecipeFromDOM(change.doc.id);
    }
  });
});

// Add recipe to Firestore
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = form.recipie.value.trim();
  if (!title) return;

  addDoc(collection(db, "recipies"), {
    name: title,
    createdAt: serverTimestamp(),
  })
    .then(() => form.reset())
    .catch((err) => console.log(err));
});

// Delete recipe from Firestore
list.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    const id = e.target.parentElement.getAttribute("data-id");
    deleteDoc(doc(db, "recipies", id)).catch((err) => console.log(err));
  }
});
