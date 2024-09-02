import React, { useEffect, useState } from "react";
import AddHomeIcon from "@mui/icons-material/AddHome";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Person4Icon from "@mui/icons-material/Person4";
import PasswordIcon from "@mui/icons-material/Password";
import ReplyIcon from "@mui/icons-material/Reply";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link, useLocation } from "react-router-dom";

const sidebarData = [
  {
    name: "POST FOR FREE",
    tab: "postforfree",
    icon: <AddHomeIcon sx={{ fontSize: 33 }} />,
  },
  {
    name: "Wishlist",
    tab: "wishlist",
    icon: <FavoriteIcon sx={{ fontSize: 33 }} />,
  },
  {
    name: "Profile",
    tab: "changeprofile",
    icon: <Person4Icon sx={{ fontSize: 33 }} />,
  },
  {
    name: "Write Review",
    tab: "writeReview",
    icon: <Person4Icon sx={{ fontSize: 33 }} />,
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
  {
    name: "Logout",
    tab: "logout",
    icon: <LogoutIcon sx={{ fontSize: 33 }} />,
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

  return (
    <div className="w-60 min-w-[240px] border-r-2 border-gray-200 min-h-screen  shadow-lg ">
      {/* image */}
      <div className="flex flex-col justify-center items-center gap-1 mt-2 mb-10 pl-4">
        <img
          className="w-20 h-20 rounded-full"
          src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <h1 className="font-medium text-lg ">Hello Swornim Shrestha</h1>
      </div>
      {/* Dashboard */}
      <div className="pl-4">
        <Link to="/profile">
          <h1 className=" pl-4 text-lg font-semibold mb-4  ">Dashboard</h1>
        </Link>
        <ul>
          {sidebarData.map((data, index) => (
            <li
              key={index}
              className={`cursor-pointer tracking-normal p-4 text-base font-semibold flex gap-2 items-center text-black hover:text-yellow-400 hover:translate-x-6 transition ease-in-out duration-300 ${
                tab === data.tab ? " text-[#FFB200]" : ""
              }`}
            >
              <Link to={`/profile/?tab=${data.tab}`}>
                <data.icon.type
                  sx={{ fontSize: 33 }}
                  className="text-inherit"
                />
                {data.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProfileSidebar;
