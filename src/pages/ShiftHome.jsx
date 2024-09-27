import React from "react";

const ShiftHome = () => {
  return (
    <div className="relative bg-white py-12 lg:flex lg:items-center lg:justify-between">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:py-16 lg:gap-8 lg:items-center flex flex-col lg:flex-row">
        {/* Left Side Text */}
        <div className="text-left lg:w-1/2">
          <div className="bg-yellow-100 inline-flex items-center px-3 py-1.5 rounded-full mb-4">
            <span role="img" aria-label="thumbs up">
              👍
            </span>
            <span className="ml-2 text-sm font-semibold">
              100% Trusted car rental platform in the World
            </span>
          </div>

          <h1 className="text-5xl font-bold tracking-tight text-gray-900">
            Naya Aawas
          </h1>
          <h2 className="mt-2 text-4xl font-extrabold text-orange-500">
            Find Your Perfect Room
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Experience the ultimate in comfort, performance, and sophistication
            with our luxury car rentals. From sleek sedans and stylish coupes to
            spacious SUVs and elegant convertibles, we offer a range of premium
            vehicles to suit your preferences and lifestyle.
          </p>

          <a
            href="#"
            className="mt-6 inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gray-900 hover:bg-gray-700"
          >
            View All Cars &rarr;
          </a>
        </div>

        {/* Right Side Car Image */}
        <div className="mt-12 lg:mt-0 lg:w-1/2 flex justify-center lg:justify-end">
          <img
            src="https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg"
            alt="Car"
            className="w-4/5 h-auto"
          />
        </div>
      </div>

      {/* Orange Background Stripe */}
      <div className="absolute inset-y-0 right-0 w-1/3 bg-orange-500"></div>
    </div>
  );
};

export default ShiftHome;
