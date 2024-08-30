import React from "react";
import ProfileSidebar from "../components/Profile/ProfileSidebar";

import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div className="flex flex-row">
      <ProfileSidebar />
      <div className="flex  flex-col">
        <Link to="/">
          <div className="text-2xl font-bold h-32 p-5 ">
            Room<span className="text-[#f65005]">Rental</span>
          </div>
        </Link>
        <div>contain</div>
      </div>
    </div>
  );
};

export default Profile;
