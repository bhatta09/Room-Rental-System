import React, { useState } from "react";
import AuthBg from "../components/Auth/AuthBg";
import { TextField } from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";
import ConfirmEmailBtn from "./ConfirmEmailtBtn";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [openDialog, setopenDialog] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `/api/v1/auth/reset/password?email=${email}`
      );

      setopenDialog(true);
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
  // const handleLogout = () => {
  //   setopenDialog(true);
  // };
  return (
    <>
      <div className="flex mx-auto justify-center flex-wrap mb-24">
        <div className="mt-5">
          <AuthBg />
        </div>
        <div className="max-w-lg w-full  p-5 mt-10 md:ml-10 bg-[#fafbfb] bg-opacity-80 shadow-xl rounded-lg mb-4">
          <h2 className="text-2xl font-normal mb-6 text-gray-800 text-center uppercase">
            Reset Password
          </h2>
          <div>
            <div className="mb-3 font-semibold flex flex-col gap-2">
              <label className="text-xs font-bold">Email Address*</label>
              <TextField
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Enter your email address"
              />
            </div>

            <button
              onClick={handleSubmit}
              className="w-full font-semibold bg-[#ffb200] rounded h-10 text-base font-sm text-white"
            >
              Send Link
            </button>
            <div className="flex justify-center gap-2 text-sm mt-5">
              <span className="text-gray-500 font-semibold">
                We’ll send you a link to your email to reset your password{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
      <ConfirmEmailBtn openDialog={openDialog} setopenDialog={setopenDialog} />
    </>
  );
};

export default ResetPassword;
