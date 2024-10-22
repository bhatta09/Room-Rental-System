import SearchIcon from "@mui/icons-material/Search";
import FeatureRoom from "../components/Home/FeatureRoom";
import AboutUs from "../components/Home/AboutSection";
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
import AOS from "aos";
import "aos/dist/aos.css";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { setToken } from "../redux/auth/authSlice";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import WhereToVoteOutlinedIcon from "@mui/icons-material/WhereToVoteOutlined";
import NorthIcon from "@mui/icons-material/North";
import PriceCheckOutlinedIcon from "@mui/icons-material/PriceCheckOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import FAQ from "./FAQ";
const NextArrow = ({ onClick }) => (
  <div
    className=" text-gray-100 text-base bg-white border-[3px]  border-yellow-300 p-1 absolute left-16 bottom-[-50px]  transform -translate-y-1/2 cursor-pointer rounded-full"
    onClick={onClick}
  >
    <MdArrowForwardIos className="text-gray-900 text-base" />
    {/* Nex0t */}
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute text-gray-100 text-base bg-white border-[3px] border-yellow-300 p-1 left-6 bottom-[-50px] transform -translate-y-1/2 cursor-pointer rounded-full"
    onClick={onClick}
  >
    {/* Prev */}
    <MdArrowBackIos className="text-gray-900 text-base" />
  </div>
);

const Home = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
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
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const tokenFromUrl = queryParams.get("token");
    if (tokenFromUrl) {
      dispatch(setToken(tokenFromUrl));
    }
    extractDetails();

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;

      const scrollPercent = (scrollTop / (fullHeight - windowHeight)) * 100;

      if (scrollPercent >= 20) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
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

  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <div className=" flex flex-col gap-11">
      {isVisible && (
        <a
          id="scrollToTop"
          href="#heroSection"
          className="fixed z-[101] bottom-8 right-20 h-9 w-9  text-center rounded-full border-2 border-yellow-400 animate-bounce "
        >
          <NorthIcon color="black" />
        </a>
      )}
      {/* Hero Section */}
      <div className="" id="heroSection">
        <section className="shadow-xl relative flex items-center justify-center h-[89vh]   bg-cover bg-center overflow-hidden w-full bg-hero-pattern ">
          <div className="flex flex-col m-5 md:m-32 gap-5 md:gap-14">
            <div className="text-left  z-0 my-10 mr-10 ">
              <div className="bg-yellow-100 inline-flex items-center px-3 py-1.5 rounded-full mb-4">
                <span role="img" aria-label="thumbs up">
                  👍
                </span>
                <span className="ml-2 text-sm font-semibold">
                  100% Trusted room rental platform in the Nepal
                  <span></span>
                </span>
                <img
                  className="w-3 ml-1"
                  src="https://img.icons8.com/?size=100&id=60249&format=png&color=000000"
                  alt=""
                />
              </div>

              <h1 className="text-5xl font-bold tracking-tight text-white">
                Naya Aawas
              </h1>
              <h2 className="mt-2 text-4xl font-extrabold text-[#FFB200]">
                Find Your Perfect Room
              </h2>

              <a
                href="#"
                className="mt-16 inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-[#FFB200] hover:bg-yellow-600"
              >
                View All Rooms &rarr;
              </a>
            </div>

            <div className="text-white hidden md:flex md:justify-center ">
              <div className="flex bg-yellow-50/40 rounded-full  px-1 gap-4 items-center justify-end  ">
                <div className="flex justify-center items-center">
                  <label htmlFor="">
                    <PlaceIcon
                      sx={{ fontSize: 30, color: "rgba(255, 255, 255, 0.5)" }}
                    />
                  </label>
                  <input
                    type="text"
                    placeholder="Search By Title"
                    className="p-2 rounded-l-full w-1/3 h-12 text-white outline-none placeholder:text-gray-100 font-semibold text-base bg-transparent"
                  />
                  <label htmlFor="">
                    <PlaceIcon
                      sx={{ fontSize: 30, color: "rgba(255, 255, 255, 0.5)" }}
                    />
                  </label>
                  <input
                    type="text"
                    placeholder=" Search for Location"
                    className="p-2 rounded-l-full w-1/3 h-12 text-white outline-none placeholder:text-gray-100 font-seminold text-base bg-transparent"
                  />
                  <label htmlFor="">
                    <HomeIcon
                      sx={{ fontSize: 30, color: "rgba(255, 255, 255, 0.5)" }}
                    />
                  </label>
                  <input
                    type="text"
                    placeholder="Room Type"
                    className="p-2 w-1/3 text-white outline-none placeholder:text-gray-100 font-semibold text-base bg-transparent"
                  />
                  <label htmlFor="">
                    <PaymentsIcon
                      sx={{ fontSize: 30, color: "rgba(255, 255, 255, 0.5)" }}
                    />
                  </label>
                  <input
                    type="text"
                    placeholder=" Select Budget"
                    className="p-2 rounded-r-full w-1/3 text-white outline-none placeholder:text-gray-100 font-semibold text-base bg-transparent"
                  />
                </div>
                <button className="flex text-base  font-bold p-3 px-5 my-1 justify-center flex-wrap  bg-[#FFB200] text-white rounded-full hover:bg-yellow-400 transition">
                  <SearchIcon sx={{ fontSize: 25, color: "white" }} />
                  <span className="hidden lg:block">Search</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="flex mx-auto  flex-wrap  justify-center lg:justify-between px-9  items-center  md:mx-0 lg:mx-32 ">
        <img src={banner} alt="" className="h-32 " />
        <img src={banner1} alt="" className="h-32 " />
      </div>
      {/* Featured Rooms Section */}
      <section className="px-12 lg:px-32 gap-7  ">
        <div className="flex justify-between mb-5 ">
          <h2 className="text-xl font-semibold text-center ">Featured Rooms</h2>
          <button className="bg-yellow-400 border-yellow-500 border-2 rounded-lg font-medium px-5 py-1 text-white">
            View All <span className="ml-2 text-white font-bold">→</span>
          </button>
        </div>

        <Slider {...settings}>
          <div className="px-2">
            <FeatureRoom
              imageUrl="https://images.unsplash.com/photo-1668258849037-4caa7e2c1347?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              roomName="Office space for rent..."
              location="Gwarko,Lalitpur"
              roomType="office"
              price="Rs25000/month"
              owner="https://images.unsplash.com/photo-1715405155792-ab743e424c81?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </div>
          <div className="px-2">
            <FeatureRoom
              imageUrl="https://plus.unsplash.com/premium_photo-1678916185607-d75dbfe4f1f7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              roomName="Office space for rent..."
              location="Gwarko,Lalitpur"
              roomType="office"
              price="Rs25000/month"
              owner="https://images.pexels.com/photos/5331099/pexels-photo-5331099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
          </div>
          <div className="px-2">
            <FeatureRoom
              imageUrl="https://images.unsplash.com/photo-1572372878072-3faf7ab85648?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              roomName="Swornim Shrestha is best man"
              location="Gwarko,Lalitpur"
              roomType="office"
              price="Rs25000/month"
              owner="https://plus.unsplash.com/premium_photo-1693243527718-37442fc7f77c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </div>
          <div className="px-2">
            <FeatureRoom
              imageUrl="https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              roomName="Office space for rent..."
              location="Gwarko,Lalitpur"
              roomType="office"
              price="Rs25000/month"
              owner="https://images.pexels.com/photos/5331099/pexels-photo-5331099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
          </div>
          <div className="px-2">
            <FeatureRoom
              imageUrl="https://plus.unsplash.com/premium_photo-1691360599379-a5717853ab6e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              roomName=""
              location="Gwarko,Lalitpur"
              roomType="office"
              price="Rs25000/month"
              owner="https://plus.unsplash.com/premium_photo-1693243527718-37442fc7f77c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </div>
        </Slider>
      </section>
      <section className="px-12 lg:px-32 gap-7 mt-12 ">
        <div className="flex justify-between mb-5 ">
          <h2 className="text-xl font-semibold text-center ">Hot Deals</h2>
          <button className="bg-yellow-400 border-yellow-500 border-2 rounded-lg font-medium px-5 py-1 text-white">
            View All <span className="ml-2 text-white font-bold">→</span>
          </button>
        </div>

        <Slider {...settings}>
          <div className="px-2">
            <FeatureRoom
              imageUrl="https://images.unsplash.com/photo-1668258849037-4caa7e2c1347?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              roomName="Office space for rent..."
              location="Gwarko,Lalitpur"
              roomType="office"
              price="Rs25000/month"
              owner="https://images.unsplash.com/photo-1715405155792-ab743e424c81?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </div>
          <div className="px-2">
            <FeatureRoom
              imageUrl="https://plus.unsplash.com/premium_photo-1678916185607-d75dbfe4f1f7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              roomName="Office space for rent..."
              location="Gwarko,Lalitpur"
              roomType="office"
              price="Rs25000/month"
              owner="https://images.pexels.com/photos/5331099/pexels-photo-5331099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
          </div>
          <div className="px-2">
            <FeatureRoom
              imageUrl="https://images.unsplash.com/photo-1572372878072-3faf7ab85648?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              roomName="Swornim Shrestha is best man"
              location="Gwarko,Lalitpur"
              roomType="office"
              price="Rs25000/month"
              owner="https://plus.unsplash.com/premium_photo-1693243527718-37442fc7f77c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </div>
          <div className="px-2">
            <FeatureRoom
              imageUrl="https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              roomName="Office space for rent..."
              location="Gwarko,Lalitpur"
              roomType="office"
              price="Rs25000/month"
              owner="https://images.pexels.com/photos/5331099/pexels-photo-5331099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
          </div>
          <div className="px-2">
            <FeatureRoom
              imageUrl="https://plus.unsplash.com/premium_photo-1691360599379-a5717853ab6e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              roomName=""
              location="Gwarko,Lalitpur"
              roomType="office"
              price="Rs25000/month"
              owner="https://plus.unsplash.com/premium_photo-1693243527718-37442fc7f77c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </div>
        </Slider>
      </section>{" "}
      <section data-aos="fade-up" className="md:mx-32 my-5 md:my-14">
        <AboutUs />
      </section>
      {/* <section className="bg-[#fefeff]" data-aos="fade-down">
        <Agent />
      </section> */}
      <section className="">
        <FAQ />
      </section>
      <section data-aos="fade-up" className="">
        <h1 className="text-lg font-semibold text-center text-gray-500 pt-10 ">
          3,012 people have said how good NayaAawas
        </h1>

        <h1 className="text-4xl font-semibold text-center pb-10">
          Our happy clients say about us
        </h1>
        <div className="relative flex flex-col md:flex-row gap-8 mt-5 mx-3 px-12 lg:px-32 p-8 rounded-lg justify-center">
          <div className="absolute inset-0 "></div>
          <div className="relative z-10 flex flex-wrap md:flex-row gap-8 justify-center">
            {/* Testimonial 1 */}
            <Reviews
              name="Swornim Shrestha"
              work="React Developer"
              star="4"
              desc="The room rental system offers a streamlined and intuitive experience,
              making it easy for users to browse, compare, and book rooms
              effortlessly. With clear room details and a responsive design"
            />
            <Reviews
              name="Sandesh Shrestha"
              work="React Developer"
              star="3"
              desc="The room rental system offers a streamlined and intuitive experience,
              making it easy for users to browse, compare, and book rooms
              effortlessly. With clear room details and a responsive design, it
              provides a hassle-free solution for finding accommodations quickly."
            />
            <Reviews
              name="Pritam Shrestha"
              work="Java Developer"
              star="5"
              desc="The best room renting website i have ever discover, it
              provides a hassle-free solution for finding accommodations quickly."
            />
          </div>
        </div>
      </section>
      <section className="my-10">
        <h2 className="text-3xl  font-semibold  mb-8  text-center  ">
          Why Choose Us?
        </h2>
        <div className="flex flex-wrap justify-between  mx-12 lg:mx-32  font-medium">
          <div className="flex flex-col items-center" data-aos="fade-right">
            <div className="text-5xl mb-4 border-[4px] border-yellow-400 rounded-full w-20 h-20 flex items-center justify-center ">
              <WhereToVoteOutlinedIcon sx={{ fontSize: 50, color: "black" }} />
            </div>
            <h3 className="text-xl font-semibold">Best Locations</h3>
            <p className="text-gray-600 hidden lg:block">
              All our rooms are in prime locations.
            </p>
          </div>
          <div className="flex flex-col items-center "data-aos="fade-up">
            <div className="text-5xl mb-4 border-[4px] border-yellow-400 rounded-full w-20 h-20 flex items-center justify-center ">
              <ShoppingBagOutlinedIcon sx={{ fontSize: 50, color: "black" }} />
            </div>
            <h3 className="text-xl font-semibold">Affordable Prices</h3>
            <p className="text-gray-600 hidden lg:block">
              We offer competitive prices for all room types.
            </p>
          </div>
          <div className="flex flex-col items-center" data-aos="fade-left">
            <div className="text-5xl mb-4 border-[4px] border-yellow-400 rounded-full w-20 h-20 flex items-center justify-center ">
              <VerifiedOutlinedIcon sx={{ fontSize: 50, color: "black" }} />
            </div>
            <h3 className="text-xl font-semibold">Trusted Hosts</h3>
            <p className="text-gray-600 hidden lg:block">
              Our hosts are verified for safety and quality.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
