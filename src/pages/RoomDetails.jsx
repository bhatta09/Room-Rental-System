import PropertyTitle from "../components/RoomDetails/PropertyTitle";
import PropertyDetails from "../components/RoomDetails/PropertyDetails";
import SellerProfile from "../components/RoomDetails/SellerProfile";
import MapSection from "../components/RoomDetails/MapSection";
import AOS from "aos";
import { useEffect } from "react";



const RoomDetail = () => {

  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <div className="container mx-auto p-4 lg:px-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8" >
        <div data-aos="fade-right">
          <div className="w-full h-[60vh] rounded-lg overflow-hidden">
            <img
              src="https://plus.unsplash.com/premium_photo-1684508638760-72ad80c0055f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Room Image"
              className="object-cover w-full h-full"
            />
          </div>
          <PropertyTitle />
        </div>

        <div className="space-y-6" data-aos="fade-left">
          <SellerProfile data-aos="fade-left"/>
          <MapSection data-aos="fade-left"/>
        </div>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8" >
        <div className="bg-white shadow-md rounded-lg p-6" data-aos="fade-right">
          <PropertyDetails />

          <div className="mt-8">
            <h2 className="font-bold text-lg mb-2">Overview</h2>
            <p className="text-gray-600">
              Kritipur Salyanthan, 10 mins walking distance from Hicast College near Sasa Restaurant
            </p>
          </div>
        </div>

       <div className="space-y-8" data-aos="fade-left">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="font-bold text-lg mb-2">Local Area Facilities</h2>
            <div className="grid grid-cols-2 gap-y-4 gap-x-8 border border-gray-200 rounded-lg p-4">
              {[
                'GYM',
                'Swimming Pool',
                'Hospital',
                'School',
                'Temple',
                'Restaurants',
                'Super Market',
                'Bus Stop',
              ].map((facility, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <span className="w-4 h-4 rounded-full bg-orange-500 inline-block"></span>
                  <span className="text-gray-600">{facility}</span>
                </div>
              ))}
            </div>
          </div>

         
          <div className="text-center">
            <button className="bg-orange-500 text-white py-3 px-6 rounded-md hover:bg-orange-600 transition duration-200">
              Ask anything about 2BHK flat available in Kirtipur
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetail;
