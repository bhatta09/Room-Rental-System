import { Link } from "react-router-dom";
import img from "../assets/image-removebg.png";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import XIcon from "@mui/icons-material/X";

const footerData = [
  {
    mostSearchedLocation: [
      "Pulchowk, Lalitpur",
      "Koteshwor",
      "Tikathali, Bhaktapur",
      "Tokha, Kathmandu",
      "Mhepi, Samakhushi",
    ],
  },
  {
    navigationLinks: [
      { label: "Home", path: "/home" },
      { label: "Featured Rooms", path: "/featured-rooms" },
      { label: "Profile", path: "/profile" },
      { label: "Blog", path: "/blog" },
      { label: "Add Property", path: "/add-property" },
    ],
  },
  {
    Account: [
      { label: "My Account", path: "/home" },
      { label: "Listed property", path: "/featured-rooms" },
      { label: "Wishlist", path: "/profile" },
      { label: "Private policy", path: "/blog" },
      { label: "Terms & condition", path: "/add-property" },
    ],
  },
];

const Footer = () => {
  return (
    <div className="mt-4  bg-[#f5f5fe]">
      <div className="flex flex-row  px-32 mt-4 mb-10 gap-48 ">
        <div className="flex flex-row gap-32">
          <div className="flex flex-col gap-5 text-[12px]">
            <h3 className=" font-bold text-xl text-yellow-400">
              Most Searched Locations
            </h3>
            <ul>
              {footerData[0].mostSearchedLocation.map((location, index) => (
                <li key={index} className="mb-3 text-base font-semibold">
                  {location}
                </li>
              ))}
            </ul>
          </div>

          <div className="  flex flex-col gap-5 ">
            <h3 className="text-xl font-bold text-yellow-400">Quick Links</h3>
            <div className="flex flex-col">
              {footerData[1].navigationLinks.map((data, index) => (
                <Link
                  key={index}
                  to={data.path}
                  className="mb-3 text-base font-semibold"
                >
                  {data.label}
                </Link>
              ))}
            </div>
          </div>

          <div className=" flex flex-col gap-4 ml-16">
            <h3 className="text-xl font-bold text-yellow-400">Accounts</h3>
            <div className="flex flex-col">
              {footerData[2].Account.map((data, index) => (
                <Link
                  key={index}
                  to={data.path}
                  className="mb-3 text-base font-semibold"
                >
                  {data.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="text-sm font-medium flex flex-col gap-4 ">
          <img src={img} alt="" className="h-32 w-52" />
          <Link>
            <label htmlFor="">
              <PhoneIcon sx={{ fontSize: 18, color: "" }} />
            </label>{" "}
            9869348462
          </Link>
          <Link>
            <label htmlFor="">
              <PhoneIcon sx={{ fontSize: 18, color: "" }} />
            </label>{" "}
            9813793994
          </Link>
          <Link>
            <label htmlFor="">
              <EmailIcon sx={{ fontSize: 18, color: "", marginRight: "6px" }} />
            </label>
            swornim@academiacollege.edu.np
          </Link>
          <div>
            <h2 className="mb-2">Contact Us</h2>
            <div className="flex flex-row gap-3 ">
              <div className="bg-gradient-to-r from-orange-500 to-pink-500 w-6 h-6 rounded-full text-center">
                <InstagramIcon sx={{ fontSize: 18, color: "white" }} />
              </div>
              <div className=" bg-red-500  w-6 h-6 rounded-full text-center">
                <YouTubeIcon sx={{ fontSize: 18, color: "white" }} />
              </div>
              <div className="bg-gradient-to-r from-blue-500 to-sky-500 w-6 h-6 rounded-full text-center">
                <LinkedInIcon sx={{ fontSize: 18, color: "white" }} />
              </div>
              <div className="bg-gradient-to-r from-blue-500 to-sky-500 w-6 h-6 rounded-full text-center">
                <FacebookIcon sx={{ fontSize: 18, color: "white" }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="p-6 bg-slate-200 text-white px-32 ">
        <div className="flex justify-between  text-black font-semibold">
          <h3>© 2024 Room Rental. All Rights Reserved.</h3>
          <h3>Developed by Academians Hamro Sano Group Technology</h3>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
