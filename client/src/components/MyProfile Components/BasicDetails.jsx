import React from 'react'

const BasicDetails = () => {
  return (
  <div className="profileComponent">
          <div className="space-y-2">
            {" "}
            <div className="flex w-full justify-between items-center">
              <p className="text-xl font-normal text-gray-400">Basic Details </p>
              <button className="bg-blue-500 text-white px-1 text-sm rounded-sm cursor-pointer">
                <span>
                  <i class="ri-pencil-fill"></i>
                </span>{" "}
                Edit
              </button>
            </div>
            <div className="space-y-1">
              <p>Get better responses by verifying your name and age</p>
              <button className="bg-amber-500 text-white px-2 py-1 rounded-sm cursor-pointer">
                Get Identity Badge{" "}
                <span>
                  <i class="ri-arrow-right-s-line"></i>
                </span>
              </button>
            </div>
          </div>

          <div className="w-full h-[0.5px] bg-gray-400"></div>

          <div className="flex w-full gap-20 items-center">
            <div className="w-1/2 flex justify-between">
              <div>
                <p>Profile created for</p>
                <p>Body Type</p>
                <p>Physical Status</p>
                <p>Weight</p>
                <p>Marital Status</p>
                <p>Drinking Habits</p>
              </div>
              <div>
                <p>: My Self</p>
                <p>: Add Body Type</p>
                <p>: Normal</p>
                <p>: Add Weight</p>
                <p>: Never Married</p>
                <p>: Add Drinking Habits</p>
              </div>
            </div>

            <div className="w-1/2 flex justify-between">
              <div>
                <p>Name</p>
                <p>Age</p>
                <p>Height</p>
                <p>Mother Tongue</p>
                <p>Eating Habits</p>
                <p>Smoking Habits</p>
              </div>
              <div>
                <p>: Rudradeb Maji</p> <p>: 22 Years - Verify</p>
                <p>: 5 Ft 8 In / 173 Cms</p> <p>: Bengali</p>{" "}
                <p>: Add Eating Habits</p> <p>: Add Smoking Habits</p>
              </div>
            </div>
          </div>
        </div>
  )
}

export default BasicDetails