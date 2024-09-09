import AuthBg from "../components/AuthBg";
import { Link, useNavigate } from "react-router-dom";

import TextField from "@material-ui/core/TextField";

import Grid from "@material-ui/core/Grid";
import { Button } from "@mui/material";
import { useState } from "react";
import axios from "axios";

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    phoneNum: "",
    email: "",
    address: "",
    password: "",
    confirmPassword: "",
  });
  const [userType, setUserType] = useState("");
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/v1/auth/signUp", formData);
      console.log(response.data);
      alert("Form submitted successfully!");
      navigate("/login");
    } catch (error) {
      console.error("Error:", error);
      alert("Form submission failed.");
    }
  };

  return (
    <div className="flex  flex-col lg:flex-row  lg:px-52 md:gap-11">
      <div className="mt-5">
        <AuthBg />
      </div>
      <div className="max-w-lg w-full p-4 mt-10 md:ml-10 bg-white bg-opacity-80 shadow-xl rounded-2xl mb-5">
        <h2 className="uppercase text-2xl font-semibold text-gray-800 text-center">
          Signup
        </h2>{" "}
        <form>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="fullName"
                label="Full Name"
                autoFocus
                value={formData.fullName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="username"
                label="User Name"
                autoFocus
                value={formData.username}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                label=" Address"
                id="address"
                autoComplete="email"
                value={formData.address}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                type="number"
                required
                fullWidth
                id="phoneNum"
                label="Your Phone Name"
                value={formData.phoneNum}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="password"
                label="Password"
                autoFocus
                value={formData.password}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="confirmPassword"
                label="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <button
            onClick={handleSubmit}
            className=" mt-5 w-full  font-semibold bg-yellow-400 rounded h-10  text-base font-sm text-gray-800 "
          >
            Signup
          </button>
        </form>
        <div className="flex gap-2 text-sm mt-5 ">
          <span className="text-gray-500 font-semibold"> Already a member</span>
          <Link to="/login" className="text-yellow-400 font-semibold">
            login
          </Link>
        </div>
        <div>
          <h1 className="text-lg  font-normal tracking-normal mt-6 text-gray-800 text-center uppercase">
            or
          </h1>
          <h1 className="text-lg  font-normal tracking-normal mb-6 text-gray-800 text-center ">
            Continue With
          </h1>
          <div className="flex justify-center">
            <Button variant="outlined">
              <img
                className="w-7"
                src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000"
                alt=""
              />
              Google
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
