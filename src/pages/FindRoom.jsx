const FindRoom = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Find Your Dream Place
        </h1>
        <p className="text-md text-gray-600">Your Ultimate renting partner</p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-8 space-y-8 w-full max-w-3xl">
        <form className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-gray-700"
              >
                Your Full Name
              </label>
              <input
                type="text"
                id="fullName"
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-10 p-2"
                placeholder="Enter here..."
              />
            </div>
            <div>
              <label
                htmlFor="phoneNumber"
                className="block text-sm font-medium text-gray-700"
              >
                Your Phone Number
              </label>
              <input
                type="text"
                id="phoneNumber"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-10 p-2"
                placeholder="98XXXXXXX"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-10 p-2"
                placeholder="Enter Your Email"
              />
            </div>
            <div>
              <label
                htmlFor="location"
                className="block text-sm font-medium text-gray-700"
              >
                Location
              </label>
              <input
                type="text"
                id="location"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-10 p-2"
                placeholder="Select or type"
              />
            </div>
            <div>
              <label
                htmlFor="propertyType"
                className="block text-sm font-medium text-gray-700"
              >
                Property type
              </label>
              <input
                type="text"
                id="propertyType"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-10 p-2"
                placeholder="Select or type"
              />
            </div>
            <div>
              <label
                htmlFor="toleArea"
                className="block text-sm font-medium text-gray-700"
              >
                Tole/Area
              </label>
              <input
                type="text"
                id="toleArea"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-10 p-2"
                placeholder="eg. Samakhushi"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              If any
            </label>
            <textarea
              id="message"
              rows="3"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-10 p-2"
              placeholder="Write a Message"
            />
          </div>

          <div className="flex items-center space-x-4 text-sm">
            <span className="text-red-500 font-medium">
              Get Qr Code to scan (optional)
            </span>
            <input type="file" id="file" className="text-gray-600" />
          </div>

          <div className="bg-blue-100 p-4 rounded-md text-blue-600 text-sm">
            <p>
              यदि तपाईं कुनै एजेन्ट (dalay dai) संग व्यवहार गर्नुहुन्छ र यस
              प्लेटफर्म बाहिर पैसा पठाउनुहुन्छ भने NayaAawas.com.np जिम्मेवार
              हुनेछैन। NayaAawas.com.np will not be responsible if you deal with an
              agent and transfer money outside of this platform.
            </p>
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-yellow-500 text-white py-2 rounded-md hover:bg-yellow-600 transition-colors"
            >
              Send →
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FindRoom;
