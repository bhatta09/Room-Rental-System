// import * as React from "react";

// export default function ProfileCard() {
//   return (
//     <div className="bg-slate-300/40 shadow-lg shadow-gray-200 rounded-2xl p-4 sm:p-6 xl:p-8 mb-6 border-2 ">
//       <div className="sm:flex xl:block sm:space-x-4 xl:space-x-0 ">
//         <div className="ml-6">
//           <img
//             className="mb-2 w-6 h-26 rounded-2xl shadow-lg shadow-gray-300 object-cover"
//             src="https://images.unsplash.com/photo-1721332149274-586f2604884d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8"
//             alt="Jese portrait"
//           />
//         </div>
//         {/* <h2 className="text-xl font-bold">Alec Thompson</h2> */}
//       </div>
//       {/* <div className="mb-4 sm:flex xl:block">
//         <div className="sm:flex-1">
//           <address className="text-xs not-italic font-normal text-gray-500">
//             <div className="mt-4">Email address</div>
//             <a
//               className="text-sm font-medium text-gray-900"
//               href="mailto:webmaster@creative-tim.com"
//             >
//               yourname@creative-tim.com
//             </a>
//             <div className="mt-4">Home address</div>
//             <div className="mb-2 text-sm font-medium text-gray-900">
//               Tikathali , lalitpur
//               <br />
//             </div>
//             <div className="mt-4">Phone number</div>
//             <div className="mb-2 text-sm font-medium text-gray-900">
//               +977 9869348462
//             </div>
//           </address>
//         </div>
//       </div> */}
//     </div>
//   );
// }


import axios from "axios";
import { useSelector } from "react-redux";
import { useState, useEffect} from "react";

const ProfileCard = () => {

 
  const token = useSelector((state) => state.auth.token);

  const [image, setImage] = useState("");
  useEffect(() => {
    if (token) {
      extractDetails();
    }
  }, [token]);

  const extractDetails = async () => {
    try {
      const response = await axios.get("/api/user/extract-details", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const userDetails = response.data["User Details"];
      console.log(userDetails);
      if (userDetails.imageName) {
        imageData(userDetails.imageName);
      }
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };

  const imageData = async (imageData) => {
    const response = await axios.get(`/api/user/${imageData}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      responseType: "blob",
    });

    const imageUrl = URL.createObjectURL(response.data);
    setImage(imageUrl);
  };


  return (
    <div>
      <div className="">
        <img
          className="mb-2 w-14 h-14 rounded-full shadow-sm shadow-gray-300 object-cover"
          src={image}
          alt="Jese portrait"
        />
      </div>
    </div>
  );
};

export default ProfileCard;
