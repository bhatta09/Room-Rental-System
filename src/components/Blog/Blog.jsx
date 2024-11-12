import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  const blogs = [
    {
      id: 1,
      title: 'How to Find the Perfect Rental Room',
      excerpt: 'Discover the best tips for finding your ideal rental room, from location to budget.',
      content: {
        intro: 'Finding a rental room that meets all your needs and preferences can be a challenge. From budgeting to location, there are many factors to consider...',
        main: 'Start by assessing your budget and your ideal neighborhood. Prioritize safety and proximity to essential services. It’s also wise to compare amenities like internet, laundry facilities, and utilities...',
        conclusion: 'With these tips, you’ll be well-equipped to find a rental room that not only fits your budget but also aligns with your lifestyle needs and preferences.',
      },
      image: 'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
    },
    {
      id: 2,
      title: 'Top 5 Areas in Kathmandu for Naya_Aawas',
      excerpt: 'Explore the top cities where room rentals are most affordable and desirable.',
      content: {
        intro: 'Kathmandu is a vibrant city with numerous rental opportunities. Whether you’re looking for affordability or luxury, some areas offer the perfect balance...',
        main: 'Among the top neighborhoods are Lazimpat, Pulchowk, and Sanepa, known for their diverse housing options. Areas like Thamel offer a lively atmosphere, while Budhanilkantha is popular for its serene surroundings...',
        conclusion: 'Each of these areas offers unique advantages, making them ideal choices for different types of renters.',
      },
      image: 'https://images.pexels.com/photos/101808/pexels-photo-101808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
    },
    {
      id: 3,
      title: 'Benefits of Renting a Room vs. Apartment',
      excerpt: 'Learn why renting a room could be a better option compared to getting an entire apartment.',
      content: {
        intro: 'Renting a room can be an excellent option for many, providing a more affordable and manageable living solution...',
        main: 'One of the main benefits is cost savings. Renting a room is generally cheaper, and you may also enjoy shared amenities like a kitchen or living area...',
        conclusion: 'Overall, renting a room offers a flexible and budget-friendly alternative to renting an apartment, particularly for those who value simplicity and reduced responsibilities.',
      },
      image: 'https://images.pexels.com/photos/21638177/pexels-photo-21638177/free-photo-of-wide-angle-view-house-in-a-forest.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
    },
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-8">Our Blog</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-8 gap-4 md:m-16 m-3" data-aos='fade-up'>
        {blogs.map((blog) => (
          <div key={blog.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover"/>
            
            <div className="p-4">
              <h2 className="text-2xl font-semibold mb-2">{blog.title}</h2>
              <p className="text-gray-700 mb-4">{blog.excerpt}</p>
              
              <Link to={`/blogdetails/${blog.id}`}>
                <button className="bg-yellow-400 text-white px-4 py-2 hover:bg-orange-500 transition duration-300 rounded-lg">
                  Read More
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
