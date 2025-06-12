import React from 'react'

const Family = () => {
  return (
   <div className="profileComponent">
          <div className="flex w-full justify-between items-center">
            <p className="text-xl font-normal text-gray-400">About My Family </p>
            <button className="bg-blue-500 text-white px-1 text-sm rounded-sm cursor-pointer">
              <span>
                <i class="ri-pencil-fill"></i>
              </span>{" "}
              Edit
            </button>
          </div>

          <p>Not Specified.</p>
        </div>
  )
}

export default Family