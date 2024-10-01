import { useState } from "react";
import { TextField, Select, MenuItem } from "@mui/material";
import axios from "axios";

const WriteReview = () => {
  const [title, setTitle] = useState('');
  
  const [message, setMessage] = useState('');
  const [rating, setRating] = useState("");
  const [activity, setActivity] = useState("");
  const [photo, setPhoto] = useState(null);
  const maxChars = 160;
  const token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJiaGF0dGEwMSIsImlhdCI6MTcyNzY5NDE1NSwiZXhwIjoxNzI5MTM0MTU1fQ.0_V9MLE_qJJiDNERL5a8ixbuSg9TE9hkaeZ6lGbYbMA";

  const handleSubmit = async () => {
    const formData = new FormData();
    
    formData.append('title', title);
    formData.append('rating', rating);
    formData.append('activity', activity);
    formData.append('message', message);
    
    if (photo) {
      formData.append('image', photo);
    }

    console.log("Sending form data:", Object.fromEntries(formData));

    try {
      const response = await axios.post("/api/review", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log("Response from server:", response.data);
      alert(response.data);
    } catch (error) {
      console.error('Error submitting review:', error);
      alert('Error submitting review. Please try again.');
    }
  };

  return (
    <div className="p-6 ">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold ml-96">Add New Review</h2>
      </div>

      <div className="bg-white shadow-lg rounded-2xl p-6 w-2/4">
        <h3 className="text-xl font-semibold mb-5">Your Review</h3>

        <div className="flex flex-col gap-6">
          <div className="flex flex-row gap-10">
            <div>
              <label htmlFor="photo" className="block text-gray-700 font-semibold mb-2">
                Photo
              </label>
              <TextField
                type="file"
                id="photo"
                onChange={(e) => setPhoto(e.target.files[0])}
                className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>

            <div>
              <label htmlFor="fullName" className="block text-gray-700 font-semibold mb-2 w-full">
                Full Name
              </label>
              <TextField
                type="text"
                value={title}
                readOnly
                id="title"
                onChange={(e) => setTitle(e.target.value)}
                className="w-full border border-gray-300 p-2 rounded-md bg-gray-100 focus:outline-none"
              />
            </div>
          </div>

          <div className="flex flex-row gap-10">
            <div>
              <label htmlFor="rating" className="block text-gray-700 font-semibold">
                Rating
              </label>
              <Select
                id="rating"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              >
                <MenuItem value="">Select Your Rating</MenuItem>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
              </Select>
            </div>

            <div>
              <label htmlFor="activity" className="block text-gray-700 font-semibold mb-2">
                Explain Activity
              </label>
              <TextField
                type="text"
                id="activity"
                value={activity}
                onChange={(e) => setActivity(e.target.value)}
                className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
              Message
            </label>
            <TextField
              id="message"
              onChange={(e) => setMessage(e.target.value)}
              maxLength={maxChars}
              value={message}
              placeholder="Write your message here"
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 resize-none"
            />
            <div className="text-right text-gray-500 mt-1">
              {message.length} of {maxChars} Characters
            </div>
          </div>

          <div className="max-w-4xl mx-auto p-10 mt-10">
            <button 
              onClick={handleSubmit}
              className="w-full px-6 py-3 bg-yellow-400 text-white rounded hover:bg-yellow-600 font-semibold">
              Submit for Approval <span className="ml-2">→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WriteReview;
