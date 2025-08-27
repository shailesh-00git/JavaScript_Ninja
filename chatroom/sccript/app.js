import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  where,
  orderBy,
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

// ✅ Chatroom class
class Chatroom {
  constructor(room, username) {
    this.room = room;
    this.username = username;
    this.chats = collection(db, "chats");
    this.unsub;
  }

  // add new chat
  async addChat(message) {
    const chat = {
      message,
      username: this.username,
      room: this.room,
      createdAt: serverTimestamp(), // ✅ better than Timestamp.fromDate(new Date())
    };
    return await addDoc(this.chats, chat);
  }

  // listen for new chats
  getChats(callback) {
    const unsub =()=>{
    const q = query(
      this.chats,
      where("room", "==", this.room),
      orderBy("createdAt") // ✅ needs composite index
    );

    this.unsub =  onSnapshot(q, (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
          callback(change.doc.data());
        }
      });
    });
  }
  updateUsername(username) {
    this.username = username;
  }
  updateRoom(room) {
    this.room = room;
    console.log("room updated");
    if(this.unsub){
      this.unsub()
    }
  }
}
}

const chatroom = new Chatroom("general", "shailesh");

// listen for real-time updates
chatroom.getChats((data) => {
  console.log(data);
});
chatroom.updateRoom("gaming");
