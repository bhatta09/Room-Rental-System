import AuthBg from "../components/Auth/AuthBg";
import { Link, useNavigate } from "react-router-dom";
import { TextField, IconButton, InputAdornment, Grid } from "@mui/material";
import { GoKey } from "react-icons/go";
import { FaHouseUser } from "react-icons/fa";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useRef, useState } from "react";
import axios from "axios";
import { Text, Button, SegmentedControl } from "@mantine/core";
import Dropzone from "../components/utls/Dropzone";
const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    phoneNumber: "",
    email: "",
    address: "",
    password: "",
    confirmPassword: "",
    role: "RENTER",
    image: "",
  });

  const [file, setFile] = useState("");
  const resetRef = useRef();

  const clearFile = () => {
    setFile(null);
    resetRef.current?.();
  };

  const [formErrors, setFormErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleFileChange = (file) => {
    setFile(file);
  };
  const handleRoleSelect = (role) => {
    setFormData((prevData) => ({
      ...prevData,
      role,
    }));
  };

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword(!showConfirmPassword);

  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:9090/oauth2/authorization/google";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append("fullName", formData.fullName);
    formDataToSend.append("username", formData.username);
    formDataToSend.append("phoneNumber", formData.phoneNumber);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("address", formData.address);
    formDataToSend.append("password", formData.password);
    formDataToSend.append("confirmPassword", formData.confirmPassword);
    formDataToSend.append("role", formData.role);

    if (file) {
      formDataToSend.append("idCard", file);
      console.log("File to be uploaded:", file);
    }
    try {
      const response = await axios.post("/api/v1/auth/signUp", formDataToSend, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response.data);
      navigate("/emailverification", { state: { email: formData.email } });
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
    <div className=" flex mx-auto justify-center flex-wrap mb-10">
      <div className="mt-5">
        <AuthBg />
      </div>
      <div className="max-w-lg w-full p-4 mt-10 md:ml-10 bg-white bg-opacity-80 shadow-xl rounded-2xl mb-5">
        <h2 className="uppercase text-2xl font-semibold text-gray-800 text-center">
          Signup
        </h2>

        <h1 className="text-md font-normal my-2 text-center text-black/60">
          Choose your role and sign up
        </h1>
        <form onSubmit={handleSubmit}>
          <SegmentedControl
            className="border p-2 border--500 my-4"
            bg="white"
            color="yellow"
            fullWidth
            data={[
              {
                label: (
                  <div
                    onClick={() => handleRoleSelect("RENTER")}
                    className="flex justify-between  flex-col items-center"
                  >
                    <GoKey size={20} />
                    <span className="font-normal">RENTER</span>
                  </div>
                ),
                value: "checkin",
              },
              {
                label: (
                  <div
                    onClick={() => handleRoleSelect("LANDLORD")}
                    className="flex justify-between  flex-col items-center"
                  >
                    {/* <LuHouse size={30} /> */}
                    <FaHouseUser size={20} />
                    <span className="font-normal">LANDLORD</span>
                  </div>
                ),
                value: "lan",
              },
              {
                label: (
                  <div
                    onClick={() => handleRoleSelect("AGENT")}
                    className="flex justify-between  flex-col items-center"
                  >
                    {/* <LuHouse size={30} /> */}
                    <FaHouseUser size={20} />
                    <span className="font-normal">Agent</span>
                  </div>
                ),
                value: "agent",
              },
            ]}
          />
          <Grid container spacing={2}>
            <Grid item xs={6}>
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
            </Grid>
            <Grid item xs={6}>
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
            </Grid>
            <Grid item xs={12}>
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
            </Grid>
            <Grid item xs={6}>
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
            </Grid>

            <Grid item xs={6}>
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
            </Grid>
            <Grid item xs={6}>
              <TextField
                type={showPassword ? "text" : "password"}
                variant="standard"
                required
                fullWidth
                id="password"
                label="Password"
                value={formData.password}
                onChange={handleChange}
                error={!!formErrors.password || !!formErrors.error}
                helperText={formErrors.password || formErrors.error}
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
            </Grid>
            <Grid item xs={6}>
              <TextField
                type={showConfirmPassword ? "text" : "password"}
                variant="standard"
                required
                fullWidth
                id="confirmPassword"
                label="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                error={!!formErrors.confirmPassword || !!formErrors.error}
                helperText={formErrors.confirmPassword || formErrors.error}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleClickShowConfirmPassword}
                        edge="end"
                      >
                        {showConfirmPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
          </Grid>
          {/* {formData.role === "LANDLORD" && (
            <Group justify="start" className="my-3">
              <FileButton onChange={setFile} accept="image/png,image/jpeg">
                {(props) => <Button {...props}>Upload image</Button>}
              </FileButton>
              <Button
                disabled={!file}
                color="red"
                variant="filled"
                onClick={clearFile}
              >
                Reset
              </Button>
              
            </Group>
          )} */}
          {(formData.role === "LANDLORD" || formData.role === "AGENT") && (
            <h1 className="text-md font-normal my-4">ID Card Upload</h1>
          )}
          {(formData.role === "LANDLORD" || formData.role === "AGENT") && (
            <Dropzone value={formData.image} onChange={handleFileChange} />
          )}

          {file && (
            <Text size="sm" ta="center" mt="sm">
              Picked file: {file.name}
            </Text>
          )}
          <button
            type="submit"
            className="mt-5 w-full font-semibold bg-yellow-400 rounded h-10 text-base font-sm text-black"
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

        {formData.role === "RENTER" && (
          <div>
            <h1 className="text-lg font-normal tracking-normal mt-6 text-gray-800 text-center uppercase">
              or
            </h1>
            <h1 className="text-lg font-normal tracking-normal mb-6 text-gray-800 text-center">
              Continue With
            </h1>
            <div className="flex justify-center gap-2">
              <Button variant="light" onClick={handleGoogleLogin}>
                <img
                  className="w-7"
                  src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000"
                  alt="Google"
                />
                Google
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SignUp;
