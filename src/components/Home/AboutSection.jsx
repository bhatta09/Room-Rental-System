import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="bg-cover bg-center overflow-hidden w-full bg-about-pattern flex flex-col md:flex-row items-center gap-14 p-12 py-6 lg:px-32 ">
      <div className="my-16">
        <h2 className="text-2xl font-bold text-gray-100 mb-4">About Us</h2>
        <p className="text-gray-200 tracking-normal leading-6">
          The Room Rental System is a web application designed to streamline the
          process of finding and renting rooms, offering a user-friendly
          interface for both property owners and potential tenants. Built using
          React.js and Tailwind CSS, it features an intuitive design that
          showcases available rooms with key details like location, type, and
          price. Users can easily browse through room listings, view detailed
          information, and make inquiries directly through the platform. The
          system is optimized for a seamless experience, providing advanced
          filtering options and secure login features to enhance user
          interaction and satisfaction.
        </p>
        <div className="flex justify-end">
          <button className="mt-4 px-6 py-2 bg-yellow-400 text-white rounded-md hover:bg-yellow-700 transition duration-300">
            <Link to="/about"> VIEW MORE → </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
