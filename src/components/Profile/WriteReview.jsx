import { useState } from "react";
import { TextField, Select, MenuItem } from "@mui/material"

const WriteReview = () => {
  const [message, setMessage] = useState('');
  const maxChars = 160;

  return (
    <div className="p-6 ">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold ml-96">Add New Review</h2>
      </div>

      <div className="bg-white shadow-lg rounded-2xl p-6 ml-96">
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
                className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>

            <div>
              <label htmlFor="fullName" className="block text-gray-700 font-semibold mb-2">
                Full Name
              </label>
              <TextField
                type="text"
                value="Sandesh Bhatta"
                readOnly
                id="fullName"
                className="w-full border border-gray-300 p-2 rounded-md bg-gray-100 focus:outline-none"
              />
            </div>
          </div>

          <div className="flex flex-row gap-10">
            <div>
              <label htmlFor="rating" className="block text-gray-700 font-semibold mb-2">
                Rating
              </label>
              <Select
                id="rating"
                className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              >
                <option>Select Your Rating</option>
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

          <div className="max-w-4xl mx-auto  p-10  mt-10">
 <button className="w-full px-6 py-3 bg-yellow-400 text-white rounded hover:bg-yellow-600">
 Submit for Approval <span className="ml-2">→</span></button>
</div>
        </div>
      </div>
    </div>
  );
};

export default WriteReview;




