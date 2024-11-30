import FeatureRoom from "../Home/FeatureRoom"
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

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

const Carousel = () => {
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

  return (
    <div>
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
            location="Dhobighat,Lalitpur"
            roomType="1Room"
            price="Rs25000/month"
            owner="https://images.unsplash.com/photo-1715405155792-ab743e424c81?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
        <div className="px-2">
          <FeatureRoom
            imageUrl="https://plus.unsplash.com/premium_photo-1678916185607-d75dbfe4f1f7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            roomName="Office space for rent..."
            location="Mhepi,kathmandu"
            roomType="2Room"
            price="Rs20000/month"
            owner="https://images.pexels.com/photos/5331099/pexels-photo-5331099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </div>
        <div className="px-2">
          <FeatureRoom
            imageUrl="https://images.unsplash.com/photo-1572372878072-3faf7ab85648?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            roomName="Swornim Shrestha is best man"
            location="Gwarko,Lalitpur"
            roomType="1 BHK"
            price="Rs22000/month"
            owner="https://plus.unsplash.com/premium_photo-1693243527718-37442fc7f77c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
        <div className="px-2">
          <FeatureRoom
            imageUrl="https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            roomName="Office space for rent..."
            location="Samakhushi,kathmandu"
            roomType="2 BHK"
            price="Rs15000/month"
            owner="https://images.pexels.com/photos/5331099/pexels-photo-5331099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </div>
        <div className="px-2">
          <FeatureRoom
            imageUrl="https://plus.unsplash.com/premium_photo-1691360599379-a5717853ab6e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            roomName=""
            location="Sanothimi,Bhaktapur"
            roomType="FLAT"
            price="Rs27000/month"
            owner="https://plus.unsplash.com/premium_photo-1693243527718-37442fc7f77c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
