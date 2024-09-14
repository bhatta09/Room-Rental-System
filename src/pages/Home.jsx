import SearchIcon from "@mui/icons-material/Search";
import FeatureRoom from "../components/Home/FeatureRoom";
import AboutUs from "../components/Home/AboutSection";
import LetKnow from "../components/Home/Letknow";
import Agent from "../components/Home/Agent";
import Reviews from "../components/Home/Reviews";
import img from "../assets/swornim.jpg";
import PaymentsIcon from "@mui/icons-material/Payments";
import PlaceIcon from "@mui/icons-material/Place";
import HomeIcon from "@mui/icons-material/Home";
import banner from "../assets/Blue Ecommerce Online Shopping LinkedIn Banner.png";
import banner1 from "../assets/Blue Ecommerce Online Shopping LinkedIn Banner (1).png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { setToken } from "../redux/auth/authSlice";

import NorthIcon from "@mui/icons-material/North";

const NextArrow = ({ onClick }) => (
  <div
    className="absolute right-[-10px] top-1/2 transform -translate-y-1/2 cursor-pointer"
    onClick={onClick}
  >
    <MdArrowForwardIos className="text-yellow-500 text-4xl" />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute left-[-25px] top-1/2 transform -translate-y-1/2 cursor-pointer"
    onClick={onClick}
  >
    <MdArrowBackIos className="text-yellow-500 text-4xl" />
  </div>
);

const Home = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: true,
    autoplaySpeed: 5000,
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

  const location = useLocation();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const tokenFromUrl = queryParams.get("token");
    if (tokenFromUrl) {
      dispatch(setToken(tokenFromUrl));
    }
    extractDetails();
  }, [location]);

  const extractDetails = async () => {
    try {
      const response = await axios.get("/api/user/extract-details", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching details:", error);
    }
  };

  return (
    <div className="mt-3 flex flex-col gap-11">
      <a
        id="scrollToTop"
        href="#heroSection"
        className="fixed z-[101] bottom-8 right-20 h-9 w-9  text-center rounded-full border-2 border-yellow-400 "
      >
        <NorthIcon color="black" />
      </a>
      {/* Hero Section */}
      <div className="mx-12 lg:mx-32" id="heroSection">
        <section className="shadow-xl relative flex items-center justify-center h-[54vh] rounded-3xl bg-cover bg-center overflow-hidden w-full bg-hero-pattern ">
          <div className="relative mt-44 text-white z-10 hidden md:block mx-auto">
            <div className="flex bg-yellow-50 rounded-full py-2 px-2 gap-4 items-center justify-center  ">
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
              <button className="flex text-xl items-center font-medium p-3  justify-between flex-wrap  bg-yellow-400 text-white rounded-full hover:bg-yellow-400 transition">
                <SearchIcon />
                <span className="hidden lg:block">Search</span>
              </button>
            </div>
          </div>
        </section>
      </div>

      <div className="flex mx-auto  flex-wrap  justify-center lg:justify-between px-9  items-center  md:mx-0 lg:mx-32 ">
        <img src={banner} alt="" className="h-32 " />
        <img src={banner1} alt="" className="h-32 " />
      </div>

      {/* Featured Rooms Section */}
      <section className="px-12 lg:px-32 gap-7 ">
        <h2 className="text-3xl font-normal text-center mb-8">
          Featured Rooms
        </h2>
        <div className="flex justify-end mb-5 mr-8">
          <button className="bg-yellow-400 border-yellow-500 border-2 rounded font-medium px-5 py-1">
            View All <span className="ml-2">→</span>
          </button>
        </div>

        <Slider {...settings}>
          <div className="px-2">
            <FeatureRoom
              imageUrl="https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2023/7/19/3/DOTY2023_Dramatic-Before-And-Afters_Hidden-Hills-11.jpg.rend.hgtvcom.791.527.suffix/1689786863909.jpeg"
              roomName="Office space for rent..."
              location="Gwarko,Lalitpur"
              roomType="office"
              price="Rs25000/month"
            />
          </div>
          <div className="px-2">
            <FeatureRoom
              imageUrl="https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2023/7/19/3/DOTY2023_Dramatic-Before-And-Afters_Hidden-Hills-11.jpg.rend.hgtvcom.791.527.suffix/1689786863909.jpeg"
              roomName="Office space for rent..."
              location="Gwarko,Lalitpur"
              roomType="office"
              price="Rs25000/month"
            />
          </div>
          <div className="px-2">
            <FeatureRoom
              imageUrl="https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2023/7/19/3/DOTY2023_Dramatic-Before-And-Afters_Hidden-Hills-11.jpg.rend.hgtvcom.791.527.suffix/1689786863909.jpeg"
              roomName="Office space for rent..."
              location="Gwarko,Lalitpur"
              roomType="office"
              price="Rs25000/month"
            />
          </div>
          <div className="px-2">
            <FeatureRoom
              imageUrl="https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2023/7/19/3/DOTY2023_Dramatic-Before-And-Afters_Hidden-Hills-11.jpg.rend.hgtvcom.791.527.suffix/1689786863909.jpeg"
              roomName="Office space for rent..."
              location="Gwarko,Lalitpur"
              roomType="office"
              price="Rs25000/month"
            />
          </div>
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

      <section>
        <h1 className="text-4xl font-semibold text-center pt-24 pb-10">
          Customor's Review
        </h1>
        <div className="flex flex-col md:flex-row gap-4 mt-5 mx-3">
          <Reviews img={img} name="Pritam" />
          <Reviews img={img} name="Swornim" />
          <Reviews img={img} name="Bijaya" />
        </div>
      </section>

      <section className="p-8">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Why Choose Us?
        </h2>
        <div className="flex justify-around">
          <div className="text-center">
            <div className="text-5xl mb-4">🌟</div>
            <h3 className="text-xl font-semibold">Best Locations</h3>
            <p className="text-gray-600">
              All our rooms are in prime locations.
            </p>
          </div>
          <div className="text-center">
            <div className="text-5xl mb-4">💰</div>
            <h3 className="text-xl font-semibold">Affordable Prices</h3>
            <p className="text-gray-600">
              We offer competitive prices for all room types.
            </p>
          </div>
          <div className="text-center">
            <div className="text-5xl mb-4">👍</div>
            <h3 className="text-xl font-semibold">Trusted Hosts</h3>
            <p className="text-gray-600">
              Our hosts are verified for safety and quality.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
