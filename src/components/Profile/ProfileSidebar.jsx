import React from "react";
import AddHomeIcon from "@mui/icons-material/AddHome";
const ProfileSidebar = () => {
  return (
    <div className=" w-60">
      {/* image */}
      <div className="flex flex-col justify-center items-center gap-1 my-2 pl-4">
        <img
          className="w-20 h-20 rounded-full"
          src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <h1 className="font-medium text-xl">Hello Swornim Shrestha</h1>
      </div>
      {/* Dashboard */}
      <div className="pl-4">
        <h1 className="text-base font-semibold mb-4 ">Dashboard</h1>
        <ul>
          <li className=" tracking-normal p-3 text-base font-semibold hover:text-white hover:bg-orange-500 flex gap-2 uppercase items-center">
            <AddHomeIcon sx={{ color: "white", fontSize: 33 }} />
            Post for free
          </li>

          <li>Wishlist</li>
          <li>Profile</li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileSidebar;
