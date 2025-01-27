import { Link } from "react-router-dom";
import img from "../assets/ghar1-removebg-preview.png"
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";

const footerData = [
  {
    Aawas: [
      { label: "Profile", path: "/Profile" },
      { label: "Blog", path: "/blog" },
      { label: "FAQ", path: "/faq" },
      { label: "Privacy policy", path: "/privacy" },
      { label: "Terms & condition", path: "/terms" },
    ],
  },
  {
    navigationLinks: [
      { label: "About-Us", path: "/about" },
      { label: "Add Rooms", path: "/profile/post-room" },
      { label: "Blog", path: "/blog" },
      { label: "FAQ", path: "/faq" },
      { label: "Send us Message", path: "/contact" },
      { label: "Shift Home", path: "/shift-home" },
    ],
  },
  {
    Account: [
      { label: "My Account", path: "/Profile" },
      { label: "Listed property", path: "/profile" },
      { label: "Wishlist", path: "/profile/wishlist" },
      { label: "Privacy policy", path: "/privacy" },
      { label: "Terms & condition", path: "/terms" },
      { label: "Online Payment", path: "/online-payment" },
    ],
  },
];

const Footer = () => {
  return (
    <div className=" bg-gray-800">
      {/* footer-content */}
      <div className="flex flex-wrap gap-12 p-12 md:justify-between lg:px-32 ">
        <div className="  flex flex-col gap-5 ">
          <h3 className="text-xl font-semibold text-yellow-400">Quick Links</h3>
          <div className="flex flex-col text-white">
            {footerData[1].navigationLinks.map((data, index) => (
              <Link
                key={index}
                to={data.path}
                className="mb-3 text-base font-medium"
              >
                {data.label}
              </Link>
            ))}
          </div>
        </div>

        <div className=" text-white">
          <h2 className="text-xl font-semibold text-yellow-400">
            Subscription
          </h2>
          <div className="h-1 w-8 bg-yellow-500 mb-4 font-medium"></div>
          <p className="mb-4 font-medium">
            Sign up for our mailing list to get latest updates and offers
          </p>
          <form>
            <input
              type="email"
              placeholder="Enter your Email"
              className="w-full py-2 px-4 mb-4 rounded-lg text-black font-medium"
            />
            <button
              type="submit"
              className="w-full bg-yellow-400 text-white py-2 px-4 rounded-lg hover:bg-yellow-600 transition-colors font-medium"
            >
              Subscribe
            </button>
          </form>
        </div>

        <div className=" flex flex-col gap-4 ">
          <h3 className="text-xl font-semibold text-yellow-400">Accounts</h3>
          <div className="flex flex-col text-white">
            {footerData[2].Account.map((data, index) => (
              <Link
                key={index}
                to={data.path}
                className="mb-3 text-base font-medium"
              >
                {data.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="text-sm font-medium flex flex-col gap-4 text-white ">
          <img src={img} alt="" className="h-32 w-72 ml-[-32px]" />
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
              <EmailIcon sx={{fontSize: 18, color: "", marginRight: "6px"}} />
            </label>
       noreply.aawas@gmail.com
          </Link>
          <div>
            <h2 className="mb-2">Contact Us</h2>
            <div className="flex flex-row gap-3">
              {/* Instagram */}
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="bg-gradient-to-r from-orange-500 to-pink-500 w-6 h-6 rounded-full text-center">
                  <InstagramIcon sx={{ fontSize: 18, color: "white" }} />
                </div>
              </a>

              {/* YouTube */}
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="bg-red-500 w-6 h-6 rounded-full text-center">
                  <YouTubeIcon sx={{ fontSize: 18, color: "white" }} />
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="bg-gradient-to-r from-blue-500 to-sky-500 w-6 h-6 rounded-full text-center">
                  <LinkedInIcon sx={{ fontSize: 18, color: "white" }} />
                </div>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="bg-gradient-to-r from-blue-500 to-sky-500 w-6 h-6 rounded-full text-center">
                  <FacebookIcon sx={{ fontSize: 18, color: "white" }} />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <footer className=" p-6 bg-gray-700 text-white md:px-32  mb-12 md:mb-0">
        <div className="flex flex-col md:flex-row  md:justify-between  text-white font-semibold">
          <h3>© 2024 Room Rental. All Rights Reserved.</h3>
          <h3>Developed by Academians Hamro Sano Group Technology</h3>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
