import React from "react";
import AddHomeIcon from "@mui/icons-material/AddHome";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Person4Icon from "@mui/icons-material/Person4";
import PasswordIcon from "@mui/icons-material/Password";
import ReplyIcon from "@mui/icons-material/Reply";
import LogoutIcon from "@mui/icons-material/Logout";

const sidebarData = [
  {
    name: "POST FOR FREE",
    icon: (
      <AddHomeIcon
        sx={{
          fontSize: 33,
        }}
      />
    ),
  },
  {
    name: "Wishlist",
    icon: (
      <FavoriteIcon
        sx={{
          fontSize: 33,
        }}
      />
    ),
  },
  {
    name: "Profile",
    icon: (
      <Person4Icon
        sx={{
          fontSize: 33,
        }}
      />
    ),
  },
  {
    name: "Write Review",
    icon: (
      <Person4Icon
        sx={{
          fontSize: 33,
        }}
      />
    ),
  },
  {
    name: "Change Password",
    icon: (
      <PasswordIcon
        sx={{
          fontSize: 33,
        }}
      />
    ),
  },
  {
    name: "Forum Replies",
    icon: (
      <ReplyIcon
        sx={{
          fontSize: 33,
        }}
      />
    ),
  },
  {
    name: "Logout",
    icon: (
      <LogoutIcon
        sx={{
          fontSize: 33,
        }}
      />
    ),
  },
];
const ProfileSidebar = () => {
  return (
    <div className=" w-60 border-r-2 border-gray-200 min-h-screen  ">
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
        <h1 className="text-base font-semibold mb-4">Dashboard</h1>
        <ul>
          {sidebarData.map((data, index) => (
            <li
              key={index}
              className="tracking-normal p-4 text-base font-semibold flex gap-2  items-center text-black hover:text-orange-500    hover:translate-x-6   transition ease-in-out duration-300"
            >
              <data.icon.type sx={{ fontSize: 33 }} className="text-inherit" />
              {data.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProfileSidebar;
