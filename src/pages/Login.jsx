import React from 'react'
import AuthBg from '../components/AuthBg'
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className='flex flex-row gap-11'>
        <AuthBg />
        <div className="max-w-lg w-full p-5 mt-10 ml-10 bg-white bg-opacity-80 shadow-lg rounded-lg ">
    <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Login</h2>
    <div className="mb-3">
         
          <div className='mb-3'>
              <label>Username:</label>
              <input
                type="name"
                placeholder="Your Email or Username"
                 className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
              />
            </div>
           <div className='mb-3'>
            <label>Password:</label>
            <input type="text"
        name=""
        required
         placeholder="Password"
        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
        />
        </div>
         
            <button className="bg-yellow-400 rounded h-10 w-20">
            Login
        </button>
          <div className="flex gap-2 text-sm mt-5">
            <span> Dont't Have an account?</span>
            <Link to="/sign-up" className="text-yellow-500">
              Sign up
            </Link>
          </div>
         </div>
        </div>
    </div>
  
  )
}

export default Login