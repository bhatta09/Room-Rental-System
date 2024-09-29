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

import React from "react";

const ProfileCard = () => {
  return (
    <div>
      <div className="">
        <img
          className="mb-2 w-10 h-10 rounded-md shadow-sm shadow-gray-300 object-cover"
          src="https://images.unsplash.com/photo-1721332149274-586f2604884d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8"
          alt="Jese portrait"
        />
      </div>
    </div>
  );
};

export default ProfileCard;
