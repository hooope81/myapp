import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDKBNg3CHrlzYNhgqJBdmx3jW2QrciRnJg",
  authDomain: "chat-c20e8.firebaseapp.com",
  databaseURL: "https://chat-c20e8-default-rtdb.firebaseio.com",
  projectId: "chat-c20e8",
  storageBucket: "chat-c20e8.appspot.com",
  messagingSenderId: "581719080643",
  appId: "1:581719080643:web:e60e43e203b80bf174ac76",
  measurementId: "G-J9TGBZD8SH"
};

const firebase = initializeApp(firebaseConfig);

export default firebase;