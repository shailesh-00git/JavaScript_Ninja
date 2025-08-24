import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import {
  getFirestore,
  collection, // to get the whole collection
  getDocs, //for retriving the docs
  addDoc, //for adding docs
  serverTimestamp, //adding the docs
  deleteDoc, //deleting the docs
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
  return recipSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })); //include id
}

//getting references to parent element
const list = document.querySelector("ul");
const form = document.querySelector("form");

//Add recipie to html
const addRecipe = (recipie, id) => {
  let html = `<li data-id="${id}"><div>${
    recipie.name
    //toDate() converts mili and nano second in date
  }</div><div>${recipie.createdAt.toDate()}</div>
  <button class ="btn btn-outline-danger my-2">delete</button>
  </li>`;
  list.innerHTML += html;
};

//extracting data from form adding to database
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = form.recipie.value.trim();
  addDoc(collection(db, "recipies"), {
    name: title,
    createdAt: serverTimestamp(),
  })
    .then(() => {
      // console.log("recipie sucessfuly deleted");
    })
    .catch((err) => console.log(err));
});
form.reset();

//deleting the recipies
list.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(e);
  if (e.target.tagName == "BUTTON") {
    console.log("button was clicked");
    const id = e.target.parentElement.getAttribute("data-id");
    // console.log(id);
    deleteDoc(doc(db, "recipies", id))
      .then(() => {
        // console.log("recipie sucessfully deleted");
      })
      .catch((err) => console.log(err));
  }
  // console.log(e.target.innerText);
  // e.target.innerText = "deleting...";
});

getRecipies()
  .then((recipiList) => {
    recipiList.forEach((element) => {
      // console.log(element.id);
      addRecipe(element, element.id);
      // console.log(element);
    });
  })
  .catch((err) => console.error(err));
