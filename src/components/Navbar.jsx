import React, { useState } from "react";
import { Link } from "react-router-dom";

const navData = [
  { name: "Home", path: "/" },
  { name: "Contact", path: "/contact" },
  { name: "About", path: "/about" },
  { name: "Profile", path: "/profile" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-between items-center p-8 h-14 bg-white shadow-md relative">
      <div className="text-2xl font-bold">
        Room<span className="text-yellow-400">Rental</span>
      </div>

      {/* Hamburger Icon for Mobile */}
      <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-black"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </div>

      {/* Nav Links for Desktop */}
      <div className="hidden md:flex flex-row gap-5">
        {navData.map((data, index) => (
          <Link
            key={index}
            className="text-black font-semibold hover:text-yellow-300"
            to={data.path}
          >
            {data.name}
          </Link>
        ))}
      </div>

      <div className=" md:flex md:items-center md:space-x-4 md:relative md:right-0 absolute right-20">
        <Link to="/login">
          <button className=" text-extrabold px-4 py-2 bg-black text-yellow-200 rounded hover:bg-gray-800 transition">
            Login
          </button>
        </Link>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className=" z-50 absolute top-16 left-0 w-full bg-white shadow-lg flex flex-col items-center md:hidden">
          {navData.map((data, index) => (
            <Link
              key={index}
              className="text-black font-semibold py-2 hover:text-yellow-300"
              to={data.path}
              onClick={() => setIsOpen(false)}
            >
              {data.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
