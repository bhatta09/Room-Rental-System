import React, { useEffect, useState } from "react";
import AddHomeIcon from "@mui/icons-material/AddHome";
import PasswordIcon from "@mui/icons-material/Password";
import ReplyIcon from "@mui/icons-material/Reply";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearToken } from "../../redux/auth/authSlice";
import { toast } from "react-toastify";
import GridViewIcon from "@mui/icons-material/GridView";
import RateReviewOutlinedIcon from "@mui/icons-material/RateReviewOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

import IconButton from "@mui/material/IconButton";

import logo from "../../assets/homer.png";
import { Typography } from "@mui/material";
const sidebarData = [
  {
    name: "Post For Free",
    tab: "postforfree",
    icon: <AddHomeIcon />,
  },
  {
    name: "Wishlist",
    tab: "wishlist",
    icon: <FavoriteBorderOutlinedIcon sx={{ fontSize: 33 }} />,
  },
  {
    name: "Profile",
    tab: "changeprofile",
    icon: <AccountCircleOutlinedIcon sx={{ fontSize: 33 }} />,
  },
  {
    name: "Write Review",
    tab: "writeReview",
    icon: <RateReviewOutlinedIcon sx={{ fontSize: 33 }} />,
  },
  {
    name: "Change Password",
    tab: "changepassword",
    icon: <PasswordIcon sx={{ fontSize: 33 }} />,
  },
  {
    name: "Forum Replies",
    tab: "forumReplies",
    icon: <ReplyIcon sx={{ fontSize: 33 }} />,
  },
];

const ProfileSidebar = ({ open, close }) => {
  const location = useLocation();

  const [tab, setTab] = useState("");
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(clearToken());
    navigate("/");
    toast.error("Logged out!");
  };
  return (
    <>
      {open ? (
        <div className="w-60 min-w-[240px] border-r-2 border-gray-200 h-screen  shadow-lg bg-slate-100    overflow-x-hidden  ">
          {/* Dashboard */}
          <div className=" bg-slate-100">
            <Link to="/">
              <img src={logo} alt="" className="w-32 m-3" />
            </Link>

            <Link to="/profile">
              <div className="flex gap-4 items-center p-3 text-yellow-400 hover:bg-yellow-100 rounded-lg transition duration-300 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-2 before:bg-[#FFB200] before:rounded-tr-lg before:rounded-br-lg relative">
                <GridViewIcon
                  sx={{ fontSize: 20, fontWeight: "bold" }}
                  className="text-[#FFB200]"
                />
                <Typography
                  sx={{ fontWeight: "bold" }}
                  className=" text-[#FFB200]"
                >
                  Dashboard
                </Typography>
              </div>
            </Link>

            <ul>
              {sidebarData.map((data, index) => (
                <li
                  key={index}
                  className={`relative cursor-pointer  p-3     hover:translate-x-6 transition ease-in-out duration-300 hover:bg-yellow-400/10 hover:text-yellow-400  before:content-[''] before:absolute before:top-1/2 before:left-[-0.5rem] before:transform before:-translate-y-1/2 before:w-0 before:h-0 before:bg-[#FFB200] hover:before:w-2 hover:before:h-full hover:before:rounded-r-md`}
                >
                  <Link to={`/profile/?tab=${data.tab}`}>
                    <div className="flex">
                      <IconButton
                        sx={{
                          borderRadius: "2px",
                          marginRight: "12px",
                          padding: "2px",
                          "&:hover": {
                            backgroundColor: "rgba(255, 178, 0, 0.2)",
                            color: "#FFB200",
                          },
                        }}
                      >
                        <data.icon.type className="text-inherit " />
                      </IconButton>
                      <Typography>{data.name}</Typography>
                    </div>
                  </Link>
                </li>
              ))}

              <div
                onClick={handleLogout}
                className="cursor-pointer tracking-normal p-4 text-lg font-normal flex gap-4 items-center text-slate-600 hover:translate-x-6 transition ease-in-out duration-300 "
              >
                <LogoutIcon sx={{ fontSize: 20 }} className="text-inherit" />
                <Typography sx={{ fontWeight: "bold" }}>Logout</Typography>
              </div>
            </ul>
          </div>
        </div>
      ) : (
        <div className="w-16  border-r-2 border-gray-200 h-screen  shadow-lg   bg-slate-100  overflow-x-hidden">
          {/* Dashboard */}
          <div className=" bg-slate-100  mt-20">
            <Link to="/profile">
              <div className="flex gap-4 items-center p-3 text-[#FFB200]  before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-2 before:bg-[#FFB200] before:rounded-tr-lg before:rounded-br-lg relative">
                <GridViewIcon
                  sx={{ fontSize: 20, fontWeight: "bold" }}
                  className="text-[#FFB200]"
                />
              </div>
            </Link>

            <ul>
              {sidebarData.map((data, index) => (
                <li
                  key={index}
                  className={`relative cursor-pointer  p-3 hover:bg-yellow-400/10 hover:text-yellow-400  before:content-[''] before:absolute before:top-1/2 before:left-[-0.5rem] before:transform before:-translate-y-1/2 before:w-0 before:h-0 before:bg-[#FFB200] hover:before:w-2 hover:before:h-full hover:before:rounded-r-md`}
                >
                  <Link to={`/profile/?tab=${data.tab}`}>
                    <div className="flex">
                      <IconButton
                        sx={{
                          borderRadius: "2px",
                          marginRight: "12px",
                          padding: "2px",
                          "&:hover": {
                            backgroundColor: "rgba(255, 178, 0, 0.2)",
                            color: "#FFB200",
                          },
                        }}
                      >
                        <data.icon.type className="text-inherit " />
                      </IconButton>
                    </div>
                  </Link>
                </li>
              ))}

              <div
                onClick={handleLogout}
                className="cursor-pointer tracking-normal p-4 text-lg font-normal flex gap-4 items-center text-slate-600  "
              >
                <LogoutIcon sx={{ fontSize: 20 }} className="text-red-500" />
              </div>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default ProfileSidebar;
