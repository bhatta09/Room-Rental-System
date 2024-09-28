import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/homer.png";
import { useSelector } from "react-redux";
import axios from "axios";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import AddIcon from "@mui/icons-material/Add";
import { Avatar } from "@mui/material";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));
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
console.log(userDetails)
      if (userDetails.imageName) {
        imageData(userDetails.imageName);
      }
      setUsername(userDetails.profileName);
      console.log(username)
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

            {username ? (
              <>
                <StyledBadge
                  overlap="circular"
                  anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                  variant="dot"
                >
                  <Avatar alt="Remy Sharp" src={image} />
                </StyledBadge>
                <span className="flex gap-2 items-center">
                  <Link to="/profile">{username}</Link>
                </span>
              </>
            ) : (
              /* login */

              <div className="flex gap-2 items-center">
                <AccountCircleOutlinedIcon fontSize="small" />
                <Link to="/login">Login</Link>
                <span>/</span>
                <Link to="/sign-up">Register</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
