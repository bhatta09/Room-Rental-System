import FavoriteIcon from "@mui/icons-material/Favorite";
import SearchIcon from "@mui/icons-material/Search";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import PersonIcon from "@mui/icons-material/Person";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import logo from "../assets/home9.png";
import { useSelector } from "react-redux";
import axios from "axios";

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

      if(userDetails.imageName){
        imageData(userDetails.imageName)
      }
      setUsername(userDetails.username);
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
    <nav  className=" bg-white sticky  top-0 z-[100] flex flex-wrap  items-center   px-12 lg:px-32  pt-1 pb-2 gap-4 ">
      {/* logo */}
      <div className="mb-4 md:mb-0  sm:mr-64 md:mr-4">
        <Link to="/">
          <img src={logo} alt="" className="w-24" />
        </Link>
      </div>
      {/*wishlist  */}
      <div className=" text-base font-semibold uppercase md:flex flex-col mt-[-20px] items-end hidden ">
        <div className="w-5 h-5 rounded-full bg-yellow-300  text-white flex justify-center items-center">
          0
        </div>
        <div>
          Wishlist <FavoriteIcon sx={{ fontSize: 18 }} />
        </div>
      </div>
      {/* login */}
      <div className=" mx-auto hidden md:block  ">
        <Link to={username ? "/profile" : "/login"}>
          <div className="flex items-center gap-1 text-base font-semibold uppercase">
            {username ? (
              <div className="flex items-center gap-1 text-base font-semibold uppercase">
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
              <div className="flex items-center gap-1 text-base font-semibold uppercase">
                Login <PersonIcon sx={{ fontSize: 20 }} />
              </div>
            )}
          </div>
        </Link>
      </div>

      <button className="md:block ">
        <h1 className=" uppercase text-sm md:text-base font-semibold  ">
          Add Room +
        </h1>
      </button>
      <button className="md:hidden ">
        <h1 className=" uppercase text-xs md:text-base font-semibold  border-2 border-gray-500  py-2 px-3 rounded-md ">
          Promotex
        </h1>
      </button>

      <Link
        className="text-black font-medium hover:text-yellow-300 "
        to="/contact"
      >
        <button className="hidden md:block border-2 border-gray-500  p-2 px-5 rounded-md ">
          <h1 className=" uppercase text-xs leading-4">Promote</h1>
        </button>
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

      {/* mobileResponsive */}
      <div className="w-full fixed bg-white shadow-2xl   bottom-0 z-[100] md:hidden rounded-t-full  ">
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
      </div>
    </nav>
  );
};

export default Navbar;
