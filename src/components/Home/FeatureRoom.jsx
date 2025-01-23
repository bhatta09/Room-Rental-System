import { Link } from "react-router-dom";
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import HouseOutlinedIcon from '@mui/icons-material/HouseOutlined';;
import { ActionIcon,Button,} from "@mantine/core";
// import {IconPhoneCall} from "@tabler/icons-react";
const FeatureRoom = ({
  imageUrl,
  roomName,
  location,
  roomType,
  price,
  owner,
}) => {
  return (
    <div className="max-w-72 h-auto rounded-2xl overflow-hidden group relative border border-gray-300">
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
            className="w-12 h-12 object-cover "
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
        <div className="flex mb-2 justify-between">
          <span className="text-md font-medium text-center  line-clamp-1 w-[65%]">
            {price}
          </span>
          <span className="text-gray-900 text-sm font-medium flex items-center">
            <HouseOutlinedIcon fontSize="medium" className="mr-1" />
            {roomType}
          </span>
        </div>
        <p className="text-gray-800 text-sm font-medium flex items-center mb-3">
          <span className="mr-1">
            <FmdGoodOutlinedIcon fontSize="medium" />
          </span>
          {location}
        </p>
        <div className="flex justify-center items-center gap-2">
              <Button variant="default" color="black" fullWidth>
                View Details
              </Button>
              <ActionIcon
                variant="gradient"
                size="lg"
                aria-label="Gradient action icon"
                gradient={{ from: "green", to: "teal", deg: 90 }}
              >
                {/* <IconPhoneCall size={18} /> */}
              </ActionIcon>
            </div>
      </div>
    </div>
  );
};

export default FeatureRoom;
