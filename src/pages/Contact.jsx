const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100">
  
      <div className="relative w-full h-80 bg-cover bg-center bg-[url('./assets/contact.jpg')] flex items-center justify-center object-cover">
        <h1 className="text-5xl font-bold text-white">Contact Us</h1>
      </div>

      <section className="py-16 px-6 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26L12 15.5l1.11-.74L21 8m-6.75 9.88v.01M3 21V7m18 0v14m-9 0h.01" />
              </svg>
              <h3 className="text-xl font-semibold mt-4">Email Us</h3>
              <p className="mt-2 text-gray-600">swornim@academiacollege.edu.np</p>
            </div>
          </div>
          <div className="text-center">
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 12c2.7 0 5.4 1.02 7.56 2.91C22.44 16.99 24 19.56 24 22H0c0-2.44 1.56-5.01 4.44-7.09C6.6 13.02 9.3 12 12 12z" />
              </svg>
              <h3 className="text-xl font-semibold mt-4">Call Us</h3>
              <p className="mt-2 text-gray-600">+977 9869348362</p>
            </div>
          </div>
          <div className="text-center">
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m4 9H5a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2z" />
              </svg>
              <h3 className="text-xl font-semibold mt-4">Visit Us</h3>
              <p className="mt-2 text-gray-600">Tikathali,Lalitpur</p>
            </div>
          </div>
        </div>
      </section>

   
      <section className="bg-white py-16 px-6 lg:px-24">
        <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
        <div className="max-w-4xl mx-auto">
          <form className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <input
              type="text"
              className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Your Name"
            />
            <input
              type="email"
              className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Your Email"
            />
            <input
              type="text"
              className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 sm:col-span-2"
              placeholder="Subject"
            />
            <textarea
              rows="4"
              className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 sm:col-span-2"
              placeholder="Message"
            ></textarea>
            <button
              type="submit"
              className="py-4 px-6 bg-yellow-400 text-white font-bold rounded-lg hover:bg-yellow-600 transition-all sm:col-span-2"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      
      <section className="py-16 px-6 lg:px-24">
        <div className="w-full h-96">
          <iframe
           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14135.623272447838!2d85.34808395528654!3d27.65838546936721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb10aa668e649f%3A0x302b443de16adbd5!2sTikathali%2C%20Mahalaxmi!5e0!3m2!1sen!2snp!4v1725275890620!5m2!1sen!2snp" 
            className="w-full h-full border-0"
            allowFullScreen=""
            loading="lazy"
            title="Company Location"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Contact;
