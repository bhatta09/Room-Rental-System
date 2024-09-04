import React from "react";
import img from "../assets/room1.jpg";

const About = () => {
  return (
    <div className="flex flex-col ">
      <div className="bg-white">
        <div className=" w-full h-[400px] rounded-4xl p-8">
          <img
            src={img}
            alt="About Us"
            className="w-full h-[360px]  object-cover rounded-3xl"
          />
          <div className="absolute inset-0  bg-opacity-50 flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold text-white">About Us</h1>
            <p className="text-lg text-white mt-2">Online real estate</p>
          </div>{" "}
        </div>

        <div className="p-10 flex flex-col text-center text-base font-semibold  tracking-normal">
          <p className="text-gray-800  leading-relaxed">
            {" "}
            The Room Rental System is a web application designed to streamline
            the process of finding and renting rooms, offering a user-friendly
            interface for both property owners and potential tenants. Built
            using React.js and Tailwind CSS, it features an intuitive design
            that showcases available rooms with key details like location, type,
            and price.{" "}
          </p>
          <p className="text-gray-800  ">
            Users can easily browse through room listings, view detailed
            information, and make inquiries directly through the platform. The
            system is optimized for a seamless experience, providing advanced
            filtering options and secure login features to enhance user
            interaction and satisfaction
          </p>
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

        <div className="flex flex-row gap-20 bg-orange-500">
          <div>
            <h3 className="text-2xl p-14 font-bold">
              Subscribe to our newsletter and we’ll keep you up to date on{" "}
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
                {" "}
                →{" "}
              </button>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
