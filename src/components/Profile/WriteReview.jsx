import { useState } from "react";
import { TextField, Select, MenuItem, FormControl, FormHelperText } from "@mui/material";
import axios from "axios";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const WriteReview = () => {
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState("");
  const [formErrors, setFormErrors] = useState({});

  const token = useSelector((state) => state.auth.token);
  const maxChars = 160;

  const handleSubmit = async () => {
    const formData = new FormData();

    formData.append("rating", rating);
    formData.append("message", message);

    console.log("Sending form data:", Object.fromEntries(formData));

    try {
      const response = await axios.post("/api/review", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("Response from server:", response.data);
      toast.success("Review Added!");
      setRating("");
      setMessage("");
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

  return (
    <div className="mb-6">
      <h2 className="text-2xl font-semibold ml-96">Add New Review</h2>

      <div className="max-w-4xl mx-auto bg-white shadow-lg p-10 rounded-md mt-10">
        <h3 className="text-xl font-semibold mb-5">Your Review</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div>
            <FormControl    error={!!formErrors.rating}>

            <label
              htmlFor="rating"
              className="block text-gray-700 font-semibold mb-2"
            >
              Rating
            </label>
            <Select
           
              id="rating"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              className="w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            >
              <MenuItem value="">Select Your Rating</MenuItem>
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
            </Select>
            <FormHelperText>{formErrors.rating}</FormHelperText>
    
            </FormControl>
          </div>
        </div>

        <div className="mt-6">
          <label
            htmlFor="message"
            className="block text-gray-700 font-semibold mb-2"
          >
            Message
          </label>
          <TextField
            id="message"
            onChange={(e) => setMessage(e.target.value)}
            maxLength={maxChars}
            value={message}
            error={!!formErrors.message}
            helperText={formErrors.message}
            placeholder="Write your message here"
            className="w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 resize-none"
          />
          <div className="text-right text-gray-500 mt-1">
            {message.length} of {maxChars} Characters
          </div>
        </div>

        <div className="mt-6">
          <button
            onClick={handleSubmit}
            className="w-full px-6 py-3 bg-yellow-400 text-white rounded font-medium hover:bg-yellow-600"
          >
            Submit for Approval <span className="ml-2">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WriteReview;
