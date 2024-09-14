import img from "../../assets/image.png";

const LetKnow = () => {
  return (
    <div className="  flex justify-center items-center lg:mx-24">
      <div className="container  px-8 grid grid-cols-5 gap-4">
        <div className="bg-slate-200 p-6 rounded-2xl shadow-lg h-[500px] col-span-3 ">
          <div className="flex items-center space-x-4 mb-4">
            <div className="">
              <img
                src={img}
                alt="Admin Avatar"
                className="w-12 h-12 rounded-full"
              />
            </div>
            <div>
              <p className="font-semibold text-gray-700">Admin Room-Rental</p>
              <p className="text-gray-500 text-sm">Posted on OCT 10, 2024</p>
            </div>
          </div>
          <div className="bg-slate-200 p-4 rounded-lg border border-gray-200 text-gray-600">
            <p>
              On our website, you can easily search for rental properties or
              list them yourself. Additionally, you can book moving vehicles for
              home or office relocations. If you have any real estate-related
              questions, you’re welcome to use our open chat room. Should you
              come across any fraudulent posts, you can report them here,
              helping us and other users stay informed. This chat room was
              created to ensure complete transparency, fostering communication
              between buyers, sellers, and the platform. Start posting today and
              ask your queries anytime.
            </p>
          </div>
          <div className="flex items-center mt-4 space-x-2">
            <img src={img} alt="Avatar 1" className="w-8 h-8 rounded-full" />
            <img src={img} alt="Avatar 2" className="w-8 h-8 rounded-full" />
            <img src={img} alt="Avatar 3" className="w-8 h-8 rounded-full" />
          </div>
          <div className="mt-4">
            <button className="text-yellow-600 hover:text-yellow-800 flex items-center">
              Show 5 replies <span className="ml-2">→</span>
            </button>
          </div>
          <div className="mt-10 ">
            <button className="bg-yellow-400 border-yellow-500 border-2 rounded-xl px-5 py-1">
              Show All <span className="ml-2">→</span>
            </button>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-xl  col-span-2 ">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Didn't Find What You are Looking for?
            <br />
            <span className="text-yellow-400"> Let us know</span>
          </h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Your Full Name <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
                placeholder="Type your name..."
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Your Phone Number *
              </label>
              <input
                type="text"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
                placeholder="Type your phone number..."
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email *
              </label>
              <input
                type="email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
                placeholder="Enter your email..."
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Location *
              </label>
              <select className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500">
                <option>Select or search your location</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Rental Type *
              </label>
              <select className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500">
                <option>Select or type</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Tole/Area *
              </label>
              <input
                type="text"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
                placeholder="e.g. Tikathali"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                If Any
              </label>
              <textarea
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
                rows="3"
                placeholder="Write a message..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-500 text-white py-2 px-4 rounded-md shadow hover:bg-yellow-600 transition duration-300"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LetKnow;
