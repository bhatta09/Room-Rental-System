import { Link } from "react-router-dom";
const AboutUs = () => {
  return (
    <div className="bg-[#f3f4f6] flex flex-col md:flex-row items-center  gap-14 p-12 lg:px-32 ">
      <div className="">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">About Us</h2>
        <p className="text-gray-900 tracking-normal leading-6">
          The Room Rental System is a web application designed to streamline the
          process of finding and renting rooms, offering a user-friendly
          interface for both property owners and potential tenants. Built using
          React.js and Tailwind CSS, it features an intuitive design that
          showcases available rooms with key details like location, type, and
          price. Users can easily browse through room listings, view detailed
          information, and make inquiries directly through the platform. The
          system is optimized for a seamless experience, providing advanced
          filtering options and secure login features to enhance user
          interaction and satisfaction
        </p>
        <div className="flex justify-end">
          <button className="mt-4 px-6 py-2 bg-yellow-400 text-white rounded-md hover:bg-yellow-700 transition duration-300">
            <Link to="/about"> VIEW MORE → </Link>
          </button>
        </div>
      </div>

      <div className=" overflow-hidden rounded-3xl h-72   w-[400px] md:w-[1900px]">
        <img
          src="https://images.unsplash.com/photo-1543515972-b72cb4f0b989?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="House"
          className="object-cover h-72"
        />
      </div>
    </div>
  );
};

export default AboutUs;
