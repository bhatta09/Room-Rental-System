import React, { useEffect, useState } from "react";
import ProfileSidebar from "../components/Profile/ProfileSidebar";

import { Link, useLocation } from "react-router-dom";
import PostForFree from "../components/Profile/PostForFree";
import WriteReview from "../components/Profile/WriteReview";
import Wishlist from "../components/Profile/Wishlist";
import ChangePassword from "../components/Profile/ChangePassword";
import ForumReplies from "../components/Profile/ForumReplies";
import ChangeProfile from "../components/Profile/ChangeProfile";

const Profile = () => {
  const location = useLocation();
  const [tab, setTab] = useState("");
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search); //location search is a query string
    const tabFromUrl = urlParams.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);
  return (
    <div className="flex flex-row">
      <ProfileSidebar />
      <div className="flex  flex-col">
        <Link to="/">
          <div className="text-2xl font-bold h-32 p-5 ">
            Room<span className="text-yellow-400">Rental</span>
          </div>
        </Link>
        {tab === "postforfree" && <PostForFree />}
        {tab === "changeprofile" && <ChangeProfile />}
        {tab === "forumReplies" && <ForumReplies />}
        {tab === "changepassword" && <ChangePassword />}
        {tab === "wishlist" && <Wishlist />}
        {tab === "writeReview" && <WriteReview />}
      </div>
    </div>
  );
};

export default Profile;
