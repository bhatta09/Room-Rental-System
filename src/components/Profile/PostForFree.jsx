import {
  TextField,
  Select,
  MenuItem,
  Checkbox,
  FormControlLabel,
} from "@mui/material";

import axios from "axios";
import { useForm } from "react-hook-form";

const PostForFree = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjb2RlbG9yZCIsImlhdCI6MTcyNzc0NDk4MSwiZXhwIjoxNzI5MTg0OTgxfQ.9H5OQpSl9QNxHWzVHQbNmWbuVnz5dK-YLroELpBVpeg";
  const onSubmit = async (data) => {
    try {
      const response = await axios.post("/api/room", data, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Success:", response.data); // Handle success
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form
      className="bg-gray-50 overflow-scroll"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex justify-center py-10">
        <h2 className="text-3xl font-semibold text-gray-800">Add Room</h2>
      </div>

      {/* Basic Details */}
      <div className="flex flex-col lg:flex-row gap-8 mx-5">
        <div className="w-full md:w-1/2 mx-auto bg-white shadow-lg p-10 rounded-md">
          <h2 className="text-xl font-semibold text-gray-700">
            1. Basic Details
          </h2>
          <p className="text-sm text-gray-500">
            All fields marked with * are mandatory
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-4">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Purpose*
              </label>
              <Select
                defaultValue="RENT"
                {...register("purpose")}
                className="w-full border border-gray-300  rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-gray-100"
              >
                <MenuItem value="RENT">Rent</MenuItem>
                <MenuItem value="SALE">Sale</MenuItem>
                <MenuItem value="LEASE">Lease</MenuItem>
                <MenuItem value="PAYING_GUEST">Paying Guest</MenuItem>
              </Select>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Your Title*
              </label>
              <TextField
                {...register("title")}
                type=""
                placeholder="title"
                className="w-full border border-gray-300 py-2 px-5 rounded-md bg-gray-100 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Category*
              </label>
              <Select
                {...register("category")}
                className="w-full border border-gray-300  rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-gray-100"
              >
                <MenuItem value="SINGLE_ROOM">Single Room</MenuItem>
                <MenuItem value="TWO_ROOM">Two Rooms</MenuItem>
                <MenuItem value="ONE_BHK">1 BHK</MenuItem>
                <MenuItem value="TWO_BHK">2 BHK</MenuItem>
                <MenuItem value="THREE_BHK">3 BHK</MenuItem>
                <MenuItem value="FOUR_BHK"> 4 BHK</MenuItem>
                <MenuItem value="FLAT">Flat</MenuItem>

                <MenuItem value="HOUSE">House</MenuItem>
                <MenuItem value="APARTMENT">Apartment</MenuItem>
              </Select>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Main Photo
              </label>
              <TextField
                {...register("imageFileUrl")}
                type="file"
                inputProps={{ accept: "image/*" }}
                placeholder=""
                className="w-full border border-gray-300 py-2 px-5 rounded-md bg-gray-100 focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Price*
              </label>
              <TextField
                {...register("price")}
                type="number"
                className="w-full border border-gray-300 py-2 px-5 rounded-md bg-gray-100 focus:outline-none"
                placeholder="e.g., 5000 per month"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Price Negotiable*
              </label>
              <Select
                {...register("negotiable")}
                className="w-full border border-gray-300 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              >
                <MenuItem value="false">No</MenuItem>
                <MenuItem value="true">Yes</MenuItem>
              </Select>
            </div>
          </div>
        </div>

        {/* Amenities */}
        <div className="w-full md:w-1/2 mx-auto bg-white shadow-lg p-10 rounded-md">
          <h2 className="text-xl font-semibold text-gray-700">2. Amenities</h2>
          <p className="text-sm text-gray-500">
            All fields marked with * are mandatory
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-4">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Date of Build*
              </label>
              <Select className="w-full border border-gray-300  rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500">
                <MenuItem>2081</MenuItem>
                <MenuItem>2080</MenuItem>
                <MenuItem>2079</MenuItem>
              </Select>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Bed*
              </label>
              <TextField
                {...register("bedRoom")}
                type="number"
                placeholder="bed"
                className="w-full border border-gray-300 py-2 px-5 rounded-md bg-gray-100 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Select Kitchen*
              </label>
              <Select
                {...register("kitchen")}
                className="w-full border border-gray-300  rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              >
                <MenuItem value="false">No</MenuItem>
                <MenuItem value="true">Yes</MenuItem>
              </Select>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Bath*
              </label>
              <Select
                {...register("bathRoom")}
                className="w-full border border-gray-300  rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              >
                <MenuItem value="false">No</MenuItem>
                <MenuItem value="true">Yes</MenuItem>
              </Select>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Furnishing*
              </label>
              <Select className="w-full border border-gray-300  rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500">
                <MenuItem>No</MenuItem>
                <MenuItem>Yes</MenuItem>v <MenuItem>Semi</MenuItem>
              </Select>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Faced
              </label>
              <Select
                {...register("face")}
                placeholder="select option"
                className="w-full border border-gray-300  rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              >
                <MenuItem value="EAST">East</MenuItem>
                <MenuItem value="WEST">West</MenuItem>
                <MenuItem value="SOUTH">South</MenuItem>
                <MenuItem value="NORTH">North</MenuItem>
              </Select>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Parking
              </label>
              <Select
                {...register("parking")}
                placeholder="select option"
                className="w-full border border-gray-300  rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              >
                <MenuItem value="false">No</MenuItem>
                <MenuItem value="true">Yes</MenuItem>
              </Select>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Balcony
              </label>
              <Select
                {...register("balcony")}
                placeholder="select option"
                className="w-full border border-gray-300  rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              >
                <MenuItem value="false">No</MenuItem>
                <MenuItem value="true">Yes</MenuItem>
              </Select>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Rental Floor
              </label>
              <Select
                {...register("floor")}
                placeholder="select option"
                className="w-full border border-gray-300  rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              >
                <MenuItem value="GROUND">Ground</MenuItem>
                <MenuItem value="FIRST_FLOOR">1st</MenuItem>
                <MenuItem value="SECOND_FLOOR">2nd</MenuItem>
              </Select>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Road type
              </label>
              <Select
                placeholder="select option"
                className="w-full border border-gray-300  rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              >
                <MenuItem>Blacked Pitched</MenuItem>
                <MenuItem>Gorato Bato</MenuItem>
                <MenuItem>Gravel</MenuItem>
              </Select>
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Water Facility
              </label>
              <Select
                {...register("waterFacility")}
                placeholder="select option"
                className="w-full border border-gray-300  rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              >
                <MenuItem value="false">No</MenuItem>
                <MenuItem value="true">Yes</MenuItem>
              </Select>
            </div>
          </div>
        </div>
      </div>
      {/*basic detail end*/}

      {/*more detail*/}
      <div className="max-w-4xl mx-auto bg-white shadow-lg p-10 rounded-md mt-10">
        <h2 className="text-xl font-semibold text-gray-700">3. More details</h2>
        <p className="text-sm text-gray-500">
          All fields marked with * are mandatory
        </p>

        <div className="flex flex-col gap-8">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Contact Number*
            </label>
            <TextField
              {...register("phoneNumber")}
              type="number"
              className="w-full border border-gray-300 py-2 px-5 rounded-md bg-gray-100 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Description*
            </label>
            <TextField
              {...register("description")}
              type="text"
              className="w-full border border-gray-300 py-2 px-5 rounded-md bg-gray-100 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Propperty Location
            </label>
            <Select
              {...register("location")}
              placeholder="select option"
              className="w-full border border-gray-300  rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-gray-100"
            >
              <MenuItem value="Lalitpur">Lalitpur</MenuItem>
              <MenuItem value="Bhaktpur">Bhaktpur</MenuItem>
              <MenuItem value="Kathmandu">Kathmandu</MenuItem>
            </Select>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Local Area Facilities
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {[
              "GYM",
              "Swimming Pool",
              "Playing Court",
              "Hospital",
              "School",
              "Montessori Nursery",
              "College",
              "Temple",
              "Restaurants",
              "Super Market",
              "Bus Stop",
              "Taxi Stand",
              "Police Station",
              "Bank",
              "Banquet Hall",
              "Gas Station",
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

      {/*more detail end*/}

      <div className="max-w-4xl mx-auto  p-10  mt-10">
        <button
          type="submit"
          className="w-full px-6 py-3 bg-yellow-400 text-white rounded font-medium hover:bg-yellow-600"
        >
          Submit for Approval <span className="ml-2">→</span>
        </button>
      </div>
    </form>
  );
};

export default PostForFree;
