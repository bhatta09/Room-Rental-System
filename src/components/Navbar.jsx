import FavoriteIcon from "@mui/icons-material/Favorite";
import SearchIcon from "@mui/icons-material/Search";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import PersonIcon from "@mui/icons-material/Person";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import logo from "../assets/homer.png";
import { useSelector } from "react-redux";
import axios from "axios";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import Badge from "@mui/material/Badge";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import DraftsIcon from "@mui/icons-material/Drafts";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LoginIcon from "@mui/icons-material/Login";
import { IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
const mobileNavData = [
  {
    id: 1,
    name: "Home",
    path: "/contact",
    icon: <HomeIcon sx={{ fontSize: 18 }} />,
  },
  {
    id: 2,

    name: "Find me room",
    path: "/about",
    icon: <SearchIcon sx={{ fontSize: 18 }} />,
  },
  {
    id: 3,

    name: "Login/Signup",
    path: "/contact",
    icon: <PersonIcon sx={{ fontSize: 18 }} />,
  },
  {
    id: 4,

    name: "Shift room",
    path: "/about",
    icon: <AirportShuttleIcon sx={{ fontSize: 18 }} />,
  },
];
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
      <div className="bg--500 w-full flex justify-between  text-sm font-medium py-2 ">
        <div className="flex items-center gap-28">
          <Link to="/">
            <img src={logo} alt="" className="w-36" />
          </Link>
          <Badge badgeContent={4} color="warning">
            <FavoriteBorderIcon fontSize="small" />
          </Badge>
        </div>
        {/* <div className="flex gap-3 items-center">
          <span className="flex gap-3 items-center">
            <LocalPhoneIcon fontSize="small" />
            (+977)-096-410183
          </span>
          <span>|</span>
          <span className="flex gap-3 items-center">
            <DraftsIcon fontSize="small" />
            hamroaawas@gmail.com
            </span>
        </div> */}
        <div className="flex gap-3 items-center ">
          {/* <span className="flex justify-evenly items-center">
            <IconButton size="small">
              <FacebookIcon fontSize="inherit" />
            </IconButton>
            <IconButton size="small" color="#000000">
              <InstagramIcon fontSize="inherit" />
            </IconButton>
            <IconButton size="small">
              <XIcon fontSize="inherit" />
            </IconButton>
          </span> */}
          {/* <span>|</span> */}
          <div className="flex gap-3 items-center">
            <div className="flex gap-4 items-center  mr-20">
              <span className="flex gap-1 items-center">
                Add Room
                <AddIcon fontSize="small" />
              </span>
              <Link
                className="text-black font-medium hover:text-yellow-300 "
                to="/contact"
              >
                {/* <button className="hidden md:block border-2 border-gray-500  p-2 px-5 rounded-md ">
              <h1 className=" uppercase text-xs leading-4">Promote</h1>
            </button> */}
              </Link>
              <Link
                className="text-black font-medium hover:text-yellow-300 "
                to="/about"
              >
                <button className="hidden md:block border-2 border-gray-500  p-2 px-5 rounded-md ">
                  <h1 className=" uppercase text-xs leading-4">Find me room</h1>
                </button>
              </Link>
              <button className="  p-2 px-5 rounded-md hidden md:flex  gap-1  bg-yellow-400">
                <AirportShuttleIcon sx={{ fontSize: 17, color: "white" }} />
                <h1 className=" uppercase text-xs leading-4 font-semibold text-white">
                  shift Home
                </h1>
              </button>
            </div>
            <div className="flex gap-1 items-center">
              <span className="flex gap-2 items-center">
                <LoginIcon fontSize="small" />
                Login
              </span>
              <span>/</span>
              <span>Register</span>
            </div>
          </div>
        </div>
      </div>
      {/*wishlist  */}
      {/* <div className=" text-base font-medium uppercase md:flex flex-col  items-end hidden ">
        <FavoriteIcon sx={{ fontSize: 18 }} />
      </div> */}
      {/* login */}
      {/* <div className=" mx-auto hidden md:block  ">
        <Link to={username ? "/profile" : "/login"}>
          <div className="flex items-center gap-1 text-base font-semibold uppercase">
            {username ? (
              <div className="flex items-center gap-1 text-base font-medium uppercase">
                Hi
                <div className="w-6 h-6 rounded-full overflow-hidden border-2 border-yellow-500 bg-gray-900">
                  <img
                    src={image}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                {username}
              </div>
            ) : (
              <div className="flex items-center gap-1 text-base font-medium uppercase">
                Login <PersonIcon sx={{ fontSize: 20 }} />
              </div>
            )}
          </div>
        </Link>
      </div> */}
      {/* 
      <button className="  p-2 px-5 rounded-md hidden md:flex  gap-1  bg-yellow-400">
        <AirportShuttleIcon sx={{ fontSize: 17, color: "white" }} />
        <h1 className=" uppercase text-xs leading-4 font-semibold text-white">
          shift Home
        </h1>
      </button> */}

      {/* mobileResponsive */}
      {/* <div className="w-full fixed bg-white shadow-2xl   bottom-0 z-[100] md:hidden rounded-t-full  ">
        <div className="flex flex-row mx-8 my-3 justify-between gap-5 items-center">
          {mobileNavData.map((data) => (
            <div
              key={data.id}
              className=" uppercase text-xs flex flex-col items-center "
            >
              {data.icon}
              <Link
                className="text-black font-medium hover:text-yellow-300 "
                to={data.path}
              >
                <h1 className="text-[10px] font-bold">{data.name}</h1>
              </Link>
            </div>
          ))}
        </div>
      </div> */}
    </nav>
  );
};

export default Navbar;
