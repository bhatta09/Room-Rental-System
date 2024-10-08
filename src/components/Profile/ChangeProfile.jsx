import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { TextField } from "@mui/material";
import { toast } from "react-toastify";

const ChangeProfile = () => {
  const [formData, setFormData] = useState({
    email: "",
    phoneNumber: "",
    address: "",
  });

  const [image, setImage] = useState("");
  const [imagePreview, setImagePreview] = useState("");

  const [id, setId] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const fileInputRef = useRef(null); // Reference to file input

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`/api/user/${id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response.data);
      toast.success("Profile Updated!");
      setFormErrors({});
    } catch (error) {
      if (error.response && error.response.data) {
        const errors = error.response.data;
        setFormErrors(errors);
        setTimeout(() => {
          setFormErrors({});
        }, 3000);
      } else {
        setFormErrors({
          general: "An unexpected error occurred",
        });
        setTimeout(() => {
          setFormErrors({});
        }, 3000);
      }
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Preview the selected image in the img tag
      const imageUrl = URL.createObjectURL(file);
      setImagePreview(imageUrl); // Set preview URL for displaying
      setImage(file); // Store the file to upload later
    }
  };

  const handleImageSubmit = async (e) => {
    e.preventDefault();
    if (!image) {
      toast.error("Please select an image first.");
      return;
    }

    const formData1 = new FormData();
    formData1.append("image", image); // Append the image to FormData

    console.log(formData1);
    try {
      const response = await axios.put(`/api/user/${id}`, formData1, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response.data);
      toast.success("Image Updated!");
    } catch (error) {
      console.log("An unexpected error occurred");
      toast.error("An error occurred while updating the image.");
    }
  };
  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="max-w-lg w-full p-8 mt-2 md:ml-96 bg-white bg-opacity-80 shadow-xl rounded-lg ">
      <div className="flex flex-col items-center w-full gap-6">
        <div>
          <h2 className="text-2xl">Personal Details</h2>
        </div>
        <div
          onClick={triggerFileInput} // Trigger file input on click
          className="w-24 h-24 rounded-full overflow-hidden border-4 border-yellow-500 bg-gray-900"
        >
          <img
            // Reference the img tag with useRef
            src={imagePreview || image}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          ref={fileInputRef} // Reference to the input
          className="hidden w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
        />

        <button
          onClick={handleImageSubmit}
          className="rounded-md bg-yellow-400 px-4 py-2"
        >
          Add Image
        </button>
      </div>

      <div className="mt-8 flex flex-col gap-6">
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
            error={!!formErrors.address}
            helperText={formErrors.address}
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
            type="number"
            placeholder="New Phone Number"
            error={!!formErrors.phoneNumber}
            helperText={formErrors.phoneNumber}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>
      </div>

      <div className="mt-6">
        <button
          onClick={handleSubmit}
          className="w-full px-6 py-3 bg-yellow-400 font-medium text-white rounded hover:bg-yellow-600 transition-colors"
        >
          Update <span className="ml-2">→</span>
        </button>
      </div>
    </div>
  );
};

export default ChangeProfile;
