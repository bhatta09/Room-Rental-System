import { useState } from "react";


const FAQ = () => {

  const [open, setOpen] = useState(null);

  const toggle = (index) => {
    setOpen(open === index ? null : index);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-32 p-7 md:px-32">
      <div className="md:grid grid-cols-1 lg:grid-cols-2 lg:max-w-lg mx-auto lg:mx-0 lg:mt-10 gap-2 w-full max-h-[40vh] hidden" >
        <div className="col-span-2 ">
          <img
            src="https://images.pexels.com/photos/1669799/pexels-photo-1669799.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Top Full Image"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div>
          <img
            src="https://images.pexels.com/photos/276514/pexels-photo-276514.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Bottom Left Image"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div>
          <img
            src="https://images.pexels.com/photos/276514/pexels-photo-276514.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Bottom Right Image"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>

      <div className="mt-10 w-full">
        <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-7">
          {faqData.map((faq, index) => (
            <div key={index} className="border border-gray-300 rounded-lg">
              <div className="flex justify-between items-center p-2 bg-gray-100 hover:bg-gray-200 cursor-pointer">
                <button
                  onClick={() => toggle(index)}
                  className="text-left font-semibold text-lg focus:outline-none"
                >
                  {faq.question}
                </button>
                <button
                  onClick={() => toggle(index)}
                  className="text-2xl font-bold focus:outline-none"
                >
                  {open === index ? "-" : "+"}
                </button>
              </div>

              {open === index && (
                <div className="p-4 text-gray-700 bg-white font-normal">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const faqData = [
  {
    question: "What is Naya_Aawas?",
    answer:
      "Naya_Aawas.com is a web portal, which gives rental solution online. In Naya_Aawas.com people can buy or sell property. It is common platform for both owner and tenant.",
  },
  {
    question: "Why do i choose Naya_Aawas.com?",
    answer:
      "Naya_Aawas.com is nation’s leading online rental solution. Till date we have provided fruitful services to more than 1000 plus people at the very short period of time. Naya_Aawas.com offers tenants to set preferences as per the required location, budget, etc. criteria. So, choose gharbheti.com to find the right property at the right time.",
  },
  {
    question: "How do I find available rooms for rent?",
    answer:
      "You can search for available rooms using the search bar and filter options on the homepage. Filter by location, room type, and price range to narrow down your options.",
  },
  {
    question: "Can I schedule a visit to see the room in person?",
    answer:
      "Yes, you can schedule an in-person visit with the room owner or property manager by clicking the 'Schedule a Visit' button on the room details page.",
  },
  {
    question: "What payment methods are accepted?",
    answer: "We accept payments via Khalt and E-Sewa.",
  },
  {
    question:
      "What should I do if I have issues with the room after moving in?",
    answer:
      "If you encounter any problems with your room, please contact the property manager directly using the contact details provided in your booking confirmation email.",
  },
];

export default FAQ;
