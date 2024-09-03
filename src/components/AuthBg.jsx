import img from "../assets/room.png";
const AuthBg = () => {
  return (
    <div className=" flex flex-col gap-5 pt-10  items-center ">
      <h1 className="font-semibold text-2xl uppercase ">
        Welcome to <span className="text-yellow-400">Room Rental</span>
      </h1>
      <p className="font-medium text-gray-500 mb-6 md:leading-relaxed text-base">
        Rent smarter with tailored spaces that suit your lifestyle.
        <br /> Live better in a home that truly feels like yours.
      </p>
      <div className="px-24">
        <img src={img} alt="" className="w-80 md:w-72" />
      </div>
      <div>
        <ul className="text-[#FFB200] font-medium flex  gap-9 list-disc text-base">
          <li>FAQ+</li>
          <li>Terms & Conditions</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
    </div>
  );
};

export default AuthBg;
