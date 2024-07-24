import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { toast } from "react-toastify";
import { doc, getDoc, getDocs, getFirestore } from "firebase/firestore";
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

export const addProduct = async (productInfo: any) => {
  const { title, description, image, price } = productInfo;

  const storageRef = ref(storage, "products/" + image.name);

  await uploadBytes(storageRef, image);

  const url = await getDownloadURL(storageRef);

  return addDoc(collection(db, "products"), {
    title,
    description,
    price,
    image: url,
  });
};

// export const getProducts = async () => {
//   // const docRef = doc(db, "products", "yzC6VYA9p8ACl84UA28y");

//   // const docSnap = await getDoc(docRef);

//   // if (docSnap.exists()) {
//   //   console.log("Document data:", docSnap.data());
//   // } else {
//   //   // docSnap.data() will be undefined in this case
//   //   console.log("No such document!");
//   // }

//   const querySnapshot = await getDocs(collection(db, "products"));
//   querySnapshot.forEach((doc) => {
//     // doc.data() is never undefined for query doc snapshots
//     let products = doc.data()
//     return products;
//   });
// };

export { onAuthStateChanged, auth,db };
