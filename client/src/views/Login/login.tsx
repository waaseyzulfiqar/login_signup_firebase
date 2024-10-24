import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../Config/firebase";
import { toast } from "react-toastify";

function Login() {

    const navigate = useNavigate()
    
    const [email, setEmail] = useState<any>()
    const [password, setPassword] = useState<any>()

    const signIn = async() => {
      try{
        await login(email,password)
        toast.success("Successfully! Logged in");
        navigate('/')
      }catch(e:any) {
        toast.warning(e.message);
      }
      };
    

  return (
    <div className="flex justify-center items-center w-full h-screen p-3">
      <div className="md:w-[500px] sm:w-[400px] w-full py-10 bg-slate-200 shadow-md px-8 md:py-16 flex flex-col gap-7 rounded-md">
        <h2 className="text-4xl font-semibold text-center">Login</h2>
        <input
          type="Email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Email"
          className="border border-black p-3 w-full rounded-md"
        />
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter Password"
          className="border border-black p-3 w-full rounded-md"
        />

        <p
        onClick={() => navigate('/register')}
         className="text-center text-base cursor-pointer hover:text-blue-600">
          Don't have an account
        </p>
        <button onClick={() => signIn()} className="border border-black px-6 py-2 rounded hover:bg-black hover:text-white">
          login
        </button>
      </div>
    </div>
  );
}

export default Login;
