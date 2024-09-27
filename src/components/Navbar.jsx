import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/homer.png";
import { useSelector } from "react-redux";
import axios from "axios";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Badge from "@mui/material/Badge";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import AddIcon from "@mui/icons-material/Add";

const Navbar = () => {
  const token = useSelector((state) => state.auth.token);
  const [username, setUsername] = useState("");
  const [image, setImage] = useState("");
  useEffect(() => {
    if (token) {
      extractDetails();
    }
  }, [token]);

  const extractDetails = async () => {
    try {
      const response = await axios.get("/api/user/extract-details", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const userDetails = response.data["User Details"];

      if (userDetails.imageName) {
        imageData(userDetails.imageName);
      }
      setUsername(userDetails.profileName);
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };

  const imageData = async (imageData) => {
    const response = await axios.get(`/api/user/${imageData}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      responseType: "blob",
    });

    const imageUrl = URL.createObjectURL(response.data);
    setImage(imageUrl);
  };

  return (
    <nav className=" bg-white/90 sticky  top-0 z-[100] flex flex-wrap  items-center   px-12 lg:px-32  pt-1  gap-4 ">
      {/* logo */}
      <div className="bg--500 w-full flex justify-between  text-sm font-medium py-2  font-medium">
        <div className="flex items-center gap-28">
          <Link to="/">
            <img src={logo} alt="" className="w-36" />
          </Link>
          <Badge badgeContent={4} color="warning">
            <FavoriteBorderIcon fontSize="small" />
          </Badge>
        </div>

        <div className="flex gap-3 items-center ">
          <div className="flex gap-3 items-center">
            <div className="flex gap-4 items-center  mr-20">
              <span className="flex gap-1 items-center">
                Add Room
                <AddIcon fontSize="small" />
              </span>
              <Link
                className="text-black font-medium hover:text-yellow-300 "
                to="/contact"
              ></Link>
              <Link
                className="text-black font-medium hover:text-yellow-300 "
                to="/find-room"
              >
                <button className="hidden md:block border-2 border-gray-500  p-2 px-5 rounded-md ">
                  <h1 className=" uppercase text-xs leading-4 font-medium">
                    Find me room
                  </h1>
                </button>
              </Link>
              <Link to="/shift-home">
                <button className="  p-2 px-5 rounded-md hidden md:flex  gap-1  bg-yellow-400">
                  <AirportShuttleIcon sx={{ fontSize: 17, color: "white" }} />
                  <h1 className=" uppercase text-xs leading-4 font- text-white">
                    shift Home
                  </h1>
                </button>
              </Link>
            </div>

            <div className="flex gap-1 items-center">
              {/* profile name */}
              <div className="flex gap-1 items-center ">
                <span className="flex gap-2 items-center">
                  <AccountCircleOutlinedIcon fontSize="small" />
                  <Link to="/login">Login</Link>
                </span>
              </div>

              <span>/</span>
              <Link to="/sign-up">
                <span>Register</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
