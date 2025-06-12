import React from 'react'

const LocationInfo = () => {
  return (
    <div className="profileComponent">
      <div className="flex w-full justify-between items-center">
        <p className="text-xl font-normal text-gray-400">Groom's Location </p>
        <button className="bg-blue-500 text-white px-1 text-sm rounded-sm cursor-pointer">
          <span>
            <i class="ri-pencil-fill"></i>
          </span>{" "}
          Edit
        </button>
      </div>

      <div className="flex w-full gap-20 ">
        <div className="w-1/2 flex gap-15">
          <div>
            <p>Country</p>
            <p>State</p>
            <p>Ancestral Origin</p>
          </div>
          <div>
            <p>: India</p> <p>: Westbengal</p> <p>: Not Specified</p>
          </div>
        </div>

        <div className="w-1/2 flex gap-20">
          <div>
            <p>City</p>
            <p>Citizenship</p>
          </div>
          <div>
            <p>: Kolkata</p> <p>: India</p>{" "}
          </div>
        </div>
      </div>
    </div>
  )
}

export default LocationInfo