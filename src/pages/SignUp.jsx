import AuthBg from "../components/AuthBg";
import { Link } from "react-router-dom";

import TextField from "@material-ui/core/TextField";

import Grid from "@material-ui/core/Grid";
import { Button } from "@mui/material";
import { useState } from "react";

const SignUp = () => {
  const [userType, setUserType] = useState("");

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };
  return (
    <div className="flex  flex-col md:flex-row  md:px-52 md:gap-11">
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
                autoComplete="fname"
                required
                fullWidth
                id="fullName"
                label="Full Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="phoneNumber"
                label="Your Phone Name"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label=" Address"
                name="address"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="password"
                label="Password"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="confirmPassword"
                label="Confirm Password"
              />
            </Grid>
            <div className="my-4 ">
              <label className="block text-gray-500 mb-2 font-semibold ml-2">
                Are you a:
              </label>
              <div className="flex justify-between ml-2 gap-5">
                <label className="flex items-center">
                  <input
                    type="radio"
                    value="landlord"
                    checked={userType === "landlord"}
                    onChange={handleUserTypeChange}
                    className="mr-2 "
                  />
                  <h1 className=" text-lg text-gray-700">Landlord</h1>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    value="renter"
                    checked={userType === "renter"}
                    onChange={handleUserTypeChange}
                    className="mr-2 "
                  />
                  <h1 className="text-lg text-gray-700">Renter</h1>
                </label>
              </div>
            </div>
            ;
          </Grid>
          <button className=" mt-5 w-full  font-semibold bg-yellow-400 rounded h-10  text-base font-sm text-gray-800">
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
