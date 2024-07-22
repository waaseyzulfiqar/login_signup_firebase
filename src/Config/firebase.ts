import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";


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


export const register = (email:any, password:any, navigate:any) => {
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    toast.success("Account created Successfully!");
    navigate('/')
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    toast.warning("Something went wrong!");
  });

}

export const login = (email:any, password:any) => {
   return signInWithEmailAndPassword(auth, email, password)
  

}