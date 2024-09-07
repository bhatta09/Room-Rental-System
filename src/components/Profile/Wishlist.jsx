import React from "react";
import RoomDetail from "../../pages/RoomDetails";
import DeleteIcon from "@mui/icons-material/Delete";

const Wishlist = () => {
  return (
    <div className="flex flex-wrap gap-y-11 ">
      <div className="ml-10 w-[34rem] h-52 bg-slate-100 rounded-lg ">
        {/* image */}
        <div className="flex justify-between p-4 ">
          <div className="flex gap-8">
            <img
              src="https://plus.unsplash.com/premium_photo-1676823553207-758c7a66e9bb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="w-28 h-20 rounded-2xl   "
            />
            <div>
              <h1 className="font-normal text-xl">
                <span className="font-semibold">2BHK</span> flat available in
                kirtipur
              </h1>
            </div>
          </div>
          <DeleteIcon sx={{ background: "white" }} />
        </div>
        {/* description */}
        <div className="w-3/4 ml-5">
          <div>
            <h1 className="text-sm font-medium text-gray-600">
              Kritipur, Salyansthan
            </h1>
            <p className="text-yellow-400 font-bold"> Rs 20000</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-600">
              Waiting approval from admin. It will be listed on the website
              after admin approves you ad.
            </p>
          </div>
        </div>
      </div>

      <div className="ml-10 w-[34rem] h-52 bg-slate-100 rounded-lg ">
        {/* image */}
        <div className="flex justify-between p-4 ">
          <div className="flex gap-8">
            <img
              src="https://plus.unsplash.com/premium_photo-1676823553207-758c7a66e9bb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="w-28 h-20 rounded-2xl   "
            />
            <div>
              <h1 className="font-normal text-xl">
                <span className="font-semibold">2BHK</span> flat available in
                kirtipur
              </h1>
            </div>
          </div>
          <DeleteIcon sx={{ background: "white" }} />
        </div>
        {/* description */}
        <div className="w-3/4 ml-5">
          <div>
            <h1 className="text-sm font-medium text-gray-600">
              Kritipur, Salyansthan
            </h1>
            <p className="text-yellow-400 font-bold"> Rs 20000</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-600">
              Waiting approval from admin. It will be listed on the website
              after admin approves you ad.
            </p>
          </div>
        </div>
      </div>
      <div className="ml-10 w-[34rem] h-52 bg-slate-100 rounded-lg ">
        {/* image */}
        <div className="flex justify-between p-4 ">
          <div className="flex gap-8">
            <img
              src="https://plus.unsplash.com/premium_photo-1676823553207-758c7a66e9bb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="w-28 h-20 rounded-2xl   "
            />
            <div>
              <h1 className="font-normal text-xl">
                <span className="font-semibold">2BHK</span> flat available in
                kirtipur
              </h1>
            </div>
          </div>
          <DeleteIcon sx={{ background: "white" }} />
        </div>
        {/* description */}
        <div className="w-3/4 ml-5">
          <div>
            <h1 className="text-sm font-medium text-gray-600">
              Kritipur, Salyansthan
            </h1>
            <p className="text-yellow-400 font-bold"> Rs 20000</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-600">
              Waiting approval from admin. It will be listed on the website
              after admin approves you ad.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
