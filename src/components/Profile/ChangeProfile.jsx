import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const ChangeProfile = () => {
  const [formData, setFormData]=useState("")
  const [image, setImage] = useState(null);
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    fetchImage();
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
console.log(userDetails)
setFormData(userDetails)
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };

  const fetchImage = async () => {
    try {
      const response = await axios.get(
        "/api/user/09b18213-73be-4fc0-8b93-d9ddf5eda753_default.jpg",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          responseType: "blob",
        }
      );
      console.log(response.data);
      const imageUrl = URL.createObjectURL(response.data);
      setImage(imageUrl);
    } catch (error) {
      console.error("Error fetching image:", error);
    }
  };

  return (
    <div className="flex justify-center items-center  ">
      <div className="w-full max-w-lg  rounded-md  shadow-md p-7 ml-72">
        <div className="flex flex-col items-center w-full gap-6">
          <div>
            <h2 className="text-2xl">Personal Details</h2>
          </div>
          <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-yellow-500 bg-gray-900">
            <img src={image} alt="" className="w-full h-full object-cover" />
          </div>
          <div>
            <button className="rounde d-md bg-yellow-400 w-24 h-10">
              Add Image
            </button>
          </div>
        </div>

        <div className="flex gap-10 mt-8">
          <div className="w-1/2">
            <label className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
            value={formData.username}
              type="text"
              placeholder="Your username"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>

          <div className="w-1/2">
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
            
            value={formData.email}
              type="email"
              placeholder="Your Email"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>
        </div>

        <div className="flex gap-6 mt-6">
          <div className="w-1/2">
            <label className="block text-sm font-medium text-gray-700">
              Address
            </label>
            <input
            
            value={formData.address || ""}
              type="text"
              placeholder="Your Address"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>

          <div className="w-1/2">
            <label className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
            
            value={formData.phoneNumber || ""}
              type="text"
              placeholder="New Phone Number"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>
        </div>

        <div className="mt-6">
          <button className="w-full px-6 py-3 bg-yellow-400 text-white rounded hover:bg-yellow-600">
            Update <span className="ml-2">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChangeProfile;
