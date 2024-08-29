import React from "react";
import { Link } from "react-router-dom";

const navData = [
  { name: "Home", path: "/" },
  { name: "Contact", path: "/contact" },
  { name: "About", path: "/about" },
  { name: "Profile", path: "/profile" },
];
const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-8 h-14 ">
      <div className="text-2xl font-bold">
        Room<span className="text-yellow-400">Rental</span>
      </div>
      <div className="flex flex-row gap-5">
        {navData.map((data) => (
          <Link
            className="text-black font-semibold hover:text-yellow-300"
            to={data.path}
          >
            {data.name}
          </Link>
        ))}
      </div>
      <div className="flex items-center space-x-4">
        <Link to="/login">
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
            Login
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
