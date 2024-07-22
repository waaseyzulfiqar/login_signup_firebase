import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore"; 



const firebaseConfig = {
  apiKey: "AIzaSyDE1prlt4u-3e5M_cmE3lKaGa48klSqZi0",
  authDomain: "sirkashifloginsignup.firebaseapp.com",
  projectId: "sirkashifloginsignup",
  storageBucket: "sirkashifloginsignup.appspot.com",
  messagingSenderId: "944075681445",
  appId: "1:944075681445:web:75f25aa52215bb0fd8674c"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);



export const register = async(userInfo:any) => {
  const {fullName, email, password} = userInfo
  await createUserWithEmailAndPassword(auth, email, password)
  const users = {fullName, email}
 return addDoc(collection(db, "users"), {users});

}

export const login = (email:any, password:any) => {
   return signInWithEmailAndPassword(auth, email, password)
  

}