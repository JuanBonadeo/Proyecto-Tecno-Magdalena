import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCv9ogFBh7asGJKC9bsvmGwyeqs41_7R-8",
  authDomain: "tecnomagdalena-4007d.firebaseapp.com",
  projectId: "tecnomagdalena-4007d",
  storageBucket: "tecnomagdalena-4007d.appspot.com",
  messagingSenderId: "347953932658",
  appId: "1:347953932658:web:1c077e0aea790b4dbf95eb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const getFirestoreInstance = () => {
  return getFirestore(app);
};
export const storage = getStorage(app);
//Initialize Firestore
export const db = getFirestore(app)