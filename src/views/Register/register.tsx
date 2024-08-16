import React, { useState } from 'react'
import { auth, logout, register } from '../../Config/firebase'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function Register() {

    const navigate = useNavigate()

    const [fullName, setFullName] = useState<any>()
    const [email, setEmail] = useState<any>()
    const [password, setPassword] = useState<any>()

    const registerUser = async() => {
      try{
        await register({email, password, fullName})
        await logout()
        toast.success("Account created Successfully!");
        navigate('/login')
      }catch(e:any){
        toast.warning("Something went wrong!");
      };
      
    }

  return (
    <div className="flex justify-center items-center w-full h-screen p-3">
    <div className="md:w-[500px] sm:w-[400px] w-full py-10 bg-slate-200 shadow-md px-8 md:py-16 flex flex-col gap-7 rounded-md">
    <h2 className="text-4xl font-semibold text-center">Register</h2>
      <input
        type="text"
        onChange={(e) => setFullName(e.target.value)}
        placeholder="Full Name"
        className="border border-black p-3 w-full rounded-md"
      />
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

      <button onClick={registerUser} className="border w-fit border-black px-6 py-2 rounded hover:bg-black hover:text-white">Register</button>
    </div>
  </div>
  )
}

export default Register