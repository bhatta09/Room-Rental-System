import { TextField, Select, MenuItem, Checkbox, FormControlLabel } from "@mui/material";

export default function Component() {
  return (
    <div className="bg-gray-50 p-8 overflow-scroll">
      <div className="flex justify-center py-10">
        <h2 className="text-3xl font-semibold text-gray-800">Add Room</h2>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 mb-8 mx-5">
        {/* Basic Details */}
        <div className="lg:w-1/2 bg-white shadow-lg p-6 rounded-md">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            1. Basic Details
          </h2>
          <p className="text-sm text-gray-500 mb-4">
            All fields marked with * are mandatory
          </p>

          <div className="grid grid-cols-1 gap-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Purpose*
              </label>
              <Select className="w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500">
                <MenuItem value="rent">Rent</MenuItem>
                <MenuItem value="sale">Sale</MenuItem>
                <MenuItem value="lease">Lease</MenuItem>
                <MenuItem value="pg">Paying Guest</MenuItem>
              </Select>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Your Title*
              </label>
              <TextField
                className="w-full border border-gray-300 px-5 rounded-md bg-gray-100 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Category*
              </label>
              <Select className="w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500">
                <MenuItem value="single">Single Room</MenuItem>
                <MenuItem value="two">Two Rooms</MenuItem>
                <MenuItem value="1bhk">1 BHK</MenuItem>
                <MenuItem value="2bhk">2 BHK</MenuItem>
                <MenuItem value="3bhk">3 / 4 BHK</MenuItem>
                <MenuItem value="house">House</MenuItem>
                <MenuItem value="apartment">Apartment</MenuItem>
              </Select>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Main Photo
              </label>
              <TextField
                type="file"
                className="w-full border border-gray-300 py-2 px-5 rounded-md bg-gray-100 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Price*
              </label>
              <TextField
                className="w-full border border-gray-300 py-2 px-5 rounded-md bg-gray-100 focus:outline-none"
                placeholder="e.g., 5000 per month"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Price Negotiable*
              </label>
              <Select className="w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500">
                <MenuItem value="no">No</MenuItem>
                <MenuItem value="yes">Yes</MenuItem>
              </Select>
            </div>
          </div>
        </div>

        {/* Amenities */}
        <div className="lg:w-1/2 bg-white shadow-lg p-6 rounded-md">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">2. Amenities</h2>
          <p className="text-sm text-gray-500 mb-4">
            All fields marked with * are mandatory
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Date of Build*
              </label>
              <Select className="w-full border border-gray-300  rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500">
                <MenuItem value="2081">2081</MenuItem>
                <MenuItem value="2080">2080</MenuItem>
                <MenuItem value="2079">2079</MenuItem>
              </Select>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Bed*
              </label>
              <TextField
                className="w-full border border-gray-300 py-2 px-5 rounded-md bg-gray-100 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Select Kitchen*
              </label>
              <Select className="w-full border border-gray-300  rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500">
                <MenuItem value="no">No</MenuItem>
                <MenuItem value="yes">Yes</MenuItem>
              </Select>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Bath*
              </label>
              <TextField
                className="w-full border border-gray-300 py-2 px-5 rounded-md bg-gray-100 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Furnishing*
              </label>
              <Select className="w-full border border-gray-300  rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500">
                <MenuItem value="no">No</MenuItem>
                <MenuItem value="yes">Yes</MenuItem>
                <MenuItem value="semi">Semi</MenuItem>
              </Select>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Faced
              </label>
              <Select className="w-full border border-gray-300  rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500">
                <MenuItem value="east">East</MenuItem>
                <MenuItem value="west">West</MenuItem>
                <MenuItem value="south">South</MenuItem>
                <MenuItem value="north">North</MenuItem>
              </Select>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Parking
              </label>
              <Select className="w-full border border-gray-300  rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500">
                <MenuItem value="no">No</MenuItem>
                <MenuItem value="yes">Yes</MenuItem>
              </Select>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Balcony
              </label>
              <Select className="w-full border border-gray-300  rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500">
                <MenuItem value="no">No</MenuItem>
                <MenuItem value="yes">Yes</MenuItem>
              </Select>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Rental Floor
              </label>
              <Select className="w-full border border-gray-300  rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500">
                <MenuItem value="ground">Ground</MenuItem>
                <MenuItem value="1st">1st</MenuItem>
                <MenuItem value="2nd">2nd</MenuItem>
              </Select>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Road type
              </label>
              <Select className="w-full border border-gray-300  rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500">
                <MenuItem value="blacked">Blacked Pitched</MenuItem>
                <MenuItem value="gorato">Gorato Bato</MenuItem>
                <MenuItem value="gravel">Gravel</MenuItem>
              </Select>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Water Facility
              </label>
              <Select className="w-full border border-gray-300  rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500">
                <MenuItem value="no">No</MenuItem>
                <MenuItem value="yes">Yes</MenuItem>
              </Select>
            </div>
          </div>
        </div>
      </div>

      {/* More details */}
      <div className="bg-white shadow-lg p-6 rounded-md mt-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">3. More details</h2>
        <p className="text-sm text-gray-500 mb-4">
          All fields marked with * are mandatory
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Contact Number*
            </label>
            <TextField
              type="tel"
              className="w-full border border-gray-300 py-2 px-5 rounded-md bg-gray-100 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Property Location
            </label>
            <Select
              defaultValue=""
              className="w-full border border-gray-300  rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            >
              <MenuItem value="">Select option</MenuItem>
              <MenuItem value="Lalitpur">Lalitpur</MenuItem>
              <MenuItem value="Bhaktapur">Bhaktapur</MenuItem>
              <MenuItem value="Kathmandu">Kathmandu</MenuItem>
            </Select>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Local Area Facilities</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {[
              "GYM", "Swimming Pool", "Playing Court", "Hospital", "School",
              "Montessori Nursery", "College", "Temple", "Restaurants",
              "Super Market", "Bus Stop", "Taxi Stand", "Police Station",
              "Bank", "Banquet Hall", "Gas Station"
            ].map((facility) => (
              <FormControlLabel
                key={facility}
                control={<Checkbox />}
                label={facility}
                className="text-sm text-gray-700"
              />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8">
        <button className="w-full px-6 py-3 bg-yellow-400 text-white rounded hover:bg-yellow-600 font-medium">
          Submit for Approval <span className="ml-2">→</span>
        </button>
      </div>
    </div>
  );
}