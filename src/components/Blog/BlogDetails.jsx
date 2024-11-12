import React from 'react';
import { useParams } from 'react-router-dom';

const BlogDetails = () => {
  const { id } = useParams();

  const blogs = [
    {
      id: 1,
      title: 'How to Find the Perfect Rental Room',
      content: {
        intro: 'Finding a rental room that meets all your needs and preferences can be a challenge...',
        main: 'Start by assessing your budget and your ideal neighborhood...',
        conclusion: 'With these tips, you’ll be well-equipped to find a rental room...',
      },
      image: 'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 2,
      title: 'Top 5 Areas in Kathmandu for Naya_Aawas',
      content: {
        intro: 'Kathmandu is a vibrant city with numerous rental opportunities...',
        main: 'Among the top neighborhoods are Lazimpat, Pulchowk, and Sanepa...',
        conclusion: 'Each of these areas offers unique advantages...',
      },
      image: 'https://images.pexels.com/photos/101808/pexels-photo-101808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 3,
      title: 'Benefits of Renting a Room vs. Apartment',
      content: {
        intro: 'Renting a room can be an excellent option for many...',
        main: 'One of the main benefits is cost savings...',
        conclusion: 'Overall, renting a room offers a flexible and budget-friendly alternative...',
      },
      image: 'https://images.pexels.com/photos/21638177/pexels-photo-21638177/free-photo-of-wide-angle-view-house-in-a-forest.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
  ];

  const blog = blogs.find(blog => blog.id === parseInt(id));

  if (!blog) return <p>Blog not found.</p>;

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col lg:flex-row items-center mb-8">
        <img src={blog.image} alt={blog.title} className="w-full lg:w-1/2 h-auto rounded-lg shadow-md mb-4 lg:mb-0 lg:mr-6" />
        <div className="lg:w-1/2">
          <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
        </div>
      </div>

      <div className="text-lg space-y-8">
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
          <p>{blog.content.intro}</p>
        </div>
        
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-2">Main Content</h2>
          <p>{blog.content.main}</p>
        </div>
        
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-2">Conclusion</h2>
          <p>{blog.content.conclusion}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
