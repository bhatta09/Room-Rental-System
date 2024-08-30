import { useState } from "react"
import AuthBg from "../components/AuthBg"
import { Link } from "react-router-dom";



function loginForm () {
    const [formData, setFormData] = useState({
        Fullname : '',
        Email: '',
        PhoneNumber : '',
        Password: '',
        ConfirmPassword: ''
    });
}


const SignUp = () => {


  return (
    <div className="flex flex-row gap-11 bg-gray-100">
<AuthBg />
<div className="max-w-lg w-full p-5 mt-10 ml-10 bg-white bg-opacity-80 shadow-lg rounded-lg">
    <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">SignUP</h2>
    <div className="mb-3">
        <label className="block text-gray-700 font-semibold mb-2">FullName:</label>
        <input type="text"
        name="fullname"
        placeholder="Your Full Name"
        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
        required 
        />
    </div>
    <div className="mb-3">
        <label className="block text-gray-700 font-semibold mb-2">Email:</label>
        <input type="text"
        name="email"
        required placeholder="Your Email Adress"
        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
        />
    </div>
    <div  className="mb-3">
        <label className="block text-gray-700 font-semibold mb-2">PhoneNumber:</label>
        <input type=""
        name="PhoneNumber"
        required placeholder="Your Phone Number"
        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
        />
    </div>
    <div  className="mb-3">
        <label className="block text-gray-700 font-semibold mb-2">Password:</label>
        <input type="text"
        name="password"
        required placeholder="Password"
        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
        />
    </div>
    <div  className="mb-3">
        <label className="block text-gray-700 font-semibold mb-2">ConfirmPassword:</label>
        <input type="text"
        name="confirmpassword"
        required
         placeholder="Confirm Password"
        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
        />
        </div>
        <button className="bg-yellow-400 rounded h-10 w-20">
            Signup
        </button>
        <div className="flex gap-2 text-sm mt-5">
            <span>Have an account?</span>
            <Link to="/login" className="text-yellow-400">
              Login
            </Link>
          </div>
        <div>
           
        </div>
</div>
    </div>
    
  )
}

export default SignUp