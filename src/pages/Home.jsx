import SearchIcon from "@mui/icons-material/Search";
import PaymentsIcon from "@mui/icons-material/Payments";
import PlaceIcon from "@mui/icons-material/Place";
import HomeIcon from "@mui/icons-material/Home";
import FeatureRoom from "../components/FeatureRoom";
const Home = () => {
  return (
    <div className=" bg-gray-50">
      {/* -Hero Section */}
      <section
        className="relative flex items-center justify-center h-[68vh] bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative text-center text-white z-10">
          <h1 className="text-5xl font-bold mb-4 animate-fade-in-down">
            Find Your Perfect Room
          </h1>
          <p className="text-lg mb-10">
            Explore the best rooms in town with ease.
          </p>
          <div className="flex bg-white rounded-full  py-2 px-2 gap-4 items-center justify-center">
            <div className="flex justify-center items-center  ">
              <label htmlFor="">
                <PlaceIcon sx={{ fontSize: 30, color: "yellow" }} />
              </label>
              <input
                type="text"
                placeholder="Location"
                className=" p-2 rounded-l-full w-1/3 h-12 text-gray-900 outline-none placeholder:text-gray-600 font-semibold text-base"
              />
              <label htmlFor="">
                <HomeIcon sx={{ fontSize: 30, color: "yellow" }} />
              </label>
              <input
                type="text"
                placeholder="Room Type"
                className=" p-2 w-1/3  text-gray-900 outline-none placeholder:text-gray-600 font-semibold text-base"
              />
              <label htmlFor="">
                <PaymentsIcon sx={{ fontSize: 30, color: "yellow" }} />
              </label>

              <input
                type="text"
                placeholder="Budget"
                className=" p-2 rounded-r-full w-1/3  text-gray-900 outline-none placeholder:text-gray-600 font-semibold text-base"
              />
            </div>
            <button className="px-6 py-3  font-bold text-xl h-12 bg-yellow-400 text-white rounded-full hover:bg-yellow-400 transition ">
              <SearchIcon /> Search
            </button>
          </div>
        </div>
      </section>
      {/* Featured Rooms Section */}
      <section className="p-8">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Featured Rooms
        </h2>
        <div className="flex flex-row gap-11 ">
  <FeatureRoom 
          imageUrl="https://www.pexels.com/photo/gray-wooden-sideboard-271816/"
          roomName="Ground floor flat on rent in ..."
          location="Samakhushi,Kathmandu"
          roomType="Flat"
          price="Rs15000/month"
  
  />
   <FeatureRoom 
          imageUrl="https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2023/7/19/3/DOTY2023_Dramatic-Before-And-Afters_Hidden-Hills-11.jpg.rend.hgtvcom.791.527.suffix/1689786863909.jpeg"
          roomName="Office space for rent..."
          location="Gwarko,Lalitpur"
          roomType="office"
          price="Rs25000/month"
  
  />
  </div>
      </section>
      {/* Why Choose Us Section */}
      <section className="p-8 bg-gray-100">
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
              Our hosts are verified and trustworthy.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
