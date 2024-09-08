const Footer = () => {
  return (
    <div className="mt-10">
    <div className="flex flex-row gap-20 bg-orange-500">
    <div>
      <h3 className="text-2xl p-14 font-bold">
        Subscribe to our newsletter and we’ll keep you up to date ongit 
        <br /> our products and services
      </h3>
    </div>
    <div className="p-14">
      <label>
        <input
          type="text"
          placeholder="Enter Your Email Address"
          className="rounded-l-full p-4"
        />
        <button className="bg-yellow-400  h-14 w-14 text-white py-2 px-6 rounded-r-full hover:bg-yellow-800 ">
         →
        </button>
      </label>
    </div>
  </div>
    <footer className="p-6 bg-gray-800 text-white text-center">
      © 2024 Room Rental. All Rights Reserved.
    </footer>
    </div>
  );
};

export default Footer;
