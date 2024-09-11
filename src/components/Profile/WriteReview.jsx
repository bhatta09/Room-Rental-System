import { useState } from "react";
const WriteReview = () => {

  const [message, setMessage] = useState('');
  const maxChars = 160;


  return (
    <div className="">
     <div className="">
          <h2 className=" text-2xl font-semibold ">Add New Review</h2>
        </div>
 
        <div className="bg-white shadow-lg rounded-2xl m-10 flex flex-col">
          <h3 className="text-xl font-semibold mb-5">Your Review</h3>
          <div className="flex flex-row gap-10">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Photo</label>
            <input 
            type="file" 
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"/>
          </div>

          <div>
          <label className="block text-gray-700 font-semibold mb-2">Full Name</label>
          <input 
          type="text"
          value="Sandesh Bhatta"
            readOnly
            className="w-full border border-gray-300 p-2 rounded-md bg-gray-100 focus:outline-none"
           />
          </div>
          </div>

          <div className="flex flex-row gap-10">
          <div>
          <label className="block text-gray-700 font-semibold mb-2">Rating</label>
          <select className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500">
            <option>Select Your Rating</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          </select>
          </div>

          <div>
          <label className="block text-gray-700 font-semibold mb-2">Explain Activity</label>
          <input 
          type="text"
          className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
          </div>
          </div>

          <div>
          <label className="block text-gray-700 font-semibold mb-2">Message</label>
          <textarea 
           onChange={(e) => setMessage(e.target.value)}
           maxLength={maxChars}
          value={message}
          placeholder="message"
          className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
          </div>
          <div className="text-right text-gray-500 mt-1">
          {message.length} of {maxChars} Characters
        </div>
          </div>
     

        <div className="mt-10">
<button className="bg-yellow-400 hover:bg-yellow-600 rounded-2xl border-2 py-3 px-5 text-white font-bold">Submit for Approval</button>
        </div>
      </div>
     
  )
}

export default WriteReview



