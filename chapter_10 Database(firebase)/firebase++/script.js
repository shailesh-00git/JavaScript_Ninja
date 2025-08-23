import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import {
  getFirestore,
  collection, // to get the whole collection
  getDocs, //for retriving the docs
  addDoc,
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
  return recipSnapshot.docs.map((d) => d.data()); //include id
}

//getting refuence to parent element
const list = document.querySelector("ul");
//getting reference to form
const form = document.querySelector("form");
//html template
const addRecipe = (recipie) => {
  let html = `<li><div>${
    recipie.name
    //toDate() converts mili and nano second in date
  }</div><div>${recipie.createdAt.toDate()}</div></li>`;
  list.innerHTML += html;
};

///setting recipies to data base
function setRecipies(title) {
  return addDoc(collection(db, "recipies"), {
    name: title,
    createdAt: serverTimestamp(),
  });
}

//extracting data from form
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = form.recipie.value.trim();
  setRecipies(title)
    .then((res) => {
      // console.log(res);
    })
    .catch((err) => console.log(err));
});

getRecipies()
  .then((recipiList) => {
    recipiList.forEach((element) => {
      addRecipe(element);
      // console.log(element);
    });
  })
  .catch((err) => console.error(err));
