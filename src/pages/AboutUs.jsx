import img from "../assets/room1.jpg"
import { Link } from "react-router-dom";
const AboutUs = () => {
  return (
    <div className="bg-gray-100 flex flex-col md:flex-row items-center justify-between p-11 rounded-lg shadow-md">
      
      <div className="md:w-1/2 mb-6 md:mb-0">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">About Us</h2>
        <p className="text-gray-600">
         The Room Rental System is a web application designed to streamline the process
         of finding and renting rooms, offering a user-friendly interface for both property
         owners and potential tenants. Built using React.js and Tailwind CSS, it features an 
         intuitive design that showcases available rooms with key details like location, type,
          and price. Users can easily browse through room listings, view detailed information, 
          and make inquiries directly through the platform. The system is optimized for a seamless
           experience, providing advanced filtering options and secure login features to enhance 
           user interaction and satisfaction
        </p>
        <button className="mt-4 px-6 py-2 bg-yellow-400 text-white rounded-md hover:bg-yellow-700 transition duration-300">
         <Link to="/about"> VIEW MORE → </Link>
        </button>
      </div>

       <div className="md:w-1/2 flex justify-center">
        <img src={img} alt="House" className="w-full md:w-3/4 rounded-lg shadow-lg object-cover" />
      </div>
    </div>
  );
};

export default AboutUs;
