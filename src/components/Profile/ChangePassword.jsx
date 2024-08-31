

const ChangePassword = () => {
  return (
    <div className="max-w-lg w-full p-8 mt-2 ml-96 bg-white bg-opacity-80 shadow-xl rounded-lg ">
        <h2 className="text-2xl font-normal mb-6 text-gray-800 text-center">
          Change Password
        </h2>
        <div>
          <div className="mb-10 font-semibold  flex flex-col gap-2">
            <label className="text-xs font-bold">Old Password</label>
            <input
              type="name"
              placeholder="Your Old Password"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>
          <div className="mb-10 font-semibold flex flex-col gap-2">
            <label className="text-xs font-bold">New Password</label>
            <input
              type="text"
              name=""
              required
              placeholder=" Your New Password"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>
          <div className="mb-10 font-semibold flex flex-col gap-2">
            <label className="text-xs font-bold">Confirm Password</label>
            <input
              type="text"
              name=""
              required
              placeholder=" Confirm Password"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>

          <button className=" w-full  font-semibold bg-yellow-400 rounded h-10  text-base font-sm text-gray-800">
            Update
          </button>
        </div>
       </div>
  
  )
}

export default ChangePassword
