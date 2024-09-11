import AuthBg from "../components/Auth/AuthBg";
import { Link, useNavigate } from "react-router-dom";

import { Button, Grid2, TextField } from "@mui/material";
import { useState } from "react";
import axios from "axios";

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    phoneNumber: "",
    email: "",
    address: "",
    password: "",
    confirmPassword: "",
  });

  const [formErrors, setFormErrors] = useState({}); // State for form validation errors

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  // Google login handler
  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:9090/oauth2/authorization/google";
  };

  // GitHub login handler
  const handleGithubLogin = () => {
    window.location.href = "http://localhost:9090/oauth2/authorization/github";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/v1/auth/signUp", formData);
      console.log(response.data);
      navigate("/emailverification");
    } catch (error) {
      if (error.response && error.response.data) {
        const errors = error.response.data;
        setFormErrors(errors); // Populate formErrors with API validation errors
      } else {
        setFormErrors({
          general: "An unexpected error occurred",
        });
      }
    }
  };

  return (
    <div className="flex  flex-col lg:flex-row  lg:px-52 md:gap-11 mb-10">
      <div className="mt-5">
        <AuthBg />
      </div>
      <div className="max-w-lg w-full p-4 mt-10 md:ml-10 bg-white bg-opacity-80 shadow-xl rounded-2xl mb-5">
        <h2 className="uppercase text-2xl font-semibold text-gray-800 text-center">
          Signup
        </h2>{" "}
        <form>
          <Grid2 container spacing={2}>
            <Grid2 size={6}>
              <TextField
                variant="standard"
                required
                fullWidth
                id="fullName"
                label="Full Name"
                autoFocus
                value={formData.fullName}
                onChange={handleChange}
                error={!!formErrors.fullName}
                helperText={formErrors.fullName}
              />
            </Grid2>
            <Grid2 size={6}>
              <TextField
                variant="standard"
                required
                fullWidth
                id="username"
                label="User Name"
                value={formData.username}
                onChange={handleChange}
                error={!!formErrors.username}
                helperText={formErrors.username}
              />
            </Grid2>
            <Grid2 size={16}>
              <TextField
                variant="standard"
                required
                fullWidth
                id="email"
                label="Email Address"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                error={!!formErrors.email}
                helperText={formErrors.email}
              />
            </Grid2>
            <Grid2 size={6}>
              <TextField
                variant="standard"
                required
                fullWidth
                label="Address"
                id="address"
                value={formData.address}
                onChange={handleChange}
                error={!!formErrors.address}
                helperText={formErrors.address}
              />
            </Grid2>

            <Grid2 size={6}>
              <TextField
                variant="standard"
                type="number"
                required
                fullWidth
                id="phoneNumber"
                label="Phone Number"
                value={formData.phoneNumber}
                onChange={handleChange}
                error={!!formErrors.phoneNumber}
                helperText={formErrors.phoneNumber}
              />
            </Grid2>
            <Grid2 size={6}>
              <TextField
                variant="standard"
                required
                fullWidth
                id="password"
                label="Password"
                value={formData.password}
                onChange={handleChange}
                error={!!formErrors.error}
                helperText={formErrors.error}
              />
            </Grid2>
            <Grid2 size={6}>
              <TextField
                variant="standard"
                required
                fullWidth
                id="confirmPassword"
                label="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                error={!!formErrors.error}
                helperText={formErrors.error}
              />
            </Grid2>
          </Grid2>
          <button
            onClick={handleSubmit}
            className="mt-5 w-full font-semibold bg-yellow-400 rounded h-10 text-base font-sm text-gray-800"
          >
            Signup
          </button>
        </form>
        <div className="flex gap-2 text-sm mt-5">
          <span className="text-gray-500 font-semibold">Already a member</span>
          <Link to="/login" className="text-yellow-400 font-semibold">
            login
          </Link>
        </div>
        <div>
          <h1 className="text-lg font-normal tracking-normal mt-6 text-gray-800 text-center uppercase">
            or
          </h1>
          <h1 className="text-lg font-normal tracking-normal mb-6 text-gray-800 text-center">
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
            <Button variant="outlined" onClick={handleGithubLogin}>
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

export default SignUp;
