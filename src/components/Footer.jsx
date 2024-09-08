import { Link } from "react-router-dom"
import img from "../assets/image.png"
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import XIcon from '@mui/icons-material/X';
const Footer = () => {
  return (
    <div className="mt-10">
<div className="flex flex-row flex-wrap gap-32 mx-20 my-10 ">
  <div className="flex flex-col gap-5 text-[12px]">
    <h3 className=" font-bold text-xl text-yellow-400">Most Searched Locations</h3>
    <p>Pulchock,Lalitpur</p>
    <p>Koteshowr</p>
    <p>Tikathali, bhaktapur</p>
    <p>Tokha,Kathmandu</p>
    <p>Mhepi,Samakhushi</p>
  </div>

  <div className=" text-[12px] flex flex-col gap-5">
    <h3 className="text-xl font-bold text-yellow-400">Quick Links</h3>
    <Link to="/home">Home</Link>
    <Link to="/profile">Featured Rooms</Link>
    <Link to="/profile">Profile</Link>
    <Link to="/">Blog</Link>
    <Link to="/profile">Add property</Link>
  </div>


  <div className="text-[12px] flex flex-col gap-5">
    <h3 className="text-xl font-bold text-yellow-400">Accounts</h3>
    <Link>My Account</Link>
    <Link>Listed property</Link>
    <Link>Wishlist</Link>
    <Link>Private policy</Link>
    <Link>Terms & condition</Link>
  </div>


  <div className="text-[12px] flex flex-col gap-5">
 <img src={img} alt="" className="h-20 w-32"/>
    <Link><label htmlFor="">
                  <PhoneIcon sx={{ fontSize: 18, color: "" }} />
                </label> 9869348462</Link>
    <Link><label htmlFor="">
                  <PhoneIcon sx={{ fontSize: 18, color: "" }} />
                </label> 9813793994</Link>
    <Link><label htmlFor="">
    <EmailIcon sx={{ fontSize: 18, color: "" }} />
    </label>
    swornim@academiacollege.edu.np</Link>
    <div>
      <h2>Contact Us</h2>
      <div className="flex flex-row gap-3 ">
      <label htmlFor="">
      <InstagramIcon sx={{ fontSize: 18, color: "" }} />
      </label>
      <label htmlFor="">
      <FacebookIcon sx={{ fontSize: 18, color: "" }} />
      </label>
      <label htmlFor="">
      <LinkedInIcon sx={{ fontSize: 18, color: "" }} />
      </label>
      <label htmlFor="">
      <YouTubeIcon sx={{ fontSize: 18, color: "" }} />
      </label>
      <label htmlFor="">
      < XIcon sx={{ fontSize: 18, color: "" }} />
      </label>
      </div>
    </div>
  </div>
</div>

    <footer className="p-6 bg-slate-200 text-white text-center">
      <div className="grid grid-cols-2 text-black font-semibold">
        <h3>© 2024 Room Rental. All Rights Reserved.</h3>
        <h3>Developed by Academians Hamro Sano Group Technology</h3>
      </div>
    </footer>
    </div>
  );
}


export default Footer;