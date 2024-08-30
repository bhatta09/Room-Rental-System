import React from "react";
import ProfileSidebar from "../components/Profile/ProfileSidebar";

const Profile = () => {
  return (
    <div className="flex flex-row">
      <ProfileSidebar />
      <div className="flex  flex-col">
        <div className="text-2xl font-bold h-32 p-5 ">
          Room<span className="text-yellow-400">Rental</span>
        </div>
        <div>contain</div>
      </div>
    </div>
  );
};

export default Profile;
