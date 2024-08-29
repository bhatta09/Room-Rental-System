import { useState } from "react"
import AuthBg from "../components/AuthBg"



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
    <div className="flex flex-row">
<AuthBg />
<div className="max-w-lg w-full p-8 bg-white bg-opacity-80 shadow-lg rounded-lg">
    <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">SignUP</h2>
    <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">FullName:</label>
        <input type="text"
        name="fullname"
        placeholder="Your Full Name"
        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
        required 
        />
    </div>
    <div>
        <label>Email:</label>
        <input type="text"
        name="email"
        required placeholder="Your Email Adress"
        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
        />
    </div>
    <div>
        <label>PhoneNumber:</label>
        <input type=""
        name="PhoneNumber"
        required placeholder="Your Phone Number"
        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
        />
    </div>
    <div>
        <label>Password:</label>
        <input type="text"
        name="password"
        required placeholder="Password"
        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
        />
    </div>
    <div>
        <label>ConfirmPassword:</label>
        <input type="text"
        name="confirmpassword"
        required placeholder="Confirm Password"
        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
        />
    </div>
</div>
    </div>
    
  )
}

export default SignUp