import React from 'react'

const ReligionInfo = () => {
  return (
    <div className="profileComponent">
          <div className="flex w-full justify-between items-center">
            <p className="text-xl font-normal text-gray-400">Religion Information </p>
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
                <p>Religion</p>
                <p>Caste/Sub Caste</p>
                <p>Gothra</p>
                <p>Star/Raasi</p>
                <p>Dosh</p>
              </div>
              <div>
                <p>: Hindu</p> <p>: Mahisya</p>
                <p>: Add Gothra</p> <p>: Add Star/Raasi</p>
                <p>: Not Specified</p>
              </div>
            </div>

            <div className="w-1/2 flex gap-20">
              <div>
                <p>Time of Birth</p>
                <p>Date of Birth</p>
              </div>
              <div>
                <p>: Add Time of Birth</p>
                <p>: Add Date of Birth</p>{" "}
              </div>
            </div>
          </div>
        </div>
  )
}

export default ReligionInfo