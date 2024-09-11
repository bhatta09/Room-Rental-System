import React, { useEffect, useState } from "react";
import AuthBg from "../components/Auth/AuthBg";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "@mui/material";
import axios from "axios";

const Login = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");

  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/v1/auth/signIn", {
        username,
        password,
      });

      console.log("Response:", response.data);
      alert("Form Submitted Successfully");
      setPassword("");
      setusername("");

      navigate("/");
    } catch (error) {
      console.error("Error:", error);
      alert("Form is not Submitted ");
    }
  };

  useEffect(() => {
    const extractDetails = async () => {
      const response = await axios.get("/api/user/extract-details", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data);
    };
    extractDetails();
  }, []);

  // Google login handler
  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:9090/oauth2/authorization/google"; // Replace with your actual backend URL for Google
  };

  // GitHub login handler
  const handleGithubLogin = () => {
    window.location.href = "http://localhost:9090/oauth2/authorization/github"; // Replace with your actual backend URL for GitHub
  };

  return (
    <div className="flex flex-col md:flex-row gap-11 md:px-52  overflow-hidden mb-24 ">
      <div className="mt-5">
        <AuthBg />
      </div>
      <div className="max-w-lg w-full p-5 mt-10 md:ml-10 bg-white bg-opacity-80 shadow-xl rounded-lg mb-4">
        <h2 className="text-2xl font-normal mb-6 text-gray-800 text-center uppercase">
          Login
        </h2>
        <div>
          <div className="mb-3 font-semibold  flex flex-col gap-2">
            <label className="text-xs font-bold"> USERNAME</label>
            <input
              type="name"
              value={username}
              onChange={(e) => setusername(e.target.value)}
              placeholder="Your Email or Username"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>
          <div className="mb-3 font-semibold flex flex-col gap-2">
            <label className="text-xs font-bold">PASSWORD</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="text"
              name=""
              required
              placeholder="Password"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>

          <button
            onClick={handleSubmit}
            className="  w-full  font-semibold bg-yellow-400 rounded h-10  text-base font-sm text-gray-800"
          >
            Login
          </button>
          <div className="flex gap-2 text-sm mt-5 ">
            <span className="text-gray-500 font-semibold">
              {" "}
              Dont't Have an account?
            </span>
            <Link to="/sign-up" className="text-yellow-400 font-semibold">
              Sign up
            </Link>
          </div>
        </div>
        <div>
          <h1 className="text-lg  font-normal tracking-normal mt-6 text-gray-800 text-center uppercase">
            or
          </h1>
          <h1 className="text-lg  font-normal tracking-normal mb-6 text-gray-800 text-center ">
            Continue With
          </h1>
          <div className="flex justify-center gap-2">
            <Button variant="outlined" onClick={handleGoogleLogin}>
              <img
                className="w-7"
                src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000"
                alt="Google"
              />
              Google
            </Button>
            <Button variant="outlined"  onClick={handleGithubLogin}>
              <img
                className="w-7"
                src="https://img.icons8.com/?size=100&id=62856&format=png&color=000000"
                alt="GitHub"
              />
              GitHub
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
