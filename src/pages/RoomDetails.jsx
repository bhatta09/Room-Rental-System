import PropertyTitle from "../components/RoomDetails/PropertyTitle";
import PropertyDetails from "../components/RoomDetails/PropertyDetails";
import SellerProfile from "../components/RoomDetails/SellerProfile";
import MapSection from "../components/RoomDetails/MapSection";

import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";

const RoomDetail = () => {
  return (
    <div className="container ">
      <div className="lg:mx-32 h-[60vh] rounded-3xl bg-black flex flex-row mb-4">
        <div className="w-1/2 h-full bg-slate-400 rounded-l-3xl relative overflow-hidden">
          <img
            src="https://plus.unsplash.com/premium_photo-1684508638760-72ad80c0055f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="object-cover object-center w-full h-full z-10"
          />
          <button className="p-2 px-5 rounded-md flex gap-1 bg-yellow-400 absolute bottom-4 right-4 z-50">
            <h1 className="uppercase text-sm leading-4 font-semibold text-black">
              View Photes
            </h1>
            <AirportShuttleIcon sx={{ fontSize: 18, color: "black" }} />
          </button>
        </div>

        <div className="w-1/2 h-full bg-red-400 rounded-r-3xl relative overflow-hidden">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/UFdxbgAruzE?si=Spz_iodCg9nRSwTk"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:mx-32">
          <div className="md:col-span-2">
            <div>
              <nav className="text-lg  font-semibold text-gray-600 mb-4  ">
                <div className="flex flex-row"></div>
                <a
                  href="#"
                  className="hover:underline text-yellow-400 leading-5"
                >
                  Home/
                </a>{" "}
                <a
                  href="#"
                  className="hover:underline text-yellow-400 leading-5"
                >
                  Tikathali, Lalitpur /
                </a>{" "}
                <span className="text-yellow-900 leading-5">
                  2BHK Flat Available in Tikathali(#81723981239182319kajn)
                </span>
              </nav>
              <PropertyTitle />
            </div>
            <PropertyDetails />
          </div>
          <div className=" ">
            <SellerProfile />
            <MapSection />
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default RoomDetail;
