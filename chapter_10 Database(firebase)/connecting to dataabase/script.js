import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

// TODO: Replace the following with your app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRYd-3WaAc4nr6qSbD6AweWse3CbUpeCo",
  authDomain: "ninja-test-754f5.firebaseapp.com",
  databaseURL: "https://ninja-test-754f5-default-rtdb.firebaseio.com",
  projectId: "ninja-test-754f5",
  storageBucket: "ninja-test-754f5.appspot.com", // fixed
  messagingSenderId: "567885343662",
  appId: "1:567885343662:web:18f4168cc413644ff9f63f",
  measurementId: "G-JKJ1JKZTXH",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get a list of recipes from your Firestore collection
async function getRecipies() {
  const recipiesCol = collection(db, "recipies"); 
  const recipSnapshot = await getDocs(recipiesCol);
  const recipiList = recipSnapshot.docs.map((doc) => doc.data());
  return recipiList;
}

// Example usage (remove or adapt as needed)
getRecipies().then((list) => console.log(list)).catch((err) => console.error(err));
