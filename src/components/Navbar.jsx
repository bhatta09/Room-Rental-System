import FavoriteIcon from "@mui/icons-material/Favorite";
import SearchIcon from "@mui/icons-material/Search";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import PersonIcon from "@mui/icons-material/Person";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import logo from "../assets/image.png";

import PaymentsIcon from "@mui/icons-material/Payments";
const navData = [
  { name: "Promote", path: "/contact" },
  { name: "Find me room", path: "/about" },
];
const mobileNavData = [
  { name: "Home", path: "/contact", icon: <HomeIcon sx={{ fontSize: 18 }} /> },
  {
    name: "Find me room",
    path: "/about",
    icon: <SearchIcon sx={{ fontSize: 18 }} />,
  },
  {
    name: "Login/Signup",
    path: "/contact",
    icon: <PersonIcon sx={{ fontSize: 18 }} />,
  },
  {
    name: "Shift room",
    path: "/about",
    icon: <AirportShuttleIcon sx={{ fontSize: 18 }} />,
  },
];
const Navbar = () => {
  const [currentUser, setCurrentUser] = useState(false);
  return (
    <nav className="flex justify-between items-center pb-2 pt-1 bg-white  top-0  lg:px-32 sticky z-[100]">
      <div className="flex gap-20 items-center mx-4 md:mx-0">
        <Link to="/">
          <div className=" ">
            <img src={logo} alt="" className="w-28" />
          </div>
        </Link>

        <div className=" text-base font-semibold uppercase  md:flex flex-col mt-[-20px] items-end hidden ">
          <div className="w-5 h-5 rounded-full bg-yellow-300  text-white flex justify-center items-center">
            0
          </div>
          <div>
            Wishlist <FavoriteIcon sx={{ fontSize: 18 }} />
          </div>
        </div>
        <div className=" ml-16 hidden md:block">
          <Link to={currentUser ? "/profile" : "/login"}>
            <button className="flex items-center gap-1 text-base font-semibold uppercase">
              {currentUser ? "Profile" : "Login"}{" "}
              <PersonIcon sx={{ fontSize: 20 }} />
            </button>
          </Link>
        </div>
      </div>

      <div className="flex flex-row gap-5  ">
        <button className="md:block ">
          <h1 className=" uppercase text-sm md:text-base font-semibold  ">
            Add Room +
          </h1>
        </button>
        <button className="md:hidden ">
          <h1 className=" uppercase text-xs md:text-base font-semibold  border-2 border-gray-500  py-2 px-3 rounded-md ">
            Promote
          </h1>
        </button>

        {navData.map((data, index) => (
          <Link
            key={index}
            className="text-black font-medium hover:text-yellow-300 "
            to={data.path}
          >
            <button className="hidden md:block border-2 border-gray-500  p-2 px-5 rounded-md ">
              <h1 className=" uppercase text-xs leading-4">{data.name}</h1>
            </button>
          </Link>
        ))}

        <button className="  p-2 px-5 rounded-md hidden md:flex  gap-1  bg-yellow-400">
          <AirportShuttleIcon sx={{ fontSize: 17, color: "white" }} />
          <h1 className=" uppercase text-xs leading-4 font-semibold text-white">
            shift Home
          </h1>
        </button>
      </div>

      <div className="w-full fixed bg-white shadow-2xl   bottom-0 z-[100] md:hidden rounded-t-full  ">
        <div className="flex flex-row mx-8 my-3 justify-between gap-5 items-center">
          {mobileNavData.map((data, index) => (
            <div className=" uppercase text-xs flex flex-col items-center ">
              {data.icon}
              <Link
                key={index}
                className="text-black font-medium hover:text-yellow-300 "
                to={data.path}
              >
                <h1 className="text-[10px] font-bold">{data.name}</h1>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
