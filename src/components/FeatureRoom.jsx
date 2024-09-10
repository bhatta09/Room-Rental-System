import React from "react";
import { Link } from "react-router-dom";
import PlaceIcon from "@mui/icons-material/Place";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RoofingIcon from "@mui/icons-material/Roofing";

const FeatureRoom = ({ imageUrl, roomName, location, roomType, price }) => {
  return (
    <div className="max-w-sm bg-white rounded-lg shadow-lg overflow-hidden group relative">
      <div className="relative">
        <img
          src={imageUrl}
          alt={roomName}
          className="w-full h-48 object-cover"
        />

        <div className="absolute inset-0 bg-black bg-opacity-50 text-white font-bold text-xl flex justify-center items-center h-full -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
          <Link to="/roomdetail">View</Link>
        </div>

        <div className="absolute right-3 top-3 z-50 cursor-pointer hover:text-black">
          <FavoriteIcon
            sx={{
              color: "white",
              fontSize: 28,
              "&:hover": {
                color: "black",
              },
            }}
          />
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-normal mb-2">{roomName}</h3>
        <p className="text-gray-600 text-sm flex items-center mb-4">
          <span className="mr-2">
            <PlaceIcon />
          </span>
          {location}
        </p>
        <div className="flex justify-between items-center">
          <span className="text-gray-700 text-sm font-medium flex items-center">
            <RoofingIcon className="mr-1" />
            {roomType}
          </span>
          <span className="text-yellow-400 text-base font-semibold">
            {price}
          </span>
        </div>
      </div>
    </div>
  );
};

export default FeatureRoom;
