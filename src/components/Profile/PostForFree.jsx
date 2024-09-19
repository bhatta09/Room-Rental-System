import { TextField, Select, MenuItem } from "@mui/material"
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
            <Select
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500">
              <MenuItem>Rent</MenuItem>
              <MenuItem>Salet</MenuItem>
              <MenuItem>Lease</MenuItem>
              <MenuItem>Paying Guest</MenuItem>
            </Select>
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
            <Select
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500">
            <MenuItem>Single Room</MenuItem>
            <MenuItem>Two Rooms</MenuItem>
            <MenuItem>1 BHK</MenuItem>
            <MenuItem>2 BHK</MenuItem>
            <MenuItem>3 / 4 BHK</MenuItem>
            <MenuItem>House</MenuItem>
            <MenuItem>Apartment</MenuItem>
            </Select>
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
            <Select
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            >
               <MenuItem>No</MenuItem>
               <MenuItem>Yes</MenuItem>
            </Select>
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
            <Select
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500">
              <MenuItem>2081</MenuItem>
              <MenuItem>2080</MenuItem>
              <MenuItem>2079</MenuItem>
             </Select>
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
            <Select
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            >
               <MenuItem>No</MenuItem>
               <MenuItem>Yes</MenuItem>
            </Select>
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
            <Select
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500">
             <MenuItem>No</MenuItem>
             <MenuItem>Yes</MenuItem>
              v  <MenuItem>Semi</MenuItem>
            </Select>
          </div>

   <div>
    <label className="block text-gray-700 font-semibold mb-2">Faced</label>
    <Select
      placeholder="select option"
      className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
      >
        <MenuItem>East</MenuItem>
        <MenuItem>West</MenuItem>
        <MenuItem>South</MenuItem>
        <MenuItem>North</MenuItem>
    </Select>
   </div>

   <div>
    <label className="block text-gray-700 font-semibold mb-2">Parking</label>
    <Select 
      placeholder="select option"
      className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
      >
      <MenuItem>No</MenuItem>
      <MenuItem>Yes</MenuItem>
      </Select>
   </div>

   <div>
    <label className="block text-gray-700 font-semibold mb-2">Balcony</label>
    <Select
      placeholder="select option"
      className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
      >
         <MenuItem>No</MenuItem>
         <MenuItem>Yes</MenuItem>
      </Select>
   </div>

   <div>
    <label className="block text-gray-700 font-semibold mb-2">Rental Floor</label>
    <Select
      placeholder="select option"
      className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
      >
         <MenuItem>Ground</MenuItem>
         <MenuItem>1st</MenuItem>
         <MenuItem>2nd</MenuItem>
      </Select>
   </div>
  
   <div>
    <label className="block text-gray-700 font-semibold mb-2">Road type</label>
    <Select
      placeholder="select option"
      className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
      >
  <MenuItem>Blacked Pitched</MenuItem>
  <MenuItem>Gorato Bato</MenuItem>
  <MenuItem>Gravel</MenuItem>
      </Select>
   </div>
   <div>
    <label className="block text-gray-700 font-semibold mb-2">Water Facility</label>
    <Select
      placeholder="select option"
      className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
      >
         <MenuItem>No</MenuItem>
         <MenuItem>Yes</MenuItem>
      </Select>
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
  <Select 
   placeholder="select option"
      className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
      >
     <MenuItem>Lalitpur</MenuItem>
     <MenuItem>Bhaktpur</MenuItem>
     <MenuItem>Kathmandu</MenuItem>
  </Select>
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
