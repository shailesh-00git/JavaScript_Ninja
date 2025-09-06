import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA_s0DBsA1upvTBPRJcnWeVkNb09AMsYPQ",
  authDomain: "fir-9-48832.firebaseapp.com",
  projectId: "fir-9-48832",
  storageBucket: "fir-9-48832.firebasestorage.app",
  messagingSenderId: "255346048718",
  appId: "1:255346048718:web:75fb2cfcaca573f0c61a9f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Collection reference
const colRef = collection(db, "books");

// Get collection data
getDocs(colRef).then((snapshot) => {
  snapshot.forEach((doc) => {
    console.log(doc.id, doc.data());
  });
});

console.log("hello");
