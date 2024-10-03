import React, { useEffect, useState } from "react";
import AddHomeIcon from "@mui/icons-material/AddHome";
import PasswordIcon from "@mui/icons-material/Password";
import ReplyIcon from "@mui/icons-material/Reply";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link, NavLink, useNavigate } from "react-router-dom";
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
import { Dashboard, Margin } from "@mui/icons-material";
import ConfirmLogoutBtn from "./ConfirmLogoutBtn";
const sidebarData = [
  {
    name: "Dashboard",
    tab: "",
    icon: <Dashboard />,
  },
  {
    name: "Post For Free",
    tab: "post-room",
    icon: <AddHomeIcon />,
  },
  {
    name: "Wishlist",
    tab: "wishlist",
    icon: <FavoriteBorderOutlinedIcon />,
  },
  {
    name: "Profile",
    tab: "change-profile",
    icon: <AccountCircleOutlinedIcon />,
  },
  {
    name: "Write Review",
    tab: "write-review",
    icon: <RateReviewOutlinedIcon />,
  },
  {
    name: "Change Password",
    tab: "change-password",
    icon: <PasswordIcon />,
  },
  {
    name: "Forum Replies",
    tab: "forum-replies",
    icon: <ReplyIcon />,
  },
];

const ProfileSidebar = ({ open }) => {
  const [openDialog, setopenDialog] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(clearToken());
    setopenDialog(true);
  };

  const confirmLogout = () => {
    dispatch(clearToken());
    setopenDialog(false);
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

            <ul>
              {sidebarData.map((data, index) => (
                <div
                  key={index}
                  className="cursor-pointer p-3  
                  relative hover:translate-x-6 
                  transition ease-in-out duration-300  
                  before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 
                  before:w-2 hover:before:bg-[#FFB200] before:rounded-tr-lg before:rounded-br-lg  "
                >
                  <NavLink
                    to={`/profile/${data.tab}`}
                    end={data.tab === ""}
                    className={({ isActive }) =>
                      isActive
                        ? "active-link before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-2 before:bg-[#FFB200] before:rounded-tr-lg before:rounded-br-lg text-[#FFB200] "
                        : "inactive-link text-gray-500  bg-yellow-400!"
                    }
                  >
                    <div className="flex gap-4 pl-2 ">
                      <data.icon.type
                        sx={{
                          fontSize: 20,
                          fontWeight: "bold",
                        }}
                      />
                      <Typography sx={{ fontWeight: "bold" }}>
                        {data.name}
                      </Typography>
                    </div>
                  </NavLink>
                </div>
              ))}

              <div
                onClick={handleLogout}
                className="cursor-pointer tracking-normal p-4  pl-6 text-lg font-normal flex gap-4 items-center text-slate-600 hover:translate-x-6 transition ease-in-out duration-300 relative before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-2 hover:before:bg-[red] before:rounded-tr-lg before:rounded-br-lg "
              >
                <LogoutIcon
                  sx={{ fontSize: 20, color: "red" }}
                  className="text-inherit"
                />
                <Typography sx={{ fontWeight: "bold", color: "red" }}>
                  Logout
                </Typography>
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
                  <Link to={`/profile/${data.tab}`}>
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
      <ConfirmLogoutBtn
        openDialog={openDialog}
        setopenDialog={setopenDialog}
        confirmLogout={confirmLogout}
      />
    </>
  );
};

export default ProfileSidebar;
