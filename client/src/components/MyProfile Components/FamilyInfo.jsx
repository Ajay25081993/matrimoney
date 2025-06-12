import React from 'react'

const FamilyInfo = () => {
  return (
   <div className="profileComponent">
          <div className="flex w-full justify-between items-center">
            <p className="text-xl font-normal text-gray-400">Family Details </p>
            <button className="bg-blue-500 text-white px-1 text-sm rounded-sm cursor-pointer">
              <span>
                <i class="ri-pencil-fill"></i>
              </span>{" "}
              Edit
            </button>
          </div>

          <div className="flex w-full gap-20 ">
            <div className="w-1/2 flex gap-20">
              <div>
                <p>Family Type</p>
                <p>Family Values</p>
                <p>Family Status</p>
                <p>No of Sister(s)</p>
              </div>
              <div>
                <p>: Not Specified</p>
                <p>: Not Specified</p>
                <p>: Not Specified</p>
                <p>: Add No of Brothers</p>
              </div>
            </div>

            <div className="w-1/2 flex justify-between">
              <div>
                <p>No of Brother(s)</p>
                <p>Father's Occupation</p>
                <p>Mother's Occupation</p>
                <p>Family Location</p>
              </div>

              <div>
                <p>: Add No of Brothers</p>
                <p>: Not Specified</p>
                <p>: Not Specified</p>
                <p>: Not Specified</p>
              </div>
            </div>
          </div>
        </div>
  )
}

export default FamilyInfo