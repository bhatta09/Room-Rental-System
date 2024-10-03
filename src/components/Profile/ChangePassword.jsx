import axios from "axios";
import { useEffect, useState } from "react";
import { TextField, IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useSelector } from "react-redux";

const [formErrors, setFormErrors] = useState({});

import { toast } from "react-toastify";

const ChangePassword = () => {
  const [id, setId] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    if (token) {
      extractDetails();
    }
  }, [token]);
  console.log(token);
  const extractDetails = async () => {
    try {
      const response = await axios.get("/api/user/extract-details", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const userDetails = response.data["User Details"];
      setId(userDetails.id);
      console.log(userDetails.id);
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

  const formData = {
    currentPassword,
    newPassword,
    confirmPassword,
  };

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const response = await axios.post(`/api/user/${id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Password Changed Successfully");

      setNewPassword("");
      setCurrentPassword("");
      setConfirmPassword("");
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

  return (
    <div className="max-w-lg w-full p-8 mt-2 md:ml-96 bg-white bg-opacity-80 shadow-xl rounded-lg ">
      <form onSubmit={handleSubmit}>
        <h2 className="text-2xl font-normal mb-6 text-gray-800 text-center">
          Change Password
        </h2>
        <div>
          <div className="mb-10 font-semibold  flex flex-col gap-2">
            <label className="text-xs font-bold">Old Password</label>
            <TextField
              type={showPassword ? "text" : "password"}
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              placeholder="Your Old Password"
              error={!!formErrors.error}
              helperText={formErrors.error}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
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
          <div className="mb-10 font-semibold flex flex-col gap-2">
            <label className="text-xs font-bold">New Password</label>
            <TextField
              type={showPassword ? "text" : "password"}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              name=""
              required
              placeholder=" Your New Password"
              error={!!formErrors.newPassword}
              helperText={formErrors.newPassword}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
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
          <div className="mb-10 font-semibold flex flex-col gap-2">
            <label className="text-xs font-bold">Confirm Password</label>
            <TextField
              type={showPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              name=""
              required
              placeholder=" Confirm Password"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
              error={!!formErrors.newPassword}
              helperText={formErrors.newPassword}
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
          <h1 className=" text-red-400 font-normal text-sm my-4 text-center">
            {formErrors.errorMsg}
          </h1>

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
