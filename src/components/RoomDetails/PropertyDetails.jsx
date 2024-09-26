const PropertyDetails = () => {
  const details = [
    { label: 'Purpose', value: 'Rent' },
    { label: 'Rent Price', value: 'Rs. 20,000' },
    { label: 'Build Year', value: '2079' },
    { label: 'Bedroom', value: '2' },
    { label: 'Bathroom', value: '2' },
    { label: 'Floor', value: 'Ground Floor' },
    { label: 'Parking', value: 'Yes' },
    { label: 'Balcony', value: 'Yes' },
    { label: 'Running Water', value: 'Yes' },
    { label: 'Kitchen', value: '1' },
    { label: 'Sitting Room', value: '1' },
    { label: 'Category', value: '2BHK' },
    { label: 'Furnishing', value: 'No' },
    { label: 'Ad Views', value: '579' },
    { label: 'Status', value: 'Available' },
    { label: 'Seller Contact Number', value: '9851087442' },
    { label: 'Price Negotiable', value: 'Yes' },
    { label: 'Ad id', value: '#KB2408171148231011' },
    { label: 'Road Type', value: 'Dhalan Road' },
    { label: 'Posted On', value: '2024/08/17' },
    { label: 'Expire On', value: '2025/05/17' },
  ];



  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <div className="grid grid-cols-2 gap-y-4 gap-x-8 border border-gray-200 rounded-lg p-4">
        {details.map((detail, index) => (
          <div key={index} className="flex justify-between items-center border-b border-gray-300 pb-2">
            <span className="text-gray-700 font-medium">{detail.label}</span>
            <div className="border-l border-gray-300 mx-4 h-full"></div>
            <span className="text-orange-500">{detail.value}</span>
          </div>
        ))}
      </div>

   </div>
  );
};

export default PropertyDetails;
