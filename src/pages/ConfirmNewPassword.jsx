import React from "react";
import AuthBg from "../components/Auth/AuthBg";
import { TextField } from "@mui/material";

const ConfirmNewPassword = () => {
  return (
    <div className="flex mx-auto justify-center flex-wrap mb-24">
      <div className="mt-5">
        <AuthBg />
      </div>
      <div className="max-w-lg w-full  p-5 mt-10 md:ml-10 bg-[#fafbfb] bg-opacity-80 shadow-xl rounded-lg mb-4">
        <h2 className="text-2xl font-normal mb-6 text-gray-800 text-center uppercase">
          Confirm New Password
        </h2>
        <div className="flex gap-2 justify-center text-sm my-5">
          <span className="text-gray-500 font-semibold">
            Enter your new password.
          </span>
        </div>
        <div>
          <div className="mb-3 font-semibold flex flex-col gap-2">
            <label className="text-xs font-bold">New Password *</label>
            <TextField type="email" placeholder="Enter Password" />
          </div>
          <div className="mb-3 font-semibold flex flex-col gap-2">
            <label className="text-xs font-bold">Confirm Password*</label>
            <TextField type="email" placeholder=" Confirm Password" />
          </div>
          <button className="w-full font-semibold bg-[#ffb200] rounded-lg h-10 text-base font-sm text-white">
            Reset Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmNewPassword;
