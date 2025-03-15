// import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import logo from "../assets/homer.png";
// import { useSelector } from "react-redux";
// import axios from "axios";
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

// import { styled } from "@mui/material/styles";
// import Badge from "@mui/material/Badge";
// import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
// import AddIcon from "@mui/icons-material/Add";
// import { Avatar } from "@mui/material";

// const StyledBadge = styled(Badge)(({ theme }) => ({
//   "& .MuiBadge-badge": {
//     backgroundColor: "#44b700",
//     color: "#44b700",
//     boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
//     "&::after": {
//       position: "absolute",
//       top: 0,
//       left: 0,
//       width: "100%",
//       height: "100%",
//       borderRadius: "50%",
//       animation: "ripple 1.2s infinite ease-in-out",
//       border: "1px solid currentColor",
//       content: '""',
//     },
//   },
//   "@keyframes ripple": {
//     "0%": {
//       transform: "scale(.8)",
//       opacity: 1,
//     },
//     "100%": {
//       transform: "scale(2.4)",
//       opacity: 0,
//     },
//   },
// }));
// const Navbar = () => {
//   const token = useSelector((state) => state.auth.token);
//   const role = useSelector((state) => state.auth.role);

//   const [username, setUsername] = useState("");
//   const [image, setImage] = useState("");
//   useEffect(() => {
//     if (token) {
//       extractDetails();
//     }
//   }, [token]);

//   const extractDetails = async () => {
//     try {
//       const response = await axios.get("/api/user/extract-details", {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       const userDetails = response.data["User Details"];
//       console.log(userDetails);
//       if (userDetails.imageName) {
//         imageData(userDetails.imageName);
//       }
//       setUsername(userDetails.profileName);
//       console.log(username);
//     } catch (error) {
//       console.error("Error fetching user details:", error);
//     }
//   };

//   const imageData = async (imageData) => {
//     const response = await axios.get(`/api/user/${imageData}`, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//       responseType: "blob",
//     });

//     const imageUrl = URL.createObjectURL(response.data);
//     setImage(imageUrl);
//   };

//   return (
//     <nav className=" bg-white/90 sticky  top-0 z-[100] flex flex-wrap  items-center   px-12 lg:px-32  pt-1  gap-4 ">
//       {/* logo */}
//       <div className="bg--500 w-full flex justify-between  text-sm font-medium py-2 ">
//         <div className="flex items-center gap-28">
//           <Link to="/">
//             <img src={logo} alt="" className="w-36" />
//           </Link>
//           {token && (
//             <Link to="/profile/wishlist">
//               <Badge badgeContent={4} color="warning">
//                 <FavoriteBorderIcon fontSize="small" />
//               </Badge>
//             </Link>
//           )}
//         </div>

//         <div className="flex gap-3 items-center ">
//           <div className="flex gap-3 items-center">
//             {role === "LANDLORD" && (
//               <div className="hidden md:flex gap-4 items-center  mr-20 ">
//                 <span className="flex gap-1 items-center">
//                   <Link to="/profile/post-room">
//                     Add Room
//                     <AddIcon fontSize="small" />
//                   </Link>
//                 </span>

//                 <Link
//                   className="text-black font-medium hover:text-yellow-300 "
//                   to="/contact"
//                 ></Link>
//                 <Link
//                   className="text-black font-medium hover:text-[#FFB200] "
//                   to="/find-room"
//                 >
//                   <button className="hidden md:block border-2 border-[#]  p-2 px-5 rounded-md ">
//                     <h1 className=" uppercase text-xs leading-4 font-medium">
//                       Find me room
//                     </h1>
//                   </button>
//                 </Link>
//                 <Link to="/shift-home">
//                   <button className="  p-2 px-5 rounded-md hidden md:flex  gap-1  bg-[#FFB200]">
//                     <AirportShuttleIcon sx={{ fontSize: 17, color: "white" }} />
//                     <h1 className=" uppercase text-xs leading-4 font- text-white">
//                       shift Home
//                     </h1>
//                   </button>
//                 </Link>
//               </div>
//             )}

//             {username ? (
//               <>
//                 <StyledBadge
//                   overlap="circular"
//                   anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
//                   variant="dot"
//                 >
//                   <Avatar alt="Remy Sharp" src={image} />
//                 </StyledBadge>
//                 <span className="flex gap-2 items-center">
//                   <Link to="/profile">{username}</Link>
//                 </span>
//               </>
//             ) : (
//               /* login */

//               <div className="flex gap-2 items-center">
//                 <AccountCircleOutlinedIcon fontSize="small" />
//                 <Link to="/login">Login</Link>
//                 <span>/</span>
//                 <Link to="/sign-up">Register</Link>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import { useState } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { CiSquarePlus } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";

import logo from "../assets/home0.png";

import { Button } from "@mantine/core";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
const navLinks = [
  {
    icon: <IoHomeOutline />,
    path: "",
    display: "Home",
  },
  {
    icon: <CiSquarePlus />,
    path: "/addRoom",
    display: "Post Room ",
  },
  {
    icon: <MdOutlineMiscellaneousServices />,
    path: "/services",
    display: "Services",
  },
  {
    icon: <CiPhone />,
    path: "/contact",
    display: "Contact",
  },
];
const NavBar = () => {
  const [mobileMenu, setmobileMenu] = useState(false);
  const handleMobileMenu = () => {
    setmobileMenu(!mobileMenu);
  };
  return (
    <>
      <header className="bg-white  text-center p-2  px-2 md:px-4 lg:px-12 xl:px-24  sticky top-0 z-50 shadow-sm">
        <div className="">
          <div className="flex items-center justify-between bg--700">
            <div className="">
            <Link to="/">
             <img src={logo} alt="" className="w-18 h-10" />
              </Link>
            </div>
            <div className="hidden md:flex justify-between gap-12 ">
              <ul className="menu flex lg:flex flex-row items-center gap-[2.7rem]">
                {navLinks.map((link, index) => (
                  <li key={index}>
                    <NavLink
                      to={link.path}
                      className={(navClass) =>
                        navClass.isActive
                          ? "text-orange-600 text-[14px] leading-7 font-[600]"
                          : "text-black text-[14px] leading-7 font-[500] hover:text-orange-600"
                      }
                    >
                      <div className="flex items-center gap-2">
                        {link.icon}
                        {link.display}
                      </div>
                    </NavLink>
                  </li>
                ))}
              </ul>

              <div className="flex justify-between gap-4 ">
                <Link to="/login">
                  <Button variant="" color="orange" radius="md">
                    Login
                  </Button>
                </Link>
                <Link to="/sign-up">
                  <Button variant="light" color="orange" radius="md">
                    SignUp
                  </Button>
                </Link>
              </div>
            </div>
            <div className="block md:hidden">
              {mobileMenu ? (
                <RxCross1
                  onClick={() => handleMobileMenu()}
                  className="cursor-pointer text-xl"
                />
              ) : (
                <RxHamburgerMenu
                  onClick={() => handleMobileMenu()}
                  className="cursor-pointer text-xl"
                />
              )}
            </div>
          </div>
        </div>
      </header>

      <div
        className={` p-2 z-40 fixed md:hidden top-0 left-0  w-full bg-white shadow-lg transition-transform duration-300 transform ${
          mobileMenu ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="mt-12 space-y-4 p-4">
          {navLinks.map((link, index) => (
            <li key={index}>
              <NavLink
                to={link.path}
                className="text-black text-[16px] font-[500] hover:text-orange-600 flex items-center gap-2 border-b border-slate-200 mb-12"
                onClick={() => setMobileMenu(false)}
              >
                {link.icon}
                {link.display}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default NavBar;
