import { useEffect, useState } from 'react';
import img from "../assets/room1.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {

  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);


  const [customers, setCustomers] = useState(0);
  const [researchers, setResearchers] = useState(0);
  const [agents, setAgents] = useState(0);
  const [offices, setOffices] = useState(0);

  useEffect(() => {
    const incrementNumber = (setState, finalValue, incrementSpeed) => {
      let value = 0;
      const interval = setInterval(() => {
        if (value < finalValue) {
          setState((prev) => Math.min(prev + 1, finalValue));
          value++;
        } else {
          clearInterval(interval);
        }
      }, incrementSpeed);
    };

    incrementNumber(setCustomers, 200, 10);
    incrementNumber(setResearchers, 80, 10);
    incrementNumber(setAgents, 9, 20);
    incrementNumber(setOffices, 6, 20);
  }, []);

  return (
    <div className="flex flex-col space-y-10 mb-5 md:mb-16">
      <div className="bg-white flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-20 md:px-16 px-6">
        <div className="flex-1 w-full h-[300px] md:h-[380px] rounded-4xl p-4" data-aos="fade-right">
          <img
            src={img}
            alt="About Us"
            className="object-cover rounded-3xl w-full h-full"
          />
        </div>

        <div data-aos="fade-left" className="flex-1 p-6 md:p-12 text-center md:text-left text-base font-medium tracking-normal">
          <h2 className='text-center  md:text-center text-3xl font-semibold mb-4 md:mb-8'>About-Us</h2>
          <p className="text-gray-800 leading-relaxed pb-4 md:pb-6">
            The Room Rental System is a web application designed to streamline
            the process of finding and renting rooms, offering a user-friendly
            interface for both property owners and potential tenants. Built
            using React.js and Tailwind CSS, it features an intuitive design
            that showcases available rooms with key details like location, type,
            and price.
          </p>
          <p className="text-gray-800">
            Users can easily browse through room listings, view detailed
            information, and make inquiries directly through the platform. The
            system is optimized for a seamless experience, providing advanced
            filtering options and secure login features to enhance user
            interaction and satisfaction.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-10 md:gap-60 px-10 py-12 shadow-lg rounded-lg bg-slate-50">
        <div className="text-center">
          <h2 className="text-2xl font-semibold">{customers}+</h2>
          <p>Happy Clients</p>
        </div>
        <div className="text-center">
          <h2 className="text-2xl font-semibold">{offices}+</h2>
          <p>Cities</p>
        </div>
        <div className="text-center">
          <h2 className="text-2xl font-semibold">{researchers}+</h2>
          <p>Property-List</p>
        </div>
        <div className="text-center">
          <h2 className="text-2xl font-semibold">{agents}+</h2>
          <p>Listed Agents</p>
        </div>
      </div>
    </div>
  );
};

export default About;
