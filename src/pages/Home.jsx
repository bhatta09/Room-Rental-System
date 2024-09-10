import SearchIcon from "@mui/icons-material/Search";
import PaymentsIcon from "@mui/icons-material/Payments";
import PlaceIcon from "@mui/icons-material/Place";
import HomeIcon from "@mui/icons-material/Home";
import FeatureRoom from "../components/FeatureRoom";
import AboutUs from "../components/AboutSection";
import LetKnow from "../components/Letknow";
import banner from "../assets/Blue Ecommerce Online Shopping LinkedIn Banner.png";
import banner1 from "../assets/Blue Ecommerce Online Shopping LinkedIn Banner (1).png";
import Agent from "../components/Agent";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {  MdArrowForwardIos } from "react-icons/md";

const NextArrow = ({ onClick }) => (
  <div
    className="absolute right-[-25px] top-1/2 transform -translate-y-1/2 cursor-pointer"
    onClick={onClick}
  >
    <MdArrowForwardIos className="text-yellow-500 text-4xl" />
  </div>
);



const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
  
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="mt-3 flex flex-col gap-11">
      {/* Hero Section */}
      <div className="mx-2 md:mx-0 lg:mx-32">
        <section className="shadow-xl relative flex items-center justify-center h-[48vh] rounded-3xl bg-cover bg-center overflow-hidden w-full bg-black">
          <div className="relative mt-44 text-white z-10 hidden md:block">
            <div className="flex bg-white rounded-full py-2 px-2 gap-4 items-center justify-center">
              <div className="flex justify-center items-center">
                <label htmlFor="">
                  <PlaceIcon sx={{ fontSize: 30, color: "yellow" }} />
                </label>
                <input
                  type="text"
                  placeholder="Search By Title"
                  className="p-2 rounded-l-full w-1/3 h-12 text-gray-900 outline-none placeholder:text-gray-600 font-normal text-base"
                />
                <label htmlFor="">
                  <PlaceIcon sx={{ fontSize: 30, color: "yellow" }} />
                </label>
                <input
                  type="text"
                  placeholder=" Search for Location"
                  className="p-2 rounded-l-full w-1/3 h-12 text-gray-900 outline-none placeholder:text-gray-600 font-normal text-base"
                />
                <label htmlFor="">
                  <HomeIcon sx={{ fontSize: 30, color: "yellow" }} />
                </label>
                <input
                  type="text"
                  placeholder="Room Type"
                  className="p-2 w-1/3 text-gray-900 outline-none placeholder:text-gray-600 font-normal text-base"
                />
                <label htmlFor="">
                  <PaymentsIcon sx={{ fontSize: 30, color: "yellow" }} />
                </label>
                <input
                  type="text"
                  placeholder=" Select Budget"
                  className="p-2 rounded-r-full w-1/3 text-gray-900 outline-none placeholder:text-gray-600 font-normal text-base"
                />
              </div>
              <button className="px-6 py-3 font-bold text-xl h-12 bg-yellow-400 text-white rounded-full hover:bg-yellow-400 transition">
                <SearchIcon /> Search
              </button>
            </div>
          </div>
          <img
            className="w-full absolute"
            src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </section>
      </div>
      <div className="mx-2 md:mx-0 lg:mx-32 flex justify-between">
        <img src={banner} alt="" className="h-36" />
        <img src={banner1} alt="" className="h-36" />
      </div>

   
      <section className="p-5">
        <h2 className="text-3xl font-normal text-center mb-8">Featured Rooms</h2>
        <Slider {...settings}>
          <FeatureRoom
            imageUrl="https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2023/7/19/3/DOTY2023_Dramatic-Before-And-Afters_Hidden-Hills-11.jpg.rend.hgtvcom.791.527.suffix/1689786863909.jpeg"
            roomName="Office space for rent..."
            location="Gwarko,Lalitpur"
            roomType="office"
            price="Rs25000/month"
          />
          <FeatureRoom
            imageUrl="https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2023/7/19/3/DOTY2023_Dramatic-Before-And-Afters_Hidden-Hills-11.jpg.rend.hgtvcom.791.527.suffix/1689786863909.jpeg"
            roomName="Office space for rent..."
            location="Gwarko,Lalitpur"
            roomType="office"
            price="Rs25000/month"
          />
          <FeatureRoom
            imageUrl="https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2023/7/19/3/DOTY2023_Dramatic-Before-And-Afters_Hidden-Hills-11.jpg.rend.hgtvcom.791.527.suffix/1689786863909.jpeg"
            roomName="Office space for rent..."
            location="Gwarko,Lalitpur"
            roomType="office"
            price="Rs25000/month"
          />
          <FeatureRoom
            imageUrl="https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2023/7/19/3/DOTY2023_Dramatic-Before-And-Afters_Hidden-Hills-11.jpg.rend.hgtvcom.791.527.suffix/1689786863909.jpeg"
            roomName="Office space for rent..."
            location="Gwarko,Lalitpur"
            roomType="office"
            price="Rs25000/month"
          />
        </Slider>
      </section>
      <section>
        <AboutUs />
      </section>
      <section>
        <LetKnow />
      </section>
      <section className="bg-[#f3f4f6]">
        <Agent />
      </section>
      {/* Why Choose Us Section */}
      <section className="p-8">
        <h2 className="text-3xl font-semibold text-center mb-8">Why Choose Us?</h2>
        <div className="flex justify-around">
          <div className="text-center">
            <div className="text-5xl mb-4">🌟</div>
            <h3 className="text-xl font-semibold">Best Locations</h3>
            <p className="text-gray-600">All our rooms are in prime locations.</p>
          </div>
          <div className="text-center">
            <div className="text-5xl mb-4">💰</div>
            <h3 className="text-xl font-semibold">Affordable Prices</h3>
            <p className="text-gray-600">We offer competitive prices for all room types.</p>
          </div>
          <div className="text-center">
            <div className="text-5xl mb-4">👍</div>
            <h3 className="text-xl font-semibold">Trusted Hosts</h3>
            <p className="text-gray-600">Our hosts are verified and trustworthy.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

