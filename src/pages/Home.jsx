const Home = () => {
  return (
    <div className=" bg-gray-50">
      {/* -Hero Section */}
      <section
        className="relative flex items-center justify-center h-[60vh] bg-cover bg-center"
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
          <p className="text-lg mb-8">
            Explore the best rooms in town with ease.
          </p>
          <div className="flex justify-center space-x-2 mb-4">
            <input
              type="text"
              placeholder="Location"
              className="px-4 py-2 rounded-l-lg w-1/3"
            />
            <input
              type="text"
              placeholder="Room Type"
              className="px-4 py-2 w-1/3"
            />
            <input
              type="text"
              placeholder="Budget"
              className="px-4 py-2 rounded-r-lg w-1/3"
            />
          </div>
          <button className="px-6 py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition animate-bounce">
            Search Now
          </button>
        </div>
      </section>
      {/* Featured Rooms Section */}
      <section className="p-8">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Featured Rooms
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:-translate-y-2 hover:shadow-xl transition">
            <img
              src="room1.jpg"
              alt="Room 1"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">Cozy Room in Downtown</h3>
              <p className="text-gray-600">$500 / month</p>
              <p className="text-gray-700 mt-2">
                A beautiful room in the heart of the city with all amenities
                included.
              </p>
            </div>
          </div>
          {/* Repeat for other rooms */}
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
