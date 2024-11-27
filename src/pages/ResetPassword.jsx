import React from "react";
import AuthBg from "../components/Auth/AuthBg";
import { TextField } from "@mui/material";
import { Link } from "react-router-dom";

const ResetPassword = () => {
  return (
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
            <TextField type="email" placeholder="Enter your email address" />
          </div>

          <button className="w-full font-semibold bg-[#ffb200] rounded h-10 text-base font-sm text-white">
            Send Link
          </button>
          <div className="flex justify-center gap-2 text-sm mt-5">
            <span className="text-gray-500 font-semibold">
              We’ll send you a link to your email to reset your password{" "}
              <Link
                to="/confirm-new-password"
                className="text-yellow-400 font-semibold "
              >
                Test
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
