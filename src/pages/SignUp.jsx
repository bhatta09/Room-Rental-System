import AuthBg from "../components/AuthBg";
import { Link } from "react-router-dom";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import Grid from "@material-ui/core/Grid";

const SignUp = () => {
  return (
    <div className="flex flex-row px-52 gap-11">
      <AuthBg />
      <div className="max-w-lg w-full p-5 mt-10 ml-10 bg-white bg-opacity-80 shadow-lg rounded-lg">
        <h2 className="uppercase text-2xl font-semibold mb-6 text-gray-800 text-center">
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
      </div>
    </div>
  );
};

export default SignUp;
