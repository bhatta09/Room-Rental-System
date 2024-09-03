const ChangeProfile = () => {
  return (
    <div>
      <div>
        <div className='flex flex-col items-center w-full ml-10 p-8 gap-6'>
          <div>
            <h2 className='text-2xl'>Personel Details</h2>
            </div>
            <div className='w-24 h-24 rounded-full overflow-hidden border-4 border-yellow-500'>
              <img src="" alt="" className=' w-full h-full object-cover'/>
          </div>
          <div>
            <button className='rounded-md bg-yellow-400 w-24 h-10'>Add Image</button>
          </div>
          </div>

          <div className='grid grid-cols-3 gap-56 ml-11'>
            <div>
          <label className="block text-sm font-medium text-gray-700">Full Name</label>
           <input 
           type="text" 
           placeholder='Swornim Shresta'
            className="w-full px-3 py-2 rounded-lg border-b-0"
           />
          </div>

          <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
           <input 
           type="text" 
           placeholder='swornim@academiacollege.edu.np'
            className="w-full px-3 py-2 rounded-lg "
           />
          </div>

          <div>
          <label className="block text-sm font-medium text-gray-700">Phone Number</label>
           <input 
           type="text" 
           placeholder='9800000000'
            className="w-full px-3 py-2 rounded-lg "
           />
          </div>
   </div>

<div>
<div className='flex flex-col items-center w-full ml-10 p-8 gap-6'>
   <div className="">
        <h2 className="text-2xl  mb-6 items-center ">Basic Property Query</h2>
        </div>
        <div className="grid grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Who are You ?
            </label>
            <div className="flex items-center space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="userType"
                  className="form-radio "
                />
                <span className="ml-2">General User</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="userType"
                  className="form-radio "
                />
                <span className="ml-2">Reseller</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="userType"
                  className="form-radio "
                />
                <span className="ml-2">Owner</span>
              </label>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              You Own
            </label>
            <div className="flex items-center space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="propertyType"
                  className="form-radio "
                />
                <span className="ml-2">House</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="propertyType"
                  className="form-radio "
                />
                <span className="ml-2">Apartments</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="propertyType"
                  className="form-radio "
                />
                <span className="ml-2">Commercial Building</span>
              </label>
            </div>
          </div>
        </div>

     
        <button className="w-full px-6 py-3 bg-yellow-400 text-white rounded hover:bg-yellow-600">
          Update <span className="ml-2">→</span>
        </button>
      </div>
   </div>
        </div>
    </div>
  
  )
}

export default ChangeProfile