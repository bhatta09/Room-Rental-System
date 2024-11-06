import { Link } from "react-router-dom";
import img from "../../assets/swornim.jpg";

const AboutUs = () => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-gradient-to-r from-orange-500 to-yellow-300 rounded-lg p-8 md:p-20 lg:px-20 lg:py-16 overflow-visible relative">
      <div className="text-white md:w-1/2 lg:w-2/3 pr-8 z-10">
        <h2 className="text-3xl font-bold mb-4">This is Sustainability at Our Company</h2>
        <p className="text-gray-200 font-medium leading-relaxed mb-6">
          From strengthening communities and improving health and well-being to addressing
          climate change and gender and racial inequity, sustaining lives is woven into
          the fabric of who we are.
        </p>
        <button className="mt-4 px-6 py-2 border border-white text-white rounded-md hover:bg-white hover:text-blue-900 transition duration-300 font-medium">
          <Link to="/about">Explore more</Link>
        </button>
      </div>

      <div className="md:w-1/2 lg:w-1/3 flex justify-end">
        <div className="relative w-full h-full -mr-20 lg:-mr-40 overflow-visible"> 
          <img
            src={img}
            alt="Sustainability Thumbnail"
            className="w-full h-72 lg:h-64 rounded-md object-cover shadow-lg"
          />
    
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-white bg-opacity-50 rounded-full flex items-center justify-center">
              <svg
                className="w-8 h-8 text-black"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
