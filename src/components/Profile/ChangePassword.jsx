import axios from "axios";
import { useState } from "react";
import { TextField } from "@mui/material"

const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const formData = {
    currentPassword,
    newPassword,
    confirmPassword,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const response = await axios.post(
        "http://localhost:9090/api/v1/auth/66d6a822f05b756cb475f29d",
        formData
      );
      console.log(response.data);
      setNewPassword("");
      setCurrentPassword("");
      setConfirmPassword("");
    } catch (error) {
      console.error("Error", error);
    }
  };
  return (
    <div className="max-w-lg w-full p-8 mt-2 ml-96 bg-white bg-opacity-80 shadow-xl rounded-lg ">
      <form onSubmit={handleSubmit}>
        <h2 className="text-2xl font-normal mb-6 text-gray-800 text-center">
          Change Password
        </h2>
        <div>
          <div className="mb-10 font-semibold  flex flex-col gap-2">
            <label className="text-xs font-bold">Old Password</label>
            <TextField
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              type="name"
              placeholder="Your Old Password"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>
          <div className="mb-10 font-semibold flex flex-col gap-2">
            <label className="text-xs font-bold">New Password</label>
            <TextField
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              type="text"
              name=""
              required
              placeholder=" Your New Password"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>
          <div className="mb-10 font-semibold flex flex-col gap-2">
            <label className="text-xs font-bold">Confirm Password</label>
            <TextField
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              type="text"
              name=""
              required
              placeholder=" Confirm Password"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>

          <button
            type="submit"
            className=" w-full  font-semibold bg-yellow-400 rounded h-10  text-base font-sm text-gray-800"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChangePassword;
