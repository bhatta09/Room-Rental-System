import React, { useState } from 'react';

const FeatureRoom = ({ imageUrl, roomName, location, roomType, price }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="max-w-sm bg-white rounded-lg shadow-lg overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <img src={imageUrl} alt={roomName} className="w-full h-48 object-cover" />
        {isHovered && (
          <button className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 text-white font-bold text-lg">
            View
          </button>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{roomName}</h3>
        <p className="text-gray-600 text-sm flex items-center mb-4">
          <span className="mr-2">📍</span>{location}
        </p>
        <div className="flex justify-between items-center">
          <span className="text-gray-700 text-sm font-medium">{roomType}</span>
          <span className="text-yellow-400 text-lg font-bold">{price}</span>
        </div>
      </div>
    </div>
  );
};

export default FeatureRoom;