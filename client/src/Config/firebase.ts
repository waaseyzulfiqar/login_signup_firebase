import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDE1prlt4u-3e5M_cmE3lKaGa48klSqZi0",
  authDomain: "sirkashifloginsignup.firebaseapp.com",
  projectId: "sirkashifloginsignup",
  storageBucket: "sirkashifloginsignup.appspot.com",
  messagingSenderId: "944075681445",
  appId: "1:944075681445:web:75f25aa52215bb0fd8674c",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);
const db = getFirestore(app);

export const register = async (userInfo: any) => {
  const { fullName, email, password } = userInfo;
  await createUserWithEmailAndPassword(auth, email, password);
  const users = { fullName, email };
  return addDoc(collection(db, "users"), { users });
};

export const login = (email: any, password: any) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const logout = async () => {
    return signOut(auth);
  };

  interface ProductInfo {
    image: File;
  }
  
  export const addProduct = async (productInfo: ProductInfo) => {
    if (!productInfo || !productInfo.image) {
      throw new Error("Product info and image are required.");
    }
  
    const { image } = productInfo;
    const storageRef = ref(storage, "products/" + image.name);
  
    try {
      await uploadBytes(storageRef, image);
      const imgUrl = await getDownloadURL(storageRef);
      return imgUrl;
    } catch (error) {
      console.error("Error uploading image or retrieving URL:", error);
      throw error;
    }
  };

export const showProductOnDetailPage = async (param: any) => {
  const docRef = doc(db, "products", param);

  const docSnap = await getDoc(docRef);

  return docSnap.data();
};

export { onAuthStateChanged, auth, db, getDoc, doc };
