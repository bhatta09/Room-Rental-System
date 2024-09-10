const AgentCard = (props) => {
  return (
    <div className="rounded-lg shadow bg-[#f3f4f6] mb-6 ">
      <div className="flex flex-col  items-center justify-center  p-5 gap-1">
        <div className="">
          <img src={props.image} alt="" className="h-20 w-20 rounded-full  " />
        </div>
        <h2 className="text-base font-bold">{props.name}</h2>
        <button className="text-yellow-400 font-semibold">
          {props.button}
        </button>
      </div>
    </div>
  );
};

export default AgentCard;
