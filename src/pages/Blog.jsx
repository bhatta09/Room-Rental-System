

const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: 'How to Find the Perfect Rental Room',
      excerpt: 'Discover the best tips for finding your ideal rental room, from location to budget.',
      image: 'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
    },
    {
      id: 2,
      title: 'Top 5 Areas for Naya_Aawas',
      excerpt: 'Explore the top cities where room rentals are most affordable and desirable.',
      image: 'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
    },
    {
      id: 3,
      title: 'Benefits of Renting a Room vs. Apartment',
      excerpt: 'Learn why renting a room could be a better option compared to getting an entire apartment.',
      image: 'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
    },
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-8">Our Blog</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div key={blog.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover"/>
            
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">{blog.title}</h2>
              <p className="text-gray-700 mb-4">{blog.excerpt}</p>
              
              <button className="bg-yellow-400 text-white px-4 py-2 hover:bg-orange-500 transition duration-300 rounded-lg">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
