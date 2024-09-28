import React, { useEffect, useState } from "react";
import AddHomeIcon from "@mui/icons-material/AddHome";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Person4Icon from "@mui/icons-material/Person4";
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
import ProfileCard from "./ProfileCard";

import logo from "../../assets/homer.png";
const sidebarData = [
  {
    name: "Post For Free",
    tab: "postforfree",
    icon: <AddHomeIcon sx={{ fontSize: 10 }} />,
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

const ProfileSidebar = () => {
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
    <div className="w-60 min-w-[240px] border-r-2 border-gray-200 h-screen  shadow-lg bg-slate-100 overflow-y-scroll  overflow-x-hidden">
      {/* Dashboard */}
      <div className=" bg-slate-100">
       <Link to="/">
            <img src={logo} alt="" className="w-32 m-3" />
          </Link>

        <Link to="/profile">
          <div className="flex text-slate-600 p-3 ">
            <GridViewIcon sx={{ fontSize: 27 }} className="text-inherit" />

            <h1 className=" pl-4 text-lg font-normal   ">Dashboard</h1>
          </div>
        </Link>
        <ul>
          {sidebarData.map((data, index) => (
            <li
              key={index}
              className={`cursor-pointer tracking-normal p-3 text-lg   font-normal flex gap-2 items-center text-slate-600  hover:translate-x-6 transition ease-in-out duration-300 ${
                tab === data.tab ? " text-[#FFB200]" : ""
              }`}
            >
              <Link to={`/profile/?tab=${data.tab}`}>
                <data.icon.type
                  sx={{ fontSize: 27 }}
                  className="text-inherit mr-3"
                />
                {data.name}
              </Link>
            </li>
          ))}

          <li
            onClick={handleLogout}
            className="cursor-pointer tracking-normal p-4 text-lg font-normal flex gap-2 items-center text-slate-600 hover:translate-x-6 transition ease-in-out duration-300 "
          >
            <LogoutIcon sx={{ fontSize: 27 }} className="text-inherit" />
            Logout
          </li>
          <ProfileCard />
        </ul>
      </div>
    </div>
  );
};

export default ProfileSidebar;
