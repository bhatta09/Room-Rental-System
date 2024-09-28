import React, { useEffect, useState } from "react";
import ProfileSidebar from "../components/Profile/ProfileSidebar";
import Avatar from "@mui/material/Avatar";
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
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");

    if (location.pathname === "/profile") {
      setTab("");
    } else if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.pathname, location.search]);

  return (
    <div className="flex flex-row overflow-hidden max-h-screen">
      <ProfileSidebar />
      <div className="flex  flex-col ">
        <div className="text-2xl font-bold h-16 p-5 bg-slate-100 sticky top-0 z-50 flex ">
          <Link to="/">
            Lo<span className="text-yellow-400">go</span>
          </Link>
          <Avatar
            alt="Remy Sharp"
            src="https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
        {location.pathname === "/profile" && (
          <div className="mx-6 ">
            <h1 className="text-3xl font-normal mb-2">
              Hello ,Swornim Shrestha
            </h1>
            <p className="text-base leading-6 tracking-wide mb-6">
              Welcome to your control panel. Here, you have access to add new
              properties, promote your property, change your password, change
              your name & contact details, and also track your listed & pending
              properties.
            </p>
            <div className="w-80 h-40 bg-yellow-300/5 rounded-lg flex flex-col items-center justify-center">
              <h1 className="text-2xl font-normal"> Total Listed</h1>
              <p className="text-2xl font-medium">0</p>
            </div>
          </div>
        )}
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
