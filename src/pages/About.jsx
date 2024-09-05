import img from "../assets/room1.jpg";

const About = () => {
  return (
    <div className="flex flex-col ">
      <div className="bg-white flex flex-row ">
        <div className=" w-full h-[380px] rounded-4xl p-8">
          <img src={img} alt="About Us" className="object-cover rounded-3xl h-72   w-[400px] md:w-[1900px]"
          />
        </div>

        <div className="p-10 flex flex-col text-center text-base font-semibold  tracking-normal">
          <p className="text-gray-800  pt-14 leading-relaxed pb-5">
            The Room Rental System is a web application designed to streamline
            the process of finding and renting rooms, offering a user-friendly
            interface for both property owners and potential tenants. Built
            using React.js and Tailwind CSS, it features an intuitive design
            that showcases available rooms with key details like location, type,
            and price.
          </p>
          <p className="text-gray-800  ">
            Users can easily browse through room listings, view detailed
            information, and make inquiries directly through the platform. The
            system is optimized for a seamless experience, providing advanced
            filtering options and secure login features to enhance user
            interaction and satisfaction
          </p>
        </div>
        </div>

        <div className="flex justify-center gap-56 m-14 px-8 ">
          <div>
            <h2 className="text-2xl font-bold">500+</h2>
            <p>Customers</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold">2</h2>
            <p>Full time researches</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold">2</h2>
            <p>Listed Agent</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold">1</h2>
            <p>Nepal Office</p>
          </div>
        </div>
      </div>
   
  );
};

export default About;
