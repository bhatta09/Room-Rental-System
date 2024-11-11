import { useState } from "react";
import { TextField, FormControl, FormHelperText } from "@mui/material";
import axios from "axios";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { FaStar } from "react-icons/fa"; 
import StarIcon from '@mui/icons-material/Star';
const WriteReview = () => {
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(0); 
  const [hover, setHover] = useState(null); 
  const [formErrors, setFormErrors] = useState({});

  const token = useSelector((state) => state.auth.token);
  const maxChars = 160;

  const handleSubmit = async () => {
    if (message.length < 160) {
      setFormErrors({ message: "Review message must be at least 160 characters." });
      return;
    }
  
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
      setRating(0);
      setMessage("");
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
  

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full sm:w-[400px] md:w-[500px] lg:w-[600px] mb-16"> 
        <h2 className="text-xl font-semibold text-center mb-4">How was your experience?</h2>

        <div className="flex justify-center mb-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <StarIcon
              key={star}
              sx={{ fontSize: 37}}
              className={`cursor-pointer transition-colors duration-200 ${
                (hover || rating) >= star ? "text-yellow-500" : "text-gray-300"
              }`}
              onClick={() => setRating(star)}
              onMouseEnter={() => setHover(star)}
              onMouseLeave={() => setHover(null)}
            />
          ))}
        </div>

        <FormControl fullWidth error={!!formErrors.rating} className="mb-4">
          <FormHelperText className="text-center">{formErrors.rating}</FormHelperText>
        </FormControl>

      
        <div className="mb-4">
          <TextField
  id="message"
  onChange={(e) => setMessage(e.target.value)}
  value={message}
  error={!!formErrors.message}
  helperText={formErrors.message || `Write at least 160 characters`}
  placeholder="Write your review here..."
  multiline
  rows={4}
  className="w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
/>

          <div className="text-right text-gray-500 mt-1">
            {message.length} of {maxChars} Characters
          </div>
        </div>

        <div className="flex items-center justify-between mt-6">
          <button
            onClick={() => {
              setRating(0);
              setMessage("");
              setFormErrors({});
            }}
            className="px-4 py-2 bg-gray-200 text-gray-600 rounded-md hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-6 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-700"
          >
            Submit
          </button>
        </div>
        <h3 className="text-center pt-7">Maybe later</h3>
      </div>
    </div>
  );
};

export default WriteReview;
