import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { TextField } from "@mui/material";

const ChangeProfile = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phoneNumber: "",
    address: "",
  });
  const [image, setImage] = useState("");
  const [id, setId] = useState("");
  const token = useSelector((state) => state.auth.token);
  console.log(token);

  useEffect(() => {
    extractDetails();
  }, []);

  const extractDetails = async () => {
    try {
      const response = await axios.get("/api/user/extract-details", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const userDetails = response.data["User Details"];
      console.log(userDetails);
      setFormData(userDetails);
      if (userDetails.imageName) {
        fetchImage(userDetails.imageName);
      }

      setId(userDetails.id);
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };

  const fetchImage = async (imageName) => {
    try {
      const response = await axios.get(`/api/user/${imageName}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        responseType: "blob",
      });
      const imageUrl = URL.createObjectURL(response.data);
      setImage(imageUrl);
    } catch (error) {
      console.error("Error fetching image:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("button clicked");
    const postData = async () => {
      const response = await axios.post(`/api/user/${id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response.data);
    };
    postData();
  };

  return (
    <div className="max-w-lg w-full p-8 mt-2 ml-96 bg-white bg-opacity-80 shadow-xl rounded-lg">
      <div className="w-full h-full rounded-md shadow-md p-10">
        <div className="flex flex-col items-center w-full gap-6">
          <div>
            <h2 className="text-2xl">Personal Details</h2>
          </div>
          <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-yellow-500 bg-gray-900">
            <img
              src={image}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <button className="rounded-md bg-yellow-400 px-4 py-2">
            Add Image
          </button>
        </div>

        <div className="mt-8 flex flex-col gap-6">
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <TextField
              value={formData.email}
              onChange={handleChange}
              name="email"
              type="email"
              placeholder="Your Email"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>

          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700">
              Address
            </label>
            <TextField
              value={formData.address || ""}
              onChange={handleChange}
              name="address"
              type="text"
              placeholder="Your Address"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>

          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <TextField
              value={formData.phoneNumber || ""}
              onChange={handleChange}
              name="phoneNumber"
              type="text"
              placeholder="New Phone Number"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>
        </div>

        <div className="mt-6">
          <button
            onClick={handleSubmit}
            className="w-full px-6 py-3 bg-yellow-400 text-white rounded hover:bg-yellow-600 transition-colors"
          >
            Update <span className="ml-2">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChangeProfile;
