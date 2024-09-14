const Reviews = (props) => {
  const renderStars = (props) => {
    return "⭐".repeat(props); // Repeat the star emoji based on the stars prop
  };
  return (
    <div className="flex flex-col  p-6 bg-white rounded-lg shadow-lg ">
      <div className="flex items-center space-x-2">
        {/* Star ratings */}
        <span>{renderStars(props.star)}</span>
      </div>
      <p className="mt-4 text-sm font-normal italic text-justify text-gray-500 w-80 h-36">
        {props.desc}
      </p>
      <div className="flex items-center mt-4 space-x-2 border-t-2">
        <img
          src="https://plus.unsplash.com/premium_photo-1687989650423-49cf039fe80a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="User profile"
          className="w-10 h-10 rounded-full"
        />
        <div>
          <h4 className="font-semibold">{props.name}</h4>
          <p className="text-sm text-gray-500">{props.work}</p>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
