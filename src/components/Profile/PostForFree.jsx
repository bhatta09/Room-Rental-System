import { TextField } from "@mui/material"
const PostForFree = () => {
  return (
    <div className="bg-gray-50 ml-72">
      <div className="flex justify-center py-10">
        <h2 className="text-3xl font-semibold text-gray-800">Add Room</h2>
      </div>

      {/* Basic Details */}
      <div className="max-w-4xl mx-auto bg-white shadow-lg p-10 rounded-md">
        <h2 className="text-xl font-semibold text-gray-700">1. Basic Details</h2>
        <p className="text-sm text-gray-500">All fields marked with * are mandatory</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-4">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Purpose*</label>
            <select className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500">
              <option value="">Rent</option>
              <option value="">Sale</option>
              <option value="">Lease</option>
              <option value="">Paying Guest</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Your Title*</label>
            <TextField
           type=""
              placeholder="Password"
               className="w-full border border-gray-300 py-2 px-5 rounded-md bg-gray-100 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Category*</label>
            <select className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500">
              <option value="">Single Room</option>
              <option value="">Two Rooms</option>
              <option value="">1 BHK</option>
              <option value="">2 BHK</option>
              <option value="">3 BHK/4 BHK</option>
              <option value="">Flat</option>
              <option value="">House</option>
              <option value="">Apartment</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Main Photo</label>
            <TextField
           type="file"
              placeholder="Password"
               className="w-full border border-gray-300 py-2 px-5 rounded-md bg-gray-100 focus:outline-none"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-6">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Price*</label>
            <TextField
           type=""
            className="w-full border border-gray-300 py-2 px-5 rounded-md bg-gray-100 focus:outline-none"
              placeholder="e.g., 5000 per month"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Price Negotiable*</label>
            <select 
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            >
              <option>No</option>
              <option>Yes</option>
            </select>
          </div>
        </div>
      </div>

      {/* Amenities */}
      <div className="max-w-4xl mx-auto bg-white shadow-lg p-10 rounded-md mt-10">
        <h2 className="text-xl font-semibold text-gray-700">2. Amenities</h2>
        <p className="text-sm text-gray-500">All fields marked with * are mandatory</p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-4">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Date of Build*</label>
            <select className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500">
              <option value="">2081</option>
              <option value="">2080</option>
              <option value="">2079</option>
              <option value="">Select Option</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Bed*</label>
            <TextField
           type=""
              placeholder="Password"
               className="w-full border border-gray-300 py-2 px-5 rounded-md bg-gray-100 focus:outline-none"
         />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Select Kitchen*</label>
            <select 
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            >
              <option>No</option>
              <option>Yes</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Bath*</label>
               <TextField
               type=""
                  placeholder="Password"
                   className="w-full border border-gray-300 py-2 px-5 rounded-md bg-gray-100 focus:outline-none"
                />
                </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Furnishing*</label>
            <select className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500">
              <option>No</option>
              <option>Yes</option>
              <option>Semi</option>
            </select>
          </div>

   <div>
    <label className="block text-gray-700 font-semibold mb-2">Faced</label>
      <select 
      placeholder="select option"
      className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
      >
        <option>East</option>
        <option>West</option>
        <option>South</option>
        <option>North</option>
      </select>
   </div>

   <div>
    <label className="block text-gray-700 font-semibold mb-2">Parking</label>
      <select 
      placeholder="select option"
      className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
      >
        <option>No</option>
        <option>Yes</option>
      </select>
   </div>

   <div>
    <label className="block text-gray-700 font-semibold mb-2">Balcony</label>
      <select 
      placeholder="select option"
      className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
      >
        <option>No</option>
        <option>Yes</option>
      </select>
   </div>

   <div>
    <label className="block text-gray-700 font-semibold mb-2">Rental Floor</label>
      <select 
      placeholder="select option"
      className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
      >
        <option>Ground</option>
        <option>1st</option>
        <option>2st</option>
      </select>
   </div>
  
   <div>
    <label className="block text-gray-700 font-semibold mb-2">Road type</label>
      <select 
      placeholder="select option"
      className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
      >
        <option>Black Pitched</option>
        <option>Goreto bato</option>
        <option>Gravel</option>
      </select>
   </div>
   <div>
    <label className="block text-gray-700 font-semibold mb-2">Water Facility</label>
      <select 
      placeholder="select option"
      className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
      >
        <option>Yes</option>
        <option>No</option>
      </select>
   </div>
</div>
 </div>
{/*basic detail end*/}

     
     {/*more detail*/}
     <div className="max-w-4xl mx-auto bg-white shadow-lg p-10 rounded-md mt-10">
        <h2 className="text-xl font-semibold text-gray-700">3. More details</h2>
        <p className="text-sm text-gray-500">All fields marked with * are mandatory</p>

<div className="flex flex-col gap-8">
<div>
  <label className="block text-gray-700 font-semibold mb-2">Contact Number*</label>
  <TextField
           type=""
               className="w-full border border-gray-300 py-2 px-5 rounded-md bg-gray-100 focus:outline-none"
            />
</div>
<div>
  <label className="block text-gray-700 font-semibold mb-2">Propperty Location</label>
  <select  placeholder="select option"
      className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
      >
    <option>Lalitpur</option>
    <option>Bhakatapur</option>
    <option>Kathmandu</option>
  </select>
</div>
</div>
 </div>
 {/*more detail end*/}


 <div className="max-w-4xl mx-auto  p-10  mt-10">
 <button className="w-full px-6 py-3 bg-yellow-400 text-white rounded hover:bg-yellow-600">
 Submit for Approval <span className="ml-2">→</span></button>
</div>

    </div>
  )
}

export default PostForFree
