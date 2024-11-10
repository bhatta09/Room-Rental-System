const RoomDetail = () => {
  return <div>room details</div>;
};

export default RoomDetail;
// import PropertyTitle from "../components/RoomDetails/PropertyTitle";
// import PropertyDetails from "../components/RoomDetails/PropertyDetails";
// import SellerProfile from "../components/RoomDetails/SellerProfile";
// import MapSection from "../components/RoomDetails/MapSection";

// import { useEffect } from "react";
// import FeatureRoom from "../components/Home/FeatureRoom";
// import ClientReview from "../components/RoomDetails/ClientReview";

// <div className="container mx-auto p-4 lg:px-16">
//   {/* room images */}
//   <div className="grid grid-cols-4 grid-rows-4  gap-1 h-[65vh] px-12">
//     <div className="col-span-2 row-span-4 bg-blue-500 overflow-hidden rounded-l-2xl">
//       <img
//         className="object-cover w-full h-full"
//         src="https://plus.unsplash.com/premium_photo-1680098057160-15950ff013ce?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//         alt=""
//       />
//     </div>
//     <div className="row-span-2  bg-red-500 overflow-hidden ">
//       <img
//         className="object-cover w-full h-full"
//         src="https://plus.unsplash.com/premium_photo-1680098057160-15950ff013ce?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//         alt=""
//       />
//     </div>
//     <div className="row-span-2 bg-green-500 overflow-hidden rounded-tr-2xl">
//       <img
//         className="object-cover w-full h-full"
//         src="https://plus.unsplash.com/premium_photo-1680098057160-15950ff013ce?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//         alt=""
//       />
//     </div>
//     <div className="row-span-2 bg-yellow-500 overflow-hidden ">
//       <img
//         className="object-cover w-full h-full"
//         src="https://plus.unsplash.com/premium_photo-1680098057160-15950ff013ce?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//         alt=""
//       />
//     </div>
//     <div className="row-span-2 bg-pink-500 overflow-hidden rounded-br-2xl">
//       <img
//         className="object-cover w-full h-full"
//         src="https://plus.unsplash.com/premium_photo-1680098057160-15950ff013ce?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//         alt=""
//       />
//     </div>
//   </div>

//   {/* room details */}
//   <div>
//     <div className="grid grid-cols-4 gap-8 px-12 my-12 ">
//       <SellerProfile />
//       <div className="bg-white shadow-md rounded-lg p-6 col-span-2">
//         <PropertyDetails />
//         <div className="mt-8">
//           <h2 className="font-bold text-lg mb-2">Overview</h2>
//           <p className="text-gray-600">
//             Kritipur Salyanthan, 10 mins walking distance from Hicast
//             College near Sasa Restaurant
//           </p>
//         </div>
//         <div className="space-y-8">
//           <div className="bg-white shadow-md rounded-lg p-6">
//             <h2 className="font-bold text-lg mb-2">
//               Local Area Facilities
//             </h2>
//             <div className="grid grid-cols-2 gap-y-4 gap-x-8 border border-gray-200 rounded-lg p-4">
//               {[
//                 "GYM",
//                 "Swimming Pool",
//                 "Hospital",
//                 "School",
//                 "Temple",
//                 "Restaurants",
//                 "Super Market",
//                 "Bus Stop",
//               ].map((facility, index) => (
//                 <div key={index} className="flex items-center space-x-4">
//                   <span className="w-4 h-4 rounded-full bg-orange-500 inline-block"></span>
//                   <span className="text-gray-600">{facility}</span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="text-center">
//             <button className="bg-orange-500 text-white py-3 px-6 rounded-md hover:bg-orange-600 transition duration-200">
//               Ask anything about 2BHK flat available in Kirtipur
//             </button>
//           </div>
//         </div>
//         <MapSection />
//       </div>
//       <div>
//         <div className="flex flex-col gap-10">
//           <ClientReview />
//           <ClientReview />
//           <ClientReview />
//           <ClientReview />
//           <ClientReview />
//         </div>
//       </div>
//     </div>
//   </div>

//   {/* similar rooms */}
//   <section className="px-12">
//     <div className="flex justify-between mb-5 ">
//       <h2 className="text-xl font-semibold text-center ">Featured Rooms</h2>
//       <button className="bg-yellow-400 border-yellow-500 border-2 rounded-lg font-medium px-5 py-1 text-white">
//         View All <span className="ml-2 text-white font-bold">→</span>
//       </button>
//     </div>
//     <div className="flex flex-row gap-4 mb-12">
//       <FeatureRoom
//         imageUrl="https://images.unsplash.com/photo-1668258849037-4caa7e2c1347?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//         roomName="Office space for rent..."
//         location="Gwarko,Lalitpur"
//         roomType="office"
//         price="Rs25000/month"
//         owner="https://images.unsplash.com/photo-1715405155792-ab743e424c81?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//       />{" "}
//       <FeatureRoom
//         imageUrl="https://images.unsplash.com/photo-1668258849037-4caa7e2c1347?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//         roomName="Office space for rent..."
//         location="Gwarko,Lalitpur"
//         roomType="office"
//         price="Rs25000/month"
//         owner="https://images.unsplash.com/photo-1715405155792-ab743e424c81?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//       />{" "}
//       <FeatureRoom
//         imageUrl="https://images.unsplash.com/photo-1668258849037-4caa7e2c1347?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//         roomName="Office space for rent..."
//         location="Gwarko,Lalitpur"
//         roomType="office"
//         price="Rs25000/month"
//         owner="https://images.unsplash.com/photo-1715405155792-ab743e424c81?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//       />{" "}
//       <FeatureRoom
//         imageUrl="https://images.unsplash.com/photo-1668258849037-4caa7e2c1347?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//         roomName="Office space for rent..."
//         location="Gwarko,Lalitpur"
//         roomType="office"
//         price="Rs25000/month"
//         owner="https://images.unsplash.com/photo-1715405155792-ab743e424c81?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//       />{" "}
//       <FeatureRoom
//         imageUrl="https://images.unsplash.com/photo-1668258849037-4caa7e2c1347?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//         roomName="Office space for rent..."
//         location="Gwarko,Lalitpur"
//         roomType="office"
//         price="Rs25000/month"
//         owner="https://images.unsplash.com/photo-1715405155792-ab743e424c81?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//       />
//     </div>
//   </section>
// </div>
