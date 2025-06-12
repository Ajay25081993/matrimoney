import React from 'react'

const About = () => {
  return (
    <div className="profileComponent">
          <div className="flex w-full justify-between items-center">
            <p className="text-xl font-normal text-gray-400">In my own words </p>
            <button className="bg-blue-500 text-white px-1 text-sm rounded-sm cursor-pointer">
              <span>
                <i class="ri-pencil-fill"></i>
              </span>{" "}
              Edit
            </button>
          </div>
          <p>
            I have done my bachelor's degree and am searching for a suitable
            job. I come from a middle class, joint family with traditional
            values, currently settled in Kolkata.
          </p>
        </div>
  )
}

export default About