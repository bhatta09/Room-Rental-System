import { Link } from "react-router-dom"

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
    <h3 className="text-xl font-bold text-yellow-400">LOgo</h3>
    <Link>98000000</Link>
    <Link>9800000000</Link>
    <Link>swornim@academiacollege.edu.np</Link>
    <Link>Contact us</Link>
    <Link>Social Media</Link>
  </div>
</div>

    <footer className="p-6 bg-slate-200 text-white text-center">
      <div className="grid grid-cols-2 text-black font-semibold">
        <h3>© 2024 Room Rental. All Rights Reserved.</h3>
        <h3>Developed by Academians hamro sano group technology</h3>
      </div>
    </footer>
    </div>
  );
}


export default Footer;