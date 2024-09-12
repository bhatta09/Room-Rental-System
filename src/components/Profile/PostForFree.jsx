import React from 'react'

const PostForFree = () => {
  return (
    <div className='bg-white min-h-screen '>
      <div className='flex justify-center'>
<h2 className='text-2xl font-semibold ml-72'>Add room</h2>
      </div>

<div className='ml-96 mt-5 bg-white shadow-lg p-10'>
  <h2> 1. Basic Details</h2>
  <p>All the fileds with * are mandotary</p>
      <div className='flex flex-row flex-wrap gap-10 mb-4 mt-4'>
        <div>
          <label className="block text-gray-700 font-semibold mb-2">purpose*</label>
          <select className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500">
            <option value="">Rent</option>
            <option value="">Sale</option>
            <option value="">Lesse</option>
            <option value="">Paying guest</option>
          </select>
        </div>

        <div>
 <label className="block text-gray-700 font-semibold mb-2">Your Title*</label>
          <input 
          type="text" 
           className="w-full border border-gray-300 p-2 rounded-md bg-gray-100 focus:outline-none"
          />
        </div>

        <div>
        <label className="block text-gray-700 font-semibold mb-2">Category*</label>
          <select className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500">
            <option value="">Single Room</option>
            <option value="">Two Rooms</option>
            <option value="">1 BHk</option>
            <option value="">2 BHk</option>
            <option value="">3 BHk /4 BHK</option>
            <option value="">Flat</option>
            <option value="">House</option>
            <option value="">Apartment</option>
          </select>
        </div>
      </div>

      <div>
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Main Photo</label>
          <input 
          type="file"
           className="w-full border border-gray-300 py-2 px-5 rounded-md bg-gray-100 focus:outline-none"
          />
        </div>
        </div>

<div className='flex flex-row gap-10 mt-10'>
  <div>
    <label className="block text-gray-700 font-semibold mb-2">Price*</label>
    <input 
    type="text"
    placeholder="eg:-5000 per month"
     className="w-full border border-gray-300 p-2 rounded-md bg-gray-100 focus:outline-none"
    />
  </div>
  <div>
    <label className="block text-gray-700 font-semibold mb-2">Price Negotiable*</label>
      <select 
      placeholder="select option"
      className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
      >
        <option>No</option>
        <option>Yes</option>
      </select>
   </div>
</div>

      </div>

      <div>

      </div>

      <div>

      </div>
    </div>
  )
}

export default PostForFree
