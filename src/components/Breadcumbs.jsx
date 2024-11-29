import React from "react";

const Breadcumbs = () => {
  return (
    <div>
      <div className="flex items-center py-4 overflow-x-auto whitespace-nowrap">
        <a href="#" className="text-[#ffb200] font-semibold text-sm  ">
          Home
        </a>

        <span className=" text-gray-500 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            />
          </svg>
        </span>

        <a href="#" className="text-[#ffb200]  font-semibold text-sm ">
          Hattiban
        </a>

        <span className=" text-gray-500  ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            />
          </svg>
        </span>

        <a href="#" className="text-black font-normal text-sm ">
          Mero City Apartment : Apartment for Sale in Hattiban, Lalitpur
        </a>
      </div>
    </div>
  );
};

export default Breadcumbs;
