import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCyMNHZU4lhgT0ZQLwVO9HOTVih5tpi4CQ",
  authDomain: "crudapp-11b21.firebaseapp.com",
  projectId: "crudapp-11b21",
  storageBucket: "crudapp-11b21.firebasestorage.app",
  messagingSenderId: "639220972497",
  appId: "1:639220972497:web:25907571a313f64e123ef0"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

