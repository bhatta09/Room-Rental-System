import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-gradient-to-r from-orange-500 to-yellow-300 rounded-lg p-8 md:p-20 lg:px-20 lg:py-16 overflow-visible relative">
      <div className="text-white md:w-1/2 lg:w-2/3 pr-8 z-10">
        <h2 className="text-3xl font-bold mb-4">About Our Service</h2>
        <p className="text-gray-200 font-medium leading-relaxed mb-6">
        The Room Rental System is a web application designed to streamline the process of finding and renting rooms,
         offering a user-friendly interface for both property owners and potential tenants.
         Built using React.js and Tailwind CSS, it features an intuitive design that showcases available rooms with key details like location, type, and price.
        </p>
        <button className="mt-4 px-6 py-2 border border-white text-white rounded-md hover:bg-white hover:text-blue-900 transition duration-300 font-medium">
          <Link to="/about">Explore more</Link>
        </button>
      </div>

      <div className="md:w-1/2 lg:w-1/3 flex justify-end">
        <div className="relative w-full h-full -mr-20 lg:-mr-40 overflow-visible"> 
          <img
            src="https://images.pexels.com/photos/132088/pexels-photo-132088.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Sustainability Thumbnail"
            className="w-full h-72 lg:h-64 rounded-md object-cover shadow-lg"
          />
    
      
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
