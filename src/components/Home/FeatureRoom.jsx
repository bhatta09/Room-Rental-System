import { Link } from "react-router-dom";
import PlaceIcon from "@mui/icons-material/Place";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import RoofingIcon from "@mui/icons-material/Roofing";
import StarIcon from "@mui/icons-material/Star";
import { yellow } from "@mui/material/colors";
const FeatureRoom = ({
  imageUrl,
  roomName,
  location,
  roomType,
  price,
  owner,
}) => {
  return (
    <div className="max-w-72 h-auto bg-[#f4f4fe] rounded-2xl overflow-hidden group relative">
      <div className="relative ">
        <Link to="/roomdetail">
          <img
            src={imageUrl}
            alt={roomName}
            className="w-full h-52 object-cover rounded-2xl scale-100 hover:scale-105 transition-transform duration-500 ease-in-out"
          />
        </Link>
        <div className="absolute  left-3 top-3 z-50 cursor-pointer w-auto p-2 bg-gray-400/70 rounded-xl ">
          <h1 className="text-white font-semibold text-sm">Rent</h1>
        </div>
        <div className="absolute  left-3 bottom-3 z-50 cursor-pointer w-16 h-20 bg-gray-200/70 rounded-bl-2xl rounded-r-2xl flex justify-center items-center">
          <img
            src={owner}
            alt={roomName}
            className="w-12 h-12 object-cover rounded-full"
          />
        </div>

        <div className="absolute right-3 top-3 z-50 cursor-pointer hover:text-black">
          <FavoriteBorderIcon
            className=" text-yellow-400 "
            sx={{
              fontSize: 24,
              "&:hover": {
                color: "white",
              },
            }}
          />
        </div>
      </div>
      <div className="p-2">
        <div className="flex bg--400  mb-2 justify-between">
          <h3 className="text-md font-medium   line-clamp-1 w-[65%]">
            {roomName}
          </h3>
          <p className="text-gray-600 text-sm font-semibold  ">
            <span className="mr-1">
              <StarIcon fontSize="medium" sx={{ color: "yellow" }} />
            </span>
            4.5(8)
          </p>
        </div>
        <p className="text-gray-800 text-sm font-medium flex items-center mb-3">
          <span className="mr-1">
            <PlaceIcon fontSize="medium" />
          </span>
          {location}
        </p>
        <div className="flex justify-between items-center">
          <span className="text-gray-900 text-sm font-medium flex items-center">
            <RoofingIcon fontSize="medium" className="mr-1" />
            {roomType}
          </span>
          <span className="text-gray-700 text-base font-semibold">{price}</span>
        </div>
      </div>
    </div>
  );
};

export default FeatureRoom;
