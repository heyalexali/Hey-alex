
import { initializeApp } from "firebase/app";
import { 
  initializeFirestore, 
  persistentLocalCache, 
  persistentMultipleTabManager,
  collection, 
  doc, 
  setDoc, 
  getDoc, 
  getDocs, 
  onSnapshot, 
  query, 
  orderBy, 
  where,
  addDoc, 
  updateDoc, 
  deleteDoc
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC2uEYzQrKv439L6iNMSV9Gf4Cz4dlMMwE",
  authDomain: "hina-845c6.firebaseapp.com",
  databaseURL: "https://hina-845c6-default-rtdb.firebaseio.com/",
  projectId: "hina-845c6",
  storageBucket: "hina-845c6.firebasestorage.app",
  messagingSenderId: "373575792889",
  appId: "1:373575792889:web:9dd4b3de03dda48acdca28"
};

const app = initializeApp(firebaseConfig);

// Initialize Firestore with modern persistence API
// This fixes the 'enableIndexedDbPersistence' deprecation warning
const db = initializeFirestore(app, {
  localCache: persistentLocalCache({
    tabManager: persistentMultipleTabManager()
  })
});

export { db, collection, doc, setDoc, getDoc, getDocs, onSnapshot, query, orderBy, where, addDoc, updateDoc, deleteDoc };
