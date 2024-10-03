import React, { useEffect, useState } from "react";
import AuthBg from "../components/Auth/AuthBg";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { Button, TextField, IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import axios from "axios";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setToken } from "../redux/auth/authSlice";

const Login = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");

  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/v1/auth/signIn", {
        username,
        password,
      });

      console.log("Response:", response.data.token);
      const userToken = response.data.token;
      dispatch(setToken(userToken));
      toast.success("Login Successfully");
      setPassword("");
      setusername("");
      navigate("/");
    } catch (error) {
      if (error.response && error.response.data) {
        const errors = error.response.data;
        setFormErrors(errors);
      } else {
        setFormErrors({
          general: "An unexpected error occurred",
        });
      }
    }
  };

  useEffect(() => {
    const verifyToken = async () => {
      if (token) {
        try {
          const response = await axios.get(
            `/api/v1/auth/confirm?token=${token}`
          );
          console.log(response.data);
          toast.success("Email verified successfully!");
        } catch (error) {
          console.error("Error verifying token", error);
          toast.error("Error verifying email.");
        }
      }
    };

    verifyToken();
  }, [token]);

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  // Google login handler
  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:9090/oauth2/authorization/google";
  };

  // GitHub login handler
  const handleGithubLogin = () => {
    window.location.href = "http://localhost:9090/oauth2/authorization/github";
  };

  return (
    <div className="flex mx-auto justify-center flex-wrap mb-24">
      <div className="mt-5">
        <AuthBg />
      </div>
      <div className="max-w-lg w-full p-5 mt-10 md:ml-10 bg-[#fafbfb] bg-opacity-80 shadow-xl rounded-lg mb-4">
        <h2 className="text-2xl font-normal mb-6 text-gray-800 text-center uppercase">
          Login
        </h2>
        <div>
          <div className="mb-3 font-semibold flex flex-col gap-2">
            <label className="text-xs font-bold">USERNAME</label>
            <TextField
              type="name"
              value={username}
              onChange={(e) => setusername(e.target.value)}
              placeholder="Your Email or Username"
              error={!!formErrors.errorMsg}
              helperText={formErrors.errorMsg}
            />
          </div>
          <div className="mb-3 font-semibold flex flex-col gap-2">
            <label className="text-xs font-bold">PASSWORD</label>
            <TextField
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              error={!!formErrors.errorMsg}
              helperText={formErrors.errorMsg}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleClickShowPassword} edge="end">
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </div>

          <button
            onClick={handleSubmit}
            className="w-full font-semibold bg-yellow-400 rounded h-10 text-base font-sm text-gray-800"
          >
            Login
          </button>
          <div className="flex gap-2 text-sm mt-5">
            <span className="text-gray-500 font-semibold">
              Don't have an account?
            </span>
            <Link to="/sign-up" className="text-yellow-400 font-semibold">
              Sign up
            </Link>
          </div>
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

export default Login;
