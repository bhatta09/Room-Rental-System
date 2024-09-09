
const AgentCard = (props) => {
  return (
    <div className="rounded-lg mx-10">

      <div className='flex flex-col bg-white gap-4 shadow-lg p-4'>
       <img src={props.image} alt="" className="h-14 w-14 rounded-full justify-center ml-12 border-red-600 border-2"/>
       <h2 className="text-xl font-semibold">{props.name}</h2>
       <button className="text-yellow-400">{props.button}</button>
      </div>
    </div>
  )
}

export default AgentCard;
