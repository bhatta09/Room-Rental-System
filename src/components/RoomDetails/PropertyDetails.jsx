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
      { label: 'Ad Views', value: '530' },
      { label: 'Status', value: 'Available' },
      { label: 'Seller Contact Number', value: '9869348462' },
      { label: 'Price Negotiable', value: 'Yes' },
      { label: 'Ad id', value: '#KB2408171148231011' },
      { label: 'Road Type', value: 'Dhalan Road' },
      { label: 'Posted On', value: '2024/08/17' },
      { label: 'Expire On', value: '2025/05/17' },
    ];
  
    return (
      <div className="grid grid-cols-2 gap-4">
        {details.map((detail, index) => (
          <div key={index} className="flex justify-between border-b py-2">
            <span className="text-gray-600">{detail.label}</span>
            <span className="text-yellow-900">{detail.value}</span>
          </div>
        ))}
      </div>
    );
  };
export default PropertyDetails  ;