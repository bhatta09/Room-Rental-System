import React, { useEffect, useState } from "react";
import ProfileSidebar from "../components/Profile/ProfileSidebar";
import { Outlet, useLocation } from "react-router-dom";
import PostForFree from "../components/Profile/PostForFree";
import WriteReview from "../components/Profile/WriteReview";
import Wishlist from "../components/Profile/Wishlist";
import ChangePassword from "../components/Profile/ChangePassword";
import ForumReplies from "../components/Profile/ForumReplies";
import ChangeProfile from "../components/Profile/ChangeProfile";
import Dashboard from "../components/Profile/Dashboard";
import {
  Badge,
  FormControl,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SegmentOutlinedIcon from "@mui/icons-material/SegmentOutlined";
import DraftsOutlinedIcon from "@mui/icons-material/DraftsOutlined";
import SearchIcon from "@mui/icons-material/Search";

import ClearIcon from "@mui/icons-material/Clear";
import ProfileCard from "../components/Profile/ProfileCard";
const Profile = () => {
  const [openSidebar, setOpenSidebar] = useState(true);

  const handleOpenSidebar = () => {
    setOpenSidebar(!openSidebar);
  };

  return (
    <div className="flex flex-row overflow-hidden max-h-screen">
      <ProfileSidebar open={openSidebar} />
      <div className="flex  flex-col w-full ">
        <div className="text-2xl font-bold h-16 p-5 bg-slate-100 sticky top-0 z-50 flex  gap-5 justify-between items-center ">
          <div className="flex items-center gap-5">
            <button onClick={handleOpenSidebar}>
              <SegmentOutlinedIcon fontSize="medium" />
            </button>

            <Typography>Dashboard</Typography>
          </div>
          <FormControl>
            <TextField
              sx={{}}
              size="small"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <ClearIcon />
                  </InputAdornment>
                ),
              }}
            />
          </FormControl>
          <div className="flex items-center gap-8">
            <Badge
              badgeContent={4}
              sx={{
                "& .MuiBadge-badge": {
                  backgroundColor: "#f1c94e",
                  color: "black",
                },
              }}
            >
              <FavoriteBorderIcon fontSize="medium" />
            </Badge>
            <Badge
              badgeContent={4}
              sx={{
                "& .MuiBadge-badge": {
                  backgroundColor: "#f1c94e",
                  color: "black",
                },
              }}
            >
              <DraftsOutlinedIcon fontSize="medium" />
            </Badge>
            <ProfileCard />
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Profile;
